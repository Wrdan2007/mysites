function calculateWeight() {
    const currentWeight = document.getElementById('currentWeight').value;
    const targetWeight = document.getElementById('targetWeight').value;
    const activityLevel = document.getElementById('activityLevel').value;
    
    if (currentWeight && targetWeight) {
        const waterIntake = currentWeight * 0.033; // نسبة الماء المطلوبة باللتر لكل كجم من الوزن
        
        let calorieIntake;
        switch (activityLevel) {
            case 'low':
                calorieIntake = targetWeight * 25;
                break;
            case 'moderate':
                calorieIntake = targetWeight * 30;
                break;
            case 'high':
                calorieIntake = targetWeight * 35;
                break;
            default:
                calorieIntake = targetWeight * 30;
        }
        
        document.getElementById('resultsWeight').innerHTML = `
            <p>عدد كاسات الماء التي يجب شربها يوميًا: ${(waterIntake * 4.2).toFixed(2)} كاسات</p>
            <p>عدد السعرات الحرارية اليومية للحفاظ على الوزن المستهدف: ${calorieIntake} سعر حراري</p>
        `;
    } else {
        document.getElementById('resultsWeight').innerHTML = '<p>يرجى إدخال كل من الوزن الحالي والمستهدف ومستوى النشاط.</p>';
    }
}

function calculateCalories() {
    const foodItem = document.getElementById('foodItem').value.toLowerCase();
    
    if (foodItem) {
        const caloriesPerItem = getCalories(foodItem); // حساب السعرات الحرارية للنوع المدخل
        
        document.getElementById('resultsCalories').innerHTML = `
            <p>عدد السعرات الحرارية في ${foodItem}: ${caloriesPerItem} سعر حراري</p>
        `;
    } else {
        document.getElementById('resultsCalories').innerHTML = '<p>يرجى إدخال النوع (غذاء).</p>';
    }
}

function calculateMacros() {
    const currentWeight = document.getElementById('currentWeight').value;
    const targetWeight = document.getElementById('targetWeight').value;
    
    if (currentWeight && targetWeight) {
        const proteinIntake = targetWeight * 1.6; // غرام من البروتين لكل كجم من الوزن المستهدف
        const fatIntake = targetWeight * 0.8; // غرام من الدهون لكل كجم من الوزن المستهدف
        const carbIntake = (targetWeight * 30) - (proteinIntake * 4) - (fatIntake * 9) / 4; // نسبة الكربوهيدرات
        
        document.getElementById('resultsMacros').innerHTML = `
            <p>متطلبات البروتين اليومية: ${proteinIntake.toFixed(2)} غرام</p>
            <p>متطلبات الدهون اليومية: ${fatIntake.toFixed(2)} غرام</p>
            <p>متطلبات الكربوهيدرات اليومية: ${carbIntake.toFixed(2)} غرام</p>
        `;
    } else {
        document.getElementById('resultsMacros').innerHTML = '<p>يرجى إدخال كل من الوزن الحالي والمستهدف.</p>';
    }
}

function getCalories(foodItem) {
    const foodCalories = {
        'تفاح': 52,
        'موز': 89,
        'خبز': 265,
        'لحم': 250,
        'سمك': 206,
        'بيض': 155,
        'دجاج': 239,
        'أرز': 130,
        'بطاطس': 77,
        'جبن': 402,
        'زبادي': 59,
        'مكرونة': 131,
        'حليب': 42,
        'زيت زيتون': 884,
        'عدس': 116,
        'حمص': 364,
        'فراولة': 32,
        'بروكلي': 34
        // يمكن إضافة المزيد من الأنواع هنا
    };
    
    return foodCalories[foodItem] || 'غير معروف';
}