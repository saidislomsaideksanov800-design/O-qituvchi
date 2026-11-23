// 2-sinf — o'zbekcha tarjimalar (tartib grade2.js bilan bir xil).

export default {
  math: [
    {
      title: "1 dan 100 gacha sonlar. O'nliklar va birliklar",
      goal: "Ikki xonali son nechta o'nlik va nechta birlikdan iboratligini tushunish.",
      body: [
        "10 ta birlik = 1 ta o'nlik. Ikki xonali sonda birinchi raqam o'nliklarni, ikkinchisi birliklarni ko'rsatadi.",
        ["34 = 3 ta o'nlik va 4 ta birlik", "70 = 7 ta o'nlik va 0 ta birlik", "100 = 10 ta o'nlik"],
        "Ikki xonali sonlarni taqqoslash uchun avval o'nliklarni taqqosla. O'nliklar teng bo'lsa — birliklarni: 61 > 59, chunki 6 ta o'nlik 5 tadan ko'p.",
      ],
      quiz: [
        ["47 sonida nechta o'nlik bor?", null],
        ["52 sonida qaysi raqam birliklarni bildiradi?", null],
        ["Sonni yoz: 6 ta o'nlik va 3 ta birlik.", null],
        ["100 sonida nechta o'nlik bor?", null],
        ["Qaysi son katta: 59 mi yoki 61 mi?", ["61", "59", "Ular teng"], "61 da oltita o'nlik, 59 da beshta."],
      ],
    },
    {
      title: "Ikki xonali sonlarni qo'shish va ayirish",
      goal: "Ikki xonali sonlarni o'nlikdan o'tmasdan qo'shish va ayirish.",
      body: [
        "Birliklar birliklar bilan, o'nliklar o'nliklar bilan qo'shiladi (ayiriladi).",
        ["Birliklar: 4 + 5 = 9", "O'nliklar: 3 + 2 = 5", "Javob: 59"],
        ["Birliklar: 8 − 2 = 6", "O'nliklar: 7 − 3 = 4", "Javob: 46"],
      ],
      quiz: [
        ["34 + 25 = ?", null],
        ["78 − 32 = ?", null],
        ["50 + 40 = ?", null, "5 ta o'nlik + 4 ta o'nlik = 9 ta o'nlik."],
        ["67 − 7 = ?", null],
        ["Sinfda 23 ta qiz va 15 ta o'g'il bola bor. Jami nechta bola bor?", null, "23 + 15 = 38."],
      ],
    },
    {
      title: "Uzunlik birliklari: santimetr, detsimetr, metr",
      goal: "Uzunlik birliklarini bilish va birini ikkinchisiga aylantirish.",
      body: [
        "1 dm = 10 sm. 1 m = 10 dm = 100 sm.",
        "Santimetr (sm) — taxminan barmoq eni. Detsimetr (dm) — kaft uzunligi. Metr (m) — kattalarning katta qadami.",
        ["3 dm 5 sm = 30 sm + 5 sm = 35 sm", "1 m 90 sm dan uzun, chunki 1 m = 100 sm"],
      ],
      quiz: [
        ["1 dm = … sm", null],
        ["1 m = … sm", null],
        ["1 m = … dm", null],
        ["Qaysi biri uzun: 1 m mi yoki 90 sm mi?", ["1 m", "90 sm", "Bir xil"], "1 m = 100 sm, 100 esa 90 dan katta."],
        ["3 dm 5 sm = … sm", null],
      ],
    },
  ],

  russian: [
    {
      title: "Rus alifbosi",
      goal: "Harflar tartibini bilish va so'zlarni alifbo tartibida joylashtirish.",
      body: [
        "Alifbo — tilning barcha harflari tartib bilan. Rus alifbosida 33 ta harf bor: 10 ta unli, 21 ta undosh va 2 ta belgi (ь, ъ).",
        "Alifbo А harfi bilan boshlanib, Я harfi bilan tugaydi. Lug'atlardagi so'zlar va sinf jurnalidagi familiyalar alifbo tartibida joylashadi.",
        ["арбуз (tarvuz), кот (mushuk), мяч (to'p) — chunki а → к → м"],
      ],
      quiz: [
        ["Rus alifbosida nechta harf bor?", null],
        ["Alifbodagi birinchi harf qaysi?", null],
        ["Alifbodagi oxirgi harf qaysi?", null],
        ["Lug'atda qaysi so'z birinchi turadi: «кот», «арбуз», «мяч»?", ["арбуз (tarvuz)", "кот (mushuk)", "мяч (to'p)"]],
        ["Qaysi harflar tovush bildirmaydi?", ["ь va ъ", "а va о", "м va н"]],
      ],
    },
    {
      title: "Gap va matn",
      goal: "Gapni so'zlar to'plamidan, matnni gaplar to'plamidan farqlash.",
      body: [
        "Gap tugallangan fikrni bildiradi. Birinchi so'z bosh harf bilan yoziladi, oxirida nuqta, so'roq yoki undov belgisi qo'yiladi.",
        "Matn — ma'no jihatidan bog'langan bir nechta gap. Matnning mavzusi bor, unga sarlavha qo'yish mumkin.",
        ["Наступила тёплая весна. (Iliq bahor keldi.) — gap", "тёплая весна (iliq bahor) — gap emas (fikr tugallanmagan)"],
      ],
      quiz: [
        ["Gap … bildiradi.", ["tugallangan fikrni", "bitta tovushni", "bitta harfni"]],
        ["Gapning birinchi so'zi qanday yoziladi?", ["Bosh harf bilan", "Kichik harf bilan", "Qanday bo'lsa ham"]],
        ["So'roq gapning oxiriga qaysi belgi qo'yiladi?", null],
        ["Matn — bu…", ["ma'no jihatidan bog'langan gaplar", "so'zlar ro'yxati", "harflar to'plami"]],
        ["Qaysi biri gap?", ["Iliq bahor keldi.", "iliq bahor", "Bahor, iliq, mushuk"]],
      ],
    },
    {
      title: "Ismlar, familiyalar, laqablar va nomlarda bosh harf",
      goal: "Atoqli otlarni bosh harf bilan yozish.",
      body: [
        "Odamlarning ismi, otasining ismi, familiyasi, hayvonlarning laqablari, shahar, qishloq, daryo va mamlakat nomlari bosh harf bilan yoziladi.",
        ["Anvar Karimov, Mariya Ivanovna", "Murzik mushuk, Sharik it", "Toshkent shahri, Sirdaryo daryosi, O'zbekiston davlati"],
        "«Город» (shahar), «река» (daryo), «кот» (mushuk) so'zlari kichik harf bilan yoziladi — bular umumiy nomlar.",
      ],
      quiz: [
        ["Qaysi so'z bosh harf bilan yoziladi?", ["Ташкент (Toshkent)", "город (shahar)", "река (daryo)"]],
        ["It laqabini qanday to'g'ri yozish kerak?", null],
        ["Qaysi qatorda hamma so'zlar bosh harf bilan yoziladi?", ["Anvar, Moskva, Sirdaryo", "Anvar, stol, Moskva", "daryo, Toshkent, mushuk"]],
        ["Odamning familiyasi … yoziladi.", ["bosh harf bilan", "kichik harf bilan", "qo'shtirnoq ichida"]],
        ["Xatoni top: «Мой друг саша живёт в Самарканде» (Do'stim Sasha Samarqandda yashaydi).", ["«саша» — «Саша» bo'lishi kerak", "«Самарканде» — kichik harf bilan bo'lishi kerak", "Xato yo'q"]],
      ],
    },
  ],

  reading: [
    {
      title: "Tez aytishlar va sanoq she'rlar",
      goal: "Tez aytishlarni aniq o'qish va ular nima uchun kerakligini tushunish.",
      body: [
        "Tez aytish — talaffuzi qiyin tovushlar birikmasidan iborat jumla. Uni avval sekin, keyin tobora tezroq aytiladi. Tez aytishlar aniq gapirishga o'rgatadi.",
        ["Sasha shosse bo'ylab ketib, quruq bubliq so'rardi.", "Greka daryo orqali o'tib borardi."],
        "Tez aytishlar, sanoq she'rlar, topishmoqlarni xalq to'qigan — bu og'zaki xalq ijodi.",
      ],
      quiz: [
        ["Tez aytishlar nima uchun kerak?", ["Aniq va tez gapirishga o'rgatadi", "Sanashga o'rgatadi", "Rasm chizishga o'rgatadi"]],
        ["Tez aytishni davom ettir: «Sasha shosse bo'ylab ketib, … so'rardi»", ["quruq bubliq", "konfet", "sabzi"]],
        ["Tez aytishlarni kim to'qigan?", ["Xalq", "A. S. Pushkin", "O'qituvchi"]],
        ["Tez aytishni qanday to'g'ri o'rganish kerak?", ["Avval sekin, keyin tezroq", "Faqat pichirlab", "Faqat kuylab"]],
        ["O'yinda boshlovchini tanlashga qaysi janr yordam beradi?", ["Sanoq she'r", "Masal", "Topishmoq"]],
      ],
    },
    {
      title: "«Tulki va turna» ertagi",
      goal: "Qahramonlar xatti-harakatini va ertakning asosiy fikrini tushunish.",
      body: [
        "Tulki turnani mehmonga chaqirib, likopchaga surtilgan manniy bo'tqa berdi. Turna tumshug'i bilan taqillatdi, lekin hech narsa yeya olmadi. Keyin turna tulkini o'ziga chaqirib, og'zi tor ko'zachada okroshka berdi. Tulki ovqatga yeta olmadi.",
        "Asosiy fikr: sen boshqalarga qanday munosabatda bo'lsang, senga ham shunday munosabatda bo'lishadi. «Nima eksang, shuni o'rasan».",
        "Bu hayvonlar haqidagi xalq ertagi: hayvonlar odamlardek gapiradi va harakat qiladi.",
      ],
      quiz: [
        ["Tulki turnani nima bilan mehmon qildi?", ["Likopchadagi bo'tqa bilan", "Ko'zachadagi okroshka bilan", "Pirog bilan"]],
        ["Turna nega ovqat yeya olmadi?", ["Uzun tumshuq bilan yassi likopchadan yeb bo'lmaydi", "U och emas edi", "Bo'tqa issiq edi"]],
        ["Turna tulkini qanday idishda mehmon qildi?", ["Og'zi tor ko'zachada", "Likopchada", "Savatda"]],
        ["Ertakka qaysi maqol mos keladi?", ["Nima eksang, shuni o'rasan", "Sekin yursang, uzoqqa borasan", "Yetti o'lchab, bir kes"]],
        ["Bu qanday ertak?", ["Hayvonlar haqidagi xalq ertagi", "Muallif sehrli ertagi", "Ilmiy hikoya"]],
      ],
    },
    {
      title: "I. A. Krilov. «Ninachi va Chumoli» masali",
      goal: "Masal va xulosa (ibrat) nima ekanini bilish.",
      body: [
        "Masal — qisqa hikoya (ko'pincha she'riy), unda hayvon-qahramonlar odamlarga o'xshaydi. Masalda xulosa — ibratli fikr bo'ladi.",
        "Butun yoz Ninachi kuylab, raqsga tushdi, Chumoli esa mehnat qilib, ovqat to'pladi. Qish keldi — Ninachi ovqatsiz qoldi va Chumolidan yordam so'rab bordi.",
        "Ma'nosi: «Butun yoz kuylabsanmi? Unda endi borib raqsga tush!»",
        "Xulosa: kelajak haqida oldindan qayg'urish, mehnatni o'z vaqtida qilish kerak.",
      ],
      quiz: [
        ["Masal — bu…", ["ibratli xulosasi bor qisqa hikoya", "uzun qissa", "topishmoq"]],
        ["«Ninachi va Chumoli» masalining muallifi kim?", null],
        ["Ninachi yozda nima qildi?", ["Kuyladi va raqs tushdi", "Uy qurdi", "Ovqat to'pladi"]],
        ["Xulosa (ibrat) — bu…", ["ibratli fikr", "qahramon ismi", "masal nomi"]],
        ["Masal nimaga o'rgatadi?", ["Mehnat qilishga va kelajakni o'ylashga", "Qo'shiq aytishga", "Qishi bilan uxlashga"]],
      ],
    },
  ],

  nature: [
    {
      title: "Ob-havo va termometr",
      goal: "Ob-havoni tasvirlash va termometr bilan haroratni o'lchash.",
      body: [
        "Ob-havo — ma'lum joyda, ma'lum vaqtdagi havo holati: harorat, bulutlilik, yog'inlar, shamol.",
        "Harorat termometr bilan gradusda (°C) o'lchanadi. 0 °C da suv muzlaydi.",
        ["+15 °C — 15 daraja iliq", "−5 °C — 5 daraja sovuq (ayoz)"],
        "Yog'inlar — yomg'ir, qor, do'l.",
      ],
      quiz: [
        ["Havo harorati qaysi asbob bilan o'lchanadi?", ["Termometr bilan", "Chizg'ich bilan", "Tarozi bilan"]],
        ["Suv qanday haroratda muzlaydi?", null],
        ["Yog'inlarga nima kiradi?", ["Yomg'ir va qor", "Shamol", "Quyosh"]],
        ["Ob-havo — bu…", ["ma'lum joy va vaqtdagi havo holati", "yil fasli", "bir yillik bashorat"]],
        ["−5 °C — bu…", ["5 daraja sovuq", "5 daraja iliq", "0 daraja"]],
      ],
    },
    {
      title: "O'simlikning qismlari",
      goal: "O'simlik qismlarini aytish va har biri nima uchun kerakligini bilish.",
      body: [
        "Gulli o'simlikning ildizi, poyasi, barglari, guli va urug'li mevasi bor.",
        ["Ildiz o'simlikni tuproqda ushlab turadi va suv so'radi.", "Poya suvni ildizdan barglarga o'tkazadi.", "Barglar yorug'likda o'simlik uchun ozuqa hosil qiladi.", "Guldan meva, mevada esa urug'lar hosil bo'ladi."],
      ],
      quiz: [
        ["O'simlikni tuproqda qaysi qismi ushlab turadi?", ["Ildiz", "Barg", "Gul"]],
        ["Urug'lar qayerda hosil bo'ladi?", ["Mevada", "Ildizda", "Poyada"]],
        ["Ozuqa hosil bo'lishi uchun barglarga nima kerak?", ["Yorug'lik", "Qorong'ilik", "Qor"]],
        ["Poya bo'ylab suv … ko'tariladi.", ["ildizdan barglarga", "barglardan ildizga", "hech qayerga ko'tarilmaydi"]],
        ["Qaysi qator — o'simlik qismlari?", ["ildiz, poya, barg, gul", "ildiz, qanot, barg", "panja, poya, gul"]],
      ],
    },
    {
      title: "Hayvonlar guruhlari",
      goal: "Hasharotlar, baliqlar, qushlar va hayvonlarni belgilariga qarab farqlash.",
      body: [
        "Hayvonlar umumiy belgilariga qarab guruhlarga bo'linadi.",
        ["Hasharotlar — 6 ta oyoq (pashsha, ari, kapalak).", "Baliqlar — tanasi tangacha bilan qoplangan, jabra bilan nafas oladi.", "Qushlar — tanasi pat bilan qoplangan.", "Sut emizuvchilar — juni bor, bolasini sut bilan boqadi."],
        "O'rgimchak hasharot emas: uning 8 ta oyog'i bor.",
      ],
      quiz: [
        ["Hasharotlarning nechta oyog'i bor?", null],
        ["Qushlarning tanasi nima bilan qoplangan?", ["Patlar bilan", "Tangachalar bilan", "Jun bilan"]],
        ["Baliqlar nima bilan nafas oladi?", ["Jabra bilan", "O'pka bilan", "Pat bilan"]],
        ["Qaysi hayvonlar bolasini sut bilan boqadi?", ["Sut emizuvchilar", "Baliqlar", "Hasharotlar"]],
        ["O'rgimchak hasharotmi?", ["Yo'q, o'rgimchakning 8 ta oyog'i bor", "Ha", "Bu qush"]],
      ],
    },
  ],
}
