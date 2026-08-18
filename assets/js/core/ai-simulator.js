/**
 * "Imkoniyatlar Kengligi" — Senior AI Simulation Engine
 * CV Laser Scanning, ATS scoring, Speech Synthesis Interview Evaluator, Cover Letter Generator, and Bilateral Neural Translator
 */

window.AiEngine = {
  // Translations dictionary for realistic multi-language chat
  phraseBook: {
    uz: {
      greeting: "Assalomu alaykum! Inklyuziv muloqot tizimiga xush kelibsiz.",
      remote_ok: "Masofaviy ish joyi uchun barcha maxsus jihozlar yetkazib beriladi.",
      interview_invite: "Sizni juma kuni soat 15:00 da onlayn texnik suhbatga taklif qilamiz.",
      accessibility_confirm: "Bizning ofisimiz 100% panduslar, lift va surdotarjimon bilan jihozlangan."
    },
    en: {
      greeting: "Hello! Welcome to the inclusive communication network.",
      remote_ok: "All specialized equipment for your remote workspace will be delivered.",
      interview_invite: "We would like to invite you to an online technical interview this Friday at 15:00.",
      accessibility_confirm: "Our office is 100% equipped with wheelchair ramps, elevators, and sign language interpreters."
    },
    ru: {
      greeting: "Здравствуйте! Добро пожаловать в инклюзивную систему общения.",
      remote_ok: "Всё необходимое оборудование для удаленной работы будет предоставлено компанией.",
      interview_invite: "Приглашаем вас на онлайн техническое собеседование в эту пятницу в 15:00.",
      accessibility_confirm: "Наш офис на 100% оборудован пандусами, лифтами и услугами сурдоперевода."
    },
    de: {
      greeting: "Hallo! Willkommen im barrierefreien Kommunikationsnetzwerk.",
      remote_ok: "Die gesamte Ausrüstung für Ihren Telearbeitsplatz wird bereitgestellt.",
      interview_invite: "Wir laden Sie zu einem technischen Online-Interview am Freitag um 15:00 Uhr ein.",
      accessibility_confirm: "Unser Büro ist zu 100% barrierefrei mit Rampen und Aufzügen ausgestattet."
    },
    tr: {
      greeting: "Merhaba! Kapsayıcı iletişim ağına hoş geldiniz.",
      remote_ok: "Uzaktan çalışma alanınız için gerekli tüm ekipmanlar sağlanacaktır.",
      interview_invite: "Sizi Cuma günü saat 15:00'te çevrimiçi teknik mülakata davet etmek istiyoruz.",
      accessibility_confirm: "Ofisimiz %100 tekerlekli sandalye rampaları ve asansörlerle donatılmıştır."
    }
  },

  /**
   * Scan and analyze a candidate resume against inclusive job market benchmarks
   */
  async scanResume(cvText, category = 'frontend') {
    // Artificial latency for senior laser scanning animation
    await new Promise(resolve => setTimeout(resolve, 1400));

    const lower = (cvText || '').toLowerCase();
    const skillsFound = [];
    
    const skillTaxonomy = [
      'react', 'javascript', 'typescript', 'html', 'css', 'vue', 'angular',
      'accessibility', 'wcag', 'git', 'figma', 'python', 'sql', 'qa', 'testing',
      'screen reader', 'remote', 'customer support', 'ui/ux', 'design'
    ];

    skillTaxonomy.forEach(s => {
      if (lower.includes(s)) skillsFound.push(s.toUpperCase());
    });

    if (skillsFound.length === 0) {
      skillsFound.push('REACT.JS', 'TYPESCRIPT', 'WCAG 2.1 AA', 'GIT', 'REMOTE WORKFLOW');
    }

    const atsScore = Math.min(98, Math.max(78, 70 + skillsFound.length * 4));

    return {
      atsScore: atsScore,
      matchQuality: atsScore >= 90 ? "A'lo (Top 5%)" : "Yaxshi (Top 15%)",
      skillsExtracted: skillsFound,
      accommodationsDetected: [
        '100% Masofaviy ish (Remote-First)',
        'Ekran o\'quvchi bilan mos dasturlar',
        'Asinxron jamoaviy muloqot'
      ],
      strengths: [
        'WCAG 2.1 AA veb-qulaylik standartlari bo\'yicha amaliy tajriba mavjud',
        'Zamonaviy veb texnologiyalari (React / TypeScript) bo\'yicha aniq loyihalar keltirilgan',
        'Masofaviy jamoada asinxron ishlash ko\'nikmasi yuqori'
      ],
      recommendations: [
        'GitHub profilingizdagi ochiq manbali inklyuziv loyihalarga havolalarni qo\'shing',
        'Ingliz tili B2 sertifikatini ko\'rsatish xalqaro vakansiyalarga imkoniyatni 40% ga oshiradi'
      ],
      matchedVacanciesCount: 6
    };
  },

  /**
   * Evaluate user's spoken or typed answer in mock interview
   */
  evaluateInterviewAnswer(questionText, answerText) {
    const textLen = (answerText || '').trim().length;
    
    let clarityScore = textLen > 80 ? 9.5 : (textLen > 30 ? 8.2 : 6.5);
    let techScore = (answerText.toLowerCase().includes('react') || answerText.toLowerCase().includes('tajriba') || answerText.toLowerCase().includes('wcag') || answerText.toLowerCase().includes('jamoa')) ? 9.6 : 8.4;
    let inclusiveScore = 9.8;
    let overall = ((clarityScore + techScore + inclusiveScore) / 3).toFixed(1);

    return {
      overallScore: overall,
      clarityScore: clarityScore.toFixed(1),
      techScore: techScore.toFixed(1),
      inclusiveScore: inclusiveScore.toFixed(1),
      feedback: "Javobingiz juda aniq va professional tuzilgan. O'z qulaylik talablaringiz va masofaviy ish tajribangizni aniq ifodalaganingiz suhbatdoshda katta ishonch uyg'otadi.",
      tip: "Keyingi safar STAR (Situation, Task, Action, Result) metodikasidan foydalanib, natijani aniq raqamlar bilan boyiting."
    };
  },

  /**
   * One-Click AI Cover Letter Generator tailored to disability accommodations
   */
  generateCoverLetter(vacancy, candidate) {
    const comp = vacancy.company || 'Kompaniya';
    const title = vacancy.title || 'Mutaxassis';
    const name = candidate ? candidate.fullName : 'Azizbek Saidov';
    
    return `Hurmatli ${comp} jamoasi va kadrlar bo'limi,

Men "${title}" lavozimi bo'yicha vakansiyangizni katta qiziqish bilan o'rganib chiqdim. Ushbu yo'nalishdagi ko'nikmalarim, ayniqsa masofaviy ishlash tajribam va zamonaviy texnologiyalar bilan ishlash qobiliyatim jamoangizga katta qiymat qo'sha olishiga ishonaman.

Sizning kompaniyangizda inklyuzivlik va teng imkoniyatlar muhiti yaratilganligi meni juda ruhlantirdi. Men o'z ishimda yuqori mas'uliyat, sifatli natija va asinxron aloqa madaniyatini birinchi o'ringa qo'yaman.

Rezyumem va portfoliomni ilova qilgan holda, o'zaro hamkorlik imkoniyatlarini onlayn suhbatda muhokama qilishdan mamnun bo'laman.

Ehtirom bilan,
${name}
Bog'lanish: ${candidate ? candidate.email : 'aziz.saidov@example.com'}`;
  },

  /**
   * Instant bilingual & multilingual neural translation simulation
   * Translates between Uzbek, Russian, English, German, and Turkish seamlessly
   */
  translateText(text, targetLang = 'ru', sourceLang = 'auto') {
    if (!text || !text.trim()) return '';
    const clean = text.trim();
    const lower = clean.toLowerCase();

    // Auto-detect source language
    if (sourceLang === 'auto') {
      if (/[а-яё]/i.test(clean)) {
        sourceLang = 'ru';
      } else if (
        lower.includes('hello') || lower.includes('hi ') || lower.includes('thank') ||
        lower.includes('interview') || lower.includes('resume') || lower.includes('position') ||
        lower.includes('schedule')
      ) {
        sourceLang = 'en';
      } else if (
        lower.includes('hallo') || lower.includes('guten') || lower.includes('danke') ||
        lower.includes('willkommen')
      ) {
        sourceLang = 'de';
      } else {
        sourceLang = 'uz'; // default source for user input
      }
    }

    // If source and target language are the same, return as is
    if (sourceLang === targetLang) {
      return clean;
    }

    // 1. Uzbek -> Russian (UZ -> RU)
    if (sourceLang === 'uz' && targetLang === 'ru') {
      if (lower.includes('suhbatga') && (lower.includes('tayyor') || lower.includes('roziman'))) {
        return 'Большое спасибо, я полностью готов к онлайн-собеседованию.';
      }
      if (lower.includes('rezyume') && (lower.includes('yubor') || lower.includes('ilova') || lower.includes('portfoliom'))) {
        return 'Я прикрепил свое резюме и портфолио к сообщению для вашего ознакомления.';
      }
      if (lower.includes('nvda') || lower.includes('ekran o\'quvchi') || lower.includes('qulaylik')) {
        return 'Подтверждаю: на моем рабочем месте установлена и настроена программа экранного доступа NVDA.';
      }
      if (lower.includes('assalomu alaykum') || lower.includes('salom')) {
        return 'Здравствуйте! Рад нашему общению и возможности сотрудничества.';
      }
      if (lower.includes('rahmat') || lower.includes('tashakkur')) {
        return 'Большое спасибо за ваш подробный ответ и предоставленные условия.';
      }
      if (lower.includes('masofaviy') || lower.includes('remote') || lower.includes('uydan')) {
        return 'Я полностью готов работать в удаленном формате с гибким или асинхронным графиком.';
      }
      if (lower.includes('grafik') || lower.includes('vaqt') || lower.includes('soat')) {
        return 'Предложенное время и график работы мне отлично подходят.';
      }
      if (lower.includes('ha') || lower.includes('albatta')) {
        return 'Да, конечно. Буду рад обсудить все детали на встрече.';
      }
      if (lower.includes('savol')) {
        return 'У меня есть несколько вопросов по поводу условий и задач проекта.';
      }
      return `${clean} (Переведено на русский язык через AI)`;
    }

    // 2. Russian -> Uzbek (RU -> UZ)
    if (sourceLang === 'ru' && targetLang === 'uz') {
      if (lower.includes('здравствуйте') || lower.includes('привет') || lower.includes('добрый день')) {
        if (lower.includes('резюме') || lower.includes('рассмотрели')) {
          return 'Assalomu alaykum, Azizbek! Biz sizning rezyumengizni ko\'rib chiqdik. Veb-qulaylik (WCAG) va React bo\'yicha tajribangiz bizga juda ma\'qul keldi.';
        }
        return 'Assalomu alaykum! Siz bilan bog\'langanimizdan va suhbatlashayotganimizdan xursandmiz.';
      }
      if (lower.includes('оборудование') || lower.includes('удаленн') || lower.includes('техник')) {
        return 'Masofaviy ish joyingiz uchun barcha zarur maxsus texnik jihozlar kompaniya tomonidan to\'liq yetkazib beriladi.';
      }
      if (lower.includes('собеседование') || lower.includes('интервью') || lower.includes('встреч')) {
        return 'Sizni juma kuni soat 15:00 da onlayn texnik suhbatga taklif qilamiz. Ushbu vaqt sizga qulaymi?';
      }
      if (lower.includes('отлично') || lower.includes('договорились') || lower.includes('согласуем')) {
        return 'Ajoyib! Uchrashuvni kelishib olamiz. Masofaviy ishlash uchun barcha zarur qulay sharoitlarni yaratib beramiz.';
      }
      if (lower.includes('спасибо') || lower.includes('благодар')) {
        return 'Xabaringiz va qiziqishingiz uchun katta rahmat! Barcha ma\'lumotlarni qabul qildik.';
      }
      return `${clean} (AI orqali O'zbek tiliga tarjima qilindi)`;
    }

    // 3. Uzbek -> English (UZ -> EN)
    if (sourceLang === 'uz' && targetLang === 'en') {
      if (lower.includes('suhbatga') && lower.includes('tayyor')) {
        return 'Thank you very much, I am fully prepared for the online interview.';
      }
      if (lower.includes('rezyume') && (lower.includes('yubor') || lower.includes('ilova'))) {
        return 'I have attached my resume and portfolio for your review.';
      }
      if (lower.includes('nvda') || lower.includes('ekran o\'quvchi') || lower.includes('qulaylik')) {
        return 'Confirmation: NVDA screen reader software is configured on my workstation.';
      }
      if (lower.includes('assalomu alaykum') || lower.includes('salom')) {
        return 'Hello! Glad to connect and explore career opportunities with your team.';
      }
      if (lower.includes('rahmat') || lower.includes('tashakkur')) {
        return 'Thank you very much for your feedback, guidance and support.';
      }
      if (lower.includes('masofaviy') || lower.includes('remote')) {
        return 'I am fully set up with assistive tools for remote collaborative work.';
      }
      return `${clean} (AI Translated to English)`;
    }

    // 4. English -> Uzbek (EN -> UZ)
    if (sourceLang === 'en' && targetLang === 'uz') {
      if (lower.includes('hello') || lower.includes('hi ') || lower.includes('welcome')) {
        if (lower.includes('wcag') || lower.includes('resume') || lower.includes('impressed')) {
          return 'Salom Azizbek! Biz sizning WCAG 2.1 AA standartlari va veb-ilovalar uchun ekran o\'quvchi optimizatsiyalari bo\'yicha chuqur bilimlaringizdan juda ta\'sirlandik.';
        }
        return 'Salom Azizbek! Siz bilan inklyuziv muloqot tarmog\'ida bog\'langanimizdan xursandmiz.';
      }
      if (lower.includes('interview') || lower.includes('schedule') || lower.includes('invite')) {
        return 'Sizni juma kuni onlayn texnik suhbatga taklif qilishdan mamnunmiz. Barcha savollarni birgalikda ko\'rib chiqamiz.';
      }
      if (lower.includes('equipment') || lower.includes('remote')) {
        return 'Masofaviy ish joyingiz uchun barcha moslashtirilgan texnik uskunalar kompaniyamiz tomonidan yetkaziladi.';
      }
      if (lower.includes('thank')) {
        return 'Xabaringiz va tezkor javobingiz uchun katta rahmat! Aloqada qolamiz.';
      }
      return `${clean} (AI orqali O'zbek tiliga tarjima qilindi)`;
    }

    // 5. Uzbek -> German (UZ -> DE)
    if (sourceLang === 'uz' && targetLang === 'de') {
      if (lower.includes('rahmat')) return 'Vielen Dank für Ihre freundliche Unterstützung und Rückmeldung.';
      if (lower.includes('tayyor')) return 'Vielen Dank, ich bin bereit für das Online-Interview.';
      return `${clean} (Übersetzt ins Deutsche via AI)`;
    }

    // 6. Uzbek -> Turkish (UZ -> TR)
    if (sourceLang === 'uz' && targetLang === 'tr') {
      if (lower.includes('rahmat')) return 'Geri bildiriminiz ve desteğiniz için çok teşekkür ederim.';
      if (lower.includes('tayyor')) return 'Çok teşekkürler, çevrimiçi mülakata tamamen hazırım.';
      return `${clean} (Yapay Zeka ile Türkçe çeviri)`;
    }

    return `${clean} (${targetLang.toUpperCase()} Translation)`;
  }
};
