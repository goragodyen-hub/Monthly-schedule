/* ========================================================
   SUPABASE CONFIGURATION & REALTIME DATABASE HELPER
   Project Database Password: 0dYL8Vz7w5x9xIzd
   ======================================================== */

// Supabase Project Credentials
const SUPABASE_URL = "https://mtiwsevffkprantndulm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aXdzZXZmZmtwcmFudG5kdWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MjU3NDEsImV4cCI6MjEwMjIwMTc0MX0.cPStzOS-Ua6S_4ZS_bLSLn_rxzKsG28JwXZclvHwzX0";

let supabaseClient = null;
let isSupabaseOnline = false;

// Initialize Supabase Client
function initSupabase() {
  if (typeof supabase !== 'undefined' && SUPABASE_URL.includes('supabase.co') && !SUPABASE_URL.includes('your-project-id')) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      isSupabaseOnline = true;
      console.log('✅ Supabase connected successfully!');
      updateSupabaseBadge('online');
    } catch (e) {
      console.warn('⚠️ Supabase connection failed, using Offline LocalStorage mode.', e);
      isSupabaseOnline = false;
      updateSupabaseBadge('offline');
    }
  } else {
    console.log('ℹ️ Supabase credentials pending configuration. App running in Local Mode.');
    isSupabaseOnline = false;
    updateSupabaseBadge('local');
  }
}

// Update Header Connection Badge
function updateSupabaseBadge(status) {
  const badge = document.getElementById('spStatusBadge');
  if (!badge) return;

  if (status === 'online') {
    badge.className = 'sp-badge sp-online';
    badge.innerHTML = '🟢 Cloud';
    badge.title = 'เชื่อมต่อฐานข้อมูลคลาวด์ ซิงก์ข้อมูลเรียลไทม์แล้ว';
  } else if (status === 'offline') {
    badge.className = 'sp-badge sp-offline';
    badge.innerHTML = '🔴 Offline';
    badge.title = 'ไม่สามารถเชื่อมต่อคลาวด์ได้ ใช้โหมดเซฟในเครื่อง';
  } else {
    badge.className = 'sp-badge sp-local';
    badge.innerHTML = '🟡 Local';
    badge.title = 'ใช้รหัสพนักงานเข้าสู่ระบบ และบันทึกในเบราว์เซอร์';
  }
}

// 1. Employee ID Auth
async function authWithEmpId(empId) {
  if (!empId) return null;
  const cleanId = String(empId).trim();

  // If online, check Supabase Officers table
  if (isSupabaseOnline && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('officers')
        .select('*')
        .eq('emp_id', cleanId)
        .single();
      
      if (data && !error) {
        // Normalize Supabase snake_case → camelCase ให้ตรงกับ OFFICERS_REGISTRY format
        return {
          emp_id:   data.emp_id,
          name:     data.name,
          surname:  data.surname,
          groupKey: data.group_key,   // group_key → groupKey
          gender:   data.gender,
          level:    data.level,
          isAdmin:  data.is_admin || false
        };
      }
    } catch (e) {
      console.error('Supabase auth query error:', e);
    }
  }

  // Fallback to local staff registry
  if (typeof OFFICERS_REGISTRY !== 'undefined' && OFFICERS_REGISTRY[cleanId]) {
    return OFFICERS_REGISTRY[cleanId];
  }

  return null;
}

// 2. Fetch Shift Log (Cloud + Local Fallback)
async function fetchShiftLogCloud(dayNum, empId) {
  if (isSupabaseOnline && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('shift_logs')
        .select('*')
        .eq('day_num', dayNum)
        .eq('emp_id', empId)
        .single();

      if (data && !error) return data;
    } catch (e) {
      console.warn('Cloud fetch fallback:', e);
    }
  }

  // Fallback to localStorage
  const key = `shift_log_${dayNum}_${empId}`;
  const local = localStorage.getItem(key);
  return local ? JSON.parse(local) : null;
}

