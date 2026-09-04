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

// Helper: Auto-resolve officer emp_id from name
function autoResolveOfficerEmpId(officerName) {
  if (!officerName) return null;
  const clean = officerName.replace(/\s+/g, '');
  if (typeof OFFICERS_REGISTRY !== 'undefined') {
    const matchedKey = Object.keys(OFFICERS_REGISTRY).find(id => {
      const o = OFFICERS_REGISTRY[id];
      const full = `${o.name}${o.surname}`.replace(/\s+/g, '');
      return full === clean || clean.includes(o.surname) || full.includes(clean);
    });
    if (matchedKey) return matchedKey;
  }
  return null;
}

// --------------------------------------------------------
// OFFLINE SYNC QUEUE SYSTEM (คิวสำหรับซิงก์ข้อมูลค้างส่ง)
// --------------------------------------------------------
const OFFLINE_SYNC_QUEUE_KEY = 'offline_sync_queue';

function getOfflineSyncQueue() {
  try {
    const q = localStorage.getItem(OFFLINE_SYNC_QUEUE_KEY);
    return q ? JSON.parse(q) : [];
  } catch (e) {
    return [];
  }
}

function enqueueOfflineSync(logData) {
  try {
    const queue = getOfflineSyncQueue();
    const day = logData.dayNum;
    const empId = logData.empId || logData.emp_id || logData.name;
    const m = logData.month || '';
    const y = logData.year || '';
    const itemKey = `${m}_${y}_${day}_${empId}`;
    
    const filtered = queue.filter(item => {
      const k = `${item.month || ''}_${item.year || ''}_${item.dayNum}_${item.empId || item.emp_id || item.name}`;
      return k !== itemKey;
    });
    filtered.push(logData);
    localStorage.setItem(OFFLINE_SYNC_QUEUE_KEY, JSON.stringify(filtered));
    updateOfflineSyncUI();
  } catch (e) {
    console.error('Failed to enqueue offline sync:', e);
  }
}

function dequeueOfflineSync(logData) {
  try {
    const queue = getOfflineSyncQueue();
    const day = logData.dayNum;
    const empId = logData.empId || logData.emp_id || logData.name;
    const m = logData.month || '';
    const y = logData.year || '';
    const itemKey = `${m}_${y}_${day}_${empId}`;
    
    const remaining = queue.filter(item => {
      const k = `${item.month || ''}_${item.year || ''}_${item.dayNum}_${item.empId || item.emp_id || item.name}`;
      return k !== itemKey;
    });
    localStorage.setItem(OFFLINE_SYNC_QUEUE_KEY, JSON.stringify(remaining));
    updateOfflineSyncUI();
  } catch (e) {
    console.error('Failed to dequeue offline sync:', e);
  }
}

let isSyncingQueue = false;
async function processOfflineSyncQueue(isUserTriggered = false) {
  if (isSyncingQueue) return { synced: 0, total: 0 };
  const queue = getOfflineSyncQueue();
  if (!queue || queue.length === 0) {
    updateOfflineSyncUI();
    if (isUserTriggered) alert('ℹ️ ไม่มีข้อมูลใบบันทึกเวรที่ค้างส่ง ระบบเป็นข้อมูลล่าสุดแล้ว');
    return { synced: 0, total: 0 };
  }

  if (!isSupabaseOnline || !supabaseClient) {
    console.log('ℹ️ Offline sync paused: Supabase is offline.');
    updateOfflineSyncUI();
    if (isUserTriggered) alert('⚠️ ระบบยังไม่ได้เชื่อมต่อฐานข้อมูลคลาวด์ กรุณาตรวจสอบอินเทอร์เน็ต');
    return { synced: 0, total: queue.length };
  }

  isSyncingQueue = true;
  console.log(`📡 Starting offline sync for ${queue.length} pending logs...`);
  let syncedCount = 0;
  const failedItems = [];

  for (const logItem of queue) {
    try {
      const res = await saveShiftLogCloud(logItem, false); // false = don't re-enqueue on fail
      if (res && res.cloud) {
        syncedCount++;
      } else {
        failedItems.push(logItem);
      }
    } catch (err) {
      console.warn('Sync failed for item:', logItem, err);
      failedItems.push(logItem);
    }
  }

  localStorage.setItem(OFFLINE_SYNC_QUEUE_KEY, JSON.stringify(failedItems));
  isSyncingQueue = false;
  updateOfflineSyncUI();

  if (syncedCount > 0) {
    console.log(`✅ Synced ${syncedCount} offline logs to Cloud!`);
    if (typeof renderAdminDashboard === 'function') renderAdminDashboard();
    if (isUserTriggered) {
      alert(`🎉 ซิงก์ข้อมูลค้างส่งจำนวน ${syncedCount} รายการขึ้นระบบคลาวด์เรียบร้อยแล้ว!`);
    }
  } else if (isUserTriggered && failedItems.length > 0) {
    alert(`⚠️ ไม่สามารถซิงก์ข้อมูล ${failedItems.length} รายการได้ กรุณาลองใหม่อีกครั้ง`);
  }

  return { synced: syncedCount, total: queue.length };
}

