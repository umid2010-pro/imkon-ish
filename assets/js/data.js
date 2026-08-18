/**
 * "Imkoniyatlar Kengligi" — Enterprise Data Architecture
 * Comprehensive database for inclusive vacancies, partners, interview questions, CV samples, and UN SDG impact metrics
 */

window.APP_DATA = {
  // Global UN SDG 8 & 10 Impact Telemetry
  stats: {
    globalDisabledEmploymentRate: 30, // % of disabled people in global workforce (UN SDG baseline)
    generalWorkforceRate: 78,
    platformHiredCandidates: 1420,
    inclusiveCompaniesCount: 86,
    averageTimeToHire: "14 kun",
    matchAccuracyRate: "94%",
    totalEconomicContribution: "48.5 mlrd UZS",
    trainingGraduatesCount: 3200,
    accommodatedWorkplacesCount: 940
  },

  // Inclusive Partner Organizations
  partners: [
    { name: "IT Park Uzbekistan", type: "Davlat tashkiloti", badge: "A+ Inklyuziv Hub", verified: true },
    { name: "Uzum Technologies", type: "E-Commerce & FinTech", badge: "100% Masofaviy & Qulay", verified: true },
    { name: "EPAM Systems", type: "Global IT", badge: "Global WCAG Standarti", verified: true },
    { name: "BMT Taraqqiyot Dasturi (UNDP)", type: "Xalqaro tashkilot", badge: "SDG 8 & 10 Hamkori", verified: true },
    { name: "Beeline Uzbekistan", type: "Telekommunikatsiya", badge: "Moslashtirilgan Ish Dasturi", verified: true },
    { name: "Payme / TBC Bank", type: "Fintech", badge: "Surdotarjimon Xizmati", verified: true },
    { name: "Mohirdev Platformasi", type: "EdTech", badge: "Bepul IT Ta'lim Grantlari", verified: true },
    { name: "O'zbekiston Nogironlar Jamiyati", type: "Jamoat tashkiloti", badge: "Bosh Maslahatchi Kengash", verified: true }
  ],

  // Enterprise Inclusive Vacancies
  vacancies: [
    {
      id: 1,
      title: "Frontend Dasturchi (React.js / TypeScript)",
      company: "Uzum Technologies",
      department: "engineering",
      location: "Toshkent / 100% Masofaviy",
      workType: "remote",
      salary: "14,000,000 - 22,000,000 UZS",
      salaryNumeric: 18000000,
      experience: "1-3 yil",
      employmentType: "To'liq stavka",
      aiMatch: 96,
      featured: true,
      accommodations: [
        "100% Masofaviy ish (Full Remote)",
        "Ekran o'quvchi (Screen Reader) mos dasturlar",
        "Asinxron jamoa va moslashuvchan ish soatlari",
        "Kompaniya tomonidan ergonomik jihozlar"
      ],
      accommodationTypes: ["remote", "screen_reader", "flexible_hours"],
      description: "Biz inklyuziv jamoamizga foydalanuvchi interfeyslari va veb-qulaylik (WCAG) standartlariga javob beruvchi mahsulotlar yaratish uchun iqtidorli Frontend dasturchini taklif qilamiz.",
      requirements: [
        "React.js, TypeScript va zamonaviy CSS bilan ishlash",
        "Veb qulaylik (a11y) asosiy tushunchalari",
        "Git va jamoaviy masofaviy vositalardan foydalanish"
      ],
      benefits: [
        "Uyda qulay ishlash uchun 5,000,000 UZS gacha jihozlash granti",
        "To'liq tibbiy sug'urta va cheksiz kasallik ta'tili",
        "Bepul ingliz tili va malaka oshirish kurslari"
      ]
    },
    {
      id: 2,
      title: "Mijozlarni Qo'llab-Quvvatlash Mutaxassisi (Matnli Chat)",
      company: "Beeline Uzbekistan",
      department: "support",
      location: "100% Masofaviy (Online Chat)",
      workType: "remote",
      salary: "6,000,000 - 9,500,000 UZS",
      salaryNumeric: 8000000,
      experience: "Tajribasiz ham qabul qilinadi",
      employmentType: "Moslashuvchan grafik",
      aiMatch: 95,
      featured: true,
      accommodations: [
        "Eshitishda imkoniyati cheklanganlar uchun 100% matnli aloqa",
        "Ovozli qo'ng'iroqlarsiz, faqat chat tizimi",
        "Qisqa 4 soatlik yoki 8 soatlik smenalar"
      ],
      accommodationTypes: ["hearing", "remote", "flexible_hours"],
      description: "Mijozlarga faqat matnli onlayn chat orqali yordam ko'rsatish. Ovozli muloqot talab etilmaydi, eshitishida imkoniyati cheklangan shaxslar uchun ayni muddao.",
      requirements: [
        "O'zbek va rus tillarida savodli yozma muloqot",
        "Kompyuterda tez matn terish qobiliyati",
        "Xushmuomalalik va mijozga g'amxo'rlik"
      ],
      benefits: [
        "Bepul noutbuk va tezyurar internet xarajati qoplab beriladi",
        "Rasmiy mehnat daftarchasi va barcha soliq imtiyozlari"
      ]
    },
    {
      id: 3,
      title: "Junior QA Tester (Accessibility & Usability)",
      company: "EPAM Systems",
      department: "engineering",
      location: "Gibrid yoki 100% Masofaviy",
      workType: "remote",
      salary: "10,000,000 - 16,000,000 UZS",
      salaryNumeric: 13000000,
      experience: "6 oy - 1 yil",
      employmentType: "To'liq stavka",
      aiMatch: 94,
      featured: false,
      accommodations: [
        "Ekran o'quvchi (NVDA, JAWS, VoiceOver) orqali testlash",
        "100% masofaviy xalqaro loyihalar",
        "Shaxsiy mentor va moslashuv rejasi"
      ],
      accommodationTypes: ["screen_reader", "remote", "neurodivergent"],
      description: "Global ilovalarni nogironligi bor shaxslar uchun qulayligini (WCAG 2.1 AA) tekshirish va xatoliklarni aniqlash.",
      requirements: [
        "Dasturiy ta'minotni testlash asoslari",
        "Ekran o'quvchi vositalaridan amaliy foydalanish tajribasi",
        "Boshlang'ich ingliz tili"
      ],
      benefits: [
        "EPAM Global sertifikatlari",
        "Xalqaro jamoada ingliz tilini o'stirish imkoniyati"
      ]
    },
    {
      id: 4,
      title: "UI/UX Dizayner & Inklyuziv Dizayn Mutaxassisi",
      company: "Payme FinTech",
      department: "design",
      location: "Toshkent (Pandusli Ofis) / Masofaviy",
      workType: "hybrid",
      salary: "15,000,000 - 24,000,000 UZS",
      salaryNumeric: 19500000,
      experience: "2+ yil",
      employmentType: "To'liq stavka",
      aiMatch: 92,
      featured: false,
      accommodations: [
        "Ofisda avtomatik eshiklar, panduslar va lift mavjud",
        "Rang ko'rligi (Color blindness) uchun maxsus monitorlar",
        "Haftada 3 kun masofaviy ishlash imkoniyati"
      ],
      accommodationTypes: ["physical_ramps", "remote", "flexible_hours"],
      description: "Moliya ilovalarini keksalar va nogironligi bor insonlar uchun qulay va intuitiv qilish ustida ishlash.",
      requirements: [
        "Figma va dizayn tizimlari bilan ishlash",
        "Kontrast, tipografiya va ergonomika tamoyillarini bilish",
        "Portfolio"
      ],
      benefits: [
        "Fintech sohasidagi eng yuqori darajadagi bonuslar",
        "Sport zali va fizioterapiya uchun kompensatsiya"
      ]
    },
    {
      id: 5,
      title: "Data Annotation & AI O'rgatish Mutaxassisi",
      company: "IT Park Uzbekistan",
      department: "data",
      location: "100% Masofaviy (Barcha hududlardan)",
      workType: "remote",
      salary: "5,500,000 - 8,500,000 UZS",
      salaryNumeric: 7000000,
      experience: "Tajribasiz",
      employmentType: "To'liq yoki yarim stavka",
      aiMatch: 91,
      featured: false,
      accommodations: [
        "O'zbekistonning istalgan viloyatidan 100% onlayn ishlash",
        "Erkin kun tartibi (istalgan soatda ishlash mumkin)",
        "Oddiy va tushunarli vizual interfeys"
      ],
      accommodationTypes: ["remote", "flexible_hours", "neurodivergent"],
      description: "Sun'iy intellekt modellarini o'qitish uchun matn, rasm va audio ma'lumotlarni belgilash (annotation).",
      requirements: [
        "Diqqatlilik va internetdan foydalanish",
        "Kompyuter yoki planshetga ega bo'lish"
      ],
      benefits: [
        "IT Park rezidenti imtiyozlari",
        "Bepul IT dasturlash kurslariga yo'llanma"
      ]
    },
    {
      id: 6,
      title: "Kontent Menejer & SEO Kopirayter",
      company: "Mohirdev",
      department: "marketing",
      location: "100% Masofaviy",
      workType: "remote",
      salary: "7,000,000 - 11,000,000 UZS",
      salaryNumeric: 9000000,
      experience: "1 yil",
      employmentType: "Moslashuvchan",
      aiMatch: 89,
      featured: false,
      accommodations: [
        "100% Masofaviy va asinxron aloqa",
        "Matnni ovozda yozish (Speech-to-Text) vositalari qo'llab-quvvatlanadi"
      ],
      accommodationTypes: ["remote", "flexible_hours"],
      description: "Ta'lim platformasi uchun IT mavzularida foydali maqolalar va qo'llanmalar yozish.",
      requirements: [
        "O'zbek tilida ravon va savodli yozish",
        "IT sohasiga qiziqish"
      ],
      benefits: [
        "Mohirdev dagi barcha kurslarga cheksiz bepul kirish",
        "Yillik sayohat vaucherlari"
      ]
    }
  ],

  // AI Interview Simulator Question Bank
  interviewQuestions: [
    {
      id: 1,
      category: "Masofaviy ish & Moslashuv",
      question: "O'zingiz uchun masofaviy ish joyini qanday tashkil qilgansiz va jamoa bilan asinxron aloqani qanday yo'lga qo'yasiz?",
      idealPoints: ["Ish qurollari", "Asinxron aloqa madaniyati", "Vaqtni rejalashtirish"]
    },
    {
      id: 2,
      category: "Texnik Ko'nikmalar",
      question: "Frontend loyihalarda WCAG 2.1 AA veb-qulaylik standartlarini ta'minlash uchun qanday usullardan foydalanasiz?",
      idealPoints: ["Semantik HTML", "ARIA atributlari", "Kontrast nisbati (4.5:1)", "Klaviatura fokusi"]
    },
    {
      id: 3,
      category: "Muammolarni Hal Qilish",
      question: "Loyihada kutilmagan to'siq yoki texnik qiyinchilikka duch kelganingizda qanday harakat qilasiz?",
      idealPoints: ["Tahlil qilish", "Jamoa bilan ochiq muloqot", "Hujjatlarni o'rganish"]
    }
  ],

  // Sample Resumes for Laser Scanner Demo
  cvSamples: {
    frontend: {
      name: "Frontend & Accessibility Dasturchi",
      text: `Azizbek Saidov — Senior Frontend Dasturchi.
Texnologiyalar: React.js, TypeScript, Next.js, HTML5, CSS3, Tailwind CSS, WCAG 2.1 AA Accessibility, Git, Jest.
Tajriba: 3 yil Frontend dasturlash bo'yicha masofaviy loyihalar, ekran o'quvchilar bilan moslashtirilgan to'siqsiz veb-saytlar va foydalanuvchi interfeyslari yaratish.
Talab etiladigan qulaylik: 100% Masofaviy ish joyi, asinxron aloqa.`
    },
    qa: {
      name: "Accessibility QA Tester",
      text: `Dilnoza Rahimova — QA Accessibility Tester.
Texnologiyalar: NVDA, JAWS, VoiceOver, Chrome DevTools, Lighthouse, WCAG 2.1 AA audit, Jira, TestRail.
Tajriba: 2 yil veb va mobil ilovalarni ekran o'quvchilar va rang kontrasti bo'yicha sifatini tekshirish.
Talab etiladigan qulaylik: Ekran o'quvchi bilan mos dasturiy ta'minot, masofaviy ish.`
    },
    support: {
      name: "Mijozlarga Xizmat Ko'rsatish (Matnli)",
      text: `Jasurbek Ergashev — Onlayn Chat Qo'llab-quvvatlash Mutaxassisi.
Ko'nikmalar: Tez yozish (400 belgi/daqiqada), O'zbek va rus tillari, CRM tizimlari, mijozlar bilan yozma muloqot.
Talab etiladigan qulaylik: Eshitishda imkoniyati cheklangan, faqat matnli onlayn chat orqali ishlash.`
    }
  },

  // Inclusive Talent Showcase & Self-Promotion Candidate Directory
  candidates: [
    {
      id: 'cand-1',
      name: 'Azizbek Saidov',
      role: 'candidate',
      title: 'Senior Frontend & WCAG 2.1 AA Dasturchi',
      status: 'Faol izlanmoqda',
      isOpenToWork: true,
      bio: '3+ yillik tajribaga ega Frontend dasturchiman. Inklyuziv veb-saytlar va WCAG 2.1 AA veb-qulaylik standartlariga to\'liq mos interfeyslar yarataman. Masofaviy jamoada ishlashga tayyorman.',
      category: 'engineering',
      skills: ['React.js', 'TypeScript', 'WCAG 2.1 AA', 'Next.js', 'TailwindCSS', 'Jest'],
      accommodations: [
        '100% Masofaviy ish (Full Remote)',
        'Asinxron jamoaviy aloqa',
        'Moslashuvchan ish soatlari'
      ],
      accommodationTypes: ['remote', 'flexible_hours'],
      condition: 'Harakatlanishda imkoniyati cheklangan (Masofaviy ish)',
      expectedSalary: '16,000,000 - 22,000,000 UZS',
      salaryNumeric: 18000000,
      experience: '3+ yil',
      location: 'Toshkent / Masofaviy',
      portfolioUrl: 'https://github.com/azizbek-dev',
      audioIntro: 'Assalomu alaykum! Men to\'siqsiz va ekran o\'quvchilarga to\'liq mos veb interfeyslar yaratuvchi dasturchiman.',
      aiScore: 98,
      avatar: 'AS',
      verified: true
    },
    {
      id: 'cand-2',
      name: 'Dilnoza Rahimova',
      role: 'candidate',
      title: 'QA Accessibility & Screen Reader Tester',
      status: 'Faol izlanmoqda',
      isOpenToWork: true,
      bio: 'Ko\'rishda imkoniyati cheklangan mutaxassis. NVDA, JAWS va VoiceOver ekran o\'quvchilari orqali xalqaro ilovalarni WCAG standartlari bo\'yicha sifatini tekshiraman.',
      category: 'engineering',
      skills: ['NVDA', 'JAWS', 'VoiceOver', 'WCAG 2.1 Audit', 'Jira', 'TestRail', 'Lighthouse'],
      accommodations: [
        'Ekran o\'quvchi bilan mos dasturlar',
        '100% Masofaviy ish',
        'Shaxsiy moslashuv rejasi'
      ],
      accommodationTypes: ['screen_reader', 'remote'],
      condition: 'Ko\'rishda imkoniyati cheklangan (Ekran o\'quvchi)',
      expectedSalary: '12,000,000 - 16,000,000 UZS',
      salaryNumeric: 14000000,
      experience: '2 yil',
      location: 'Samarqand / Masofaviy',
      portfolioUrl: 'https://dilnoza-qa.dev',
      audioIntro: 'Salom! Men dasturiy ta\'minotning to\'siqsiz ekanligini sinovdan o\'tkazaman va audit hisobotlarini tayyorlayman.',
      aiScore: 96,
      avatar: 'DR',
      verified: true
    },
    {
      id: 'cand-3',
      name: 'Jasurbek Ergashev',
      role: 'candidate',
      title: 'Onlayn Chat & Matnli CRM Qo\'llab-quvvatlash',
      status: 'Faol izlanmoqda',
      isOpenToWork: true,
      bio: 'Eshitishda imkoniyati cheklangan mutaxassis. Daqiqasiga 420 ta belgi tezlikda matn teraman. Mijozlar bilan faqat yozma chat va CRM orqali tezkor muloqot qilaman.',
      category: 'support',
      skills: ['Tezkor yozish (420 simvol/daq)', 'CRM & Helpdesk', 'O\'zbek & Rus tillari', 'Imo-ishora tili'],
      accommodations: [
        'Faqat matnli onlayn chat aloqasi',
        'Ovozli qo\'ng\'iroqlarsiz ish tartibi',
        'Surdotarjimon ko\'magi'
      ],
      accommodationTypes: ['hearing', 'remote', 'flexible_hours'],
      condition: 'Eshitishda imkoniyati cheklangan (Faqat matnli)',
      expectedSalary: '7,000,000 - 10,000,000 UZS',
      salaryNumeric: 8500000,
      experience: '1.5 yil',
      location: 'Farg\'ona / Masofaviy',
      portfolioUrl: 'https://jasur-support.uz',
      audioIntro: 'Assalomu alaykum! Men yozma chatlar va mijozlarga xizmat ko\'rsatish bo\'yicha masofaviy ishlashga tayyorman.',
      aiScore: 95,
      avatar: 'JE',
      verified: true
    },
    {
      id: 'cand-4',
      name: 'Malika Usmonova',
      role: 'candidate',
      title: 'UI/UX & Inklyuziv Dizayner',
      status: 'Faol izlanmoqda',
      isOpenToWork: true,
      bio: 'Rang ko\'rligi va harakat cheklovlariga ega insonlar uchun qulay, yuqori kontrastli (16:1) va estetik Figma dizayn tizimlarini ishlab chiqaman.',
      category: 'design',
      skills: ['Figma', 'Design Systems', 'WCAG Contrast 16:1', 'User Research', 'Prototyping', 'Accessibility'],
      accommodations: [
        'Pandusli ofis yoki 100% Masofaviy',
        'Ergonomik ish o\'rni jihozlari',
        'Gibrid moslashuvchan grafik'
      ],
      accommodationTypes: ['physical_ramps', 'remote', 'flexible_hours'],
      condition: 'Harakatlanishda imkoniyati cheklangan (Arava / Pandus)',
      expectedSalary: '18,000,000 - 25,000,000 UZS',
      salaryNumeric: 20000000,
      experience: '3+ yil',
      location: 'Toshkent / Gibrid',
      portfolioUrl: 'https://behance.net/malikaux',
      audioIntro: 'Salom! Men inklyuziv va foydalanuvchiga qulay raqamli mahsulotlar dizaynini yarataman.',
      aiScore: 94,
      avatar: 'MU',
      verified: true
    },
    {
      id: 'cand-5',
      name: 'Sardorbek Qodirov',
      role: 'candidate',
      title: 'Data Annotation & AI Training Mutaxassisi',
      status: 'Faol izlanmoqda',
      isOpenToWork: true,
      bio: 'Sun\'iy intellekt modellarini o\'qitish uchun matn, rasm va ovozli ma\'lumotlarni aniq belgilash (annotation, tagging) bo\'yicha tajribali mutaxassis.',
      category: 'data',
      skills: ['CVAT', 'LabelImg', 'Text Labeling', 'Data Quality Control', 'AI Model Validation', 'Excel'],
      accommodations: [
        '100% Masofaviy ish (viloyatdan)',
        'Erkin va moslashuvchan vaqt tartibi',
        'Oddiy vizual interfeys'
      ],
      accommodationTypes: ['remote', 'flexible_hours', 'neurodivergent'],
      condition: 'Erkin grafikli masofaviy ish',
      expectedSalary: '6,000,000 - 9,000,000 UZS',
      salaryNumeric: 7500000,
      experience: '1 yil',
      location: 'Andijon / Masofaviy',
      portfolioUrl: 'https://sardor-data.uz',
      audioIntro: 'Assalomu alaykum! Men AI ma\'lumotlar bazasini to\'ldirish va belgilash bo\'yicha masofaviy ishga tayyorman.',
      aiScore: 92,
      avatar: 'SQ',
      verified: true
    }
  ],

  // Mentors and Inclusive Coaches
  mentors: [
    {
      id: 'mnt-1',
      name: 'Dilshod Aliyev',
      role: 'mentor',
      title: 'Oliy toifali Surdotarjimon & Mentor',
      specialty: 'Imo-ishora tili, Eshitishda to\'siqsiz intervyu tayyorgarligi',
      avatar: 'DA',
      sessionsGiven: 145,
      rating: 4.95,
      online: true,
      bio: '10 yillik surdotarjima va masofaviy kouching tajribasi. IT kompaniyalar va nomzodlar o\'rtasidagi suhbatlarda ko\'maklashaman.'
    },
    {
      id: 'mnt-2',
      name: 'Gulnoza Karimova',
      role: 'mentor',
      title: 'Xalqaro Accessibility & Karyera Kouchi',
      specialty: 'WCAG 2.1 AA auditi, CV tahlili va Portfolio tavsiyalari',
      avatar: 'GK',
      sessionsGiven: 180,
      rating: 4.98,
      online: true,
      bio: 'Nogironligi bor mutaxassislarni global IT kompaniyalariga (EPAM, Yandex, Uzum) ishga kirishiga rezyume va intervyu bo\'yicha tayyorlayman.'
    }
  ],

  // Mentor Requests for Mentor Dashboard
  mentorRequests: [
    {
      id: 'req-1',
      candidateName: 'Jasurbek Ergashev',
      candidateId: 'cand-3',
      serviceType: 'Surdotarjima — Onlayn Texnik Intervyu',
      company: 'Beeline Uzbekistan',
      date: '2026-08-20, 14:00',
      status: 'pending', // pending | accepted | completed
      notes: 'Beeline HR bilan onlayn suhbatda imo-ishora tilida sinxron ko\'mak kerak.'
    },
    {
      id: 'req-2',
      candidateName: 'Dilnoza Rahimova',
      candidateId: 'cand-2',
      serviceType: 'Rezyume & Portfolio Auditi',
      company: 'EPAM Systems',
      date: '2026-08-19, 11:30',
      status: 'accepted',
      notes: 'QA Accessibility portfolio loyihalarini xalqaro standartlarga moslashtirish bo\'yicha audit.'
    },
    {
      id: 'req-3',
      candidateName: 'Sardorbek Qodirov',
      candidateId: 'cand-5',
      serviceType: 'Masofaviy ish bo\'yicha konsultatsiya',
      company: 'IT Park Uzbekistan',
      date: '2026-08-22, 16:00',
      status: 'pending',
      notes: 'Data Annotation platformalarida shartnoma tuzish va soliq imtiyozlari haqida maslahat.'
    }
  ]
};
