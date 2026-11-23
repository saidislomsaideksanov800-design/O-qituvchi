// 1-sinf — o'zbekcha tarjimalar. Tartib rus tilidagi darslar bilan bir xil (grade1.js).
// body: har bir blok uchun matn (string), ro'yxat/misol uchun massiv, tarjima kerak bo'lmasa null.
// quiz: [savol, javoblar (rus tilidagi tartibda) yoki null, izoh (ixtiyoriy)]

export default {
  math: [
    {
      title: "1 dan 5 gacha sonlar. Narsalarni sanash",
      goal: "Narsalarni tartib bilan sanash va qaysi son oldin, qaysi son keyin kelishini bilish.",
      body: [
        "Nechta narsa borligini bilish uchun ularni tartib bilan sanaymiz: bir, ikki, uch, to'rt, besh. Oxirgi aytilgan son jami nechta narsa borligini ko'rsatadi.",
        null,
        "Har bir keyingi son oldingisidan 1 ta ko'p. 4 soni 3 dan keyin va 5 dan oldin turadi.",
        ["Chapdan o'ngga sana, hech narsani tashlab ketma.", "Har bir narsani barmog'ing bilan ko'rsat.", "Bitta narsani ikki marta sanash mumkin emas."],
      ],
      quiz: [
        ["Nechta nuqta bor: ● ● ● ● ?", null, "Tartib bilan sanaymiz: 1, 2, 3, 4."],
        ["3 dan keyin qaysi son keladi?", null, "Keyingi son 1 ta ko'p: 3 + 1 = 4."],
        ["5 dan oldin qaysi son keladi?", null, "5 dan oldin 1 ta kam son turadi — 4."],
        ["Mashada 2 ta olma bor, Petyada esa 1 ta ko'p. Petyada nechta olma bor?", null, "1 ta ko'p: 2 + 1 = 3."],
        ["Eng katta son qaysi: 2, 5, 1, 4?", null, "Sanashda 5 hammasidan keyin aytiladi."],
      ],
    },
    {
      title: "Katta, kichik, teng. >, <, = belgilari",
      goal: "Sonlarni taqqoslash va taqqoslash belgilarini to'g'ri qo'yish.",
      body: [
        "> belgisi «katta», < belgisi «kichik», = belgisi «teng» deb o'qiladi. Belgining o'tkir uchi doim kichik songa qaraydi.",
        ["5 > 3 — besh uchdan katta", "2 < 7 — ikki yettidan kichik", "4 = 4 — to'rt to'rtga teng"],
        "Sonlarni taqqoslash uchun sanashda qaysi biri keyinroq aytilishini esla. O'sha son kattaroq.",
      ],
      quiz: [
        ["Qaysi belgini qo'yish kerak: 3 … 5?", null, "3 soni 5 dan kichik, o'tkir uchi 3 ga qaraydi."],
        ["Qaysi belgini qo'yish kerak: 7 … 4?", null, "7 soni 4 dan katta."],
        ["Qaysi belgini qo'yish kerak: 6 … 6?", null, "Sonlar bir xil — demak, ular teng."],
        ["Qaysi yozuv to'g'ri?", null, "2 haqiqatan ham 8 dan kichik."],
        ["«<» belgisining o'tkir uchi … qaraydi.", ["kichik songa", "katta songa", "istalgan songa"], "Keng tomoni katta songa, o'tkir uchi kichik songa qaraydi."],
      ],
    },
    {
      title: "10 gacha qo'shish va ayirish",
      goal: "10 gacha sonlarni qo'shish, ayirish va oddiy masalalarni yechish.",
      body: [
        "Qo'shish — birlashtirish, ko'payadi (+ belgisi). Ayirish — bir qismini olib tashlash, kamayadi (− belgisi).",
        null,
        "Masala: «Shoxda 8 ta qush o'tirgan edi, 3 tasi uchib ketdi». Qushlar kamaydi — demak, ayiramiz: 8 − 3 = 5.",
        ["«Ko'paydi», «keldi», «qo'shishdi» — odatda qo'shish.", "«Uchib ketdi», «yeb qo'ydi», «berib yubordi» — odatda ayirish."],
      ],
      quiz: [
        ["3 + 4 = ?", null, "Uchga to'rtni qo'shamiz: 4, 5, 6, 7."],
        ["9 − 5 = ?", null, "To'qqizdan beshni ayiramiz — 4 qoladi."],
        ["5 + 5 = ?", null, "Besh va besh — o'n."],
        ["Shoxda 8 ta qush o'tirgan edi, 3 tasi uchib ketdi. Nechta qush qoldi?", null, "Qushlar uchib ketdi — ayiramiz: 8 − 3 = 5."],
        ["Qaysi son tushib qolgan: 6 + … = 9?", null, "6 + 3 = 9."],
      ],
    },
  ],

  russian: [
    {
      title: "Tovushlar va harflar",
      goal: "Tovushlarni (eshitamiz va aytamiz) va harflarni (ko'ramiz va yozamiz) farqlash.",
      body: [
        "Tovushlarni eshitamiz va talaffuz qilamiz. Harflarni ko'ramiz va yozamiz. Harflar — yozuvda tovushlarni bildiruvchi belgilar.",
        "«Кот» (mushuk) so'zida uchta tovush bor: [к], [о], [т] — va uchta harf: к, о, т.",
        "Tovushni bildirmaydigan harflar ham bor: ь (yumshatish belgisi) va ъ (ajratish belgisi).",
        ["дом (uy) — 3 ta harf, 3 ta tovush", "конь (ot) — 4 ta harf, 3 ta tovush (ь tovush bildirmaydi)"],
      ],
      quiz: [
        ["Tovushlarni biz…", ["eshitamiz va aytamiz", "ko'ramiz va yozamiz", "faqat chizamiz"]],
        ["Harflarni biz…", ["ko'ramiz va yozamiz", "eshitamiz va aytamiz", "faqat kuylaymiz"]],
        ["«Кот» (mushuk) so'zida nechta harf bor?", null],
        ["«Дом» (uy) so'zida nechta tovush bor?", null, "[д], [о], [м]."],
        ["Qaysi harf tovush bildirmaydi?", null, "Yumshatish belgisi yumshoqlikni ko'rsatadi, lekin o'zi tovush bildirmaydi."],
      ],
    },
    {
      title: "Unli va undosh tovushlar",
      goal: "Unli tovushlarni undoshlardan farqlash.",
      body: [
        "Unli tovushlarni kuylash va cho'zish mumkin: havo erkin chiqadi. Undoshlarni aytganda havo to'siqqa (lab, tish, til) uchraydi.",
        "Rus tilida 10 ta unli harf bor: а, о, у, ы, э, я, ё, ю, и, е. Ular 6 ta unli tovushni bildiradi: [а], [о], [у], [ы], [э], [и].",
        ["а-а-а, о-о-о — cho'ziladi (unlilar)", "п, т, к — cho'zilmaydi (undoshlar)"],
      ],
      quiz: [
        ["Qaysi harf unli tovushni bildiradi?", null],
        ["Qaysi harf undosh tovushni bildiradi?", null],
        ["Rus tilida nechta unli harf bor?", null],
        ["«Мама» so'zida nechta unli harf bor?", null, "м-А-м-А: ikkita «а» harfi."],
        ["Unli tovushlarni…", ["kuylash va cho'zish mumkin", "faqat to'siq bilan aytish mumkin", "aytib bo'lmaydi"]],
      ],
    },
    {
      title: "Bo'g'inlar va urg'u",
      goal: "So'zlarni bo'g'inlarga ajratish va urg'uli bo'g'inni topish.",
      body: [
        "So'zda nechta unli bo'lsa, shuncha bo'g'in bo'ladi.",
        ["ма-ши-на (mashina) — 3 ta bo'g'in", "ли-са (tulki) — 2 ta bo'g'in", "кит (kit) — 1 ta bo'g'in"],
        "Urg'u — bitta bo'g'inni ovoz bilan ajratib aytish. Urg'uli bo'g'in kuchliroq va cho'ziqroq aytiladi.",
        "Urg'uni topish uchun so'zni do'stingni chaqirgandek ayt: «зи-и-ма!». Cho'zilgan bo'g'in — urg'uli: зимА (qish).",
      ],
      quiz: [
        ["«Машина» so'zida nechta bo'g'in bor?", null, "ма-ши-на: uchta unli — uchta bo'g'in."],
        ["«Кит» so'zida nechta bo'g'in bor?", null],
        ["So'zda nechta bo'g'in borligini qanday bilamiz?", ["Unlilarni sanaymiz", "Undoshlarni sanaymiz", "Barcha harflarni sanaymiz"]],
        ["«Зима» (qish) so'zida urg'u qaysi bo'g'inga tushadi?", ["Ikkinchisiga: зимА", "Birinchisiga: зИма", "Urg'u yo'q"]],
        ["Qaysi so'z bo'g'inlarga to'g'ri ajratilgan?", null, "Har bir bo'g'inda unli bo'lishi kerak, bo'g'in odatda unli bilan tugaydi."],
      ],
    },
  ],

  reading: [
    {
      title: "Rus xalq ertagi «Kolobok» (Dumaloq non)",
      goal: "Xalq ertagining belgilarini bilish va «Kolobok»ni qayta hikoya qilish.",
      body: [
        "Xalq ertagi — xalq to'qigan va og'izdan og'izga o'tib kelgan ertak. Uning bitta muallifi yo'q.",
        "Chol kampirdan kolobok (dumaloq non) pishirib berishni so'radi. Kolobok derazada sovidi, dumalab tushdi va yo'l bo'ylab ketdi. U quyon, bo'ri va ayiqni uchratdi va qo'shig'ini aytib, hammasidan qochib ketdi. Ayyor tulki esa qo'shig'ini maqtab, yaqinroq kelib kuylashni so'radi — va Kolobokni yeb qo'ydi.",
        ["«Жили-были…» («Bor ekan, yo'q ekan…») bilan boshlanadi.", "Takrorlar: uchrashuvlar bir nechta, qo'shiq takrorlanadi.", "Hayvonlar odamlardek gapiradi va harakat qiladi."],
        "Ertak nimaga o'rgatadi? Maqtanmaslikka va xushomadgo'ylarga ishonmaslikka.",
      ],
      quiz: [
        ["Xalq ertagi ko'pincha qaysi so'zlar bilan boshlanadi?", ["«Bor ekan, yo'q ekan…»", "«Xulosa qilib…»", "«Aziz do'stim…»"]],
        ["Kolobokni kim pishirdi?", ["Kampir (buvi)", "Tulki", "Quyon"]],
        ["Kolobokni kim yeb qo'ydi?", ["Tulki", "Bo'ri", "Ayiq"]],
        ["Kolobok birinchi bo'lib kimni uchratdi?", ["Quyonni", "Bo'rini", "Ayiqni"]],
        ["Xalq ertagi — bu…", ["xalq to'qigan ertak", "bitta yozuvchi yozgan ertak", "o'quvchi o'ylab topgan ertak"]],
      ],
    },
    {
      title: "Topishmoqlar va maqollar",
      goal: "Topishmoqlarni topish va maqollarning ma'nosini tushunish.",
      body: [
        "Topishmoq — narsani nomini aytmasdan tasvirlash. Maqol — biror narsaga o'rgatadigan qisqa dono gap.",
        ["Qishin-yozin bir xil rangda. (Archa)", "Yuzta to'n kiygan bobo o'tiribdi. Kim uni yechintirsa, ko'z yosh to'kadi. (Piyoz)"],
        ["Mehnatsiz hovuzdan baliq ham tutib bo'lmaydi.", "Ishga vaqt — o'yinga soat."],
        "Topishmoqni topish uchun undagi belgilarni top: rangi, shakli, nima qilishi.",
      ],
      quiz: [
        ["«Qishin-yozin bir xil rangda». Bu nima?", ["Archa", "Qayin", "Qor"], "Archa yil bo'yi yashil bo'ladi."],
        ["Maqol — bu…", ["qisqa dono gap", "uzun ertak", "hazil savol"]],
        ["Maqolni davom ettir: «Mehnatsiz … ham tutib bo'lmaydi»", ["hovuzdan baliq", "hovuzdan to'p", "o'rmonda quyon"]],
        ["Topishmoq — bu…", ["narsani nomini aytmay tasvirlash", "yozuvchi hayoti haqida hikoya", "matematika qoidasi"]],
        ["«Yuzta to'n kiygan bobo o'tiribdi. Kim uni yechintirsa, ko'z yosh to'kadi». Bu nima?", ["Piyoz", "Karam", "Po'stin"]],
      ],
    },
    {
      title: "Sanoq she'rlar va erkalash qo'shiqlari. Qofiya",
      goal: "Sanoq she'r, erkalash qo'shig'i va qofiya nimaligini bilish.",
      body: [
        "Qofiya — satrlar oxirining ohangdosh bo'lishi: кошка — ложка (mushuk — qoshiq), мышка — шишка (sichqoncha — qubba).",
        ["Bir, ikki, uch, to'rt, besh,", "Quyoncha sayrga chiqdi."],
        "Sanoq she'r o'yinda boshlovchini tanlash uchun kerak. Erkalash qo'shig'i (потешка) — kichkintoylarni ovutadigan quvnoq she'r.",
      ],
      quiz: [
        ["Qofiya — bu…", ["satrlar oxirining ohangdoshligi", "kitob nomi", "ertak boshlanishi"]],
        ["Sanoq she'rni davom ettir: «Bir, ikki, uch, to'rt, besh, quyoncha chiqdi …»", ["sayrga", "uxlashga", "to'p o'ynashga"]],
        ["Sanoq she'r nima uchun kerak?", ["O'yinda boshlovchini tanlash uchun", "Pul sanash uchun", "Xat yozish uchun"]],
        ["Qaysi so'zlar qofiyadosh?", ["кошка — ложка (mushuk — qoshiq)", "кошка — стол (mushuk — stol)", "дом — река (uy — daryo)"]],
        ["Потешка — bu…", ["kichkintoy bilan o'ynash uchun quvnoq she'r", "ilmiy maqola", "e'lon"]],
      ],
    },
  ],

  nature: [
    {
      title: "Biz — o'quvchilarmiz. Maktabda o'zini tutish qoidalari",
      goal: "Darsda va tanaffusda o'zini tutishning asosiy qoidalarini bilish.",
      body: [
        "Maktabda o'qituvchi va sinfdoshlarni hurmat qilish, narsalarni asrash va tartibga rioya qilish muhim.",
        ["Darsga o'z vaqtida kel.", "Javob berish uchun qo'lingni ko'tar.", "Darslik va daftarlarni asra.", "Tanaffusda yo'laklar va zinalarda yugurma.", "Ish joyingni tartibli saqla."],
      ],
      quiz: [
        ["Darsda javob berish uchun nima qilish kerak?", ["Qo'lni ko'tarish", "Joyidan baqirish", "Turib chiqib ketish"]],
        ["Darsga qachon kelish kerak?", ["O'z vaqtida, qo'ng'iroqdan oldin", "Xohlagan paytda", "Qo'ng'iroqdan keyin"]],
        ["Tanaffusda o'zini qanday tutish kerak?", ["Zina va yo'laklarda yugurmaslik", "Itarishish", "Sinfda baqirish"]],
        ["Darsliklarga qanday munosabatda bo'lish kerak?", ["Ularni asrash", "Sahifalariga rasm chizish", "Yerga tashlash"]],
        ["Topshiriqni tushunmasang nima qilish kerak?", ["O'qituvchidan xushmuomalalik bilan so'rash", "Hech narsa qilmaslik", "Yonidagidan ko'chirish"]],
      ],
    },
    {
      title: "Yil fasllari",
      goal: "Yil fasllari va oylarni tartib bilan aytish.",
      body: [
        "Yilda 4 ta fasl va 12 ta oy bor. Har bir fasl 3 oy davom etadi.",
        ["Qish: dekabr, yanvar, fevral", "Bahor: mart, aprel, may", "Yoz: iyun, iyul, avgust", "Kuz: sentabr, oktabr, noyabr"],
        "Kuzda barglar sarg'ayib to'kiladi, qushlar janubga uchib ketadi. Bahorda tabiat uyg'onadi: qor eriydi, barglar yoziladi.",
      ],
      quiz: [
        ["Nechta yil fasli bor?", null],
        ["Qishdan keyin qaysi fasl keladi?", ["Bahor", "Kuz", "Yoz"]],
        ["Yilda nechta oy bor?", null],
        ["Qaysi oylar kuz oylari?", ["Sentabr, oktabr, noyabr", "Iyun, iyul, avgust", "Dekabr, yanvar, fevral"]],
        ["Daraxtlardan barglar qachon to'kiladi?", ["Kuzda", "Yozda", "Bahorda"]],
      ],
    },
    {
      title: "Jonli va jonsiz tabiat",
      goal: "Jonli tabiatni jonsiz tabiatdan va inson yasagan narsalardan farqlash.",
      body: [
        "Tirik mavjudotlar nafas oladi, oziqlanadi, o'sadi, nasl beradi va o'ladi. Jonsiz tabiat buni qila olmaydi.",
        ["Jonli tabiat: o'simliklar, hayvonlar, qo'ziqorinlar, inson", "Jonsiz tabiat: quyosh, suv, toshlar, havo, bulutlar"],
        "Stul, mashina, kitob — tabiat emas: bu narsalarni inson yasagan.",
      ],
      quiz: [
        ["Jonli tabiatga nima kiradi?", ["Daraxt", "Tosh", "Bulut"]],
        ["Jonsiz tabiatga nima kiradi?", ["Suv", "Mushuk", "Gul"]],
        ["Barcha tirik mavjudotlar nimani qila oladi?", ["Nafas olish, oziqlanish va o'sish", "Uchish", "Gapirish"]],
        ["Nima tabiatga kirmaydi?", ["Stul", "Qo'ziqorin", "Daryo"], "Stulni inson qo'li yasagan."],
        ["Quyosh — bu…", ["jonsiz tabiat", "jonli tabiat", "inson yasagan narsa"]],
      ],
    },
  ],
}
