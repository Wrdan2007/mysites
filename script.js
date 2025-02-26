// script.js

function حساب_الجمل(اسم, اسم_الام) {
    const قيم_الحروف = {
        'أ': 1, 'ا': 1, 'ب': 2, 'ج': 3, 'د': 4,
        'ه': 5, 'ة': 5, 'و': 6, 'ز': 7,
        'ح': 8, 'ط': 9, 'ي': 10, 'ئ': 10,
        'ك': 20, 'ل': 30, 'م': 40, 'ن': 50,
        'س': 60, 'ع': 70, 'ف': 80, 'ص': 90,
        'ق': 100, 'ر': 200, 'ش': 300, 'ت': 400,
        'ث': 500, 'خ': 600, 'ذ': 700, 'ض': 800,
        'ظ': 900, 'غ': 1000, 'ء': 0, 'ى': 1
    };

    function مجموع_الحروف(كلمة) {
        let المجموع = 0;
        for (let حرف of كلمة) {
            if (قيم_الحروف[حرف]) {
                المجموع += قيم_الحروف[حرف];
            }
        }
        return المجموع;
    }

    const مجموع_الاسم = مجموع_الحروف(اسم);
    const مجموع_اسم_الام = مجموع_الحروف(اسم_الام);
    const الناتج = مجموع_الاسم + مجموع_اسم_الام;

    return الناتج;
}

function تحديد_البرج(اسم, اسم_الام) {
    const الأبراج = [
        { name: "الحمل", type: "ناري", compatible: ["الميزان", "القوس"] },
        { name: "الثور", type: "ترابي", compatible: ["العذراء", "الجدي"] },
        { name: "الجوزاء", type: "هوائي", compatible: ["الحمل", "الميزان"] },
        { name: "السرطان", type: "مائي", compatible: ["الثور", "العقرب"] },
        { name: "الأسد", type: "ناري", compatible: ["الجوزاء", "الدلو"] },
        { name: "العذراء", type: "ترابي", compatible: ["الثور", "السرطان"] },
        { name: "الميزان", type: "هوائي", compatible: ["الجوزاء", "الأسد"] },
        { name: "العقرب", type: "مائي", compatible: ["السرطان", "الحوت"] },
        { name: "القوس", type: "ناري", compatible: ["الحمل", "الأسد"] },
        { name: "الجدي", type: "ترابي", compatible: ["الثور", "العذراء"] },
        { name: "الدلو", type: "هوائي", compatible: ["الجوزاء", "القوس"] },
        { name: "الحوت", type: "مائي", compatible: ["العقرب", "الجدي"] }
    ];

    const المجموع = حساب_الجمل(اسم, اسم_الام);
    const index = (المجموع % 12) - 1;
    const البرج = الأبراج[index >= 0 ? index : 11];
    return البرج;
}

function حساب_البرج() {
    const اسم = document.getElementById('name').value;
    const اسم_الام = document.getElementById('motherName').value;
    
    if (اسم === "" || اسم_الام === "") {
        document.getElementById('resultText').innerText = "يرجى إدخال الاسم واسم الأم بشكل صحيح.";
        document.getElementById('resultBox').classList.add("show");
        return;
    }

    const البرج = تحديد_البرج(اسم, اسم_الام);
    const compatibleSigns = البرج.compatible.join(" و ");
    document.getElementById('resultText').textContent = `برجك الفلكي هو: ${البرج.name} (${البرج.type}). الأبراج المتوافقة معك هي: ${compatibleSigns}.`;
    document.getElementById('resultBox').classList.add("show");
}
