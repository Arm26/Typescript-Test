"use strict";
function getHandScore(input) {
    const suits = { 'H': 0, 'C': 0, 'D': 0, 'S': 0 }; // จำนวนไพ่ในแต่ละสัญลักษณ์
    const ranks = {}; // จำนวนไพ่ที่มีค่าเท่ากัน
    let score = 0; // แต้มที่ได้
    const hand = input.split(' '); // แยกไพ่ในมือเป็นอาร์เรย์
    for (const card of hand) {
        const suit = card.slice(0, 1); // สัญลักษณ์ของไพ่
        const rank = card.slice(1); // เลขหรือตัวอักษรของไพ่
        // นับจำนวนไพ่ในแต่ละสัญลักษณ์
        suits[suit] += 1;
        // นับจำนวนไพ่ที่มีค่าเท่ากัน
        ranks[rank] = ranks[rank] ? ranks[rank] + 1 : 1;
    }
    // หาค่าสูงสุดของคะแนนในสัญลักษณ์เดียวกัน
    const maxSuitValue = Math.max(...Object.values(suits));
    // คำนวณแต้มโดยใช้ไพ่ในสัญลักษณ์ที่มีค่าสูงสุด
    for (const card of hand) {
        const suit = card.slice(0, 1); // สัญลักษณ์ของไพ่
        const rank = card.slice(1); // เลขหรือตัวอักษรของไพ่
        if (suits[suit] === maxSuitValue) {
            if (Number(rank)) {
                score += Number(rank); // เพิ่มคะแนนจากเลขของไพ่
            }
            else if (['J', 'Q', 'K'].includes(rank)) {
                score += 10; // ไพ่ตัวหน้า (J, Q, K)
            }
            else if (rank === 'A') {
                score += 11; // ไพ่ A
            }
        }
    }
    // ตรวจสอบว่ามีไพ่ทั้งสามใบที่มีค่าเท่ากันหรือไม่
    for (const count of Object.values(ranks)) {
        if (count === 3) {
            // ตรวจสอบว่าเป็นไพ่ A-A-A หรือไม่
            if (ranks['A'] === 3) {
                return 35; // คะแนน 35
            }
            else {
                return 32.5; // คะแนน 32.5
            }
        }
    }
    return score; // คะแนนที่ได้
}
//ทดสอบ
console.log(getHandScore("S8 S10 CA")); // Output: 18
console.log(getHandScore("A A A")); // Output: 35
console.log(getHandScore("J J J")); // Output: 32.5
console.log(getHandScore("S8 S10 S2")); // Output: 20
console.log(getHandScore("J Q K")); // Output: 32.5
console.log(getHandScore("H2 S3 H2")); // Output: 4 : H2 H2
console.log(getHandScore("3 3 3")); // Output: 32.5
console.log(getHandScore("A A S3")); // Output: 0