function updateOfflineSyncUI() {
  const queue = getOfflineSyncQueue();
  const count = queue.length;
  const badgeEl = document.getElementById('syncQueueBadge');
  const btnEl = document.getElementById('btnManualSync');
  
  if (badgeEl) {
    if (count > 0) {
      badgeEl.style.display = 'inline-flex';
      badgeEl.textContent = `⚡ ค้างซิงก์ ${count}`;
      badgeEl.title = `มีข้อมูลบันทึกเวรค้างอยู่ในเครื่อง ${count} รายการ คลิกเพื่อซิงก์ขึ้นคลาวด์ทันที`;
    } else {
      badgeEl.style.display = 'none';
    }
  }

  if (btnEl) {
    if (count > 0) {
      btnEl.innerHTML = `<span>⚡</span> ซิงก์ข้อมูลค้างส่ง (${count})`;
      btnEl.style.display = 'inline-flex';
    } else {
      btnEl.innerHTML = `<span>🔄</span> ตรวจสอบและซิงก์ข้อมูล`;
    }
  }
}

async function triggerManualSync() {
  return await processOfflineSyncQueue(true);
}

// 2. Fetch Shift Log (Cloud + Local Fallback)
async function fetchShiftLogCloud(dayNum, empId, officerName, monthVal) {
  if (isSupabaseOnline && supabaseClient) {
    try {
      let fetchedData = null;
      if (empId) {
        const { data, error } = await supabaseClient
          .from('shift_logs')
          .select('*')
          .eq('day_num', dayNum)
          .eq('emp_id', empId)
          .maybeSingle();

        if (data && !error) fetchedData = data;
      }

      if (!fetchedData && officerName) {
        const cleanName = officerName.trim();
        const { data, error } = await supabaseClient
          .from('shift_logs')
          .select('*')
          .eq('day_num', dayNum)
          .ilike('officer_name', `%${cleanName}%`)
          .maybeSingle();

        if (data && !error) fetchedData = data;
      }

      if (fetchedData) {
        // If meta exists, verify that it matches the requested month
        const meta = Array.isArray(fetchedData.rows) ? fetchedData.rows.find(r => r && r._meta) : null;
        if (meta && meta.month && typeof THAI_FULL_MONTHS !== 'undefined' && typeof SCHED_MONTH !== 'undefined') {
          const activeMonthName = THAI_FULL_MONTHS[SCHED_MONTH];
          if (meta.month !== activeMonthName && meta.month !== (SCHED_MONTH + 1).toString()) {
            console.log(`Cloud log is for ${meta.month}, but active month is ${activeMonthName}. Checking local storage fallback.`);
            fetchedData = null;
          }
        }
        if (fetchedData) return fetchedData;
      }
    } catch (e) {
      console.warn('Cloud fetch fallback:', e);
    }
  }

  // Fallback to localStorage (Check month-scoped first, then general)
  const currentMVal = monthVal || ((typeof SCHED_MONTH !== 'undefined' && typeof SCHED_YEAR !== 'undefined') ? `${SCHED_MONTH + 1}-${SCHED_YEAR}` : '');
  
  if (empId) {
    if (currentMVal) {
      const localMonth = localStorage.getItem(`shift_log_${currentMVal}_${dayNum}_${empId}`);
      if (localMonth) { try { return JSON.parse(localMonth); } catch(e){} }
    }
    const local = localStorage.getItem(`shift_log_${dayNum}_${empId}`);
    if (local) { try { return JSON.parse(local); } catch(e){} }
  }
  if (officerName) {
    const cleanN = officerName.replace(/\s+/g, '_');
    if (currentMVal) {
      const localMonth = localStorage.getItem(`shift_log_${currentMVal}_${dayNum}_${cleanN}`);
      if (localMonth) { try { return JSON.parse(localMonth); } catch(e){} }
    }
    const local = localStorage.getItem(`shift_log_${dayNum}_${cleanN}`);
    if (local) { try { return JSON.parse(local); } catch(e){} }
  }

  return null;
}

