# 🔑 Supabase Project Credentials & Connection Notes

- **Database Password (รหัสผ่านฐานข้อมูล Supabase)**: `0dYL8Vz7w5x9xIzd`
- **Project URL (ลิงก์โปรเจกต์)**: `https://mtiwsevffkprantndulm.supabase.co`
- **Anon Public Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aXdzZXZmZmtwcmFudG5kdWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MjU3NDEsImV4cCI6MjEwMjIwMTc0MX0.cPStzOS-Ua6S_4ZS_bLSLn_rxzKsG28JwXZclvHwzX0`
- **Database Host**: `db.<YOUR-PROJECT-ID>.supabase.co`
- **PostgreSQL Connection String**: `postgres://postgres.YOUR-PROJECT-ID:0dYL8Vz7w5x9xIzd@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres`

---

### 📝 ขั้นตอนการเชื่อมต่อ:
1. เข้าไปที่ [Supabase Dashboard](https://supabase.com/dashboard)
2. สร้าง Project หรือเข้า Project ที่มีอยู่
3. ไปที่ **Settings -> API** ก๊อปปี้ **Project URL** และ **anon public key**
4. นำไปวางในไฟล์ [supabase-config.js](file:///D:/My%20project/Monthly%20schedule/supabase-config.js)
5. เปิดไฟล์ [schema.sql](file:///D:/My%20project/Monthly%20schedule/schema.sql) ก๊อปปี้ไปรันในเมนู **SQL Editor** ของ Supabase เพื่อสร้างตารางและรายชื่อพนักงาน
