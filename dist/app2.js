"use strict";
//สร้างฟังก์ชันเพื่อรับค่าเป็นสตริงไปเก็บใน hh_mm
function getClockAngle(hh_mm) {
    const [hours, minutes] = hh_mm.split(':').map(Number); //แยกชั่วโมงและนาทีโดยใช้ : แบ่ง และ map จาก str เป็น int
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30; //องศาเข็มชั่วโมงโดย 1 ชั่วโมง(ุ60 นาที) จะเลื่อนไป 30 องศา  
    const minuteAngle = (minutes / 60) * 360; //องศาเข็มนาทีโดย 60 นาทีจะเทียบเท่า 360 องศา
    const angle = Math.abs(hourAngle - minuteAngle); //หาองศาระหว่าง 2 เข็มโดยเอาแค่ค่าบวก
    return Math.min(angle, 360 - angle); //เปรียบเทียบค่า องศา และ 360-องศา เลือกค่าที่น้อยสุดใน 2 ค่า
}
//ทดสอบ
console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));
