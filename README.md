# "Imkoniyatlar Kengligi" — Senior Enterprise AI Inklyuziv Bandlik Portali

> **Missiya:** Nogironligi bor shaxslar uchun sun'iy intellekt va 100% to'siqsiz dizayn (WCAG 2.1 Level AA) orqali teng, adolatli va munosib ish o'rinlarini yaratish bo'yicha milliy ekotizim (BMT SDG 8 & 10 standartlari asosida).

---

## 🏛️ Arxitektura va Dizayn Tizimi (Senior Level)

Platforma to'liq **ko'p sahifali (multi-page)** va **reaktiv arxitektura**da ishlab chiqilgan bo'lib, zamonaviy **Obsidian & Slate Enterprise** vizual estetikasiga ega:

- **Dizayn uslubi:** Linear, Stripe va Vercel andozalari asosidagi nozik shaffof hoshiyalar (`1px solid rgba(255,255,255,0.08)`), mikron-gradientlar, `backdrop-filter: blur(20px)` glassmorphism va animatsiyali holat indikatorlari.
- **Markazlashgan Store:** `assets/js/core/store.js` orqali barcha sahifalararo holat (`localStorage`, nomzod arizalari, chat xabarlari, saqlangan vakansiyalar va a11y sozlamalari) reaktiv sinxronlashadi.

---

## 📄 Dedicated Multi-Page Sahifalar

1. **`index.html` (Enterprise Asosiy Portal):**
   - Jonli ovozli tanishtiruv (Web Speech API).
   - Tezkor AI qidiruv paneli va BMT SDG 8 & 10 taqqoslash matritsasi.
   - 4 ta asosiy inklyuziv yechim va tasdiqlangan hamkorlar tarmog'i.

2. **`jobs.html` (Inklyuziv Vakansiyalar Portali):**
   - Ko'p qirrali filtrlar (Qulaylik turi: 100% masofaviy, ekran o'quvchi mos, eshitish/chat, pandusli ofis, moslashuvchan soatlar; Soha, Maosh saralash).
   - AI Moslik Indeksi hisoblagichi.
   - Bir bosishda **"AI Cover Letter Generator"** va to'g'ridan-to'g'ri ariza topshirish.

3. **`dashboard.html` (Nomzod AI Markazi):**
   - **Lazerli CV Skaner & ATS Analizatori:** Lazer nurli skanerlash animatsiyasi, ko'nikmalar tahlili va takomillashtirish tavsiyalari.
   - **AI Intervyu Trenajyori:** Audio to'lqin visualizatsiyasi, ovozli savollar, mikrofonda javob berish va 3 mezonli (Aniqlik, Texnik chuqurlik, Ishonchlilik) baholash rubrikasi.
   - **Arizalar Pipeline (Kanban):** Topshirilgan, Ko'rib chiqilmoqda, Intervyu belgilangan va Offer bosqichlari.

4. **`chat.html` (AI Tarjimon & Muloqot Hubi):**
   - HR vakillari va mentorlar bilan 8+ tilda (O'zbek, English, Русский, Deutsch, Türkçe) ikki tomonlama real-vaqt tarjima.
   - Barcha xabarlarni bitta bosishda ovozda tinglash (TTS).
   - Tezkor aqlli javoblar (Smart-replies).

5. **`employers.html` (B2B Ish Beruvchilar Portali):**
   - **O'zbekiston Soliq Imtiyozlari ROI Kalkulyatori:** 12% dan 1% ga tushirilgan ijtimoiy soliq va davlat subsidiyalari bo'yicha yillik tejamkorlikni hisoblash slayderlari.
   - Inklyuziv ish joyi sertifikatlashining 4 bosqichli auditi.
   - Yangi inklyuziv vakansiya joylashtirish formasi.

6. **`analytics.html` (BMT SDG & Iqtisodiy Telemetriya):**
   - 1,420+ ishga joylashgan nomzodlar, 48.5 mlrd UZS yaratilgan yalpi iqtisodiy qiymat va hududiy qamrov grafiklari.

7. **`about.html` (Boshqaruv & WCAG 2.1 AA Standartlari):**
   - Rasmiy WCAG 2.1 Level AA muvofiqlik deklaratsiyasi va ekspertlar kengashi.

8. **`onboarding.html` (4 Bosqichli Profillash):**
   - Shaxsiy moslashuv ehtiyojlari va ko'nikmalarni belgilash tizimi.

---

## ♿ WCAG 2.1 AA Qulaylik Xususiyatlari

- 🔠 Shrift o'lchamlari (`A-`, `A`, `A+`, `A++`)
- 🌓 4 ta rejim: Tungi (Obsidian), Yorug' (Clean Light), Sariq-Qora (16:1 OLED High-Contrast), Monoxrom
- 🔊 Real Web Speech TTS ovozli o'quvchi
- 📖 Atkinson Hyperlegible disleksiya shrifti
- 🖱️ Katta kursor va harakatsiz rejim (Reduced Motion)
- ⌨️ Klaviatura navigatsiyasi (`Alt+1..7`, `Alt+A`, `Alt+S`, `?`, `Esc`)

---

## 🚀 Qanday Ishga Tushiriladi?

Hech qanday murakkab server talab qilinmaydi. Istalgan zamonaviy brauzerda (Chrome, Firefox, Safari, Edge):
- `index.html` faylini ikki marta bosib oching.
- Barcha sahifalar mustaqil va o'zaro sinxron tarzda ishlaydi.

---

*Yaratildi: 2026-yil | "Imkoniyatlar Kengligi" — To'siqsiz Kelajak Uchun!*