// 3. Upsert Shift Log to Cloud
async function saveShiftLogCloud(logData, shouldEnqueue = true) {
  let empId = logData.empId || logData.emp_id;
  if (!empId && logData.name) {
    empId = autoResolveOfficerEmpId(logData.name);
    if (empId) {
      logData.empId = empId;
      logData.emp_id = empId;
    }
  }

  const m = logData.month || (typeof THAI_FULL_MONTHS !== 'undefined' && typeof SCHED_MONTH !== 'undefined' ? THAI_FULL_MONTHS[SCHED_MONTH] : '');
  const y = logData.year || (typeof SCHED_YEAR !== 'undefined' ? (SCHED_YEAR + 543) : 2569);
  const mVal = (typeof SCHED_MONTH !== 'undefined' && typeof SCHED_YEAR !== 'undefined') ? `${SCHED_MONTH + 1}-${SCHED_YEAR}` : '';

  // LocalStorage Keys: Save both month-scoped and base
  const cleanName = logData.name ? logData.name.replace(/\s+/g, '_') : '';
  const keyBaseName = `shift_log_${logData.dayNum}_${cleanName}`;
  const keyBaseEmp = empId ? `shift_log_${logData.dayNum}_${empId}` : null;
  localStorage.setItem(keyBaseName, JSON.stringify(logData));
  if (keyBaseEmp) localStorage.setItem(keyBaseEmp, JSON.stringify(logData));

  if (mVal) {
    localStorage.setItem(`shift_log_${mVal}_${logData.dayNum}_${cleanName}`, JSON.stringify(logData));
    if (empId) localStorage.setItem(`shift_log_${mVal}_${logData.dayNum}_${empId}`, JSON.stringify(logData));
  }

  if (!empId) {
    console.warn('⚠️ Cannot save to cloud: missing empId and could not auto-resolve from name');
    if (shouldEnqueue) enqueueOfflineSync(logData);
    return { success: true, cloud: false, reason: 'no_emp_id' };
  }

  if (isSupabaseOnline && supabaseClient) {
    try {
      const sig = logData.signatureData || logData.signName || logData.sign_name || '';
      const cleanRows = (logData.rows || []).filter(r => !r._meta);
      const rowsWithMeta = [
        { _meta: true, month: m, year: y, updated_at: new Date().toISOString() },
        ...cleanRows
      ];

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
          rows: rowsWithMeta,
          updated_at: new Date().toISOString()
        }, { onConflict: 'day_num,emp_id' });

      if (error) throw error;
      dequeueOfflineSync(logData);
      console.log('☁️ Log synced to Supabase Cloud successfully!');
      return { success: true, cloud: true };
    } catch (e) {
      console.error('⚠️ Cloud sync failed, saved locally and enqueued:', e);
      if (shouldEnqueue) enqueueOfflineSync(logData);
      return { success: true, cloud: false, error: e };
    }
  }

  if (shouldEnqueue) enqueueOfflineSync(logData);
  return { success: true, cloud: false, reason: 'offline' };
}

