// 3-sinf — o'zbekcha tarjimalar (tartib grade3.js bilan bir xil).

export default {
  math: [
    {
      title: "2 va 3 ga ko'paytirish va bo'lish",
      goal: "2 va 3 ga ko'paytirish jadvalini bilish va ko'paytirishga oid masalalarni yechish.",
      body: [
        "Ko'paytirish — bir xil qo'shiluvchilarni qo'shish: 3 + 3 + 3 + 3 = 3 · 4 = 12.",
        null,
        "Bo'lish — ko'paytirishga teskari amal: agar 3 · 6 = 18 bo'lsa, 18 : 3 = 6 va 18 : 6 = 3.",
        "Masala: «3 ta qutida 5 tadan qalam». Bir xil guruhlar — demak, ko'paytiramiz: 5 · 3 = 15.",
      ],
      quiz: [
        ["2 · 7 = ?", null],
        ["3 · 6 = ?", null],
        ["18 : 3 = ?", null],
        ["Qo'shishni ko'paytirish bilan almashtir: 3 + 3 + 3 + 3", null],
        ["3 ta qutida 5 tadan qalam bor. Jami nechta qalam?", null],
      ],
    },
    {
      title: "Ifodalarda amallar tartibi",
      goal: "Qavsli va qavssiz ifodaning qiymatini to'g'ri topish.",
      body: [
        "Avval qavs ichidagi amallar bajariladi. Keyin ko'paytirish va bo'lish (chapdan o'ngga). So'ng qo'shish va ayirish (chapdan o'ngga).",
        null,
        "Har bir amal ustiga uning tartib raqamini qo'yish mumkin — shunda xato qilish qiyinroq.",
      ],
      quiz: [
        ["20 − 4 · 3 = ?", null, "Avval ko'paytirish: 4 · 3 = 12, keyin 20 − 12 = 8."],
        ["(20 − 4) · 3 = ?", null, "Avval qavs: 16, keyin 16 · 3 = 48."],
        ["18 : 3 + 6 = ?", null],
        ["18 : (3 + 6) = ?", null],
        ["5 + 2 · 4 ifodasida qaysi amal birinchi bajariladi?", ["Ko'paytirish", "Qo'shish", "Istalgani"]],
      ],
    },
    {
      title: "To'g'ri to'rtburchak va kvadratning perimetri",
      goal: "Perimetrni formula bo'yicha topish.",
      body: [
        "Perimetr — shakl barcha tomonlari uzunliklarining yig'indisi. To'g'ri to'rtburchak perimetri: P = (a + b) · 2. Kvadrat perimetri: P = a · 4.",
        ["Tomonlari 5 sm va 3 sm bo'lgan to'g'ri to'rtburchak: P = (5 + 3) · 2 = 16 sm", "Tomoni 4 sm bo'lgan kvadrat: P = 4 · 4 = 16 sm"],
      ],
      quiz: [
        ["Perimetr — bu…", ["barcha tomonlar uzunliklarining yig'indisi", "bitta tomon uzunligi", "shakl yuzi"]],
        ["To'g'ri to'rtburchakning tomonlari 5 sm va 3 sm. Perimetri nechaga teng?", null],
        ["Kvadratning tomoni 4 sm. Perimetri nechaga teng?", null],
        ["To'g'ri to'rtburchak perimetri formulasi:", null],
        ["Kvadratning perimetri 20 sm. Uning tomoni nechaga teng?", null, "20 : 4 = 5."],
      ],
    },
  ],

  russian: [
    {
      title: "So'z tarkibi: o'zak, old qo'shimcha, suffiks, qo'shimcha",
      goal: "So'zning qismlarini (morfemalarni) topish.",
      body: [
        ["O'zak (корень) — qarindosh so'zlarning umumiy qismi: лес (o'rmon), лесник (o'rmonchi), лесной (o'rmon-).", "Old qo'shimcha (приставка) o'zakdan oldin turadi: при-ход, пере-лёт.", "Suffiks (суффикс) o'zakdan keyin turadi: дом-ик (uycha), лес-ник.", "Qo'shimcha (окончание) — so'zning o'zgaruvchi qismi, gapdagi so'zlarni bog'laydi: книг-а, книг-и (kitob)."],
        ["под-снеж-ник (boychechak) — old qo'shimcha под-, o'zak -снеж-, suffiks -ник-, qo'shimcha nol"],
        "Qarindosh so'zlarning o'zagi umumiy va ma'nosi yaqin bo'ladi. «Лес» (o'rmon) va «лестница» (zina) qarindosh emas.",
      ],
      quiz: [
        ["O'zak — bu…", ["qarindosh so'zlarning umumiy qismi", "so'zning o'zgaruvchi qismi", "o'zakdan oldingi qism"]],
        ["Qo'shimcha (окончание) nima uchun kerak?", ["Gapdagi so'zlarni bog'lash uchun", "Yangi so'z yasash uchun", "Urg'uni ko'rsatish uchun"]],
        ["«Перелёт» (parvoz) so'zidagi old qo'shimcha qaysi?", null],
        ["Qaysi so'z «лес» (o'rmon) so'ziga qarindosh?", ["лесник (o'rmonchi)", "лестница (zina)", "лесть (xushomad)"]],
        ["Suffiks qayerda turadi?", ["O'zakdan keyin", "O'zakdan oldin", "Qo'shimchadan keyin"]],
      ],
    },
    {
      title: "O'zakdagi urg'usiz unlilar",
      goal: "O'zakdagi urg'usiz unlini urg'u yordamida tekshirish.",
      body: [
        "O'zakdagi urg'usiz unlini tekshirish uchun so'zni shunday o'zgartir yoki qarindosh so'z topki, bu unli urg'uli bo'lsin.",
        ["вода (suv) — вОды", "трава (o't) — трАвы", "сосна (qarag'ay) — сОсны", "зима (qish) — зИмний (qishki)"],
        "«Eshitilganidek» yozish mumkin emas: urg'usiz unlini aniq eshitmaymiz.",
      ],
      quiz: [
        ["O'zakdagi urg'usiz unli qanday tekshiriladi?", ["Shu unli urg'u ostida bo'lgan so'z topiladi", "Qo'shimchaga qaraladi", "Eshitilganidek yoziladi"]],
        ["Harfni qo'y: в…да (suv) (tekshiruv: вОды)", null],
        ["Harfni qo'y: тр…ва (o't) (tekshiruv: трАвы)", null],
        ["Harfni qo'y: с…сна (qarag'ay) (tekshiruv: сОсны)", null],
        ["«Зима» (qish) so'zi uchun qaysi so'z tekshiruvchi?", ["зимний (qishki)", "зимой (qishda)", "зимовать (qishlamoq)"], "«ЗИмний» so'zida «и» unlisi urg'u ostida."],
      ],
    },
    {
      title: "So'z turkumlari: ot, sifat, fe'l",
      goal: "So'z turkumini so'roq va ma'noga qarab aniqlash.",
      body: [
        ["Ot (существительное) narsani bildiradi: kim? nima? (мама — ona, книга — kitob).", "Sifat (прилагательное) narsaning belgisini bildiradi: qanday? (зелёный — yashil, весёлая — quvnoq).", "Fe'l (глагол) harakatni bildiradi: nima qilmoq? nima qiladi? (бежать — yugurmoq, читает — o'qiydi)."],
        ["зелень (ko'kat) — ot", "зелёный (yashil) — sifat", "зеленеет (yashillanadi) — fe'l"],
      ],
      quiz: [
        ["Ot qaysi so'roqqa javob beradi?", ["Kim? Nima?", "Qanday?", "Nima qilmoq?"]],
        ["Fe'lni top.", ["бежит (yuguradi)", "быстрый (tez)", "бег (yugurish)"]],
        ["Sifatni top.", ["зелёный (yashil)", "зелень (ko'kat)", "зеленеет (yashillanadi)"]],
        ["«Книга» (kitob) so'zi — bu…", ["ot", "fe'l", "sifat"]],
        ["Sifat … bildiradi.", ["narsaning belgisini", "harakatni", "narsani"]],
      ],
    },
  ],

  reading: [
    {
      title: "Bilinalar. Rus zaminining bahodirlari",
      goal: "Bilina nima va bahodirlar kimligini bilish.",
      body: [
        "Bilina — bahodirlarning qahramonliklari haqidagi xalq qo'shiq-dostoni. Bilinalarni gusli (cholg'u) jo'rligida kuylashgan, ularni xalq to'qigan.",
        "Eng mashhur bahodirlar: Ilya Muromets, Dobrinya Nikitich va Alyosha Popovich. Ular ona yurtni dushmanlardan himoya qilgan. Rassom V. M. Vasnetsov ularni «Bahodirlar» kartinasida tasvirlagan.",
        ["Kuyga solingan til va takrorlar.", "Mubolag'a: bahodir juda kuchli.", "Asosiy mavzu — Vatan himoyasi."],
      ],
      quiz: [
        ["Bilina — bu…", ["bahodirlar haqidagi xalq qo'shiq-dostoni", "masal", "ilmiy hikoya"]],
        ["Bahodirni ayt.", ["Ilya Muromets", "Kolobok", "Chumoli"]],
        ["Bahodirlar kimni himoya qilgan?", ["Ona yurtini va xalqini", "Faqat o'zini", "Yovuz hukmdorlarni"]],
        ["Bilinalarni kim to'qigan?", ["Xalq", "I. A. Krilov", "A. S. Pushkin"]],
        ["V. Vasnetsovning «Bahodirlar» kartinasida nechta bahodir bor?", null],
      ],
    },
    {
      title: "A. S. Pushkin. «Baliqchi va baliqcha haqida ertak»",
      goal: "Ertak syujeti va asosiy fikrini tushunish.",
      body: [
        "Chol oltin baliqchani tutib oldi va uni qo'yib yubordi. Kampir cholni baliqchadan tobora ko'proq narsa so'rashga majbur qildi: yangi tog'ora, uy, zodagon xonim, hukmdor malika bo'lish va nihoyat dengiz hukmdori bo'lish. Baliqcha jahli chiqdi va kampir yana singan tog'ora oldida qoldi.",
        "Bu adabiy ertak: uni xalq emas, muallif yozgan. Ertak ochko'zlikni masxara qiladi.",
        "«Singan tog'ora oldida qolmoq» iborasi «hech narsasiz qolmoq» degan ma'noni bildiradi.",
      ],
      quiz: [
        ["«Baliqchi va baliqcha haqida ertak»ning muallifi kim?", null],
        ["Kampir birinchi navbatda nima so'radi?", ["Yangi tog'ora", "Uy", "Malika bo'lishni"]],
        ["Oxirida kampir kim bo'lishni xohladi?", ["Dengiz hukmdori", "Malika", "Zodagon xonim"]],
        ["Ertak qanday tugadi?", ["Kampir singan tog'ora oldida qoldi", "Kampir malika bo'ldi", "Chol boy bo'ldi"]],
        ["Ertak qaysi illatni masxara qiladi?", ["Ochko'zlikni", "Jasoratni", "Mehribonlikni"]],
      ],
    },
    {
      title: "L. N. Tolstoy. «Sher va kuchukcha»",
      goal: "Hikoya nima haqida ekanini tushunish va qahramonlarga munosabat bildirish.",
      body: [
        "Bu bo'lgan voqea haqidagi hikoya. Londonda sher yashaydigan hayvonxonaga kichkina kuchukchani yem sifatida tashlashdi. Lekin sher unga tegmadi, aksincha, u bilan do'stlashdi. Ular bir yil birga yashashdi. Kuchukcha kasal bo'lib o'lgach, sher qayg'urdi, ovqat yemay qo'ydi va bir necha kundan keyin o'ldi.",
        "Asosiy fikr: haqiqiy do'stlik va sadoqat hamma narsadan kuchli — hatto bunday har xil hayvonlar o'rtasida ham.",
      ],
      quiz: [
        ["«Sher va kuchukcha» hikoyasining muallifi kim?", null],
        ["Sher qayerda yashagan?", ["Hayvonxonada", "O'rmonda", "Cho'lda"]],
        ["Sher kuchukchaga qanday munosabatda bo'ldi?", ["U bilan do'stlashdi", "Uni yeb qo'ydi", "Uni haydab yubordi"]],
        ["Kuchukcha o'lgach, sher bilan nima bo'ldi?", ["U qayg'urib o'ldi", "U yangi it topdi", "U qochib ketdi"]],
        ["Bu hikoya nima haqida?", ["Do'stlik va sadoqat haqida", "Ochko'zlik haqida", "Ayyorlik haqida"]],
      ],
    },
  ],

  nature: [
    {
      title: "Suv va uning xossalari",
      goal: "Suvning xossalarini va uning uch holatini bilish.",
      body: [
        ["Suv tiniq, rangsiz, hidsiz va ta'msiz.", "Suv oquvchan — idish shaklini oladi.", "Suv — erituvchi: unda tuz va shakar eriydi.", "Isitilganda suv kengayadi, sovutilganda qisqaradi."],
        "Suv uch holatda bo'ladi: qattiq (muz, qor), suyuq (suv) va gazsimon (suv bug'i).",
        "0 °C da suv muzga aylanadi, 100 °C da qaynaydi.",
      ],
      quiz: [
        ["Suv qanday holatlarda bo'ladi?", ["Qattiq, suyuq va gazsimon", "Faqat suyuq", "Faqat qattiq"]],
        ["Suvda nima eriydi?", ["Tuz va shakar", "Qum", "Toshlar"]],
        ["Muz — bu … holatdagi suv.", ["qattiq", "suyuq", "gazsimon"]],
        ["Suv qanday haroratda qaynaydi?", null],
        ["Nega suv stakan shaklini oladi?", ["U oquvchan", "U qattiq", "U rangli"]],
      ],
    },
    {
      title: "Havo va uning xossalari",
      goal: "Havoning tarkibi va xossalarini bilish.",
      body: [
        "Havo — gazlar aralashmasi. Asosiylari: azot va kislorod. Kislorod nafas olish va yonish uchun kerak.",
        ["Havo tiniq va rangsiz.", "Havo issiqlikni yomon o'tkazadi — shuning uchun qishda qo'sh romlar va qalin jun isitadi.", "Isitilganda havo kengayadi, sovutilganda qisqaradi."],
        "Nafas olganda odamlar va hayvonlar karbonat angidrid chiqaradi, o'simliklar esa yorug'likda kislorod chiqaradi.",
      ],
      quiz: [
        ["Nafas olish uchun qaysi gaz kerak?", ["Kislorod", "Karbonat angidrid", "Bug'"]],
        ["Odamlar nafas olganda qaysi gazni chiqaradi?", ["Karbonat angidrid", "Kislorod", "Vodorod"]],
        ["Isitilganda havo bilan nima bo'ladi?", ["U kengayadi", "U qisqaradi", "Hech narsa"]],
        ["Nega hayvonlarning juni yaxshi isitadi?", ["Tuklar orasida havo bor, u issiqlikni yomon o'tkazadi", "Jun issiq", "Jun og'ir"]],
        ["Havo qanday?", ["Tiniq va rangsiz", "Ko'k va quyuq", "Qattiq"]],
      ],
    },
    {
      title: "Tabiatda suvning aylanishi",
      goal: "Suv tabiatda qanday sayohat qilishini tushuntirish.",
      body: [
        "Suvning aylanishi: quyosh suvni isitadi → suv bug'lanadi → bug' ko'tarilib bulutlar hosil qiladi → yog'inlar yog'adi → suv daryo va dengizlarga oqib tushadi.",
        ["dengiz → bug'lanish → bulut → yomg'ir → daryo → dengiz"],
        "Yerda suv yo'qolmaydi — u doimo aylana bo'ylab harakatlanadi.",
      ],
      quiz: [
        ["Suvni nima bug'lanishga majbur qiladi?", ["Quyosh issiqligi", "Shamol", "Oy"]],
        ["Bulutlar nimadan hosil bo'ladi?", ["Mayda suv tomchilaridan", "Tutundan", "Changdan"]],
        ["Yog'inlar — bu nima?", ["Yomg'ir, qor, do'l", "Bulutlar", "Shamol"]],
        ["Yomg'irdan keyin suv qayerga oqadi?", ["Daryo, ko'l va dengizlarga", "Oyga", "Hech qayerga"]],
        ["Nega «aylanish» deyiladi?", ["Suv aylana bo'ylab harakatlanib qaytadi", "Suv stakanda aylanadi", "Bulutlar dumaloq"]],
      ],
    },
  ],
}
