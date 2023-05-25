"use strict";
//ฟังก์ชันเก็บค่าในตัวแปร phrases
function getQuestionPart(phrases) {
    const questionPart = []; // สร้างตัวแปร questionPart เพื่อเก็บค่า String
    //กำหนดค่า i ตามจำนวนข้อความ
    for (let i = 0; i < phrases.length; i++) {
        const phrase = phrases[i]; // ดึงคำศัพท์ออกมาจากอาร์เรย์ phrases เก็บใน phrase
        const commonLetters = []; // สร้างตัวแปร commonLetters เพื่อเก็บตัวอักษรที่เหมือนกัน
        for (let j = 0; j < phrase.length; j++) {
            const letter = phrase[j]; // ดึงตัวอักษรแต่ละตัวออกมาจากคำศัพท์
            let isCommon = true; // ตั้งค่าเริ่มต้นว่าเป็นตัวอักษรที่เหมือนกัน
            for (let k = 0; k < phrases.length; k++) {
                if (i !== k && !phrases[k].includes(letter)) {
                    isCommon = false; // ถ้าตัวอักษรไม่ปรากฏในคำศัพท์อื่นๆ กำหนดให้ไม่เป็นตัวอักษรที่เหมือนกัน
                    break;
                }
            }
            if (isCommon && !commonLetters.includes(letter)) {
                commonLetters.push(letter); // เพิ่มตัวอักษรที่เหมือนกันลงใน commonLetters หากยังไม่มีอยู่ในนั้น
            }
        }
        // นำคำศัพท์ที่ตัดตัวอักษรที่เหมือนกันออกแล้ว มาเก็บใน questionPart
        questionPart.push(phrase.replace(commonLetters.join(''), ''));
    }
    return questionPart; // ส่งคำถามที่ได้กลับออกมา
}
//ทดสอบ
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"])); // Output: ["ROOM", "SALTS", "BLOOD"]
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])); // Output: ["BE", "GIRL", "SHIP"]
console.log(getQuestionPart(["INWARM", "ARMSHAER", "STARARMINW"]));