// 4. Fetch All Shift Logs for Admin Dashboard (Single Query)
async function fetchAllShiftLogsCloud() {
  if (isSupabaseOnline && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('shift_logs')
        .select('*');
      if (data && !error) {
        // Cache fetched cloud logs to localStorage for instant offline access
        data.forEach(log => {
          const meta = Array.isArray(log.rows) ? log.rows.find(r => r && r._meta) : null;
          let mVal = null;
          if (meta?.month) {
            const mIdx = typeof THAI_FULL_MONTHS !== 'undefined' ? THAI_FULL_MONTHS.indexOf(meta.month) : -1;
            if (mIdx !== -1 && meta.year) {
              const yVal = meta.year > 2500 ? meta.year - 543 : meta.year;
              mVal = `${mIdx + 1}-${yVal}`;
            }
          }

          if (log.day_num && log.emp_id) {
            if (mVal) localStorage.setItem(`shift_log_${mVal}_${log.day_num}_${log.emp_id}`, JSON.stringify(log));
            localStorage.setItem(`shift_log_${log.day_num}_${log.emp_id}`, JSON.stringify(log));
          }
          if (log.day_num && log.officer_name) {
            const clean = log.officer_name.replace(/\s+/g, '_');
            if (mVal) localStorage.setItem(`shift_log_${mVal}_${log.day_num}_${clean}`, JSON.stringify(log));
            localStorage.setItem(`shift_log_${log.day_num}_${clean}`, JSON.stringify(log));
          }
        });
        return data;
      }
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
      let isoCreatedAt = new Date().toISOString();
      if (swapRecord.createdAt) {
        const parsed = new Date(swapRecord.createdAt);
        if (!isNaN(parsed.getTime())) {
          isoCreatedAt = parsed.toISOString();
        }
      }

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
          created_at: isoCreatedAt
        }, { onConflict: 'id' });
      if (error) console.error('❌ Supabase swap record sync error:', error);
      else console.log('☁️ Swap record synced to Supabase Cloud!');
    } catch (e) {
      console.warn('Cloud swap sync fallback:', e);
    }
  }
}

async function deleteSwapRecordCloud(recordId) {
  if (isSupabaseOnline && supabaseClient) {
    try {
      const { error } = await supabaseClient
        .from('shift_swap_records')
        .delete()
        .eq('id', recordId);
      if (!error) console.log('☁️ Swap record deleted from Supabase Cloud!');
    } catch (e) {
      console.warn('Cloud swap delete fallback:', e);
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

      if (data && !error) {
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

        const cleared = localStorage.getItem('shift_swap_records_cleared');
        if (mappedRecords.length === 0 && cleared === 'true') {
          localStorage.setItem('shift_swap_records', JSON.stringify([]));
        } else if (mappedRecords.length > 0) {
          localStorage.setItem('shift_swap_records', JSON.stringify(mappedRecords));
          localStorage.removeItem('shift_swap_records_cleared');
        } else if (mappedRecords.length === 0 && cleared !== 'true') {
          // Auto-seed DEFAULT_SWAP_RECORDS to Cloud only on initial first run
          if (typeof DEFAULT_SWAP_RECORDS !== 'undefined' && Array.isArray(DEFAULT_SWAP_RECORDS)) {
            for (const rec of DEFAULT_SWAP_RECORDS) {
              await saveSwapRecordCloud(rec);
            }
            localStorage.setItem('shift_swap_records', JSON.stringify(DEFAULT_SWAP_RECORDS));
            mappedRecords.push(...DEFAULT_SWAP_RECORDS);
          }
        }

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

// Initialize on page load & online events
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  setTimeout(fetchSwapRecordsCloud, 500);
  setTimeout(processOfflineSyncQueue, 1000);
  updateOfflineSyncUI();
});

window.addEventListener('online', () => {
  console.log('🌐 Connection restored! Triggering auto offline sync...');
  if (typeof updateSupabaseBadge === 'function') updateSupabaseBadge('online');
  processOfflineSyncQueue();
});

window.addEventListener('offline', () => {
  if (typeof updateSupabaseBadge === 'function') updateSupabaseBadge('offline');
});
