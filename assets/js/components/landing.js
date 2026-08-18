/**
 * "Imkoniyatlar Kengligi" — Senior 3D Interactive Landing Page Component
 * 3D Neural Constellation Mesh, 3D Rotating Cyber Globe, Interactive Tilt Cards & Fixed Layout
 */

window.LandingComponent = {
  render() {
    const data = window.APP_DATA;
    const I = window.Icons;

    return `
      <!-- Hero Section with 3D Background Canvas -->
      <section class="hero-section" aria-labelledby="hero-title">
        
        <!-- 3D Neural Constellation Background Canvas -->
        <canvas id="hero-3d-canvas" aria-hidden="true"></canvas>

        <div class="container" style="position:relative; z-index:10;">
          <div class="hero-grid">
            
            <!-- Left Hero Content -->
            <div>
              <div style="display:inline-flex; align-items:center; gap:0.65rem; margin-bottom:1.5rem; flex-wrap:wrap;">
                <span class="badge badge-teal">
                  ${I.get('shieldCheck', 13)}
                  <span>WCAG 2.1 Level AA Standarti</span>
                </span>
                <span class="badge badge-primary">
                  ${I.get('sparkles', 13)}
                  <span>Sun'iy Intellekt Hamrohligida</span>
                </span>
              </div>

              <h1 id="hero-title" class="hero-title">
                Har bir inson uchun <span class="hero-highlight">to'siqsiz karyera</span> va cheksiz imkoniyatlar.
              </h1>

              <p class="hero-desc">
                Nogironligi bor shaxslar uchun mo'ljallangan, sun'iy intellekt orqali moslashtiriladigan, real vaqtda ovozli va matnli tarjimon hamda 100% qulay ish topish milliy ekotizimi.
              </p>

              <!-- Audio Intro Player -->
              <div style="display:inline-flex; align-items:center; gap:0.85rem; background:var(--surface-card); border:1px solid var(--surface-border); border-radius:var(--radius-full); padding:0.4rem 1.1rem 0.4rem 0.5rem; margin-bottom:2rem; box-shadow:var(--shadow-sm);">
                <button type="button" class="btn btn-sm btn-teal" style="border-radius:50%; width:36px; height:36px; padding:0;" onclick="window.a11y.speakText('Assalomu alaykum! Imkoniyatlar Kengligi platformasiga xush kelibsiz. Bu yerda siz o\'z qulaylik ehtiyojlaringizga 100 foiz mos keluvchi masofaviy va inklyuziv vakansiyalarni topishingiz mumkin.')" title="Platforma haqida 30 soniyalik ovozli sharhni tinglash" aria-label="Ovozli tanishtiruv">
                  ${I.get('volume2', 18, '#ffffff')}
                </button>
                <div style="font-size:0.85rem; font-weight:700; color:var(--text-main);">
                  Platforma haqida 30 soniyalik ovozli sharhni tinglang
                </div>
              </div>

              <!-- Quick AI Hero Search Bar -->
              <div class="hero-search-bar" role="search" aria-label="Vakansiyalarni tezkor AI qidiruv">
                <div style="display:flex; align-items:center; gap:0.65rem; flex:1; min-width:200px;">
                  ${I.get('search', 18, 'var(--primary-400)')}
                  <input type="text" 
                         id="hero-search-input" 
                         placeholder="Kasb, ko'nikma yoki qulaylik turi (masalan: Frontend, Masofaviy, QA)..." 
                         style="border:none; outline:none; background:transparent; width:100%; font-size:0.95rem; font-family:inherit; color:var(--text-main);"
                         onkeydown="if(event.key==='Enter'){ window.location.href = 'jobs.html?q=' + encodeURIComponent(this.value); }" />
                </div>
                <button type="button" class="btn btn-primary" onclick="const val = document.getElementById('hero-search-input').value; window.location.href = 'jobs.html?q=' + encodeURIComponent(val);">
                  <span>AI Qidiruv</span>
                  ${I.get('arrowRight', 16, '#ffffff')}
                </button>
              </div>

              <!-- Hero CTAs -->
              <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:2.5rem;">
                <a href="jobs.html" class="btn btn-primary btn-lg" aria-label="Barcha vakansiyalarni ko'rish">
                  ${I.get('briefcase', 18, '#ffffff')}
                  <span>Vakansiyalarni Ko'rish</span>
                </a>
                <a href="onboarding.html" class="btn btn-outline btn-lg" aria-label="Profil yaratish">
                  ${I.get('userPlus', 18, 'currentColor')}
                  <span>Bepul Profil Yaratish</span>
                </a>
              </div>

              <!-- Trust Points -->
              <div style="display:flex; gap:1.75rem; flex-wrap:wrap; font-size:0.875rem; font-weight:700; color:var(--text-subtle);">
                <div style="display:flex; align-items:center; gap:0.45rem;">
                  ${I.get('checkCircle2', 16, 'var(--accent-teal-400)')}
                  <span>100% Ekran O'quvchi Mos</span>
                </div>
                <div style="display:flex; align-items:center; gap:0.45rem;">
                  ${I.get('checkCircle2', 16, 'var(--accent-teal-400)')}
                  <span>Real-Vaqt AI Tarjimon</span>
                </div>
                <div style="display:flex; align-items:center; gap:0.45rem;">
                  ${I.get('checkCircle2', 16, 'var(--accent-teal-400)')}
                  <span>86+ Sertifikatlangan Tashkilot</span>
                </div>
              </div>

            </div>

            <!-- Right: Interactive 3D Holographic Showcase Card (Safe Clean Layout) -->
            <div class="hero-3d-wrapper" id="hero-3d-tilt-container">
              
              <div class="hero-3d-card" id="hero-3d-card-el">
                
                <!-- Integrated Header Bar with Safe Layout -->
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.25rem; gap:1rem; flex-wrap:wrap;">
                  <div style="display:flex; align-items:center; gap:0.85rem;">
                    <div style="width:46px; height:46px; border-radius:var(--radius-lg); background:rgba(99, 102, 241, 0.18); display:flex; align-items:center; justify-content:center; color:var(--primary-400); box-shadow:var(--shadow-glow-indigo);">
                      ${I.get('bot', 24, 'var(--primary-400)')}
                    </div>
                    <div>
                      <h4 style="margin:0; font-size:1.15rem; color:var(--text-main);">AI Karyera Hamrohi</h4>
                      <span style="font-size:0.8rem; color:var(--accent-teal-400); font-weight:700;">● Real-vaqtda faol tahlil</span>
                    </div>
                  </div>
                  <span class="badge badge-teal" style="font-size:0.75rem;">WCAG 2.1 AA</span>
                </div>

                <!-- Clean Integrated AI Match Score Banner -->
                <div class="hero-integrated-badge">
                  <div style="width:38px; height:38px; border-radius:var(--radius-md); background:rgba(16, 185, 129, 0.2); color:var(--accent-teal-400); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    ${I.get('sparkles', 20, 'var(--accent-teal-400)')}
                  </div>
                  <div style="flex:1;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="color:var(--text-main); font-size:0.95rem; font-weight:800;">AI Moslik: 96%</span>
                      <span style="font-size:0.75rem; color:var(--accent-teal-400); font-weight:800; text-transform:uppercase;">Eng Yuqori Moslik</span>
                    </div>
                    <div style="color:var(--text-subtle); font-size:0.8rem;">Uzum Technologies — Frontend & Accessibility Dev</div>
                  </div>
                </div>

                <!-- 3D Laser Scanner Visualizer -->
                <div class="scanner-box" style="margin-bottom:1.5rem;">
                  <div class="laser-beam"></div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                    <span style="font-size:0.8rem; color:var(--accent-cyan-400); font-weight:700;">[AI_DIAGNOSTIC_RADAR: 240 FPS]</span>
                    <span style="font-size:0.75rem; color:var(--accent-teal-400); font-weight:700;">● NVDA_READY</span>
                  </div>
                  <div style="color:var(--text-muted); font-size:0.875rem; line-height:1.65; font-family:var(--font-mono);">
                    <span style="color:var(--accent-teal-400);">> Nomzod:</span> Azizbek Saidov (Frontend Dev)<br>
                    <span style="color:var(--primary-400);">> Qulaylik talabi:</span> 100% Masofaviy, NVDA mos<br>
                    <span style="color:var(--accent-cyan-400);">> Mos kelgan vakansiyalar:</span> 6 ta tasdiqlangan ish o'rni
                  </div>
                </div>

                <!-- Interactive 3D Card Action Buttons -->
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem;">
                  <a href="dashboard.html" class="btn btn-outline btn-sm" style="font-weight:800;">
                    ${I.get('activity', 15)}
                    <span>CVni Lazerli Tahlil</span>
                  </a>
                  <a href="chat.html" class="btn btn-teal btn-sm" style="font-weight:800;">
                    ${I.get('messageSquare', 15, '#ffffff')}
                    <span>AI Muloqot</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- UN SDG Impact Telemetry Bar & 3D Interactive Cyber Globe -->
      <section style="background:var(--surface-subtle); border-top:1px solid var(--surface-border); border-bottom:1px solid var(--surface-border); padding:4rem 0;" aria-label="BMT SDG Maqsadlari va ta'sir statistikasi">
        <div class="container">
          
          <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:3rem; align-items:center; margin-bottom:3rem;">
            
            <div>
              <span class="badge badge-primary" style="margin-bottom:0.75rem;">BMT SDG 8 & 10 Standartlari</span>
              <h2 style="font-size:2.2rem; margin-bottom:0.75rem;">Global Bandlik Muammosi va AI Yechimi</h2>
              <p style="color:var(--text-subtle); font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
                BMT ma'lumotlariga ko'ra, dunyo bo'yicha nogironligi bor insonlarning faqatgina 30% i ishchi kuchida ishtirok etadi. Bizning 3D sun'iy intellekt ekotizimimiz to'siqlarni olib tashlab, xalqaro miqyosdagi inklyuziv bandlikni ta'minlaydi.
              </p>
              <div style="display:flex; gap:1.5rem; flex-wrap:wrap; font-weight:800; font-size:0.95rem;">
                <div style="color:var(--accent-teal-400);">● 14/14 Viloyat Qamrovi</div>
                <div style="color:var(--primary-400);">● 100% Masofaviy IT Imkoniyat</div>
                <div style="color:var(--accent-cyan-400);">● 1% Imtiyozli Soliq Stavkalari</div>
              </div>
            </div>

            <!-- 3D Interactive Cyber Globe Canvas -->
            <div class="card" style="padding:1.25rem; background:#060a14; border:1px solid rgba(99,102,241,0.3); box-shadow:var(--shadow-glow-indigo); position:relative; overflow:hidden;">
              <canvas id="sdg-3d-globe-canvas"></canvas>
              <div style="position:absolute; bottom:1.25rem; left:1.5rem; right:1.5rem; display:flex; justify-content:space-between; align-items:center; background:rgba(10,15,28,0.75); backdrop-filter:blur(12px); padding:0.5rem 1rem; border-radius:var(--radius-full); border:1px solid var(--surface-border); font-size:0.8rem; color:var(--text-subtle);">
                <span style="display:flex; align-items:center; gap:0.4rem;">
                  ${I.get('globe', 14, 'var(--accent-teal-400)')}
                  <span>Interaktiv 3D Inklyuzivlik Globusi</span>
                </span>
                <span style="color:var(--accent-teal-400); font-weight:800;">Jonli Telemetriya</span>
              </div>
            </div>

          </div>

          <!-- 4 Impact Metric Cards -->
          <div class="grid-4">
            <div class="card" style="text-align:center;">
              <div style="font-size:2.5rem; font-weight:900; color:var(--accent-teal-400); margin-bottom:0.25rem;">1,420+</div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Ishga Joylashgan Nomzodlar</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">100% rasmiy mehnat shartnomasi</div>
            </div>

            <div class="card" style="text-align:center;">
              <div style="font-size:2.5rem; font-weight:900; color:var(--primary-400); margin-bottom:0.25rem;">86+</div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Inklyuziv Kompaniyalar</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">Sertifikatlangan ish beruvchilar</div>
            </div>

            <div class="card" style="text-align:center;">
              <div style="font-size:2.5rem; font-weight:900; color:var(--accent-cyan-400); margin-bottom:0.25rem;">48.5 mlrd</div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Iqtisodiy Qiymat (UZS)</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">Yaratilgan yalpi daromad</div>
            </div>

            <div class="card" style="text-align:center;">
              <div style="font-size:2.5rem; font-weight:900; color:var(--accent-amber-400); margin-bottom:0.25rem;">94%</div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">AI Moslik Aniqligi</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">Ehtiyoj va ko'nikmalar tahlili</div>
            </div>
          </div>

        </div>
      </section>

      <!-- 4 Core Enterprise Solutions (Fixed Equal Heights & 3D Specular Tilt) -->
      <section class="section-spacing container" aria-labelledby="solutions-title">
        <div style="text-align:center; max-width:760px; margin:0 auto 3.5rem;">
          <span class="badge badge-teal" style="margin-bottom:0.75rem;">Yagona Ekotizim</span>
          <h2 id="solutions-title" style="font-size:2.35rem; margin-bottom:1rem;">To'siqsiz Karyera Uchun 4 Ta Innovatsion Yechim</h2>
          <p style="color:var(--text-subtle); font-size:1.05rem;">
            Har bir funksiya xalqaro WCAG 2.1 AA va BMT konvensiyalari talablariga to'liq mos keladigan ilg'or 3D texnologiyalar bilan qurollangan.
          </p>
        </div>

        <div class="grid-4">
          
          <!-- Solution Card 1 -->
          <div class="solution-card-3d" data-tilt-card>
            <div class="card-specular-glow"></div>
            <div>
              <div class="solution-icon-box" style="background:rgba(99, 102, 241, 0.18); color:var(--primary-400); border:1px solid rgba(99, 102, 241, 0.35);">
                ${I.get('type', 26, 'var(--primary-400)')}
              </div>
              <span class="badge badge-primary" style="margin-bottom:0.75rem;">100% To'siqsiz</span>
              <h3 style="font-size:1.25rem; margin-bottom:0.75rem; color:var(--text-main);">Moslashuvchan WCAG 2.1 AA Interfeys</h3>
              <p style="font-size:0.925rem; color:var(--text-subtle); line-height:1.6; margin-bottom:1.5rem;">
                Ekran o'quvchilar (NVDA, VoiceOver), disleksiya shriftlari, katta kursor va 16:1 yuqori kontrast rejimlari.
              </p>
            </div>
            <div>
              <button type="button" class="btn-card-action btn-card-action-primary" onclick="window.a11y.toggleDyslexiaFont()">
                <span>Sinab ko'rish</span>
                ${I.get('arrowRight', 14)}
              </button>
            </div>
          </div>

          <!-- Solution Card 2 -->
          <div class="solution-card-3d" data-tilt-card>
            <div class="card-specular-glow"></div>
            <div>
              <div class="solution-icon-box" style="background:rgba(16, 185, 129, 0.18); color:var(--accent-teal-400); border:1px solid rgba(16, 185, 129, 0.35);">
                ${I.get('bot', 26, 'var(--accent-teal-400)')}
              </div>
              <span class="badge badge-teal" style="margin-bottom:0.75rem;">Lazerli Skaner</span>
              <h3 style="font-size:1.25rem; margin-bottom:0.75rem; color:var(--text-main);">AI Rezyume & Karyera Maslahatchisi</h3>
              <p style="font-size:0.925rem; color:var(--text-subtle); line-height:1.6; margin-bottom:1.5rem;">
                Rezyumengizni avtomatik tahlil qiladi, kuchli tomonlarni aniqlaydi va 94% aniqlikda vakansiyalarni tavsiya qiladi.
              </p>
            </div>
            <div>
              <a href="dashboard.html" class="btn-card-action btn-card-action-teal">
                <span>Skanerni ochish</span>
                ${I.get('arrowRight', 14)}
              </a>
            </div>
          </div>

          <!-- Solution Card 3 -->
          <div class="solution-card-3d" data-tilt-card>
            <div class="card-specular-glow"></div>
            <div>
              <div class="solution-icon-box" style="background:rgba(6, 182, 212, 0.18); color:var(--accent-cyan-400); border:1px solid rgba(6, 182, 212, 0.35);">
                ${I.get('messageSquare', 26, 'var(--accent-cyan-400)')}
              </div>
              <span class="badge badge-cyan" style="margin-bottom:0.75rem;">8+ Tilda</span>
              <h3 style="font-size:1.25rem; margin-bottom:0.75rem; color:var(--text-main);">Real-Vaqt AI Muloqot & Tarjimon</h3>
              <p style="font-size:0.925rem; color:var(--text-subtle); line-height:1.6; margin-bottom:1.5rem;">
                Ish izlovchi va ish beruvchi o'rtasida ovozli o'qish, subtitrlar va bir zumda ikki tomonlama professional tarjima.
              </p>
            </div>
            <div>
              <a href="chat.html" class="btn-card-action btn-card-action-cyan">
                <span>Muloqotga kirish</span>
                ${I.get('arrowRight', 14)}
              </a>
            </div>
          </div>

          <!-- Solution Card 4 -->
          <div class="solution-card-3d" data-tilt-card>
            <div class="card-specular-glow"></div>
            <div>
              <div class="solution-icon-box" style="background:rgba(245, 158, 11, 0.18); color:var(--accent-amber-400); border:1px solid rgba(245, 158, 11, 0.35);">
                ${I.get('building', 26, 'var(--accent-amber-400)')}
              </div>
              <span class="badge badge-amber" style="margin-bottom:0.75rem;">Soliq Imtiyozi</span>
              <h3 style="font-size:1.25rem; margin-bottom:0.75rem; color:var(--text-main);">Sertifikatlangan Ish Beruvchilar</h3>
              <p style="font-size:0.925rem; color:var(--text-subtle); line-height:1.6; margin-bottom:1.5rem;">
                1% ijtimoiy soliq imtiyozi, moslashtirilgan ergonomik ish joylari va tekshirilgan vakansiyalar bazasi.
              </p>
            </div>
            <div>
              <a href="employers.html" class="btn-card-action btn-card-action-amber">
                <span>Kalkulyatorni ochish</span>
                ${I.get('arrowRight', 14)}
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- Verified Partners -->
      <section style="background:var(--surface-subtle); border-top:1px solid var(--surface-border); border-bottom:1px solid var(--surface-border); padding:3.5rem 0;" aria-label="Hamkor tashkilotlar">
        <div class="container">
          <div style="text-align:center; font-size:0.85rem; font-weight:800; text-transform:uppercase; color:var(--text-subtle); margin-bottom:2rem; letter-spacing:0.05em;">
            O'zbekistonning Yetakchi Tashkilotlari va Xalqaro Hamkorlar
          </div>
          <div class="grid-4" style="align-items:center;">
            ${data.partners.slice(0, 4).map(p => `
              <div class="card" style="padding:1.25rem; text-align:center; display:flex; flex-direction:column; align-items:center; gap:0.35rem;">
                <div style="font-weight:800; font-size:1.05rem; color:var(--text-main);">${p.name}</div>
                <span class="badge badge-teal" style="font-size:0.72rem;">${p.badge}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Call to Action Banner -->
      <section class="section-spacing container">
        <div class="card" style="background:linear-gradient(135deg, rgba(99, 102, 241, 0.14) 0%, rgba(16, 185, 129, 0.14) 100%); border:1px solid rgba(99, 102, 241, 0.35); padding:4rem 2rem; text-align:center;">
          <h2 style="font-size:2.4rem; margin-bottom:1rem;">To'siqsiz Kelajagingizni Bugun Yarating</h2>
          <p style="color:var(--text-muted); font-size:1.15rem; max-width:640px; margin:0 auto 2.25rem;">
            Bir necha daqiqa ichida o'z ehtiyojlaringizga moslashtirilgan rezyumeni yarating va 100% qulay masofaviy vakansiyalarga ega bo'ling.
          </p>
          <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
            <a href="onboarding.html" class="btn btn-primary btn-lg">
              ${I.get('userPlus', 18, '#ffffff')}
              <span>Ro'yxatdan O'tish (Bepul)</span>
            </a>
            <a href="jobs.html" class="btn btn-outline btn-lg">
              ${I.get('briefcase', 18, 'currentColor')}
              <span>Vakansiyalarni Ko'rish</span>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  /**
   * Initializes 3D Canvas Particles, 3D Interactive Cyber Globe & Dynamic Specular Card Tilts
   */
  init3D() {
    this.initHeroCanvas();
    this.initHeroTilt();
    this.init3DGlobe();
    this.initCardTiltEngine();
  },

  initHeroCanvas() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 650);

    window.addEventListener('resize', () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement.offsetHeight || 650;
      }
    });

    const particles = [];
    const particleCount = Math.min(65, Math.floor(width / 20));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1,
        color: Math.random() > 0.5 ? 'rgba(99, 102, 241,' : 'rgba(34, 211, 238,'
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw and connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.75)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 130) * 0.28;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const dxM = p.x - mouseX;
        const dyM = p.y - mouseY;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          const alpha = (1 - distM / 160) * 0.4;
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  },

  initHeroTilt() {
    const container = document.getElementById('hero-3d-tilt-container');
    const card = document.getElementById('hero-3d-card-el');
    if (!container || !card) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  },

  /**
   * 3D Rotating Cyber Globe Canvas with orbital nodes & real-time telemetry
   */
  init3DGlobe() {
    const canvas = document.getElementById('sdg-3d-globe-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.offsetWidth || 400);
    const height = (canvas.height = canvas.offsetHeight || 300);

    const globeRadius = Math.min(width, height) * 0.38;
    const centerX = width / 2;
    const centerY = height / 2;

    const nodes = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      nodes.push({
        x: globeRadius * Math.cos(theta) * Math.sin(phi),
        y: globeRadius * Math.sin(theta) * Math.sin(phi),
        z: globeRadius * Math.cos(phi),
        baseX: globeRadius * Math.cos(theta) * Math.sin(phi),
        baseY: globeRadius * Math.sin(theta) * Math.sin(phi),
        baseZ: globeRadius * Math.cos(phi)
      });
    }

    let angleX = 0;
    let angleY = 0;

    function renderGlobe() {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.008;
      angleX = Math.sin(angleY * 0.5) * 0.2;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        // Rotate Y
        let x1 = n.baseX * cosY - n.baseZ * sinY;
        let z1 = n.baseZ * cosY + n.baseX * sinY;
        // Rotate X
        let y1 = n.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + n.baseY * sinX;

        const scale = (z2 + globeRadius * 2) / (globeRadius * 2.5);
        const alpha = Math.max(0.15, (z2 + globeRadius) / (globeRadius * 2));

        projected.push({
          x: centerX + x1,
          y: centerY + y1,
          z: z2,
          scale: scale,
          alpha: alpha
        });
      }

      // Draw connecting lines between close nodes
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

          if (dist < 65 && p1.z > -globeRadius * 0.4 && p2.z > -globeRadius * 0.4) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${(p1.alpha + p2.alpha) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.scale * 2.5), 0, Math.PI * 2);
        ctx.fillStyle = p.z > 0 ? `rgba(34, 211, 238, ${p.alpha * 0.9})` : `rgba(99, 102, 241, ${p.alpha * 0.4})`;
        ctx.fill();
      }

      requestAnimationFrame(renderGlobe);
    }

    renderGlobe();
  },

  /**
   * Universal 3D Card Tilt Engine with Real-Time Specular Glare Tracking
   */
  initCardTiltEngine() {
    const cards = document.querySelectorAll('[data-tilt-card]');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.015, 1.015, 1.015)`;
        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
      });
    });
  }
};
