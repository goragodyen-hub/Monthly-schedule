-- ========================================================
-- SCHEMAS & TABLES FOR CHITRALADA DUTY SCHEDULE & SHIFT LOGS
-- ========================================================

-- 1. Create Officers Table (ตารางข้อมูลพนักงาน)
CREATE TABLE IF NOT EXISTS officers (
    emp_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    full_name TEXT GENERATED ALWAYS AS (name || ' ' || surname) STORED,
    group_key TEXT NOT NULL, -- g1, g2, g3, kg, pr, sc
    gender TEXT NOT NULL,    -- male, female
    level TEXT NOT NULL
);

-- 2. Create Shift Logs Table (ตารางใบบันทึกเวรประจำวัน)
CREATE TABLE IF NOT EXISTS shift_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    day_num INT NOT NULL,
    emp_id TEXT NOT NULL REFERENCES officers(emp_id) ON DELETE CASCADE ON UPDATE CASCADE,
    officer_name TEXT NOT NULL,
    level TEXT,
    is_day BOOLEAN DEFAULT false,
    is_night BOOLEAN DEFAULT true,
    time_in TEXT,
    time_out TEXT,
    sign_name TEXT,
    inspector_notes TEXT,
    rows JSONB DEFAULT '[]'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(day_num, emp_id)
);

-- Enable Row Level Security (RLS) & Public Policies
ALTER TABLE officers ENABLE ROW LEVEL SECURITY;
ALTER TABLE shift_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read officers" ON officers;
DROP POLICY IF EXISTS "Allow public insert officers" ON officers;
DROP POLICY IF EXISTS "Allow public update officers" ON officers;

CREATE POLICY "Allow public read officers" ON officers FOR SELECT USING (true);
CREATE POLICY "Allow public insert officers" ON officers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update officers" ON officers FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow public read shift_logs" ON shift_logs;
DROP POLICY IF EXISTS "Allow public insert shift_logs" ON shift_logs;
DROP POLICY IF EXISTS "Allow public update shift_logs" ON shift_logs;

CREATE POLICY "Allow public read shift_logs" ON shift_logs FOR SELECT USING (true);
CREATE POLICY "Allow public insert shift_logs" ON shift_logs FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update shift_logs" ON shift_logs FOR UPDATE USING (true);

-- Enable Realtime Sync for shift_logs (Safe Check)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
      AND schemaname = 'public' 
      AND tablename = 'shift_logs'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE shift_logs;
  END IF;
END $$;

-- ========================================================
-- SEED DATA: STAFF LIST WITH EMPLOYEE IDs (รหัสพนักงาน)
-- ========================================================

INSERT INTO officers (emp_id, name, surname, group_key, gender, level) VALUES
('69001', 'นายนิมิต', 'พิศงาม', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69002', 'นายจักกฤษ', 'เลี่ยมจ้อย', 'g2', 'male', 'ประถมศึกษา'),
('69003', 'นายสันติ', 'หมู่คำ', 'g3', 'male', 'มัธยมศึกษา'),
('69004', 'น.ส.บรรจง', 'สีธุรี', 'kg', 'female', 'อนุบาล'),
('69005', 'น.ส.นิภาพร', 'นิยมไทย', 'pr', 'female', 'ประถมศึกษา'),
('69006', 'น.ส.วราภา', 'ทิณพงษ์', 'sc', 'female', 'มัธยมศึกษา'),
('69007', 'นายขนัด', 'ไม่พรั่นใจ', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69008', 'นายอานนท์', 'เลี่ยมจ้อย', 'g2', 'male', 'ประถมศึกษา'),
('69009', 'นายประเสริฐ', 'เงินเก่า', 'g3', 'male', 'มัธยมศึกษา'),
('69010', 'น.ส.สุวิมล', 'พัฒนะ', 'kg', 'female', 'อนุบาล'),
('69011', 'น.ส.สุชาดา', 'บุรีชัย', 'pr', 'female', 'ประถมศึกษา'),
('69012', 'น.ส.เกตวดี', 'จันทร์เพ็ชร', 'sc', 'female', 'มัธยมศึกษา'),
('69013', 'นายแกม', 'โสนาพูน', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69014', 'นายสุเมธ', 'ผ่อสุขสวัสดิ์', 'g2', 'male', 'ประถมศึกษา'),
('69015', 'นายสัมพันธ์', 'ชาติทอง', 'g3', 'male', 'มัธยมศึกษา'),
('69016', 'นายอัษฎางค์', 'สังเกตกิจ', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69017', 'นายนรินทร์', 'เกตุชิต', 'g2', 'male', 'ประถมศึกษา'),
('69018', 'นายสวิท', 'ยวงทอง', 'g3', 'male', 'มัธยมศึกษา'),
('69019', 'นายสหรัฐ', 'มาผาสุข', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69020', 'นายสุรเชษฐ์', 'ศรีข้า', 'g2', 'male', 'ประถมศึกษา'),
('69021', 'นายประสิทธิ์', 'กิตติกลาง', 'g3', 'male', 'มัธยมศึกษา'),
('69022', 'นายจินฑาทิพย์', 'สว่างเมฆ', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69023', 'นายณัฐพล', 'เพ็ญขอบ', 'g2', 'male', 'ประถมศึกษา'),
('69024', 'นายสมพร', 'แผ่นคด', 'g3', 'male', 'มัธยมศึกษา'),
('69025', 'นายสมบัติ', 'เกิดปั้น', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69026', 'นายพุฒิพงศ์', 'แจ้งศรี', 'g2', 'male', 'ประถมศึกษา'),
('69027', 'นายกิติศักดิ์', 'เกิดแก่นแก้ว', 'g3', 'male', 'มัธยมศึกษา'),
('69028', 'นายอดิเรก', 'จันทร์โอ้วมณี', 'g1', 'male', 'อาคารสถานที่ (งานช่าง, ไฟฟ้า, ความสะอาด, ยานพาหนะ)'),
('69029', 'นายสมชาย', 'ผ่องจำปา', 'g2', 'male', 'ประถมศึกษา'),
('69030', 'นายสุเมต', 'เอี่ยมมาตร', 'g3', 'male', 'มัธยมศึกษา'),
('20023', 'นางศรีสุดา', 'เย็นคงคา', 'sc', 'female', 'มัธยมศึกษา'),
('20053', 'นายกรกฎ', 'เย็นคงคา', 'g3', 'male', 'มัธยมศึกษา'),
('20131', 'นายพิชาวัจน์', 'เกิดเรืองสิน', 'g3', 'male', 'มัธยมศึกษา')
ON CONFLICT (emp_id) DO UPDATE SET 
    name = EXCLUDED.name,
    surname = EXCLUDED.surname,
    group_key = EXCLUDED.group_key,
    gender = EXCLUDED.gender,
    level = EXCLUDED.level;
