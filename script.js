/* =============================================
   SCHEDULE DATA — สิงหาคม ๒๕๖๙ (August 2026)
   ============================================= */

// Each entry: { day, dayName, isWeekend, isHoliday, holidayName?,
//               male: { g1:[name,surn], g2:[], g3:[] },
//               female: { kg:[], pr:[], sc:[] } | null }

/* =============================================
   STAFF REGISTRY WITH EMPLOYEE IDs (รหัสพนักงาน)
   ============================================= */
const OFFICERS_REGISTRY = {
  '69001': { emp_id:'69001', name:'นายนิมิต',     surname:'พิศงาม',        groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69002': { emp_id:'69002', name:'นายจักกฤษ',    surname:'เลี่ยมจ้อย',    groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69003': { emp_id:'69003', name:'นายสันติ',     surname:'หมู่คำ',        groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '69004': { emp_id:'69004', name:'น.ส.บรรจง',    surname:'สีธุรี',        groupKey:'kg', gender:'female', level:'อนุบาล' },
  '69005': { emp_id:'69005', name:'น.ส.นิภาพร',   surname:'นิยมไทย',      groupKey:'pr', gender:'female', level:'ประถมศึกษา' },
  '69006': { emp_id:'69006', name:'น.ส.วราภา',    surname:'ทิณพงษ์',      groupKey:'sc', gender:'female', level:'มัธยมศึกษา' },
  '69007': { emp_id:'69007', name:'นายขนัด',      surname:'ไม่พรั่นใจ',    groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69008': { emp_id:'69008', name:'นายอานนท์',    surname:'เลี่ยมจ้อย',    groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69009': { emp_id:'69009', name:'นายประเสริฐ',  surname:'เงินเก่า',      groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '69010': { emp_id:'69010', name:'น.ส.สุวิมล',   surname:'พัฒนะ',        groupKey:'kg', gender:'female', level:'อนุบาล' },
  '69011': { emp_id:'69011', name:'น.ส.สุชาดา',   surname:'บุรีชัย',       groupKey:'pr', gender:'female', level:'ประถมศึกษา' },
  '69012': { emp_id:'69012', name:'น.ส.เกตวดี',   surname:'จันทร์เพ็ชร',  groupKey:'sc', gender:'female', level:'มัธยมศึกษา' },
  '69013': { emp_id:'69013', name:'นายแกม',       surname:'โสนาพูน',      groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69014': { emp_id:'69014', name:'นายสุเมธ',     surname:'ผ่อสุขสวัสดิ์',  groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69015': { emp_id:'69015', name:'นายสัมพันธ์', surname:'ชาติทอง',      groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '69016': { emp_id:'69016', name:'นายอัษฎางค์', surname:'สังเกตกิจ',    groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69017': { emp_id:'69017', name:'นายนรินทร์',   surname:'เกตุชิต',      groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69018': { emp_id:'69018', name:'นายสวิท',      surname:'ยวงทอง',       groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '69019': { emp_id:'69019', name:'นายสหรัฐ',     surname:'มาผาสุข',      groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69020': { emp_id:'69020', name:'นายสุรเชษฐ์', surname:'ศรีข้า',       groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69021': { emp_id:'69021', name:'นายประสิทธิ์', surname:'กิตติกลาง',   groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '69022': { emp_id:'69022', name:'นายจินฑาทิพย์',surname:'สว่างเมฆ',    groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69023': { emp_id:'69023', name:'นายณัฐพล',     surname:'เพ็ญขอบ',     groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69024': { emp_id:'69024', name:'นายสมพร',     surname:'แผ่นคด',       groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '69025': { emp_id:'69025', name:'นายสมบัติ',    surname:'เกิดปั้น',      groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69026': { emp_id:'69026', name:'นายพุฒิพงศ์',  surname:'แจ้งศรี',      groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69027': { emp_id:'69027', name:'นายกิติศักดิ์', surname:'เกิดแก่นแก้ว', groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '69028': { emp_id:'69028', name:'นายอดิเรก',   surname:'จันทร์โอ้วมณี',groupKey:'g1', gender:'male',   level:'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' },
  '69029': { emp_id:'69029', name:'นายสมชาย',    surname:'ผ่องจำปา',     groupKey:'g2', gender:'male',   level:'ประถมศึกษา' },
  '69030': { emp_id:'69030', name:'นายสุเมต',     surname:'เอี่ยมมาตร',   groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '20023': { emp_id:'20023', name:'นางศรีสุดา',   surname:'เย็นคงคา',     groupKey:'sc', gender:'female', level:'มัธยมศึกษา' },
  '20053': { emp_id:'20053', name:'นายกรกฎ',      surname:'เย็นคงคา',     groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  '20131': { emp_id:'20131', name:'นายพิชาวัจน์', surname:'เกิดเรืองสิน', groupKey:'g3', gender:'male',   level:'มัธยมศึกษา' },
  'admin': { emp_id:'admin', name:'ผู้ดูแลระบบ',   surname:'(Admin)',      groupKey:'g1', gender:'male',   level:'ผู้ดูแลระบบ', isAdmin:true },
  '99999': { emp_id:'99999', name:'ผู้ดูแลระบบ',   surname:'(Admin)',      groupKey:'g1', gender:'male',   level:'ผู้ดูแลระบบ', isAdmin:true }
};

const SCHEDULE = [
  // ── Week 1 ──────────────────────────────────
  { day:1,  dayName:'เสาร์',      isWeekend:true,  isHoliday:false,
    male:   { g1:['นายนิมิต','พิศงาม'],        g2:['นายจักกฤษ','เลี่ยมจ้อย'],  g3:['นายสันติ','หมู่คำ']          },
    female: { kg:['น.ส.บรรจง','สีธุรี'],      pr:['น.ส.นิภาพร','นิยมไทย'],   sc:['น.ส.วราภา','ทิณพงษ์']         }
  },
  { day:2,  dayName:'อาทิตย์',   isWeekend:true,  isHoliday:false,
    male:   { g1:['นายขนัด','ไม่พรั่นใจ'],       g2:['นายอานนท์','เลี่ยมจ้อย'],  g3:['นายประเสริฐ','เงินเก่า']      },
    female: { kg:['น.ส.สุวิมล','พัฒนะ'],     pr:['น.ส.สุชาดา','บุรีชัย'],    sc:['น.ส.เกตวดี','จันทร์เพ็ชร']    }
  },
  { day:3,  dayName:'จันทร์',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายแกม','โสนาพูน'],         g2:['นายสุเมธ','ผ่อสุขสวัสดิ์'],       g3:['นายสัมพันธ์','ชาติทอง']       },
    female: null
  },
  { day:4,  dayName:'อังคาร',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายอัษฎางค์','สังเกตกิจ'],  g2:['นายนรินทร์','เกตุชิต'],    g3:['นายสวิท','ยวงทอง']            },
    female: null
  },
  { day:5,  dayName:'พุธ',       isWeekend:false, isHoliday:false,
    male:   { g1:['นายสหรัฐ','มาผาสุข'],       g2:['นายสุรเชษฐ์','ศรีข้า'],    g3:['นายประสิทธิ์','กิตติกลาง']    },
    female: null
  },
  { day:6,  dayName:'พฤหัสบดี',  isWeekend:false, isHoliday:false,
    male:   { g1:['นายจินฑาทิพย์','สว่างเมฆ'], g2:['นายณัฐพล','เพ็ญขอบ'],      g3:['นายสมพร','แผ่นคด']            },
    female: null
  },
  { day:7,  dayName:'ศุกร์',     isWeekend:false, isHoliday:false,
    male:   { g1:['นายสมบัติ','เกิดปั้น'],     g2:['นายพุฒิพงศ์','แจ้งศรี'],   g3:['นายกิติศักดิ์','เกิดแก่นแก้ว'] },
    female: null
  },

  // ── Week 2 ──────────────────────────────────
  { day:8,  dayName:'เสาร์',     isWeekend:true,  isHoliday:false,
    male:   { g1:['นายอดิเรก','จันทร์โอ้วมณี'], g2:['นายสมชาย','ผ่องจำปา'],    g3:['นายสุเมต','เอี่ยมมาตร']       },
    female: { kg:['นางจรีรัตน์','บุญมา'],      pr:['น.ส.สมจิตต์','รอดอยู่'],   sc:['นางศรีสุดา','เย็นคงคา']        }
  },
  { day:9,  dayName:'อาทิตย์',   isWeekend:true,  isHoliday:false,
    male:   { g1:['นายธงชัย','เจียมสง่า'],     g2:['นายเฉลิมชัย','เทียบพิมพ์'], g3:['นายปราโมทย์','ศรีสดใส']      },
    female: { kg:['น.ส.สุภัคกาญจน์','สุ่นศรี'], pr:['นางฉะลอย','ชาตรียินดี'],   sc:['นางชมพูนุช','แสงมะลิ']          }
  },
  { day:10, dayName:'จันทร์',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายจุมพล','ดุษฏีพฤฒิพันธุ์'],g2:['นายเฉลิม','เหล่าขวลิตกุล'],g3:['นายกรกฎ','เย็นคงคา']        },
    female: null
  },
  { day:11, dayName:'อังคาร',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายมนตรี','สุพะลัม'],       g2:['นายสุริยา','กิตติกลาง'],   g3:['นายสมัคร','กองน้ำ']            },
    female: null
  },
  { day:12, dayName:'พุธ',       isWeekend:false, isHoliday:true,  holidayName:'วันแม่แห่งชาติ',
    male:   { g1:['นายกิตติภูมิ','คงจันทร์'],  g2:['นายวิรัตน์','สุขจำลอง'],   g3:['นายธาร','ก้อนนาค']            },
    female: { kg:['น.ส.ณิชกานต์','แจ่มใส'],   pr:['นางสายัน','อรรถกิจไพบูลย์'],sc:['น.ส.พรพิมล','ไชยสถาน']       }
  },
  { day:13, dayName:'พฤหัสบดี',  isWeekend:false, isHoliday:false,
    male:   { g1:['นายสุรินทร์','เพชรแท้'],    g2:['นายสุชานนท์','สิงห์สุพรรณ'],g3:['นายพิชาวัจน์','เกิดเรืองสิน'] },
    female: null
  },
  { day:14, dayName:'ศุกร์',     isWeekend:false, isHoliday:false,
    male:   { g1:['นายวรเวทย์','อินคง'],        g2:['นายจักกฤษ','เลี่ยมจ้อย'],  g3:['นายสันติ','หมู่คำ']            },
    female: null
  },

  // ── Week 3 ──────────────────────────────────
  { day:15, dayName:'เสาร์',     isWeekend:true,  isHoliday:false,
    male:   { g1:['นายสมพร','สีจีน'],           g2:['นายอานนท์','เลี่ยมจ้อย'],  g3:['นายประเสริฐ','เงินเก่า']      },
    female: { kg:['น.ส.ดวงใจ','บัวจันทร์'],    pr:['น.ส.เสาวลักษณ์','แข็งขัน'],sc:['นางประนอม','ดุษฏีพฤฒิพันธุ์']  }
  },
  { day:16, dayName:'อาทิตย์',   isWeekend:true,  isHoliday:false,
    male:   { g1:['นายนันทกา','เสาวรส'],        g2:['นายสุเมธ','ผ่อสุขสวัสดิ์'],       g3:['นายสัมพันธ์','ชาติทอง']       },
    female: { kg:['น.ส.จันทร์ภรณ์','ธนธีรภาพ'],pr:['น.ส.สงกรานต์','สีธุรี'],  sc:['น.ส.อรอุมา','ศรีทอง']          }
  },
  { day:17, dayName:'จันทร์',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายนิมิต','พิศงาม'],         g2:['นายนรินทร์','เกตุชิต'],    g3:['นายสวิท','ยวงทอง']            },
    female: null
  },
  { day:18, dayName:'อังคาร',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายขนัด','ไม่พรั่นใจ'],        g2:['นายสุรเชษฐ์','ศรีข้า'],    g3:['นายประสิทธิ์','กิตติกลาง']    },
    female: null
  },
  { day:19, dayName:'พุธ',       isWeekend:false, isHoliday:false,
    male:   { g1:['นายแกม','โสนาพูน'],          g2:['นายณัฐพล','เพ็ญขอบ'],      g3:['นายสมพร','แผ่นคด']            },
    female: null
  },
  { day:20, dayName:'พฤหัสบดี',  isWeekend:false, isHoliday:false,
    male:   { g1:['นายอัษฎางค์','สังเกตกิจ'],  g2:['นายพุฒิพงศ์','แจ้งศรี'],   g3:['นายนิยุต','ยิ่งยงกิจ']        },
    female: null
  },
  { day:21, dayName:'ศุกร์',     isWeekend:false, isHoliday:false,
    male:   { g1:['นายสหรัฐ','มาผาสุข'],        g2:['นายสมชาย','ผ่องจำปา'],     g3:['นายสุเมต','เอี่ยมมาตร']       },
    female: null
  },

  // ── Week 4 ──────────────────────────────────
  { day:22, dayName:'เสาร์',     isWeekend:true,  isHoliday:false,
    male:   { g1:['นายจินฑาทิพย์','สว่างเมฆ'], g2:['นายเฉลิมชัย','เทียบพิมพ์'], g3:['นายปราโมทย์','ศรีสดใส']      },
    female: { kg:['น.ส.ปริศนา','จินดาศรี'],    pr:['น.ส.พัชรา','อ่วมทร'],      sc:['นางจินดา','แฝงคด']            }
  },
  { day:23, dayName:'อาทิตย์',   isWeekend:true,  isHoliday:false,
    male:   { g1:['นายสมบัติ','เกิดปั้น'],      g2:['นายเฉลิม','เหล่าขวลิตกุล'],g3:['นายกรกฎ','เย็นคงคา']        },
    female: { kg:['น.ส.อรพรรณ','บุญชู'],       pr:['น.ส.เปิ่น','เลี่ยมจ้อย'],   sc:['น.ส.นภาพร','เรืองยศ']          }
  },
  { day:24, dayName:'จันทร์',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายอดิเรก','จันทร์โอ้วมณี'],  g2:['นายสุริยา','กิตติกลาง'],   g3:['นายพิชาวัจน์','เกิดเรืองสิน'] },
    female: null
  },
  { day:25, dayName:'อังคาร',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายธงชัย','เจียมสง่า'],      g2:['นายวิรัตน์','สุขจำลอง'],   g3:['นายธาร','ก้อนนาค']            },
    female: null
  },
  { day:26, dayName:'พุธ',       isWeekend:false, isHoliday:false,
    male:   { g1:['นายจุมพล','ดุษฏีพฤฒิพันธุ์'],g2:['นายสุชานนท์','สิงห์สุพรรณ'],g3:['นายสมัคร','กองน้ำ']          },
    female: null
  },
  { day:27, dayName:'พฤหัสบดี',  isWeekend:false, isHoliday:false,
    male:   { g1:['นายมนตรี','สุพะลัม'],        g2:['นายจักกฤษ','เลี่ยมจ้อย'],  g3:['นายสันติ','หมู่คำ']            },
    female: null
  },
  { day:28, dayName:'ศุกร์',     isWeekend:false, isHoliday:false,
    male:   { g1:['นายกิตติภูมิ','คงจันทร์'],   g2:['นายอานนท์','เลี่ยมจ้อย'],  g3:['นายประเสริฐ','เงินเก่า']      },
    female: null
  },

  // ── Week 5 ──────────────────────────────────
  { day:29, dayName:'เสาร์',     isWeekend:true,  isHoliday:false,
    male:   { g1:['นายสุรินทร์','เพชรแท้'],     g2:['นายสุเมธ','ผ่อสุขสวัสดิ์'],       g3:['นายสัมพันธ์','ชาติทอง']       },
    female: { kg:['น.ส.ณศิภัสร์','ไกรฐิติเกรียติ'],pr:['น.ส.เสาวรส','สกุลนุ่ม'],  sc:['นางเกษร','ชัชวาลย์']           }
  },
  { day:30, dayName:'อาทิตย์',   isWeekend:true,  isHoliday:false,
    male:   { g1:['นายวรเวทย์','อินคง'],         g2:['นายนรินทร์','เกตุชิต'],    g3:['นายสวิท','ยวงทอง']            },
    female: { kg:['น.ส.สาคร','คงเสน'],          pr:['น.ส.ตติยาพร','โชคเจริญ'],  sc:['น.ส.วิภา','พูลศรี']            }
  },
  { day:31, dayName:'จันทร์',    isWeekend:false, isHoliday:false,
    male:   { g1:['นายสมพร','สีจีน'],            g2:['นายสุรเชษฐ์','ศรีข้า'],    g3:['นายประสิทธิ์','กิตติกลาง']    },
    female: null
  }
];

/* =============================================
   CONSTANTS
   ============================================= */
const SCHED_YEAR  = 2026;
const SCHED_MONTH = 7;          // 0-indexed → August
const THAI_YEAR   = 2569;

const SHIFT = {
  weekday:           '17:00 – 07:00 น.',
  weekend_male_g1:   '08:00 – 08:00 น. (24 ชั่วโมง)',
  weekend_male_g23:  '16:00 – 08:00 น.',
  weekend_female:    '08:00 – 16:00 น.'
};

const GROUP_META = {
  g1: { label:'กลุ่ม 1',             type:'male'   },
  g2: { label:'กลุ่ม 2',             type:'male'   },
  g3: { label:'กลุ่ม 3',             type:'male'   },
  kg: { label:'ระดับอนุบาล',         type:'female' },
  pr: { label:'ระดับประถมศึกษา',     type:'female' },
  sc: { label:'ระดับมัธยมศึกษา',     type:'female' }
};

/* =============================================
   STATE
   ============================================= */
let activeFilter  = 'all';
let searchTerm    = '';
let tableRendered = false;
let calRendered   = false;
let sigPadInitialized = false;

/* =============================================
   DATE HELPERS
   ============================================= */
function todayNum() {
  const n = new Date();
  return { day:n.getDate(), month:n.getMonth(), year:n.getFullYear() };
}

function isToday(day) {
  const t = todayNum();
  return t.day === day && t.month === SCHED_MONTH && t.year === SCHED_YEAR;
}

function getTodayEntry() {
  const t = todayNum();
  if (t.month !== SCHED_MONTH || t.year !== SCHED_YEAR) return null;
  return SCHEDULE.find(d => d.day === t.day) || null;
}

function isWeekOrHol(entry) {
  return entry.isWeekend || entry.isHoliday;
}

function shiftForEntry(entry, type, gKey) {
  if (type === 'female') return SHIFT.weekend_female;
  if (isWeekOrHol(entry)) {
    return gKey === 'g1' ? SHIFT.weekend_male_g1 : SHIFT.weekend_male_g23;
  }
  return SHIFT.weekday;
}

/* =============================================
   CLOCK
   ============================================= */
const THAI_DAYS   = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'];
const THAI_MONTHS = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];

function tickClock() {
  const n  = new Date();
  const hh = String(n.getHours()).padStart(2,'0');
  const mm = String(n.getMinutes()).padStart(2,'0');
  const ss = String(n.getSeconds()).padStart(2,'0');
  const timeStr = `${hh}:${mm}:${ss}`;
  const dateStr = `${THAI_DAYS[n.getDay()]} ${n.getDate()} ${THAI_MONTHS[n.getMonth()]} ${n.getFullYear()+543}`;
  document.getElementById('clockTime').textContent    = timeStr;
  document.getElementById('clockDate').textContent    = dateStr;
  document.getElementById('sbClockTime').textContent  = timeStr;
  document.getElementById('sbClockDate').textContent  = dateStr;
}

/* =============================================
   MENU TOGGLE
   ============================================= */
function openMenu() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sbOverlay').classList.add('open');
  document.getElementById('hamburgerBtn').classList.add('open');
  document.getElementById('hamburgerBtn').setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sbOverlay').classList.remove('open');
  document.getElementById('hamburgerBtn').classList.remove('open');
  document.getElementById('hamburgerBtn').setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}

function toggleMenu() {
  const isOpen = document.getElementById('sidebar').classList.contains('open');
  isOpen ? closeMenu() : openMenu();
}

/* =============================================
   TAB SWITCHER
   ============================================= */
function switchTab(tab) {
  if (tab === 'log' && !loggedInOfficer) {
    alert('กรุณาเข้าสู่ระบบด้วยรหัสพนักงานเพื่อใช้งานเมนูบันทึกเวรประจำวัน');
    showLoginScreenOverlay();
    return;
  }
  if (tab === 'admin' && (!loggedInOfficer || !loggedInOfficer.isAdmin)) {
    alert('เมนูรายงานสรุปเฉพาะผู้ดูแลระบบ (Admin) เท่านั้น');
    return;
  }

  // Update sidebar nav items
  document.querySelectorAll('.sb-nav-item').forEach(b => b.classList.remove('active'));
  const sbBtn = document.getElementById(`sb-${tab}`);
  if (sbBtn) sbBtn.classList.add('active');

  // Switch panels
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById(`panel-${tab}`);
  if (panel) panel.classList.add('active');

  // Close drawer
  closeMenu();

  if (tab === 'calendar' && !calRendered)  { renderCalendar(); calRendered = true; }
  if (tab === 'table'    && !tableRendered){ buildTable();  tableRendered = true; }
  if (tab === 'log') {
    if (!logInitialized) { initShiftLog(); logInitialized = true; }
    setTimeout(() => {
      initSignaturePad();
      if (window.resizeSignatureCanvas) window.resizeSignatureCanvas();
    }, 150);
  }
  if (tab === 'admin')   { renderAdminDashboard(); }
}


/* =============================================
   DUTY CARDS HTML  (used in Today view & modal)
   ============================================= */
function dutyCardsHtml(entry) {
  if (!entry) return '';
  const woh = isWeekOrHol(entry);
  let html = '';

  // ── Male ──
  html += `
  <div class="duty-section">
    <p class="sec-heading"><span class="sec-heading-line"></span>👨 พนักงานชาย${woh?' — เวรนอน':''}</p>
    <div class="duty-cards">`;
  [['g1','กลุ่ม 1'],['g2','กลุ่ม 2'],['g3','กลุ่ม 3']].forEach(([k,lbl])=>{
    const p = entry.male[k];
    const fullName = `${p[0]} ${p[1]}`;
    html += `
      <div class="duty-card ${k}">
        <div class="dc-badge ${k}">${lbl}</div>
        <div class="dc-name">${fullName}</div>
        <button class="btn-quick-log" onclick="openShiftLogForOfficer(${entry.day}, '${fullName}')">📝 บันทึกเวร</button>
        <div class="dc-time">⏰ ${shiftForEntry(entry,'male',k)}</div>
      </div>`;
  });
  html += `</div></div>`;

  // ── Female ──
  if (woh && entry.female) {
    html += `<div class="sec-divider"></div>
    <div class="duty-section">
      <p class="sec-heading"><span class="sec-heading-line"></span>👩 พนักงานหญิง — เวรกลางวัน</p>
      <div class="duty-cards">`;
    [['kg','ระดับอนุบาล'],['pr','ระดับประถมฯ'],['sc','ระดับมัธยมฯ']].forEach(([k,lbl])=>{
      const p = entry.female[k];
      if (!p) return;
      const fullName = `${p[0]} ${p[1]}`;
      html += `
        <div class="duty-card ${k}">
          <div class="dc-badge ${k}">${lbl}</div>
          <div class="dc-name">${fullName}</div>
          <button class="btn-quick-log" onclick="openShiftLogForOfficer(${entry.day}, '${fullName}')">📝 บันทึกเวร</button>
          <div class="dc-time">⏰ ${SHIFT.weekend_female}</div>
        </div>`;
    });
    html += `</div></div>`;
  }
  return html;
}

/* Modal duty list (compact) */
function modalDutyHtml(entry) {
  if (!entry) return '';
  const woh = isWeekOrHol(entry);
  let html = '';

  // Male
  html += `<div class="modal-section-head"><span class="modal-section-icon male">👨</span>พนักงานชาย</div>
  <div class="duty-list">`;
  [['g1','กลุ่ม 1'],['g2','กลุ่ม 2'],['g3','กลุ่ม 3']].forEach(([k,lbl])=>{
    const p = entry.male[k];
    const fullName = `${p[0]} ${p[1]}`;
    html += `<div class="duty-list-row">
      <div class="dlr-dot ${k}"></div>
      <div class="dlr-group">${lbl}</div>
      <div class="dlr-name">${fullName}</div>
      <button class="btn-quick-log" onclick="openShiftLogForOfficer(${entry.day}, '${fullName}')">📝 บันทึกเวร</button>
      <div class="dlr-time">${shiftForEntry(entry,'male',k)}</div>
    </div>`;
  });
  html += `</div>`;

  // Female
  if (woh && entry.female) {
    html += `<div class="modal-section-head" style="margin-top:20px;"><span class="modal-section-icon female">👩</span>พนักงานหญิง</div>
    <div class="duty-list">`;
    [['kg','ระดับอนุบาล'],['pr','ระดับประถมศึกษา'],['sc','ระดับมัธยมศึกษา']].forEach(([k,lbl])=>{
      const p = entry.female[k];
      if (!p) return;
      const fullName = `${p[0]} ${p[1]}`;
      html += `<div class="duty-list-row">
        <div class="dlr-dot ${k}"></div>
        <div class="dlr-group">${lbl}</div>
        <div class="dlr-name">${fullName}</div>
        <button class="btn-quick-log" onclick="openShiftLogForOfficer(${entry.day}, '${fullName}')">📝 บันทึกเวร</button>
        <div class="dlr-time">${SHIFT.weekend_female}</div>
      </div>`;
    });
    html += `</div>`;
  }
  return html;
}

/* =============================================
   TODAY VIEW
   ============================================= */
function renderToday() {
  const entry = getTodayEntry();
  const t     = todayNum();

  if (!entry) {
    document.getElementById('todayDayName').textContent  = 'วันนี้';
    document.getElementById('todayDateText').textContent = `${t.day} ${THAI_MONTHS[t.month]} ${t.year+543}`;
    document.getElementById('todayTypeBadges').innerHTML = `<span class="type-badge weekday">📭 ไม่อยู่ในช่วงตาราง</span>`;
    document.getElementById('shiftTimeCard').innerHTML   = '';
    document.getElementById('todayContent').innerHTML    = `
      <div class="no-duty">
        <div class="no-duty-icon">📭</div>
        <p class="no-duty-title">ไม่มีตารางเวรสำหรับวันนี้</p>
        <p class="no-duty-sub">ตารางนี้ครอบคลุมเดือนสิงหาคม ๒๕๖๙ เท่านั้น</p>
      </div>`;
    return;
  }

  const woh = isWeekOrHol(entry);

  // Hero left
  document.getElementById('todayDayName').textContent  = `วัน${entry.dayName}`;
  document.getElementById('todayDateText').textContent = `${entry.day} สิงหาคม ${THAI_YEAR}`;

  let badgesHtml = '';
  if (entry.isHoliday) {
    badgesHtml += `<span class="type-badge holiday">🎉 ${entry.holidayName}</span>`;
  } else if (entry.isWeekend) {
    badgesHtml += `<span class="type-badge weekend">📅 วันหยุดสุดสัปดาห์</span>`;
  } else {
    badgesHtml += `<span class="type-badge weekday">💼 วันทำงาน</span>`;
  }
  document.getElementById('todayTypeBadges').innerHTML = badgesHtml;

  // Hero right — shift card
  const mShiftG1  = woh ? SHIFT.weekend_male_g1  : SHIFT.weekday;
  const mShiftG23 = woh ? SHIFT.weekend_male_g23 : SHIFT.weekday;
  document.getElementById('shiftTimeCard').innerHTML = `
    <div class="stc-label">🌙 เวรชาย (วันนี้)</div>
    ${woh
      ? `<div class="stc-time" style="font-size:16px;">กลุ่ม 1: ${mShiftG1}</div>
         <div class="stc-sub">กลุ่ม 2&3: ${mShiftG23}</div>`
      : `<div class="stc-time">${mShiftG1}</div>`
    }
    ${woh ? `<div class="stc-sub" style="margin-top:10px;">☀️ เวรหญิง: ${SHIFT.weekend_female}</div>` : ''}`;

  // Content
  document.getElementById('todayContent').innerHTML = dutyCardsHtml(entry);
}

/* =============================================
   CALENDAR VIEW
   ============================================= */
function renderCalendar() {
  const firstDow = new Date(SCHED_YEAR, SCHED_MONTH, 1).getDay(); // 0=Sun, 6=Sat
  const daysInMonth = 31;

  const DOWS = [
    {l:'อา',cls:'sun'},{l:'จ',cls:''},{l:'อ',cls:''},{l:'พ',cls:''},
    {l:'พฤ',cls:''},{l:'ศ',cls:''},{l:'ส',cls:'sat'}
  ];

  let html = '<div class="cal-dow-row">';
  DOWS.forEach(d => { html += `<div class="cal-dow ${d.cls}">${d.l}</div>`; });
  html += '</div><div class="cal-days-grid">';

  // Blank cells before the 1st
  for (let i = 0; i < firstDow; i++) {
    html += '<div class="cal-cell cal-empty"></div>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const entry = SCHEDULE.find(d => d.day === day);
    const woh   = entry ? isWeekOrHol(entry) : false;
    const isHol = entry?.isHoliday || false;
    const isTod = isToday(day);

    // DOW of this day
    const dowIdx = (firstDow + day - 1) % 7;

    let cls = 'cal-cell';
    if (isHol) cls += ' is-holiday';
    else if (woh) cls += ' is-weekend';
    if (isTod)  cls += ' is-today';
    if (dowIdx === 0) cls += ' cal-sunday';

    const todayLabel = isTod ? '<span class="today-badge-cell">วันนี้</span>' : '';

    let dots = '';
    if (entry) {
      dots = `<div class="cal-indicators">
        <div class="cal-dot g1"></div>
        <div class="cal-dot g2"></div>
        <div class="cal-dot g3"></div>
        ${entry.female ? '<div class="cal-dot fem"></div>' : ''}
      </div>`;
    }

    html += `
      <div class="${cls}" onclick="openModal(${day})" title="${entry?.dayName || ''} ${day} สิงหาคม ${THAI_YEAR}">
        ${todayLabel}
        <div class="cal-cell-num">${day}</div>
        <div class="cal-cell-dow">${entry?.dayName || ''}</div>
        ${dots}
      </div>`;
  }

  html += '</div>';
  document.getElementById('calendarGrid').innerHTML = html;
}

/* =============================================
   MODAL
   ============================================= */
function openModal(day) {
  currentModalDay = day;
  const entry = SCHEDULE.find(d => d.day === day);
  if (!entry) return;
  const woh   = isWeekOrHol(entry);
  const isTod = isToday(day);

  document.getElementById('modalHeading').textContent =
    `วัน${entry.dayName}ที่ ${day} สิงหาคม ${THAI_YEAR}${isTod ? ' — วันนี้' : ''}`;

  let badgesHtml = '';
  if (entry.isHoliday) {
    badgesHtml += `<span class="type-badge holiday">🎉 ${entry.holidayName}</span>`;
  } else if (entry.isWeekend) {
    badgesHtml += `<span class="type-badge weekend">📅 วันหยุดสุดสัปดาห์</span>`;
  } else {
    badgesHtml += `<span class="type-badge weekday">💼 วันทำงาน</span>`;
  }
  document.getElementById('modalHeadBadges').innerHTML = badgesHtml;
  document.getElementById('modalContent').innerHTML    = modalDutyHtml(entry);

  const backdrop = document.getElementById('modalBackdrop');
  backdrop.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBackdrop').style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* =============================================
   TABLE VIEW
   ============================================= */

/** Flatten schedule into one row per person per day */
function getAllRows() {
  const rows = [];
  SCHEDULE.forEach(entry => {
    const woh = isWeekOrHol(entry);
    // Male groups
    [['g1','male'],['g2','male'],['g3','male']].forEach(([k]) => {
      const p = entry.male[k];
      rows.push({
        day:       entry.day,
        dayName:   entry.dayName,
        isWeekend: entry.isWeekend,
        isHoliday: entry.isHoliday,
        holidayName:entry.holidayName,
        type:      'male',
        gKey:      k,
        gLabel:    GROUP_META[k].label,
        name:      p[0],
        surn:      p[1],
        full:      `${p[0]} ${p[1]}`,
        time:      shiftForEntry(entry, 'male', k),
        isToday:   isToday(entry.day)
      });
    });
    // Female groups (only if present)
    if (entry.female) {
      [['kg','female'],['pr','female'],['sc','female']].forEach(([k]) => {
        const p = entry.female[k];
        if (!p) return;
        rows.push({
          day:       entry.day,
          dayName:   entry.dayName,
          isWeekend: entry.isWeekend,
          isHoliday: entry.isHoliday,
          holidayName:entry.holidayName,
          type:      'female',
          gKey:      k,
          gLabel:    GROUP_META[k].label,
          name:      p[0],
          surn:      p[1],
          full:      `${p[0]} ${p[1]}`,
          time:      SHIFT.weekend_female,
          isToday:   isToday(entry.day)
        });
      });
    }
  });
  return rows;
}

function applyFilters(rows) {
  return rows.filter(r => {
    // Type / group filter
    if (activeFilter === 'male'    && r.type  !== 'male')    return false;
    if (activeFilter === 'female'  && r.type  !== 'female')  return false;
    if (activeFilter === 'g1'      && r.gKey  !== 'g1')      return false;
    if (activeFilter === 'g2'      && r.gKey  !== 'g2')      return false;
    if (activeFilter === 'g3'      && r.gKey  !== 'g3')      return false;
    if (activeFilter === 'weekend' && !r.isWeekend && !r.isHoliday) return false;
    if (activeFilter === 'weekday' && (r.isWeekend  || r.isHoliday))return false;
    // Search
    if (searchTerm) {
      const t = searchTerm.toLowerCase();
      if (!r.name.toLowerCase().includes(t) &&
          !r.surn.toLowerCase().includes(t) &&
          !r.full.toLowerCase().includes(t)) return false;
    }
    return true;
  });
}

function esc(str) { return str.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

function highlight(text) {
  if (!searchTerm) return text;
  return text.replace(new RegExp(`(${esc(searchTerm)})`,'gi'),
    '<mark class="hl">$1</mark>');
}

function buildTable() {
  const all      = getAllRows();
  const filtered = applyFilters(all);
  const tbody    = document.getElementById('tableBody');
  const noBox    = document.getElementById('noResultsBox');
  const table    = document.getElementById('scheduleTable');
  const summary  = document.getElementById('tableSummary');

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    noBox.style.display  = 'block';
    table.style.display  = 'none';
    summary.textContent  = '';
    return;
  }

  noBox.style.display = 'none';
  table.style.display = '';
  summary.textContent = `แสดง ${filtered.length} รายการ`;

  let html    = '';
  let lastDay = null;

  filtered.forEach(r => {
    const isFirst = r.day !== lastDay;
    lastDay = r.day;

    const todayCls = r.isToday ? 'tr-today' : '';
    const firstCls = isFirst  ? 'tr-day-first' : '';

    const typeBadge = r.isHoliday
      ? `<span class="t-badge holiday">🎉 ${r.holidayName||'วันหยุด'}</span>`
      : r.isWeekend
        ? `<span class="t-badge weekend">📅 วันหยุด</span>`
        : `<span class="t-badge weekday">💼 วันธรรมดา</span>`;

    html += `
      <tr class="${todayCls} ${firstCls}" onclick="openModal(${r.day})">
        <td>${r.dayName}</td>
        <td>${isFirst ? `${r.day} ส.ค. ๒๕๖๙` : ''}</td>
        <td>${isFirst ? typeBadge : ''}</td>
        <td><span class="t-group-badge ${r.gKey}">${r.gLabel}</span></td>
        <td>${highlight(r.full)}</td>
        <td style="font-size:12px;color:var(--text3);white-space:nowrap;">${r.time}</td>
      </tr>`;
  });

  tbody.innerHTML = html;
}

/* =============================================
   SEARCH & FILTER EVENTS
   ============================================= */
function handleSearch() {
  const v = document.getElementById('searchInput').value.trim();
  searchTerm = v;
  document.getElementById('clearSearchBtn').style.display = v ? 'inline-block' : 'none';
  buildTable();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  searchTerm = '';
  document.getElementById('clearSearchBtn').style.display = 'none';
  buildTable();
}

function setFilter(f) {
  activeFilter = f;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.getElementById(`chip-${f}`).classList.add('active');
  buildTable();
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  tickClock();
  setInterval(tickClock, 1000);
  renderToday();
  initShiftLog();
  checkLoginSession();
});

/* =============================================
   SHIFT LOG SYSTEM (บันทึกเวรประจำวัน)
   ============================================= */
let logInitialized = false;
let currentModalDay = null;

function initShiftLog() {
  const dateSel = document.getElementById('logDateSelect');
  if (!dateSel) return;

  dateSel.innerHTML = '';

  if (loggedInOfficer && !loggedInOfficer.isAdmin) {
    const fullName = `${loggedInOfficer.name} ${loggedInOfficer.surname}`;
    const myDays = findDaysForOfficer(fullName);

    if (myDays.length > 0) {
      myDays.forEach(dayNum => {
        const d = SCHEDULE.find(entry => entry.day === dayNum);
        if (d) {
          const opt = document.createElement('option');
          opt.value = d.day;
          opt.textContent = `วัน${d.dayName}ที่ ${d.day} ส.ค. ๒๕๖๙ (${d.isHoliday ? d.holidayName : (d.isWeekend ? 'วันหยุด' : 'วันทำงาน')})`;
          dateSel.appendChild(opt);
        }
      });
      dateSel.value = myDays[0];
    } else {
      const opt = document.createElement('option');
      opt.value = 1;
      opt.textContent = `ไม่มีวันเข้าเวรในเดือนนี้ (กรอกทั่วไป)`;
      dateSel.appendChild(opt);
    }
  } else {
    // Admin or No Login: Show all 31 days
    SCHEDULE.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.day;
      opt.textContent = `วัน${d.dayName}ที่ ${d.day} ส.ค. ๒๕๖๙ (${d.isHoliday ? d.holidayName : (d.isWeekend ? 'วันหยุด' : 'วันทำงาน')})`;
      dateSel.appendChild(opt);
    });
    const t = todayNum();
    if (t.month === SCHED_MONTH && t.year === SCHED_YEAR && t.day >= 1 && t.day <= 31) {
      dateSel.value = t.day;
    } else {
      dateSel.value = 1;
    }
  }

  onLogDateChange();
}

function onLogDateChange() {
  const day = parseInt(document.getElementById('logDateSelect').value, 10);
  const entry = SCHEDULE.find(d => d.day === day);
  const offSel = document.getElementById('logOfficerSelect');
  if (!offSel) return;

  offSel.innerHTML = '';
  const officers = [];

  if (entry) {
    // Male
    [['g1','กลุ่ม 1'],['g2','กลุ่ม 2'],['g3','กลุ่ม 3']].forEach(([k, lbl]) => {
      const p = entry.male[k];
      if (p) {
        officers.push({
          name: `${p[0]} ${p[1]}`,
          groupKey: k,
          groupLabel: lbl,
          type: 'male',
          level: k === 'g1' ? 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)' : (k === 'g2' ? 'ประถมศึกษา' : 'มัธยมศึกษา')
        });
      }
    });

    // Female
    if (entry.female) {
      [['kg','ระดับอนุบาล'],['pr','ระดับประถมศึกษา'],['sc','ระดับมัธยมศึกษา']].forEach(([k, lbl]) => {
        const p = entry.female[k];
        if (p) {
          officers.push({
            name: `${p[0]} ${p[1]}`,
            groupKey: k,
            groupLabel: lbl,
            type: 'female',
            level: k === 'kg' ? 'อนุบาล' : (k === 'pr' ? 'ประถมศึกษา' : 'มัธยมศึกษา')
          });
        }
      });
    }
  }

  // Filter officers: if loggedInOfficer is set and NOT admin, ONLY show loggedInOfficer
  let filteredOfficers = officers;
  if (loggedInOfficer && !loggedInOfficer.isAdmin) {
    const fullName = `${loggedInOfficer.name} ${loggedInOfficer.surname}`;
    const cleanFull = fullName.replace(/\s+/g, '');

    filteredOfficers = officers.filter(off => {
      const cleanOff = off.name.replace(/\s+/g, '');
      return cleanOff.includes(cleanFull) || cleanFull.includes(cleanOff);
    });

    if (filteredOfficers.length === 0) {
      filteredOfficers = [{
        name: fullName,
        groupKey: loggedInOfficer.groupKey || 'g1',
        groupLabel: 'ผู้เข้าเวร',
        type: loggedInOfficer.gender || 'male',
        level: loggedInOfficer.level || 'ปฏิบัติหน้าที่เวร'
      }];
    }

    offSel.disabled = true; // Lock selector for regular officers!
  } else {
    offSel.disabled = false; // Unlock for Admin or All!
  }

  filteredOfficers.forEach(off => {
    const opt = document.createElement('option');
    opt.value = JSON.stringify(off);
    opt.textContent = `${off.name} [${off.groupLabel}]`;
    offSel.appendChild(opt);
  });

  onLogOfficerChange();
  checkMissingPastLogs();
}

function onLogOfficerChange() {
  const day = parseInt(document.getElementById('logDateSelect').value, 10);
  const entry = SCHEDULE.find(d => d.day === day);
  const offVal = document.getElementById('logOfficerSelect').value;
  if (!entry || !offVal) return;

  const off = JSON.parse(offVal);
  const woh = isWeekOrHol(entry);

  // Fill Header Data
  if (document.getElementById('fmLevel')) document.getElementById('fmLevel').value = off.level;
  if (document.getElementById('fmName')) document.getElementById('fmName').value = off.name;
  const fmSign = document.getElementById('fmSignName');
  if (fmSign) fmSign.value = off.name;

  document.getElementById('fmDayName').value = entry.dayName;
  document.getElementById('fmDayNum').value  = entry.day;
  document.getElementById('fmMonth').value   = 'สิงหาคม';
  document.getElementById('fmYear').value    = THAI_YEAR;

  // Shift Type & Times
  const isNight = off.type === 'male'; // Males are night shift, Females are day shift
  document.getElementById('fmShiftDay').checked   = !isNight;
  document.getElementById('fmShiftNight').checked = isNight;

  if (off.type === 'female') {
    document.getElementById('fmTimeIn').value  = '08.00 น.';
    document.getElementById('fmTimeOut').value = '16.00 น.';
  } else { // male
    if (woh) {
      if (off.groupKey === 'g1') {
        document.getElementById('fmTimeIn').value  = '08.00 น.';
        document.getElementById('fmTimeOut').value = '08.00 น. (24 ชม.)';
      } else {
        document.getElementById('fmTimeIn').value  = '16.00 น.';
        document.getElementById('fmTimeOut').value = '08.00 น.';
      }
    } else {
      document.getElementById('fmTimeIn').value  = '17.00 น.';
      document.getElementById('fmTimeOut').value = '07.00 น.';
    }
  }

  // Load from localStorage if exists
  loadShiftLog();
}

function toggleShiftType(type) {
  if (type === 'day') {
    document.getElementById('fmShiftNight').checked = !document.getElementById('fmShiftDay').checked;
  } else {
    document.getElementById('fmShiftDay').checked = !document.getElementById('fmShiftNight').checked;
  }
}

function addLogTableRow(timeStr = '', noteStr = '', remarkStr = '') {
  const tbody = document.getElementById('formLogTbody');
  if (!tbody) return;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>
      <input type="text" class="table-input table-input-time" value="${timeStr}">
    </td>
    <td>
      <input type="text" class="table-input" value="${noteStr}">
    </td>
    <td>
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <input type="text" class="table-input" value="${remarkStr}">
        <button class="btn-del-row" onclick="removeLogRow(this)" title="ลบแถว">✕</button>
      </div>
    </td>
  `;
  tbody.appendChild(tr);
}

function removeLogRow(btn) {
  const tr = btn.closest('tr');
  if (tr) tr.remove();
}

function addHourlyRows() {
  const tbody = document.getElementById('formLogTbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  // Create 7 blank rows matching the physical form
  for (let i = 0; i < 7; i++) {
    addLogTableRow('', '', '');
  }
}

function getLogStorageKey() {
  const day = document.getElementById('fmDayNum').value;
  const name = document.getElementById('fmName').value;
  return `shift_log_${day}_${name.replace(/\s+/g, '_')}`;
}

async function saveShiftLog() {
  const key = getLogStorageKey();
  const rows = [];
  document.querySelectorAll('#formLogTbody tr').forEach(tr => {
    const inputs = tr.querySelectorAll('input');
    if (inputs.length >= 3) {
      rows.push({
        time: inputs[0].value,
        note: inputs[1].value,
        remark: inputs[2].value
      });
    }
  });

  const data = {
    level:          document.getElementById('fmLevel').value,
    isDay:          document.getElementById('fmShiftDay').checked,
    isNight:        document.getElementById('fmShiftNight').checked,
    name:           document.getElementById('fmName').value,
    dayName:        document.getElementById('fmDayName').value,
    dayNum:         parseInt(document.getElementById('fmDayNum').value, 10),
    month:          document.getElementById('fmMonth').value,
    year:           document.getElementById('fmYear').value,
    timeIn:         document.getElementById('fmTimeIn').value,
    timeOut:        document.getElementById('fmTimeOut').value,
    signatureData:  getSignatureDataUrl() || '',
    inspectorNotes: document.getElementById('fmInspectorNotes').value,
    rows:           rows
  };

  // Save to Local Storage
  localStorage.setItem(key, JSON.stringify(data));

  // Save to Supabase Cloud
  if (typeof saveShiftLogCloud === 'function' && loggedInOfficer) {
    await saveShiftLogCloud(data, loggedInOfficer.emp_id);
  }

  alert(`🚀 ส่งใบบันทึกเวรของ ${data.name} (วันที่ ${data.dayNum} ส.ค.) เรียบร้อยแล้ว!`);
  checkMissingPastLogs();
  return data;
}

async function checkMissingPastLogs() {
  const banner = document.getElementById('logAlertBanner');
  if (!banner) return;

  if (!loggedInOfficer || loggedInOfficer.isAdmin) {
    banner.style.display = 'none';
    return;
  }

  const fullName = `${loggedInOfficer.name} ${loggedInOfficer.surname}`;
  const scheduledDays = findDaysForOfficer(fullName);
  const t = todayNum();
  const currentDay = (t.month === SCHED_MONTH && t.year === SCHED_YEAR && t.day >= 1 && t.day <= 31) ? t.day : 31;

  // Filter days before currentDay that haven't been submitted
  const missingDays = [];

  for (const dayNum of scheduledDays) {
    if (dayNum >= currentDay) continue; // Only past days

    let isSaved = false;

    // Check Cloud
    if (typeof fetchShiftLogCloud === 'function') {
      const cloudData = await fetchShiftLogCloud(dayNum, loggedInOfficer.emp_id);
      if (cloudData && (cloudData.rows?.length > 0 || cloudData.sign_name || cloudData.inspector_notes)) {
        isSaved = true;
      }
    }

    // Check Local
    if (!isSaved) {
      const key = `shift_log_${dayNum}_${fullName.replace(/\s+/g, '_')}`;
      const localData = localStorage.getItem(key);
      if (localData) {
        try {
          const parsed = JSON.parse(localData);
          if (parsed.rows && parsed.rows.length > 0) isSaved = true;
        } catch(e){}
      }
    }

    if (!isSaved) {
      missingDays.push(dayNum);
    }
  }

  if (missingDays.length > 0) {
    const firstMissing = missingDays[0];
    banner.style.display = 'flex';
    banner.innerHTML = `
      <span>⚠️ <strong>แจ้งเตือน:</strong> คุณยังไม่ได้ส่งใบบันทึกเวรย้อนหลัง (วันที่ ${missingDays.join(', ')} ส.ค.)</span>
      <button class="btn-jump-day" onclick="jumpToMissingLog(${firstMissing})">📝 กรอกวันที่ ${firstMissing} ส.ค.</button>
    `;
  } else {
    banner.style.display = 'none';
  }
}

function jumpToMissingLog(dayNum) {
  const dateSel = document.getElementById('logDateSelect');
  if (dateSel) {
    dateSel.value = dayNum;
    onLogDateChange();
  }
}

function exportShiftLogFile() {
  const data = {
    level:          document.getElementById('fmLevel').value,
    isDay:          document.getElementById('fmShiftDay').checked,
    isNight:        document.getElementById('fmShiftNight').checked,
    name:           document.getElementById('fmName').value,
    dayName:        document.getElementById('fmDayName').value,
    dayNum:         document.getElementById('fmDayNum').value,
    month:          document.getElementById('fmMonth').value,
    year:           document.getElementById('fmYear').value,
    timeIn:         document.getElementById('fmTimeIn').value,
    timeOut:        document.getElementById('fmTimeOut').value,
    signName:       document.getElementById('fmSignName')?.value || '',
    inspectorNotes: document.getElementById('fmInspectorNotes').value,
    rows:           Array.from(document.querySelectorAll('#formLogTbody tr')).map(tr => {
      const inputs = tr.querySelectorAll('input');
      return { time: inputs[0]?.value || '', note: inputs[1]?.value || '', remark: inputs[2]?.value || '' };
    })
  };

  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `บันทึกเวร_${data.dayNum}_สค_${data.name.replace(/\s+/g, '_')}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function loadShiftLog() {
  const tbody = document.getElementById('formLogTbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const dayNum = parseInt(document.getElementById('fmDayNum').value, 10);

  // 1. Try Cloud Fetching first
  if (typeof fetchShiftLogCloud === 'function' && loggedInOfficer && dayNum) {
    const cloudData = await fetchShiftLogCloud(dayNum, loggedInOfficer.emp_id);
    if (cloudData) {
      document.getElementById('fmInspectorNotes').value = cloudData.inspector_notes || '';
      if (cloudData.rows && cloudData.rows.length > 0) {
        cloudData.rows.forEach(r => addLogTableRow(r.time, r.note, r.remark));
        return;
      }
    }
  }

  // 2. Try Local Storage Fallback
  const key = getLogStorageKey();
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      document.getElementById('fmInspectorNotes').value = data.inspectorNotes || '';
      if (data.signatureData) {
        restoreSignatureFromDataUrl(data.signatureData);
      }
      if (data.rows && data.rows.length > 0) {
        data.rows.forEach(r => addLogTableRow(r.time, r.note, r.remark));
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }

  // 3. Ensure at least 1 row exists if no saved rows were loaded
  if (document.querySelectorAll('#formLogTbody tr').length === 0) {
    addLogTableRow('', '', '');
  }
}



function printShiftForm() {
  // ── 1. Populate metadata ──────────────────────────
  const daySelVal = parseInt(document.getElementById('logDateSelect')?.value || '1', 10);
  const schedEntry = SCHEDULE.find(d => d.day === daySelVal);

  const levelVal    = document.getElementById('fmLevel')?.value || 'มัธยมศึกษา';
  const nameVal     = document.getElementById('fmName')?.value || '';
  const dayNameVal  = document.getElementById('fmDayName')?.value || schedEntry?.dayName || '';
  const dayNumVal   = document.getElementById('fmDayNum')?.value || daySelVal || '';
  const monthVal    = document.getElementById('fmMonth')?.value || 'สิงหาคม';
  const yearVal     = document.getElementById('fmYear')?.value || THAI_YEAR || '2569';
  // Shift Time Fallback calculation if inputs are empty
  let defaultTimeIn = '17.00 น.';
  let defaultTimeOut = '07.00 น.';
  if (schedEntry) {
    const woh = isWeekOrHol(schedEntry);
    const isNightChecked = document.getElementById('fmShiftNight')?.checked;

    // Check selected officer group key
    let offGroupKey = null;
    const offSelVal = document.getElementById('logOfficerSelect')?.value;
    if (offSelVal) {
      try { offGroupKey = JSON.parse(offSelVal)?.groupKey; } catch(e){}
    }

    if (!isNightChecked) { // Day shift
      defaultTimeIn = '08.00 น.';
      defaultTimeOut = '16.00 น.';
    } else { // Night shift
      if (woh) {
        if (offGroupKey === 'g1') {
          defaultTimeIn  = '08.00 น.';
          defaultTimeOut = '08.00 น. (24 ชม.)';
        } else {
          defaultTimeIn  = '16.00 น.';
          defaultTimeOut = '08.00 น.';
        }
      } else {
        defaultTimeIn  = '17.00 น.';
        defaultTimeOut = '07.00 น.';
      }
    }
  }

  const timeInVal   = document.getElementById('fmTimeIn')?.value || defaultTimeIn;
  const timeOutVal  = document.getElementById('fmTimeOut')?.value || defaultTimeOut;
  const inspectorVal= document.getElementById('fmInspectorNotes')?.value || '';

  const setPf = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = (val !== null && val !== undefined && val !== '') ? val : '&nbsp;';
  };

  setPf('pfLevel', levelVal);
  setPf('pfName', nameVal);
  setPf('pfDayName', dayNameVal);
  setPf('pfDayNum', dayNumVal);
  setPf('pfMonth', monthVal);
  setPf('pfYear', yearVal);
  setPf('pfTimeIn', timeInVal);
  setPf('pfTimeOut', timeOutVal);
  
  const inspEl = document.getElementById('pfInspectorNotes');
  if (inspEl) inspEl.textContent = inspectorVal;

  // ── 2. Checkboxes ─────────────────────────────────
  const cbDay   = document.getElementById('pfCbDay');
  const cbNight = document.getElementById('pfCbNight');
  const isDayChecked   = document.getElementById('fmShiftDay').checked;
  const isNightChecked = document.getElementById('fmShiftNight').checked;
  if (cbDay)   cbDay.classList.toggle('checked', isDayChecked);
  if (cbNight) cbNight.classList.toggle('checked', isNightChecked);

  // ── 3. Signature image ────────────────────────────
  const pfSign = document.getElementById('pfSignName');
  const sigDataUrl = getSignatureDataUrl();
  if (sigDataUrl && pfSign) {
    pfSign.innerHTML = `<img src="${sigDataUrl}" style="max-height:45px;max-width:180px;display:inline-block;vertical-align:middle;">`;
  } else if (pfSign) {
    pfSign.innerHTML = nameVal ? `<span style="font-family:'Sarabun';font-weight:600;">${nameVal}</span>` : '&nbsp;';
  }

  // ── 4. Copy log table rows ─────────────────────────
  const srcRows = document.querySelectorAll('#formLogTbody tr');
  const pfTbody = document.getElementById('pfLogTbody');
  pfTbody.innerHTML = '';
  srcRows.forEach(tr => {
    const inputs = tr.querySelectorAll('input');
    const newTr  = document.createElement('tr');
    newTr.innerHTML = `
      <td style="border:1px solid #000;padding:4px 6px;font-size:12px;text-align:center;">${inputs[0]?.value || '&nbsp;'}</td>
      <td style="border:1px solid #000;padding:4px 6px;font-size:12px;">${inputs[1]?.value || '&nbsp;'}</td>
      <td style="border:1px solid #000;padding:4px 6px;font-size:12px;">${inputs[2]?.value || '&nbsp;'}</td>
    `;
    pfTbody.appendChild(newTr);
  });
  // Ensure minimum 7 rows
  while (pfTbody.children.length < 7) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="border:1px solid #000;padding:4px 6px;height:24px;">&nbsp;</td>
      <td style="border:1px solid #000;padding:4px 6px;">&nbsp;</td>
      <td style="border:1px solid #000;padding:4px 6px;">&nbsp;</td>
    `;
    pfTbody.appendChild(tr);
  }

  // ── 5. Print ──────────────────────────────────────
  window.print();
}

/* =============================================
   SIGNATURE PAD ENGINE (PORTED FROM INK-INVENTORY)
   ============================================= */
let sigCanvas = null;
let sigCtx = null;
let isSigDrawing = false;

function initSignaturePad() {
  sigCanvas = document.getElementById('signature-pad');
  if (!sigCanvas) return;
  const btnClear = document.getElementById('btn-clear-signature');
  sigCtx = sigCanvas.getContext('2d');

  window.resizeSignatureCanvas = function() {
    if (!sigCanvas || sigCanvas.offsetWidth === 0) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    sigCanvas.width = sigCanvas.offsetWidth * ratio;
    sigCanvas.height = sigCanvas.offsetHeight * ratio;
    sigCtx.scale(ratio, ratio);
    sigCtx.strokeStyle = '#000000';
    sigCtx.lineWidth = 3;
    sigCtx.lineCap = 'round';
    sigCtx.lineJoin = 'round';
  };

  window.addEventListener('resize', window.resizeSignatureCanvas);
  setTimeout(window.resizeSignatureCanvas, 100);

  const getCoordinates = (e) => {
    const rect = sigCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const startDrawing = (e) => {
    isSigDrawing = true;
    const { x, y } = getCoordinates(e);
    sigCtx.beginPath();
    sigCtx.moveTo(x, y);
    if (e.touches) e.preventDefault();
  };

  const draw = (e) => {
    if (!isSigDrawing) return;
    const { x, y } = getCoordinates(e);
    sigCtx.lineTo(x, y);
    sigCtx.stroke();
    if (e.touches) e.preventDefault();
  };

  const stopDrawing = () => {
    if (isSigDrawing) {
      sigCtx.closePath();
      isSigDrawing = false;
    }
  };

  sigCanvas.addEventListener('mousedown', startDrawing);
  sigCanvas.addEventListener('mousemove', draw);
  sigCanvas.addEventListener('mouseup', stopDrawing);
  sigCanvas.addEventListener('mouseout', stopDrawing);
  sigCanvas.addEventListener('touchstart', startDrawing, { passive: false });
  sigCanvas.addEventListener('touchmove', draw, { passive: false });
  sigCanvas.addEventListener('touchend', stopDrawing);

  if (btnClear) {
    btnClear.addEventListener('click', clearSignature);
  }
}

function clearSignature() {
  if (sigCtx && sigCanvas) {
    sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
  }
}

function isCanvasEmpty(canv) {
  if (!canv) return true;
  const blank = document.createElement('canvas');
  blank.width = canv.width;
  blank.height = canv.height;
  return canv.toDataURL() === blank.toDataURL();
}

function getSignatureDataUrl() {
  if (!sigCanvas || isCanvasEmpty(sigCanvas)) return null;
  return sigCanvas.toDataURL('image/png');
}

function restoreSignatureFromDataUrl(dataUrl) {
  if (!dataUrl || !sigCanvas) return;
  const img = new Image();
  img.onload = () => {
    if (sigCtx) {
      sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
      sigCtx.drawImage(img, 0, 0, sigCanvas.offsetWidth, sigCanvas.offsetHeight);
    }
  };
  img.src = dataUrl;
}


function openShiftLogForModal() {
  closeModal();
  switchTab('log');
  if (currentModalDay) {
    const dateSel = document.getElementById('logDateSelect');
    if (dateSel) {
      dateSel.value = currentModalDay;
      onLogDateChange();
    }
  }
}

function findDaysForOfficer(officerName) {
  const days = [];
  const cleanName = officerName.replace(/\s+/g, '');
  SCHEDULE.forEach(d => {
    if (d.male) {
      ['g1','g2','g3'].forEach(k => {
        if (d.male[k]) {
          const fn = `${d.male[k][0]}${d.male[k][1]}`;
          if (fn.includes(cleanName) || cleanName.includes(fn)) days.push(d.day);
        }
      });
    }
    if (d.female) {
      ['kg','pr','sc'].forEach(k => {
        if (d.female[k]) {
          const fn = `${d.female[k][0]}${d.female[k][1]}`;
          if (fn.includes(cleanName) || cleanName.includes(fn)) days.push(d.day);
        }
      });
    }
  });
  return days;
}

function openShiftLogForOfficer(day, officerName) {
  closeModal();
  switchTab('log');

  const dateSel = document.getElementById('logDateSelect');
  const offSel  = document.getElementById('logOfficerSelect');
  if (!dateSel || !offSel) return;

  // 1. Find days where this officer has duty
  const scheduledDays = findDaysForOfficer(officerName);
  let targetDay = day;

  // If the requested day is not in officer's scheduled days, pick the first scheduled day
  if (scheduledDays.length > 0 && !scheduledDays.includes(day)) {
    targetDay = scheduledDays[0];
  }

  dateSel.value = targetDay;
  onLogDateChange();

  // 2. Select officer in logOfficerSelect
  let foundIndex = -1;
  const cleanName = officerName.replace(/\s+/g, '');

  for (let i = 0; i < offSel.options.length; i++) {
    const optText = offSel.options[i].text.replace(/\s+/g, '');
    if (optText.includes(cleanName) || cleanName.includes(optText)) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex !== -1) {
    offSel.selectedIndex = foundIndex;
  } else {
    // If not found in default list, dynamically append officer option
    const newOpt = document.createElement('option');
    const customOff = {
      name: officerName,
      groupKey: 'g1',
      groupLabel: 'ผู้เข้าเวร',
      type: 'male',
      level: 'ปฏิบัติหน้าที่เวร'
    };
    newOpt.value = JSON.stringify(customOff);
    newOpt.textContent = `${officerName} [ผู้เข้าเวร]`;
    offSel.appendChild(newOpt);
    offSel.selectedIndex = offSel.options.length - 1;
  }

  onLogOfficerChange();
}

let loggedInOfficer = null;

function updateMenuVisibility() {
  const sbLogBtn = document.getElementById('sb-log');
  const sbAdminBtn = document.getElementById('sb-admin');

  if (!loggedInOfficer) {
    if (sbLogBtn) sbLogBtn.style.display = 'none';
    if (sbAdminBtn) sbAdminBtn.style.display = 'none';
  } else if (loggedInOfficer.isAdmin) {
    if (sbLogBtn) sbLogBtn.style.display = 'flex';
    if (sbAdminBtn) sbAdminBtn.style.display = 'flex';
  } else {
    if (sbLogBtn) sbLogBtn.style.display = 'flex';
    if (sbAdminBtn) sbAdminBtn.style.display = 'none';
  }
}

function checkLoginSession() {
  const savedSession = sessionStorage.getItem('logged_in_officer');
  if (savedSession) {
    try {
      const officer = JSON.parse(savedSession);
      updateLoggedInUserUI(officer);
      return;
    } catch (e) {}
  }
  updateMenuVisibility();
  // If no session, ensure login overlay is visible
  document.getElementById('loginScreen')?.classList.remove('hidden');
}

async function handleMainLogin(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('mainEmpIdInput');
  const err   = document.getElementById('loginErrorMsg');
  if (!input) return;

  const empId = input.value.trim();
  if (!empId) {
    showLoginError('กรุณากรอกรหัสพนักงาน');
    return;
  }

  let officer = null;
  if (typeof authWithEmpId === 'function') {
    officer = await authWithEmpId(empId);
  } else {
    officer = OFFICERS_REGISTRY[empId];
  }

  if (officer) {
    if (err) err.style.display = 'none';
    sessionStorage.setItem('logged_in_officer', JSON.stringify(officer));
    updateLoggedInUserUI(officer);
  } else {
    showLoginError(`ไม่พบพนักงานรหัส "${empId}" ในระบบ กรุณาตรวจสอบรหัสพนักงานอีกครั้ง`);
  }
}

async function handleEmpIdLogin() {
  const sbInput = document.getElementById('sbEmpIdInput');
  if (sbInput && sbInput.value.trim() !== '') {
    const mainInput = document.getElementById('mainEmpIdInput');
    if (mainInput) {
      mainInput.value = sbInput.value.trim();
    }
    await handleMainLogin();
  }
}

function quickFillEmpId(empId) {
  const input = document.getElementById('mainEmpIdInput');
  if (input) {
    input.value = empId;
    handleMainLogin();
  }
}

function showLoginError(msg) {
  const err = document.getElementById('loginErrorMsg');
  if (err) {
    err.style.display = 'block';
    err.textContent = msg;
  }
}

function showLoginScreenOverlay() {
  const loginOverlay = document.getElementById('loginScreen');
  if (loginOverlay) loginOverlay.classList.remove('hidden');
  const input = document.getElementById('mainEmpIdInput');
  if (input) input.focus();
}

function updateLoggedInUserUI(officer) {
  loggedInOfficer = officer;
  const fullName = `${officer.name} ${officer.surname}`;

  // Hide login screen
  const loginOverlay = document.getElementById('loginScreen');
  if (loginOverlay) loginOverlay.classList.add('hidden');

  // Sync emp_id to both login inputs
  const mainInput = document.getElementById('mainEmpIdInput');
  const sbInput   = document.getElementById('sbEmpIdInput');
  if (mainInput) mainInput.value = officer.emp_id;
  if (sbInput)   sbInput.value   = officer.emp_id;

  // Update header user profile badge
  const upb = document.getElementById('userProfileBadge');
  const upbName = document.getElementById('upbName');
  if (upb && upbName) {
    upb.style.display = 'inline-flex';
    upbName.textContent = `${fullName} [${officer.emp_id}]`;
  }

  // Hide header login button when logged in
  const hlBtn = document.getElementById('headerLoginBtn');
  if (hlBtn) hlBtn.style.display = 'none';

  // Dynamic menu visibility
  updateMenuVisibility();

  // Re-init shift log to restrict dropdowns appropriately
  initShiftLog();

  if (officer.isAdmin) {
    switchTab('admin');
  } else {
    // Auto open shift log for officer (prefer today if on duty, else first scheduled day)
    const t = todayNum();
    const currentDay = (t.month === SCHED_MONTH && t.year === SCHED_YEAR && t.day >= 1 && t.day <= 31) ? t.day : 1;
    const myDays = findDaysForOfficer(fullName);
    const targetDay = (myDays.includes(currentDay)) ? currentDay : (myDays.length > 0 ? myDays[0] : currentDay);
    openShiftLogForOfficer(targetDay, fullName);
  }
}

function logoutUser() {
  loggedInOfficer = null;
  sessionStorage.removeItem('logged_in_officer');
  
  const upb = document.getElementById('userProfileBadge');
  if (upb) upb.style.display = 'none';

  // Show header login button when logged out
  const hlBtn = document.getElementById('headerLoginBtn');
  if (hlBtn) hlBtn.style.display = 'inline-flex';

  updateMenuVisibility();

  const loginOverlay = document.getElementById('loginScreen');
  if (loginOverlay) loginOverlay.classList.remove('hidden');

  // Reset shift log dropdowns for clean state
  initShiftLog();

  const mainInput = document.getElementById('mainEmpIdInput');
  const sbInput   = document.getElementById('sbEmpIdInput');
  if (mainInput) mainInput.value = '';
  if (sbInput)   sbInput.value   = '';

  if (mainInput) mainInput.focus();
}


async function checkMissingPastLogs() {
  const alertBanner = document.getElementById('logAlertBanner');
  if (!alertBanner) return;

  if (!loggedInOfficer) {
    alertBanner.style.display = 'none';
    return;
  }

  const fullName = `${loggedInOfficer.name} ${loggedInOfficer.surname}`;
  const myDays = findDaysForOfficer(fullName);
  if (myDays.length === 0) {
    alertBanner.style.display = 'none';
    return;
  }

  const currentSelectedDay = parseInt(document.getElementById('logDateSelect')?.value || 1, 10);
  const t = todayNum();
  const currentTodayDay = (t.month === SCHED_MONTH && t.year === SCHED_YEAR && t.day >= 1 && t.day <= 31) ? t.day : 31;

  // Verify past scheduled days
  const pastDaysToVerify = myDays.filter(d => d <= currentTodayDay || d < currentSelectedDay);

  const missingDays = [];
  for (const dNum of pastDaysToVerify) {
    let hasData = false;
    // Check Supabase Cloud
    if (typeof fetchShiftLogCloud === 'function') {
      const cData = await fetchShiftLogCloud(dNum, loggedInOfficer.emp_id);
      if (cData && cData.rows && cData.rows.length > 0) hasData = true;
    }
    // Check Local Storage
    if (!hasData) {
      const key = `shift_log_${dNum}_${fullName.replace(/\s+/g, '_')}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.rows && parsed.rows.length > 0) hasData = true;
        } catch (e) {}
      }
    }

    if (!hasData) {
      missingDays.push(dNum);
    }
  }

  if (missingDays.length > 0) {
    const firstMissing = missingDays[0];
    alertBanner.style.display = 'flex';
    alertBanner.innerHTML = `
      <span>⚠️ <strong>แจ้งเตือน:</strong> คุณยังไม่ได้บันทึกเวรของวันที่ <strong>${missingDays.join(', ')} ส.ค. ๒๕๖๙</strong> (กรุณาบันทึกให้ครบถ้วน)</span>
      <button class="btn-jump-day" onclick="jumpToLogDay(${firstMissing})">👉 สลับไปบันทึกวันที่ ${firstMissing}</button>
    `;
  } else {
    alertBanner.style.display = 'none';
  }
}

let adminActiveFilter = 'all';

function setAdminFilter(f) {
  adminActiveFilter = f;
  ['all','missing','saved'].forEach(k => {
    const btn = document.getElementById(`adminFilter${k.charAt(0).toUpperCase() + k.slice(1)}`);
    if (btn) btn.classList.toggle('active', k === f);
  });
  renderAdminDashboard();
}

async function renderAdminDashboard() {
  const tbody = document.getElementById('adminTableBody');
  if (!tbody) return;

  tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--indigo-l);">⏳ กำลังโหลดและประมวลผลข้อมูลบันทึกเวร...</td></tr>`;

  const searchVal = (document.getElementById('adminSearchInput')?.value || '').trim().toLowerCase();

  // 1. Fetch Cloud Logs in 1 batch query
  let cloudLogs = [];
  if (typeof fetchAllShiftLogsCloud === 'function') {
    cloudLogs = await fetchAllShiftLogsCloud();
  }

  const cloudSavedSet = new Set();
  cloudLogs.forEach(log => {
    if (log.rows && log.rows.length > 0) {
      cloudSavedSet.add(`${log.day_num}_${log.emp_id}`);
    }
  });

  let totalDutyCount = 0;
  let savedCount = 0;
  let missingCount = 0;

  let html = '';

  for (const d of SCHEDULE) {
    const dayOfficers = [];

    if (d.male) {
      [['g1','กลุ่ม 1'],['g2','กลุ่ม 2'],['g3','กลุ่ม 3']].forEach(([k, lbl]) => {
        const p = d.male[k];
        if (p) {
          const fn = `${p[0]} ${p[1]}`;
          const matchedKey = Object.keys(OFFICERS_REGISTRY).find(id => {
            const o = OFFICERS_REGISTRY[id];
            return `${o.name}${o.surname}`.replace(/\s+/g,'') === `${p[0]}${p[1]}`.replace(/\s+/g,'');
          });
          dayOfficers.push({
            name: fn,
            empId: matchedKey || 'N/A',
            groupLabel: lbl,
            day: d.day,
            dayName: d.dayName,
            isWeekend: d.isWeekend,
            isHoliday: d.isHoliday
          });
        }
      });
    }

    if (d.female) {
      [['kg','ระดับอนุบาล'],['pr','ระดับประถมศึกษา'],['sc','ระดับมัธยมศึกษา']].forEach(([k, lbl]) => {
        const p = d.female[k];
        if (p) {
          const fn = `${p[0]} ${p[1]}`;
          const matchedKey = Object.keys(OFFICERS_REGISTRY).find(id => {
            const o = OFFICERS_REGISTRY[id];
            return `${o.name}${o.surname}`.replace(/\s+/g,'') === `${p[0]}${p[1]}`.replace(/\s+/g,'');
          });
          dayOfficers.push({
            name: fn,
            empId: matchedKey || 'N/A',
            groupLabel: lbl,
            day: d.day,
            dayName: d.dayName,
            isWeekend: d.isWeekend,
            isHoliday: d.isHoliday
          });
        }
      });
    }

    for (const off of dayOfficers) {
      totalDutyCount++;

      let isSaved = false;

      // Check Cloud Set
      if (off.empId !== 'N/A' && cloudSavedSet.has(`${off.day}_${off.empId}`)) {
        isSaved = true;
      }

      // Check LocalStorage Fallback
      if (!isSaved) {
        const key = `shift_log_${off.day}_${off.name.replace(/\s+/g, '_')}`;
        const saved = localStorage.getItem(key);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (parsed.rows && parsed.rows.length > 0) isSaved = true;
          } catch(e) {}
        }
      }

      if (isSaved) savedCount++;
      else missingCount++;

      if (adminActiveFilter === 'saved' && !isSaved) continue;
      if (adminActiveFilter === 'missing' && isSaved) continue;

      if (searchVal) {
        const matchText = `${off.name} ${off.empId} ${off.day}`.toLowerCase();
        if (!matchText.includes(searchVal)) continue;
      }

      const dayTypeBadge = off.isHoliday ? '<span class="type-pill pill-holiday">วันหยุดนักขัตฤกษ์</span>'
                         : (off.isWeekend ? '<span class="type-pill pill-weekend">วันหยุดสุดสัปดาห์</span>'
                         : '<span class="type-pill pill-weekday">วันทำงาน</span>');

      const statusBadge = isSaved 
        ? '<span class="status-badge-saved">🟢 บันทึกแล้ว</span>'
        : '<span class="status-badge-missing">🔴 ค้างบันทึก</span>';

      html += `
        <tr>
          <td><strong>วัน${off.dayName}ที่ ${off.day} ส.ค.</strong></td>
          <td>${dayTypeBadge}</td>
          <td><span class="badge-sub">${off.groupLabel}</span></td>
          <td><strong>${off.name}</strong></td>
          <td><code>${off.empId}</code></td>
          <td>${statusBadge}</td>
          <td>
            <button class="btn-sm btn-ghost" onclick="adminViewOfficerLog(${off.day}, '${off.name}')">🔍 เปิดดูฟอร์ม</button>
          </td>
        </tr>
      `;
    }
  }

  const statTotal = document.getElementById('adminStatTotal');
  const statSaved = document.getElementById('adminStatSaved');
  const statMissing = document.getElementById('adminStatMissing');
  const statRate = document.getElementById('adminStatRate');

  if (statTotal) statTotal.textContent = totalDutyCount;
  if (statSaved) statSaved.textContent = savedCount;
  if (statMissing) statMissing.textContent = missingCount;
  const rate = totalDutyCount > 0 ? Math.round((savedCount / totalDutyCount) * 100) : 0;
  if (statRate) statRate.textContent = `${rate}%`;

  if (!html) {
    html = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text3);">ไม่พบข้อมูลตามเงื่อนไขที่กรอก</td></tr>`;
  }
  tbody.innerHTML = html;
}

function adminViewOfficerLog(day, name) {
  switchTab('log');
  openShiftLogForOfficer(day, name);
}

function guestViewTab(tabId) {
  const loginOverlay = document.getElementById('loginScreen');
  if (loginOverlay) loginOverlay.classList.add('hidden');
  updateMenuVisibility();
  switchTab(tabId);
}


