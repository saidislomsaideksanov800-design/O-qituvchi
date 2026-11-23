// 5-sinf — o'zbekcha tarjimalar (tartib grade5.js bilan bir xil).

export default {
  math: [
    {
      title: "Natural sonlar va ularning yozilishi",
      goal: "Qaysi sonlar natural ekanini bilish va katta sonlarni o'qish.",
      body: [
        "Natural sonlar — sanashda ishlatiladigan sonlar: 1, 2, 3, 4, … Eng kichik natural son — 1. 0 soni natural son emas. Eng katta natural son yo'q.",
        ["1 000 — ming (3 ta nol)", "1 000 000 — million (6 ta nol)", "1 000 000 000 — milliard (9 ta nol)", "3 050 000 — uch million ellik ming"],
      ],
      quiz: [
        ["Qaysi son natural son emas?", null],
        ["Eng kichik natural son qaysi?", ["1", "0", "Bunday son yo'q"]],
        ["Bir million yozuvida nechta nol bor?", null],
        ["3 050 000 soni qanday o'qiladi?", ["Uch million ellik ming", "Uch million besh yuz ming", "Uch yuz besh ming"]],
        ["999 999 dan keyin qaysi son keladi?", null],
      ],
    },
    {
      title: "Tenglamalar",
      goal: "Noma'lum hadni topib, oddiy tenglamalarni yechish.",
      body: [
        "Tenglama — noma'lum son (x) qatnashgan tenglik. Tenglamani yechish — tenglik to'g'ri bo'ladigan x ni topish.",
        ["Noma'lum qo'shiluvchi = yig'indi − ma'lum qo'shiluvchi.", "Noma'lum kamayuvchi = ayirma + ayiriluvchi.", "Noma'lum ko'paytuvchi = ko'paytma : ma'lum ko'paytuvchi.", "Noma'lum bo'luvchi = bo'linuvchi : bo'linma."],
        ["x + 15 = 40", "x = 40 − 15", "x = 25", "Tekshirish: 25 + 15 = 40 ✓"],
      ],
      quiz: [
        ["x + 15 = 40. x ni top.", null],
        ["x − 12 = 30. x ni top.", null],
        ["5 · x = 45. x ni top.", null],
        ["48 : x = 6. x ni top.", null],
        ["Noma'lum kamayuvchi qanday topiladi?", ["Ayirmaga ayiriluvchini qo'shiladi", "Ayirmadan ayiriluvchini ayiriladi", "Ayirma ayiriluvchiga ko'paytiriladi"]],
      ],
    },
    {
      title: "To'g'ri to'rtburchakning yuzi",
      goal: "To'g'ri to'rtburchak va kvadrat yuzini topish, yuz birliklarini aylantirish.",
      body: [
        "To'g'ri to'rtburchakning yuzi bo'yi va enining ko'paytmasiga teng: S = a · b. Kvadrat yuzi: S = a · a = a².",
        "Yuz kvadrat birliklarda o'lchanadi: sm², dm², m². 1 m² = 100 dm² = 10 000 sm².",
        ["Xona 5 m ga 4 m: S = 5 · 4 = 20 m²", "Agar S = 36 sm², eni 4 sm bo'lsa, bo'yi = 36 : 4 = 9 sm"],
      ],
      quiz: [
        ["To'g'ri to'rtburchakning bo'yi 6 sm, eni 4 sm. Yuzi nechaga teng?", null],
        ["Kvadratning tomoni 7 sm. Yuzi nechaga teng?", null],
        ["1 m² = … sm²", null],
        ["Xona 5 m ga 4 m. Pol yuzi qancha?", null],
        ["Yuzi 36 sm², eni 4 sm. Bo'yi nechaga teng?", null],
      ],
    },
  ],

  russian: [
    {
      title: "Fonetika. Tovushlar va transkripsiya",
      goal: "Jarangli va jarangsiz undoshlarni farqlash va tovushlar sonini aniqlash.",
      body: [
        "Fonetika nutq tovushlarini o'rganadi. Tovushlar kvadrat qavs ichida yoziladi — bu transkripsiya: [дом].",
        ["Juft jarangli va jarangsizlar: [б]–[п], [в]–[ф], [г]–[к], [д]–[т], [ж]–[ш], [з]–[с].", "е, ё, ю, я harflari so'z boshida va unlilardan keyin ikki tovushni bildiradi: яма (chuqur) — [й’ама]."],
        ["ёж (tipratikan) — [й’ош] — 3 ta tovush", "яма (chuqur) — [й’ама] — 4 ta tovush"],
      ],
      quiz: [
        ["«Ёж» (tipratikan) so'zida nechta tovush bor?", null],
        ["Tovushlar qanday qavslarda yoziladi?", ["Kvadrat qavsda [ ]", "Oddiy qavsda ( )", "Qo'shtirnoqda « »"]],
        ["Qaysi undosh jarangli?", null],
        ["[б] ning juft jarangsizi qaysi?", null],
        ["«Яма» (chuqur) so'zida nechta tovush bor?", null],
      ],
    },
    {
      title: "So'z birikmasi va gap",
      goal: "So'z birikmasini gapdan farqlash va hokim so'zni topish.",
      body: [
        "So'z birikmasi — ma'no va grammatik jihatdan bog'langan ikki yoki undan ortiq so'z. Unda hokim so'z (undan so'roq beriladi) va tobe so'z bor.",
        ["новая (qanday?) книга — yangi kitob, hokim so'z «книга» (kitob)", "читать (nimani?) книгу — kitob o'qimoq, hokim so'z «читать» (o'qimoq)"],
        "Gap tugallangan fikrni bildiradi va grammatik asosga — ega va kesimga ega. Ega bilan kesim so'z birikmasi hisoblanmaydi.",
      ],
      quiz: [
        ["So'z birikmasi nimadan iborat?", ["Hokim va tobe so'zdan", "Ega va kesimdan", "Bitta so'zdan"]],
        ["Qaysi biri so'z birikmasi?", ["читать книгу (kitob o'qimoq)", "мама пришла (onam keldi)", "и в (va, -da)"]],
        ["«Новая книга» (yangi kitob) birikmasida hokim so'z qaysi?", ["книга (kitob)", "новая (yangi)"]],
        ["Gap so'z birikmasidan nimasi bilan farq qiladi?", ["Tugallangan fikrni bildiradi", "Bitta so'zdan iborat", "Ma'nosi yo'q"]],
        ["Grammatik asos — bu…", ["ega va kesim", "to'ldiruvchi va hol", "predlog va bog'lovchi"]],
      ],
    },
    {
      title: "Gapning bosh bo'laklari",
      goal: "Ega va kesimni topish.",
      body: [
        ["Ega (подлежащее) — kim? nima? — bitta chiziq bilan chiziladi.", "Kesim (сказуемое) — nima qiladi? nima qildi? qanday? — ikkita chiziq bilan chiziladi."],
        ["Утром пошёл сильный дождь. (Ertalab kuchli yomg'ir yog'di.)", "Nima? — дождь (yomg'ir) (ega). Nima qildi? — пошёл (yog'di) (kesim)."],
        "Ega va kesim ot bilan ifodalansa, ular orasiga tire qo'yiladi: Ташкент — столица Узбекистана (Toshkent — O'zbekiston poytaxti).",
      ],
      quiz: [
        ["Ega qanday chiziladi?", ["Bitta chiziq bilan", "Ikkita chiziq bilan", "To'lqinli chiziq bilan"]],
        ["Kesim qaysi so'roqqa javob beradi?", ["Nima qiladi?", "Kim? Nima?", "Qanday?"]],
        ["Egani top: «Утром пошёл сильный дождь» (Ertalab kuchli yomg'ir yog'di).", ["дождь (yomg'ir)", "утром (ertalab)", "пошёл (yog'di)"]],
        ["Kesimni top: «Птицы улетели на юг» (Qushlar janubga uchib ketdi).", ["улетели (uchib ketdi)", "птицы (qushlar)", "на юг (janubga)"]],
        ["Qaysi gapda ega va kesim orasiga tire kerak?", ["Toshkent … O'zbekiston poytaxti.", "Toshkent chiroyli.", "Toshkent o'syapti."]],
      ],
    },
  ],

  reading: [
    {
      title: "Folklorning kichik janrlari",
      goal: "Maqol, matal, topishmoq va boshqa kichik janrlarni farqlash.",
      body: [
        "Folklor — og'zaki xalq ijodi. Kichik janrlar: maqollar, matallar, topishmoqlar, erkalash qo'shiqlari, allalar, tez aytishlar.",
        ["Maqol — ibratli tugallangan fikr: «Sekin yursang, uzoqqa borasan».", "Matal — xulosasiz obrazli ibora: «boshiga qor yog'gandek» (to'satdan).", "Topishmoq — narsaning yashirin tasviri."],
      ],
      quiz: [
        ["Folklor — bu…", ["og'zaki xalq ijodi", "muallif she'riyati", "ilmiy adabiyot"]],
        ["Maqol matal (поговорка)dan nimasi bilan farq qiladi?", ["Maqolda tugallangan fikr va ibrat bor", "Maqol doim qofiyali", "Ular hech farq qilmaydi"]],
        ["«Как снег на голову» (to'satdan, kutilmaganda) — bu…", ["matal", "topishmoq", "masal"]],
        ["Bola uxlashi uchun qaysi janr kuylanadi?", ["Alla", "Tez aytish", "Sanoq she'r"]],
        ["Quyidagilardan qaysi biri maqol?", ["Sekin yursang, uzoqqa borasan", "Bekorchilik qilmoq (бить баклуши)", "Pinagini buzmaslik (как с гуся вода)"]],
      ],
    },
    {
      title: "«Malika-qurbaqa» sehrli ertagi",
      goal: "Sehrli ertakning belgilarini topish.",
      body: [
        "Uch shahzoda kelin topish uchun o'q otdi. Ivan-shahzodaning o'qi botqoqqa tushdi va u qurbaqaga uylanishiga to'g'ri keldi. Qurbaqa Donishmand Vasilisa bo'lib chiqdi. Ivan qurbaqa terisini vaqtidan oldin yoqib yubordi va Vasilisa O'lmas Koshchey huzuriga uchib ketdi. Ivan uni qutqarishga yo'l oldi va Koshcheyni yengdi: Koshcheyning o'limi igna uchida edi.",
        ["Boshlanma: «Qadim zamonlarda…».", "Uch marta takror: uch o'g'il, uch topshiriq.", "Sehrli yordamchilar va o'zgarishlar.", "Ezgulik yovuzlikni yengadi, baxtli yakun."],
      ],
      quiz: [
        ["Ivan-shahzodaning o'qi qayerga tushdi?", ["Botqoqqa", "Podsho bog'iga", "Savdogar hovlisiga"]],
        ["Qurbaqa kim bo'lib chiqdi?", ["Donishmand Vasilisa", "Yalmog'iz kampir", "Olovqush"]],
        ["Ivan qanday xato qildi?", ["Qurbaqa terisini yoqib yubordi", "O'qini yo'qotdi", "Otasini xafa qildi"]],
        ["Koshcheyning o'limi qayerda edi?", ["Igna uchida", "Oltinli sandiqda", "Uning qilichida"]],
        ["Bu ertakda sehrli ertakning qaysi belgisi bor?", ["Uch marta takror va o'zgarishlar", "Masaldagidek oxirida ibrat", "Ilmiy faktlar"]],
      ],
    },
    {
      title: "I. A. Krilov. «Qarg'a va Tulki»",
      goal: "Masaldagi allegoriya va ibratni tushunish.",
      body: [
        "Ma'nosi: «Dunyoga necha marta aytishgan: xushomad jirkanch va zararli, lekin hammasi befoyda — xushomadgo'y yurakdan doim joy topadi».",
        "Qarg'aga bir bo'lak pishloq tushdi. Tulki uning chiroyini va ovozini maqtab, kuylab berishni so'radi. Qarg'a qag'illadi — pishloq tushib ketdi va Tulki uni olib qochdi.",
        "Allegoriya — inson xislatlarini hayvonlar obrazi orqali tasvirlash: Tulki — ayyorlik va xushomad, Qarg'a — ahmoqlik va manmanlik. Ibrat: xushomadgo'ylarga ishonma.",
      ],
      quiz: [
        ["Bu masalda ibrat qayerda?", ["Masal boshida", "Masal oxirida", "Nomida"]],
        ["Tulki pishloqni qanday qo'lga kiritdi?", ["Qarg'ani maqtab, kuylashni so'radi", "Kuch bilan tortib oldi", "Sotib oldi"]],
        ["Allegoriya — bu…", ["inson xislatlarini hayvonlar obrazi orqali tasvirlash", "qofiya", "«как» (kabi) bilan o'xshatish"]],
        ["Tulki qaysi xislatni ifodalaydi?", ["Ayyorlik va xushomad", "Halollik", "Mehnatsevarlik"]],
        ["Masal nimaga o'rgatadi?", ["Xushomadgo'ylarga ishonmaslikka", "Pishloqni yaxshi ko'rishga", "Yaxshi kuylashga"]],
      ],
    },
  ],

  nature: [
    {
      title: "Tabiat qanday o'rganiladi",
      goal: "Tabiatni o'rganish usullari va asboblarini bilish.",
      body: [
        "Tabiat kuzatish, tajriba (eksperiment) va o'lchash yordamida o'rganiladi.",
        ["Kuzatish — hech narsani o'zgartirmay qaraymiz va yozib boramiz.", "Tajriba — sharoit yaratamiz va nima bo'lishini tekshiramiz.", "O'lchash — kattalikni asbob bilan aniqlaymiz."],
        ["Lupa va mikroskop — mayda narsalarni kattalashtiradi", "Termometr — harorat", "Tarozi — massa", "Chizg'ich, ruletka — uzunlik"],
      ],
      quiz: [
        ["«Har kuni ob-havoni yozib boramiz» — bu qaysi usul?", ["Kuzatish", "Tajriba", "Massani o'lchash"]],
        ["Hujayralar qaysi asbob bilan ko'riladi?", ["Mikroskop bilan", "Termometr bilan", "Tarozi bilan"]],
        ["Tajriba kuzatishdan nimasi bilan farq qiladi?", ["Tajribada sharoitni o'zimiz yaratamiz", "Tajriba faqat kechasi o'tkaziladi", "Hech nimasi bilan"]],
        ["Massa nima bilan o'lchanadi?", ["Tarozi bilan", "Chizg'ich bilan", "Lupa bilan"]],
        ["Qaysi asbob kuchliroq kattalashtiradi?", ["Mikroskop", "Lupa", "Bir xil"]],
      ],
    },
    {
      title: "Jismlar va moddalar",
      goal: "Jism va moddani hamda moddaning uch holatini farqlash.",
      body: [
        "Jism — har qanday narsa (qoshiq, tosh, tomchi). Modda — jism nimadan iborat bo'lsa, o'sha (temir, suv, shisha).",
        ["Moddalar qattiq, suyuq va gazsimon bo'ladi.", "Moddalar juda mayda zarrachalar — molekulalardan iborat.", "Qattiq jismlarda zarrachalar zich, gazlarda esa bir-biridan uzoq joylashgan."],
        ["qoshiq (jism) — po'latdan (modda)", "stakan (jism) — shishadan (modda)"],
      ],
      quiz: [
        ["Qaysi biri jism?", ["Qoshiq", "Temir", "Shisha"]],
        ["Qaysi biri modda?", ["Shisha", "Stakan", "Deraza"]],
        ["Moddalar nimadan iborat?", ["Juda mayda zarrachalar — molekulalardan", "Havodan", "Hech nimadan"]],
        ["Zarrachalar qayerda bir-biridan eng uzoq joylashgan?", ["Gazlarda", "Qattiq jismlarda", "Suyuqliklarda"]],
        ["Suv bug'i — bu … holatdagi modda.", ["gazsimon", "qattiq", "suyuq"]],
      ],
    },
    {
      title: "Yer Koinotda",
      goal: "Kun va tun hamda yil fasllari almashinuvini tushuntirish.",
      body: [
        "Yer o'z o'qi atrofida 24 soatda aylanadi — shuning uchun kun tun bilan almashadi. Quyosh atrofini Yer taxminan 365 sutkada aylanib chiqadi — bu bir yil.",
        "Yerning o'qi qiya. Shuning uchun yil davomida Quyosh yarim sharlarni har xil yoritadi va yil fasllari almashadi.",
        ["Yer shar shaklida.", "Yerning modeli — globus.", "Oy Yer atrofini taxminan bir oyda aylanib chiqadi."],
      ],
      quiz: [
        ["Nega kun tun bilan almashadi?", ["Yer o'z o'qi atrofida aylanadi", "Quyosh butunlay ufq ortiga ketadi", "Oy Quyoshni to'sadi"]],
        ["Yer Quyosh atrofini qancha vaqtda aylanib chiqadi?", ["Taxminan 365 sutkada", "24 soatda", "Bir oyda"]],
        ["Nega yil fasllari almashadi?", ["Yer o'qining qiyaligi tufayli", "Oy tufayli", "Shamol tufayli"]],
        ["Yerning modeli nima deb ataladi?", ["Globus", "Yulduzlar xaritasi", "Kompas"]],
        ["Yer qanday shaklda?", ["Shar", "Disk", "Kub"]],
      ],
    },
  ],
}
