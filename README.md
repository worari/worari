# ระบบรับรองเวลาราชการตอนเป็นทหาร

ระบบจัดทำแบบฟอร์ม และจัดการคำขอ พร้อมอัปโหลดไฟล์ สร้าง PDF และควบคุมสิทธิ์ด้วย Firebase

## 🔷 ฟีเจอร์
- ลงทะเบียน / ล็อกอิน / ลืมรหัส (Firebase Auth)
- กรอกฟอร์ม + แนบไฟล์หลายไฟล์ (.pdf, .jpg, .png)
- อัปโหลดไฟล์ไป Firebase Storage
- สร้าง PDF พร้อมลายเซ็น
- CRUD: แก้ไข / ลบเอกสาร
- Admin เปลี่ยนสถานะเอกสาร (กำลังดำเนินการ, อนุญาต, ปฏิเสธ)
- UI สวยงามด้วย TailwindCSS + Heroicons
- รองรับ deploy ขึ้น GitHub + Vercel

## 📦 การติดตั้ง
1. สร้าง Firebase Project
   - เปิดใช้งาน Authentication (Email/Password)
   - เปิดใช้งาน Firestore Database
   - เปิดใช้งาน Storage
2. สร้างไฟล์ `js/firebase-config.js` แล้วใส่ config ของคุณ
3. ตั้งค่า Firestore Rules (ดูที่ `firebase.rules`)
4. ตั้งค่า Storage Rules (ดูที่ `firebase.rules`)
5. เปิด `index.html` ทดสอบระบบ
6. deploy ด้วย GitHub + Vercel หรือ Firebase Hosting

## 👑 วิธีเพิ่ม admin
ใน Firestore สร้าง collection ชื่อ `admins`  
Document ID = `uid` ของ admin

## 📁 โครงสร้างไฟล์

leave-system/ ├── index.html            # Login/Register/Forgot ├── dashboard.html        # Dashboard + Sidebar ├── form.html             # แบบฟอร์ม + CRUD ├── reports.html          # รายงาน ├── js/ │   ├── firebase-config.js │   ├── auth.js │   ├── crud.js │   ├── upload.js │   ├── pdf.js ├── css/ │   └── tailwind.css ├── firebase.rules ├── firebase.json ├── README.md