// 3. Upsert Shift Log to Cloud
async function saveShiftLogCloud(logData) {
  const empId = logData.empId || logData.emp_id;
  if (!empId) {
    console.warn('⚠️ Cannot save to cloud: missing empId');
    return { success: false, error: 'No empId provided' };
  }

  const key = `shift_log_${logData.dayNum}_${empId}`;
  localStorage.setItem(key, JSON.stringify(logData));

  if (isSupabaseOnline && supabaseClient) {
    try {
      const sig = logData.signatureData || logData.signName || logData.sign_name || '';
      const { data, error } = await supabaseClient
        .from('shift_logs')
        .upsert({
          day_num: logData.dayNum,
          emp_id: empId,
          officer_name: logData.name,
          level: logData.level,
          is_day: logData.isDay,
          is_night: logData.isNight,
          time_in: logData.timeIn,
          time_out: logData.timeOut,
          sign_name: sig,
          inspector_notes: logData.inspectorNotes || logData.inspector_notes || '',
          rows: logData.rows || [],
          updated_at: new Date().toISOString()
        }, { onConflict: 'day_num,emp_id' });

      if (error) throw error;
      console.log('☁️ Log synced to Supabase Cloud successfully!');
      return { success: true, cloud: true };
    } catch (e) {
      console.error('⚠️ Cloud sync failed, saved locally:', e);
      return { success: true, cloud: false };
    }
  }

  return { success: true, cloud: false };
}

// 4. Fetch All Shift Logs for Admin Dashboard (Single Query)
async function fetchAllShiftLogsCloud() {
  if (isSupabaseOnline && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('shift_logs')
        .select('day_num, emp_id, officer_name, rows, updated_at');
      if (data && !error) return data;
    } catch (e) {
      console.warn('Fetch all shift logs error:', e);
    }
  }
  return [];
}

// 5. Shift Swap Cloud Sync Helpers
async function saveSwapRecordCloud(swapRecord) {
  if (isSupabaseOnline && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('shift_swap_records')
        .upsert({
          id: swapRecord.id,
          day: swapRecord.day,
          raw_swap_date: swapRecord.rawSwapDate,
          shift_date_text: swapRecord.shiftDateText,
          req_name: swapRecord.reqName,
          sub_name: swapRecord.subName,
          return_date_text: swapRecord.returnDateText,
          photo_data: swapRecord.photoData,
          created_at: swapRecord.createdAt || new Date().toISOString()
        }, { onConflict: 'id' });
      if (!error) console.log('☁️ Swap record synced to Supabase Cloud!');
    } catch (e) {
      console.warn('Cloud swap sync fallback:', e);
    }
  }
}

async function fetchSwapRecordsCloud() {
  if (isSupabaseOnline && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('shift_swap_records')
        .select('*')
        .order('created_at', { ascending: false });

      if (data && !error && data.length > 0) {
        const mappedRecords = data.map(row => ({
          id: row.id,
          day: row.day,
          rawSwapDate: row.raw_swap_date,
          rawReturnDate: row.raw_return_date || '',
          returnDay: row.return_day || null,
          shiftDateText: row.shift_date_text,
          reqName: row.req_name,
          subName: row.sub_name,
          returnDateText: row.return_date_text,
          photoData: row.photo_data,
          createdAt: row.created_at
        }));

        localStorage.setItem('shift_swap_records', JSON.stringify(mappedRecords));
        if (window.buildTable) window.buildTable();
        if (window.renderToday) window.renderToday();
        if (window.initShiftLog) window.initShiftLog();
        if (window.renderSwapRecordsTable) window.renderSwapRecordsTable();
        return mappedRecords;
      }
    } catch (e) {
      console.warn('Fetch cloud swap records fallback:', e);
    }
  }
  return null;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  setTimeout(fetchSwapRecordsCloud, 500);
});
