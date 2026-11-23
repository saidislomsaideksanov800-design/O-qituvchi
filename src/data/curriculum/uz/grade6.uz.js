// 6-sinf — o'zbekcha tarjimalar (tartib grade6.js bilan bir xil).

export default {
  math: [
    {
      title: "Bo'luvchilar va karralilar. Tub sonlar",
      goal: "Sonning bo'luvchilari va karralilarini topish, tub sonlarni murakkab sonlardan farqlash.",
      body: [
        "a sonining bo'luvchisi — a qoldiqsiz bo'linadigan son. a sonining karralisi — a ga qoldiqsiz bo'linadigan son.",
        ["12 ning bo'luvchilari: 1, 2, 3, 4, 6, 12", "6 ning karralilari: 6, 12, 18, 24, …"],
        "Tub sonning faqat ikkita bo'luvchisi bor: 1 va sonning o'zi (2, 3, 5, 7, 11, 13…). Murakkab sonning ikkitadan ortiq bo'luvchisi bor. 1 soni tub ham, murakkab ham emas.",
      ],
      quiz: [
        ["Qaysi son 12 ning bo'luvchisi?", null],
        ["Qaysi son 6 ga karrali?", null],
        ["7 sonining nechta bo'luvchisi bor?", ["2 ta (1 va 7)", "1 ta", "7 ta"]],
        ["Tub son — bu…", ["faqat ikkita bo'luvchisi (1 va o'zi) bor son", "juft son", "10 ga bo'linadigan son"]],
        ["Qaysi son tub?", null],
      ],
    },
    {
      title: "2, 3, 5, 9 va 10 ga bo'linish belgilari",
      goal: "Sonning bo'linishini bo'lmasdan aniqlash.",
      body: [
        ["2 ga — oxirgi raqami juft bo'lsa (0, 2, 4, 6, 8).", "5 ga — son 0 yoki 5 bilan tugasa.", "10 ga — son 0 bilan tugasa.", "3 ga — raqamlari yig'indisi 3 ga bo'linsa.", "9 ga — raqamlari yig'indisi 9 ga bo'linsa."],
        ["7 + 2 + 9 = 18", "18 soni 9 ga bo'linadi → 729 soni 9 ga (va 3 ga) bo'linadi"],
      ],
      quiz: [
        ["Qaysi son 3 ga bo'linadi?", null, "1 + 2 + 3 = 6, 6 esa 3 ga bo'linadi."],
        ["Qaysi son 9 ga bo'linadi?", null],
        ["Qaysi son 5 ga bo'linadi, lekin 10 ga bo'linmaydi?", null],
        ["Qaysi son 2 ga bo'linadi?", null],
        ["9 ga bo'linish belgisi:", ["raqamlari yig'indisi 9 ga bo'linadi", "oxirgi raqami 9", "son 0 bilan tugaydi"]],
      ],
    },
    {
      title: "Kasrlarni qisqartirish",
      goal: "Kasrning asosiy xossasidan foydalanib, kasrlarni qisqartirish.",
      body: [
        "Kasrning asosiy xossasi: surat va maxrajni bir xil songa (0 dan boshqa) ko'paytirsak yoki bo'lsak, teng kasr hosil bo'ladi.",
        "Kasrni qisqartirish — surat va maxrajni ularning umumiy bo'luvchisiga bo'lish. Darhol eng katta umumiy bo'luvchiga (EKUB) bo'lgan ma'qul.",
        ["12/36: EKUB(12, 36) = 12", "12/36 = 1/3"],
        "Surat va maxrajning 1 dan boshqa umumiy bo'luvchisi bo'lmasa, kasr qisqarmas bo'ladi: 5/7.",
      ],
      quiz: [
        ["6/8 kasrni qisqartir.", null],
        ["10/15 kasrni qisqartir.", null],
        ["12/36 kasrni qisqartir.", null],
        ["Kasrning asosiy xossasiga ko'ra surat va maxrajni…", ["bir xil songa (0 dan boshqa) ko'paytirish yoki bo'lish mumkin", "bir xil songa qo'shish mumkin", "o'rnini almashtirish mumkin"]],
        ["Qaysi kasr qisqarmas?", null],
      ],
    },
  ],

  russian: [
    {
      title: "Leksika: sinonimlar, antonimlar, omonimlar",
      goal: "Sinonim, antonim va omonimlarni farqlash.",
      body: [
        ["Sinonimlar — ma'nosi yaqin so'zlar: смелый — храбрый (jasur — botir).", "Antonimlar — qarama-qarshi ma'noli so'zlar: день — ночь (kun — tun).", "Omonimlar — talaffuzi va yozilishi bir xil, ma'nosi har xil so'zlar: ключ (qulf kaliti) — ключ (buloq)."],
        "Sinonimlar bir so'zni takrorlamaslikka yordam beradi va nutqni aniqroq qiladi.",
      ],
      quiz: [
        ["Sinonimlar — bu…", ["ma'nosi yaqin so'zlar", "ma'nosi qarama-qarshi so'zlar", "talaffuzi bir xil, ma'nosi har xil so'zlar"]],
        ["«Горячий» (issiq) so'ziga antonim top.", ["холодный (sovuq)", "тёплый (iliq)", "жаркий (jazirama)"]],
        ["Qaysi juftlik — sinonimlar?", ["смелый — храбрый (jasur — botir)", "день — ночь (kun — tun)", "ключ — ключ (kalit — buloq)"]],
        ["«Коса» (soch o'rimi) va «коса» (o'roq) — bu…", ["omonimlar", "sinonimlar", "antonimlar"]],
        ["Qaysi juftlik — antonimlar?", ["высокий — низкий (baland — past)", "большой — огромный (katta — ulkan)", "бежать — мчаться (yugurmoq — yelmoq)"]],
      ],
    },
    {
      title: "Frazeologizmlar",
      goal: "Frazeologizmlarning ma'nosini tushunish va nutqda qo'llash.",
      body: [
        "Frazeologizm — barqaror so'z birikmasi, uning ma'nosi alohida so'zlar ma'nosidan kelib chiqmaydi. Uni o'zgartirib bo'lmaydi.",
        ["бить баклуши — bekorchilik qilmoq", "зарубить на носу — yaxshilab eslab qolmoq", "как с гуся вода — hech narsa ta'sir qilmaydi", "водить за нос — aldamoq"],
      ],
      quiz: [
        ["«Бить баклуши» nimani bildiradi?", ["Bekorchilik qilmoq", "Ko'p ishlamoq", "Urishmoq"]],
        ["«Зарубить на носу» nimani bildiradi?", ["Yaxshilab eslab qolmoq", "Jarohatlanmoq", "Xafa bo'lmoq"]],
        ["Frazeologizm — bu…", ["yaxlit ma'noli barqaror so'z birikmasi", "har qanday so'z birikmasi", "bitta uzun so'z"]],
        ["«Водить за нос» nimani bildiradi?", ["Aldamoq", "Birga sayr qilmoq", "Davolamoq"]],
        ["«Бить баклуши» o'rniga «бить баклушки» deyish mumkinmi?", ["Yo'q, frazeologizmni o'zgartirib bo'lmaydi", "Ha, bu bir xil narsa", "Ha, bunday hatto to'g'riroq"]],
      ],
    },
    {
      title: "So'z yasalish usullari",
      goal: "So'z qanday yasalganini aniqlash.",
      body: [
        ["Old qo'shimcha usuli: ходить (yurmoq) → вы-ходить (chiqmoq).", "Suffiks usuli: дом (uy) → дом-ик (uycha).", "Old qo'shimcha-suffiks usuli: окно (deraza) → под-окон-ник (deraza tokchasi).", "Qo'shish: пар (bug') + ход (yurish) → пароход (paroxod).", "Suffikssiz usul: синий (ko'k) → синь (ko'klik)."],
        "Usulni aniqlash uchun berilgan so'z qaysi so'zdan yasalganini top va qaysi qism qo'shilganiga qara.",
      ],
      quiz: [
        ["«Домик» (uycha) so'zi qanday yasalgan?", ["Suffiks usulida", "Old qo'shimcha usulida", "Qo'shish usulida"]],
        ["«Выходить» (chiqmoq) so'zi qanday yasalgan?", ["Old qo'shimcha usulida", "Suffiks usulida", "Suffikssiz usulda"]],
        ["«Пароход» (paroxod) so'zi qanday yasalgan?", ["Qo'shish usulida", "Old qo'shimcha usulida", "Suffiks usulida"]],
        ["«Подоконник» (deraza tokchasi) so'zi qanday yasalgan?", ["Old qo'shimcha-suffiks usulida", "Faqat old qo'shimcha usulida", "Qo'shish usulida"]],
        ["«Синь» (ko'klik) qaysi so'zdan yasalgan?", ["синий (ko'k)", "синица (chittak)", "сине (ko'k-)"]],
      ],
    },
  ],

  reading: [
    {
      title: "A. S. Pushkin. «Dubrovskiy»",
      goal: "Roman syujeti, qahramonlari va nizoning sababini bilish.",
      body: [
        "Boy pomeshchik Kirila Petrovich Troyekurov va kambag'al dvoryanin Andrey Gavrilovich Dubrovskiy do'st edilar. Bir kuni ular itxonada janjallashib qolishdi. Troyekurov sud orqali nohaq Dubrovskiyning Kistenyovka mulkini tortib oldi. Andrey Gavrilovich haqoratga chiday olmay vafot etdi.",
        "Uning o'g'li Vladimir Dubrovskiy boylardan o'ch oluvchi qaroqchiga aylandi. U Troyekurovning qizi Mashani sevib qoldi. Ammo Mashani keksa knyaz Vereyskiyga erga berishdi.",
        "Asosiy mavzular: or-nomus va nomussizlik, adolatsizlik, sevgi va olijanoblik.",
      ],
      quiz: [
        ["Troyekurov va katta Dubrovskiy nima sababdan janjallashdi?", ["Itxonadagi janjal tufayli", "Qarz tufayli", "Duel tufayli"]],
        ["Troyekurov qaysi mulkni tortib oldi?", null],
        ["Vladimir Dubrovskiy kim bo'ldi?", ["Olijanob qaroqchi", "Sudya", "Savdogar"]],
        ["Vladimir kimni sevib qoldi?", ["Masha Troyekurovani", "Sudyaning qizini", "Knyaz Vereyskiyning qizini"]],
        ["Mashani kimga erga berishdi?", ["Knyaz Vereyskiyga", "Dubrovskiyga", "Ispravnikka"]],
      ],
    },
    {
      title: "M. Yu. Lermontov. «Bulutlar»",
      goal: "She'rning kayfiyatini va asosiy fikrini tushunish.",
      body: [
        "Ma'nosi: «Osmon bulutchalari, abadiy sayyohlar! Siz zangori dasht bo'ylab, marvarid zanjir bo'lib, xuddi men kabi surgunlardek, aziz shimoldan janub tomonga yelib borasiz».",
        "Lermontov bu she'rni Kavkazga surgunga ketayotganda yozgan. Shoir o'zini bulutlarga o'xshatadi: u ham surgun. Ammo oxirida u shuni sezadi: bulutlar erkin, ularning «vatani yo'q», u esa vatanini sog'inadi.",
        ["Murojaat: «Тучки небесные» (Osmon bulutchalari).", "Epitetlar: «zangori dasht», «marvarid zanjir».", "O'xshatish: «xuddi men kabi surgunlar»."],
      ],
      quiz: [
        ["«Bulutlar» she'rining muallifi kim?", null],
        ["Shoir bulutlarni kimga o'xshatadi?", ["O'ziga — surgunga", "Qushlarga", "Kemalarga"]],
        ["Bulutlar qayoqqa yelib boradi?", ["Shimoldan janub tomonga", "Janubdan shimolga", "G'arbga"]],
        ["«Цепью жемчужною» (marvarid zanjir bo'lib) — bu…", ["epitet", "jonlantirish", "qofiya"]],
        ["She'rning kayfiyati qanday?", ["G'amgin, vatanni sog'inish", "Quvnoq", "G'azabli"]],
      ],
    },
    {
      title: "I. S. Turgenev. «Bejin o'tlog'i»",
      goal: "Hikoya syujeti va qahramonlar xarakterini tushunish.",
      body: [
        "Hikoya «Ovchining xotiralari» to'plamiga kiradi. Ovchi kechqurun adashib, Bejin o'tlog'idagi gulxan oldiga chiqib qoldi. U yerda beshta dehqon bolasi tunda otlarni boqardi: Fedya, Pavlusha, Ilyusha, Kostya va Vanya.",
        "Tun bo'yi bolalar bir-biriga uy jini, o'rmon jini, suv parisi va suv jini haqida qo'rqinchli hikoyalar aytib berishdi. Ovchi ularni tinglab, tungi tabiatga mahliyo bo'ldi.",
        "Pavlusha — eng jasuri: u kechasi yolg'iz daryoga bordi va bo'rilarni haydab yubordi. Oxirida muallif o'sha yili Pavel otdan yiqilib halok bo'lganini aytadi.",
      ],
      quiz: [
        ["«Bejin o'tlog'i» hikoyasi qaysi to'plamga kiradi?", ["«Ovchining xotiralari»", "«Belkin qissalari»", "«Ertaklar»"]],
        ["Gulxan oldida nechta bola o'tirgan edi?", ["Beshta", "Uchta", "Yettita"]],
        ["Bolalar tunda dalada nima uchun edi?", ["Otlarni boqishardi (tungi o'tloq)", "Baliq ovlashardi", "Xazina qidirishardi"]],
        ["Qaysi bola eng jasur edi?", null],
        ["Bolalar bir-biriga nima haqida gapirib berishdi?", ["Uy jinlari, o'rmon jinlari va suv parilari haqida", "Maktab haqida", "Dengizorti sayohatlar haqida"]],
      ],
    },
  ],

  nature: [
    {
      title: "Hujayra — hayot asosi",
      goal: "O'simlik hujayrasining tuzilishini bilish.",
      body: [
        "Barcha tirik organizmlar hujayralardan iborat. Hujayralar mikroskopda ko'riladi. Hujayralarni birinchi bo'lib 1665-yilda Robert Guk ko'rgan.",
        ["Qobiq (hujayra devori) hujayrani himoya qiladi va unga shakl beradi.", "Sitoplazma — hujayra ichidagi yopishqoq modda.", "Yadro hujayra hayotini boshqaradi.", "Xloroplastlar — yashil tanachalar, ularda fotosintez boradi.", "Vakuola — hujayra shirasi bilan to'lgan bo'shliq."],
      ],
      quiz: [
        ["Barcha tirik organizmlar nimadan iborat?", ["Hujayralardan", "Toshlardan", "Suvdan"]],
        ["Hujayraning qaysi qismi uning hayotini boshqaradi?", ["Yadro", "Vakuola", "Qobiq"]],
        ["Hujayrada fotosintez qayerda boradi?", ["Xloroplastlarda", "Yadroda", "Vakuolada"]],
        ["Hujayralarni birinchi bo'lib kim ko'rgan?", ["Robert Guk", "Isaak Nyuton", "Abu Ali ibn Sino"]],
        ["Vakuola — bu nima?", ["Hujayra shirasi bilan to'lgan bo'shliq", "Yashil tanacha", "Hujayra qobig'i"]],
      ],
    },
    {
      title: "Ildiz va ildiz tizimlari",
      goal: "Ildizning vazifalari va ildiz tizimlari turlarini bilish.",
      body: [
        "Ildiz o'simlikni tuproqda mustahkamlaydi, mineral moddalar erigan suvni so'radi va ozuqa moddalarni to'plashi mumkin (sabzi, lavlagi).",
        ["Asosiy ildiz urug'ning murtak ildizchasidan rivojlanadi.", "Yon ildizlar asosiy ildizdan chiqadi.", "Qo'shimcha ildizlar poya yoki barglardan o'sib chiqadi."],
        ["O'q ildiz tizimi — asosiy ildiz yaqqol ko'rinadi (loviya, qoqio't)", "Popuk ildiz tizimi — qo'shimcha ildizlar to'pi (bug'doy, piyoz)"],
      ],
      quiz: [
        ["Ildiz tuproqdan nimani so'radi?", ["Mineral moddalar erigan suvni", "Havodagi kislorodni", "Yorug'likni"]],
        ["Bug'doyning ildiz tizimi qanday?", ["Popuk ildiz", "O'q ildiz", "Hech qanday"]],
        ["Qoqio'tning ildiz tizimi qanday?", ["O'q ildiz", "Popuk ildiz", "Havo ildizi"]],
        ["Asosiy ildiz nimadan rivojlanadi?", ["Urug'ning murtak ildizchasidan", "Bargdan", "Guldan"]],
        ["Qaysi ildizda ozuqa moddalar to'planadi?", ["Sabzining ildizmevasida", "Bug'doy ildizida", "Hech qaysisida"]],
      ],
    },
    {
      title: "Fotosintez",
      goal: "O'simlik ozuqa moddalarni qanday hosil qilishini tushuntirish.",
      body: [
        "Fotosintez — yorug'likda xloroplastlarda karbonat angidrid va suvdan organik moddalar hosil bo'lishi. Bunda kislorod ajralib chiqadi.",
        ["karbonat angidrid + suv → (yorug'lik, xloroplastlar) → shakar (kraxmal) + kislorod"],
        "Fotosintez tufayli o'simliklar Yerdagi deyarli barcha tiriklikni oziqlantiradi va havoni kislorod bilan to'ldiradi.",
      ],
      quiz: [
        ["Fotosintez uchun nima kerak?", ["Yorug'lik, suv va karbonat angidrid", "Faqat qorong'ilik", "Faqat tuproq"]],
        ["Fotosintezda qaysi gaz ajralib chiqadi?", ["Kislorod", "Karbonat angidrid", "Azot"]],
        ["Fotosintez qayerda boradi?", ["Xloroplastlarda", "Ildizlarda", "Yadroda"]],
        ["Fotosintezda qanday modda hosil bo'ladi?", ["Shakar (kraxmal)", "Tuz", "Qum"]],
        ["Nega fotosintez odamlar uchun muhim?", ["Kislorod va oziq beradi", "Quyoshni sovutadi", "Shamol hosil qiladi"]],
      ],
    },
  ],
}
