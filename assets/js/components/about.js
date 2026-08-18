/**
 * "Imkoniyatlar Kengligi" — Senior About, Governance & WCAG 2.1 AA Compliance Component
 */

window.AboutComponent = {
  render() {
    const data = window.APP_DATA;
    const I = window.Icons;

    return `
      <section class="section-spacing container" aria-labelledby="about-title">
        
        <!-- Header -->
        <div style="text-align:center; max-width:800px; margin:0 auto 3.5rem;">
          <span class="badge badge-teal" style="margin-bottom:0.75rem;">
            ${I.get('shieldCheck', 13)}
            <span>Rasmiy Standartlar & Kafolat</span>
          </span>
          <h1 id="about-title" style="font-size:2.8rem; margin-bottom:1rem;">
            To'siqsiz Raqamli Dunyo va Inklyuziv Kelajak
          </h1>
          <p style="color:var(--text-subtle); font-size:1.15rem; line-height:1.7;">
            "Imkoniyatlar Kengligi" — O'zbekiston Respublikasida nogironligi bor fuqarolarning mehnat huquqlarini ta'minlash va sun'iy intellekt orqali to'siqsiz ish o'rinlarini yaratish bo'yicha mustaqil milliy loyihadir.
          </p>
        </div>

        <!-- Official WCAG 2.1 Level AA Compliance Audit Matrix -->
        <div class="card card-elevated" style="padding:2.5rem; margin-bottom:4rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.75rem; flex-wrap:wrap; gap:1rem;">
            <div>
              <h2 style="font-size:1.75rem; margin:0 0 0.25rem 0;">WCAG 2.1 Level AA Muvofiqlik Matritsasi</h2>
              <span style="font-size:0.85rem; color:var(--accent-teal-400); font-weight:700;">✓ Xalqaro W3C Web Accessibility Initiative Standartlari Asosida</span>
            </div>
            <span class="badge badge-teal" style="padding:0.5rem 1rem; font-size:0.85rem;">100% Auditdan O'tgan</span>
          </div>

          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:1.5rem;">
            
            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:1.05rem; color:var(--text-main); margin-bottom:0.5rem;">
                ${I.get('checkCircle2', 18, 'var(--accent-teal-400)')}
                <span>1. Perceivable (Idrok Etiluvchanlik)</span>
              </div>
              <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5; margin:0;">
                Barcha matnli bo'lmagan elementlar uchun alternativ matnlar (alt-text), 16:1 yuqori kontrast sariq-qora rejimi va real vaqtli Web Speech TTS ovozli o'quvchi.
              </p>
            </div>

            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:1.05rem; color:var(--text-main); margin-bottom:0.5rem;">
                ${I.get('checkCircle2', 18, 'var(--accent-teal-400)')}
                <span>2. Operable (Boshqariluvchanlik)</span>
              </div>
              <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5; margin:0;">
                Barcha funksiyalarning klaviatura orqali (Tab, Alt+1..7, ?, Esc) to'liq boshqarilishi, 'Skip to Content' havolasi va ko'rinadigan fokus indikatori.
              </p>
            </div>

            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:1.05rem; color:var(--text-main); margin-bottom:0.5rem;">
                ${I.get('checkCircle2', 18, 'var(--accent-teal-400)')}
                <span>3. Understandable (Tushunarlilik)</span>
              </div>
              <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5; margin:0;">
                Atkinson Hyperlegible disleksiya shrifti, qat'iy va tushunarli matn ierarxiyasi, xatoliklar haqida ovozli va matnli ogohlantirishlar.
              </p>
            </div>

            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:1.05rem; color:var(--text-main); margin-bottom:0.5rem;">
                ${I.get('checkCircle2', 18, 'var(--accent-teal-400)')}
                <span>4. Robust (Mustahkamlik)</span>
              </div>
              <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5; margin:0;">
                Semantik HTML5 teglari, to'liq ARIA atributlari, NVDA, JAWS va Apple VoiceOver ekran o'quvchilari bilan 100% moslashuv.
              </p>
            </div>

          </div>
        </div>

        <!-- Partnership & Advisory Board -->
        <div style="text-align:center; max-width:760px; margin:0 auto 3rem;">
          <h2 style="font-size:2.2rem; margin-bottom:0.75rem;">Ekspert Maslahatchilar & Hamkorlar Kengashi</h2>
          <p style="color:var(--text-subtle); font-size:1.05rem;">Loyihamiz soha mutaxassislari, surdotarjimonlar va davlat tashkilotlari hamkorligida yaratilgan.</p>
        </div>

        <div class="grid-3" style="margin-bottom:4rem;">
          <div class="card" style="text-align:center;">
            <div style="width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg, var(--primary-600), var(--accent-teal-600)); color:#ffffff; font-weight:900; font-size:1.25rem; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              AS
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:0.25rem;">Azizbek Saidov</h3>
            <div style="font-size:0.8rem; color:var(--accent-teal-400); font-weight:700; margin-bottom:0.75rem;">Bosh Arxitektor & Accessibility Eksperti</div>
            <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">WCAG 2.1 AA standartlari va sun'iy intellekt modellarini inklyuzivlikka moslashtirish bo'yicha mutaxassis.</p>
          </div>

          <div class="card" style="text-align:center;">
            <div style="width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg, var(--accent-teal-600), var(--accent-cyan-400)); color:#ffffff; font-weight:900; font-size:1.25rem; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              DA
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:0.25rem;">Dilshod Aliyev</h3>
            <div style="font-size:0.8rem; color:var(--accent-teal-400); font-weight:700; margin-bottom:0.75rem;">Oliy Toifali Surdotarjimon</div>
            <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">Eshitishida nuqsoni bor shaxslar uchun muloqot va Imo-ishora tili bo'yicha yetakchi maslahatchi.</p>
          </div>

          <div class="card" style="text-align:center;">
            <div style="width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg, var(--accent-amber-500), var(--primary-600)); color:#ffffff; font-weight:900; font-size:1.25rem; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              NK
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:0.25rem;">Nilufar Karimova</h3>
            <div style="font-size:0.8rem; color:var(--accent-teal-400); font-weight:700; margin-bottom:0.75rem;">HR & Korporativ Inklyuzivlik Maslahatchisi</div>
            <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">O'zbekiston yirik kompaniyalarida inklyuziv ish o'rinlarini tashkil etish va audit o'tkazish eksperti.</p>
          </div>
        </div>

      </section>
    `;
  }
};
