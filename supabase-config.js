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
    badge.innerHTML = '🟢 Supabase Cloud';
    badge.title = 'เชื่อมต่อฐานข้อมูลคลาวด์ ซิงก์ข้อมูลเรียลไทม์แล้ว';
  } else if (status === 'offline') {
    badge.className = 'sp-badge sp-offline';
    badge.innerHTML = '🔴 Cloud Offline';
    badge.title = 'ไม่สามารถเชื่อมต่อคลาวด์ได้ ใช้โหมดเซฟในเครื่อง';
  } else {
    badge.className = 'sp-badge sp-local';
    badge.innerHTML = '🟡 โหมดรหัสพนักงาน (Local)';
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
      
      if (data && !error) return data;
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
  const key = `shift_log_${logData.dayNum}_${logData.empId}`;
  localStorage.setItem(key, JSON.stringify(logData));

  if (isSupabaseOnline && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('shift_logs')
        .upsert({
          day_num: logData.dayNum,
          emp_id: logData.empId,
          officer_name: logData.name,
          level: logData.level,
          is_day: logData.isDay,
          is_night: logData.isNight,
          time_in: logData.timeIn,
          time_out: logData.timeOut,
          sign_name: logData.signName,
          inspector_notes: logData.inspectorNotes,
          rows: logData.rows,
          updated_at: new Date().toISOString()
        }, { onConflict: 'day_num,emp_id' });

      if (error) throw error;
      console.log('☁️ Log synced to Supabase Cloud!');
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
});
