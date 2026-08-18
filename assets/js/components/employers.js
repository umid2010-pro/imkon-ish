/**
 * "Imkoniyatlar Kengligi" — Senior B2B Employer Suite & Candidate Sourcing Component
 * Candidate Talent Showcase Directory, Direct Chat Initiator, Tax ROI Calculator & Workplace Certification
 */

window.EmployersComponent = {
  employeeCount: 5,
  averageSalary: 8000000,
  searchQuery: '',
  selectedCategory: 'all',
  selectedAccommodation: 'all',

  render() {
    const I = window.Icons;
    const calc = this.calculateRoi();
    const storeState = window.Store ? window.Store.getState() : {};
    const candidates = storeState.candidates || (window.APP_DATA ? window.APP_DATA.candidates : []) || [];

    // Filter candidates
    const filteredCandidates = candidates.filter(c => {
      const q = (this.searchQuery || '').toLowerCase();
      const matchesQuery = !q || c.name.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || (c.skills || []).some(s => s.toLowerCase().includes(q));
      const matchesCategory = this.selectedCategory === 'all' || c.category === this.selectedCategory;
      const matchesAcc = this.selectedAccommodation === 'all' || (c.accommodationTypes || []).includes(this.selectedAccommodation);
      return matchesQuery && matchesCategory && matchesAcc;
    });

    return `
      <section class="section-spacing container" aria-labelledby="employers-title" style="padding-top:1.5rem;">
        
        <!-- Header -->
        <div style="text-align:center; max-width:820px; margin:0 auto 3.5rem;">
          <span class="badge badge-amber" style="margin-bottom:0.75rem;">
            ${I.get('building', 13)}
            <span>B2B Inklyuziv Hamkorlik & Iqtidorlarni Jalb Qilish</span>
          </span>
          <h1 id="employers-title" style="font-size:2.8rem; margin-bottom:1rem;">
            Inklyuzivlik — Kompaniyangizning Raqobatbardosh Ustunligi
          </h1>
          <p style="color:var(--text-subtle); font-size:1.15rem; line-height:1.7;">
            Nogironligi bor eng sodiq va yuqori malakali mutaxassislarni toping, ularga to'g'ridan-to'g'ri yozing hamda 1% ijtimoiy soliq imtiyozidan foydalaning.
          </p>
          <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top:1.5rem;">
            <a href="#candidate-showcase-section" class="btn btn-primary btn-lg">
              ${I.get('user', 18, '#ffffff')}
              <span>Nomzodlar Vitrinasi (${candidates.length})</span>
            </a>
            <button type="button" class="btn btn-outline btn-lg" onclick="window.EmployersComponent.openPostJobModal()">
              ${I.get('briefcase', 18, 'currentColor')}
              <span>Vakansiya E'lon Qilish</span>
            </button>
            <button type="button" class="btn btn-outline btn-lg" onclick="window.EmployersComponent.downloadAuditCertificate()">
              ${I.get('award', 18, 'currentColor')}
              <span>Inklyuzivlik Sertifikati Auditi</span>
            </button>
          </div>
        </div>

        <!-- Section 1: Candidate Showcase Directory (NOMZODLAR REKLAMA VITRINASI) -->
        <div id="candidate-showcase-section" style="margin-bottom:4.5rem; scroll-margin-top: 100px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:1.25rem; margin-bottom:2rem;">
            <div>
              <span class="badge badge-teal" style="margin-bottom:0.4rem;">
                ${I.get('sparkles', 13)}
                <span>Iqtidorlar Vitrinasi</span>
              </span>
              <h2 style="font-size:2.1rem; margin:0 0 0.25rem 0;">Nomzodlar Reklama Bazasi</h2>
              <p style="color:var(--text-subtle); margin:0; font-size:1rem;">
                Mutaxassislarni ko'nikmalari va qulaylik talablariga qarab tanlang va to'g'ridan-to'g'ri muloqotni boshlang.
              </p>
            </div>
            <span class="badge badge-primary" style="font-size:0.85rem; padding:0.4rem 0.8rem;">
              ${filteredCandidates.length} nafar faol mutaxassis
            </span>
          </div>

          <!-- Directory Search and Filter Controls -->
          <div class="card" style="padding:1.5rem; margin-bottom:2rem;">
            <div class="grid-3" style="gap:1rem;">
              <input type="text" 
                     placeholder="Ism, mutaxassislik yoki ko'nikma (masalan: React, QA, WCAG, CRM)..." 
                     value="${this.searchQuery}"
                     oninput="window.EmployersComponent.handleSearch(this.value)"
                     style="padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />

              <select onchange="window.EmployersComponent.handleCategory(this.value)" style="padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;">
                <option value="all" ${this.selectedCategory === 'all' ? 'selected' : ''}>Barcha Sohalar</option>
                <option value="engineering" ${this.selectedCategory === 'engineering' ? 'selected' : ''}>IT & Dasturlash</option>
                <option value="design" ${this.selectedCategory === 'design' ? 'selected' : ''}>UI/UX Dizayn</option>
                <option value="support" ${this.selectedCategory === 'support' ? 'selected' : ''}>Mijozlarga Xizmat (Chat)</option>
                <option value="data" ${this.selectedCategory === 'data' ? 'selected' : ''}>AI & Data Annotation</option>
              </select>

              <select onchange="window.EmployersComponent.handleAccommodation(this.value)" style="padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;">
                <option value="all" ${this.selectedAccommodation === 'all' ? 'selected' : ''}>Barcha Qulayliklar</option>
                <option value="remote" ${this.selectedAccommodation === 'remote' ? 'selected' : ''}>100% Masofaviy ish</option>
                <option value="screen_reader" ${this.selectedAccommodation === 'screen_reader' ? 'selected' : ''}>Ekran o'quvchi mosligi</option>
                <option value="hearing" ${this.selectedAccommodation === 'hearing' ? 'selected' : ''}>Matnli aloqa (Eshitish)</option>
                <option value="physical_ramps" ${this.selectedAccommodation === 'physical_ramps' ? 'selected' : ''}>Pandusli / Harakatlanish</option>
              </select>
            </div>
          </div>

          <!-- Candidate Showcase Grid -->
          <div class="talent-grid">
            ${filteredCandidates.map(cand => `
              <div class="talent-card-3d">
                <div>
                  <div class="talent-card-header">
                    <div class="talent-avatar">${cand.avatar || 'U'}</div>
                    <div style="flex:1; min-width:0;">
                      <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.25rem;">
                        <span style="font-weight:900; font-size:1.1rem; color:var(--text-main); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${cand.name}</span>
                        <span class="badge badge-teal" style="font-size:0.65rem; padding:1px 5px;">${cand.aiScore}% Mos</span>
                      </div>
                      <div style="font-size:0.875rem; font-weight:800; color:var(--primary-400); margin-bottom:0.2rem;">
                        ${cand.title}
                      </div>
                      <div style="font-size:0.78rem; color:var(--text-subtle); display:flex; align-items:center; gap:0.4rem;">
                        <span>📍 ${cand.location}</span>
                        <span>•</span>
                        <span style="color:var(--accent-teal-400); font-weight:800;">${cand.expectedSalary}</span>
                      </div>
                    </div>
                  </div>

                  <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.55; margin-bottom:1rem;">
                    "${cand.bio}"
                  </p>

                  <!-- Skills tags -->
                  <div class="talent-skills-cloud">
                    ${(cand.skills || []).map(s => `<span class="talent-skill-chip">${s}</span>`).join('')}
                  </div>

                  <!-- Accommodations Box -->
                  <div class="talent-accommodations-box">
                    <div style="font-size:0.72rem; font-weight:800; color:var(--accent-teal-400); text-transform:uppercase; margin-bottom:0.3rem;">
                      Talab etiladigan ish qulayligi:
                    </div>
                    <div style="font-size:0.8rem; color:var(--text-main); line-height:1.4;">
                      ${(cand.accommodations || []).map(a => `<div>✓ ${a}</div>`).join('')}
                    </div>
                  </div>
                </div>

                <!-- Direct Action: Start Chat & View Details -->
                <div class="talent-card-actions">
                  <button type="button" class="btn btn-primary" style="padding:0.65rem 0.75rem; font-size:0.85rem;" onclick="window.EmployersComponent.contactCandidate('${cand.id}')">
                    ${I.get('send', 14, '#ffffff')}
                    <span>Xabar Yozish</span>
                  </button>
                  <button type="button" class="btn btn-outline" style="padding:0.65rem 0.75rem; font-size:0.85rem;" onclick="window.EmployersComponent.openCandidateModal('${cand.id}')">
                    ${I.get('fileText', 14)}
                    <span>To'liq Profil</span>
                  </button>
                </div>

              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 2: Uzbekistan Tax Incentive ROI Interactive Calculator -->
        <div class="card card-elevated" style="padding:2.5rem; margin-bottom:4rem; border:1px solid rgba(245, 158, 11, 0.3);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1.5rem; margin-bottom:2rem;">
            <div>
              <span class="badge badge-amber" style="margin-bottom:0.5rem;">O'zbekiston Respublikasi Soliq Kodeksi</span>
              <h2 style="font-size:1.85rem; margin:0;">Ijtimoiy Soliq va Davlat Subsidiyalari ROI Kalkulyatori</h2>
            </div>
            <div style="font-size:0.85rem; color:var(--text-subtle); max-width:320px; text-align:right;">
              Ijtimoiy soliq stavkasi 12% dan 1% gacha pasaytiriladi hamda ish joyini moslashtirish uchun davlat grantlari beriladi.
            </div>
          </div>

          <div class="grid-2" style="align-items:center; gap:2.5rem;">
            
            <!-- Sliders Box -->
            <div style="display:flex; flex-direction:column; gap:1.75rem;">
              
              <!-- Slider 1: Employee Count -->
              <div>
                <div style="display:flex; justify-content:space-between; font-weight:800; font-size:1rem; margin-bottom:0.75rem;">
                  <span>Xodimlar soni (Nogironligi bor shaxslar):</span>
                  <span style="color:var(--accent-amber-400); font-size:1.2rem;">${this.employeeCount} nafar</span>
                </div>
                <input type="range" min="1" max="50" value="${this.employeeCount}" style="width:100%; accent-color:var(--accent-amber-400); cursor:pointer;" oninput="window.EmployersComponent.updateCount(this.value)" />
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-subtle); margin-top:0.35rem;">
                  <span>1 nafar</span>
                  <span>25 nafar</span>
                  <span>50 nafar</span>
                </div>
              </div>

              <!-- Slider 2: Average Salary -->
              <div>
                <div style="display:flex; justify-content:space-between; font-weight:800; font-size:1rem; margin-bottom:0.75rem;">
                  <span>O'rtacha oylik maosh:</span>
                  <span style="color:var(--accent-teal-400); font-size:1.2rem;">${(this.averageSalary / 1000000).toFixed(1)} mln UZS</span>
                </div>
                <input type="range" min="4000000" max="25000000" step="500000" value="${this.averageSalary}" style="width:100%; accent-color:var(--accent-teal-400); cursor:pointer;" oninput="window.EmployersComponent.updateSalary(this.value)" />
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-subtle); margin-top:0.35rem;">
                  <span>4 mln UZS</span>
                  <span>15 mln UZS</span>
                  <span>25 mln UZS</span>
                </div>
              </div>

            </div>

            <!-- ROI Output Display Card -->
            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-2xl); padding:2rem; text-align:center;">
              <div style="font-size:0.85rem; font-weight:800; text-transform:uppercase; color:var(--text-subtle); margin-bottom:0.5rem;">
                Kompaniyangizning Yillik Iqtisodiy Foydasi:
              </div>
              <div style="font-size:2.6rem; font-weight:900; color:var(--accent-teal-400); line-height:1.1; margin-bottom:1.5rem;">
                ${calc.totalAnnualBenefitFormatted} UZS
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; text-align:left; border-top:1px solid var(--surface-border); padding-top:1.25rem;">
                <div>
                  <div style="font-size:0.75rem; color:var(--text-subtle);">Soliq tejamkorligi (11% farq):</div>
                  <div style="font-weight:800; font-size:1rem; color:var(--text-main);">${calc.annualTaxSavingsFormatted} UZS/yil</div>
                </div>
                <div>
                  <div style="font-size:0.75rem; color:var(--text-subtle);">Ish joyi moslashtirish granti:</div>
                  <div style="font-weight:800; font-size:1rem; color:var(--accent-cyan-400);">${calc.adaptationGrantFormatted} UZS</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Section 3: 4 Steps to Inclusion Certification -->
        <div style="text-align:center; max-width:760px; margin:0 auto 3rem;">
          <h2 style="font-size:2.2rem; margin-bottom:0.75rem;">Inklyuziv Ish Joyi Sertifikatini Olish Jarayoni</h2>
          <p style="color:var(--text-subtle); font-size:1.05rem;">4 bosqichli professional audit orqali xalqaro standartdagi sertifikatga ega bo'ling.</p>
        </div>

        <div class="grid-4" style="margin-bottom:4rem;">
          <div class="card">
            <div style="font-size:1.8rem; font-weight:900; color:var(--primary-400); margin-bottom:0.5rem;">01</div>
            <h3 style="font-size:1.15rem; margin-bottom:0.5rem;">Onlayn Self-Audit</h3>
            <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">Ofis infratuzilmasi va masofaviy dasturlarning qulayligini baholash.</p>
          </div>
          <div class="card">
            <div style="font-size:1.8rem; font-weight:900; color:var(--accent-teal-400); margin-bottom:0.5rem;">02</div>
            <h3 style="font-size:1.15rem; margin-bottom:0.5rem;">Ekspert Ko'rigi</h3>
            <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">WCAG va inklyuzivlik bo'yicha mustaqil mutaxassislar tekshiruvi.</p>
          </div>
          <div class="card">
            <div style="font-size:1.8rem; font-weight:900; color:var(--accent-cyan-400); margin-bottom:0.5rem;">03</div>
            <h3 style="font-size:1.15rem; margin-bottom:0.5rem;">Jamoani O'qitish</h3>
            <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">HR va jamoa a'zolari uchun inklyuziv muloqot va etika bo'yicha bepul seminar.</p>
          </div>
          <div class="card">
            <div style="font-size:1.8rem; font-weight:900; color:var(--accent-amber-400); margin-bottom:0.5rem;">04</div>
            <h3 style="font-size:1.15rem; margin-bottom:0.5rem;">Rasmiy Sertifikat</h3>
            <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">"Inklyuziv Ish Joyi" nishoni va nomzodlar bazasiga to'liq cheksiz kirish.</p>
          </div>
        </div>

      </section>
    `;
  },

  calculateRoi() {
    const monthlyTotalPayroll = this.employeeCount * this.averageSalary;
    // 12% standard social tax minus 1% inclusive rate = 11% savings
    const monthlyTaxSavings = monthlyTotalPayroll * 0.11;
    const annualTaxSavings = monthlyTaxSavings * 12;
    // 4,000,000 UZS one-time state adaptation grant per employee
    const adaptationGrant = this.employeeCount * 4000000;
    const totalBenefit = annualTaxSavings + adaptationGrant;

    const fmt = (num) => (num).toLocaleString('uz-UZ');

    return {
      annualTaxSavingsFormatted: fmt(annualTaxSavings),
      adaptationGrantFormatted: fmt(adaptationGrant),
      totalAnnualBenefitFormatted: fmt(totalBenefit)
    };
  },

  updateCount(val) {
    this.employeeCount = parseInt(val, 10);
    this.refreshView();
  },

  updateSalary(val) {
    this.averageSalary = parseInt(val, 10);
    this.refreshView();
  },

  handleSearch(val) {
    this.searchQuery = val;
    this.refreshView();
  },

  handleCategory(val) {
    this.selectedCategory = val;
    this.refreshView();
  },

  handleAccommodation(val) {
    this.selectedAccommodation = val;
    this.refreshView();
  },

  contactCandidate(candidateId) {
    const state = window.Store ? window.Store.getState() : {};
    const candidates = state.candidates || (window.APP_DATA ? window.APP_DATA.candidates : []) || [];
    const cand = candidates.find(c => c.id === candidateId) || candidates[0];

    if (!cand) return;

    if (window.Store) {
      window.Store.dispatch('START_CHAT_WITH_CANDIDATE', cand);
    }

    // Direct redirect to chat page with active channel
    window.location.href = `chat.html?channel=chat-cand-${cand.id}`;
  },

  openCandidateModal(candidateId) {
    const state = window.Store ? window.Store.getState() : {};
    const candidates = state.candidates || (window.APP_DATA ? window.APP_DATA.candidates : []) || [];
    const cand = candidates.find(c => c.id === candidateId) || candidates[0];
    if (!cand) return;

    const I = window.Icons;

    const content = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:1rem;">
          <div class="talent-avatar">${cand.avatar || 'U'}</div>
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <h3 style="margin:0; font-size:1.35rem;">${cand.name}</h3>
              <span class="badge badge-teal">${cand.aiScore}% Moslik</span>
            </div>
            <div style="font-size:0.95rem; font-weight:800; color:var(--primary-400);">${cand.title}</div>
            <div style="font-size:0.8rem; color:var(--text-subtle);">📍 ${cand.location} • 💰 ${cand.expectedSalary}</div>
          </div>
        </div>
        <button type="button" class="btn btn-sm btn-outline" onclick="window.App.closeAllModals()" aria-label="Yopish">✕</button>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:0.95rem; margin-bottom:0.4rem; color:var(--text-main);">Mutaxassis Haqida (Bio):</h4>
        <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6; margin:0;">
          ${cand.bio}
        </p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:0.95rem; margin-bottom:0.5rem; color:var(--text-main);">Texnik Ko'nikmalar:</h4>
        <div class="talent-skills-cloud">
          ${(cand.skills || []).map(s => `<span class="talent-skill-chip">${s}</span>`).join('')}
        </div>
      </div>

      <div style="background:var(--surface-subtle); padding:1rem; border-radius:var(--radius-lg); margin-bottom:1.5rem; border:1px solid var(--surface-border);">
        <h4 style="font-size:0.85rem; font-weight:800; color:var(--accent-teal-400); text-transform:uppercase; margin:0 0 0.4rem 0;">
          Talab etiladigan inklyuziv ish qulayliklari:
        </h4>
        <div style="font-size:0.875rem; color:var(--text-main); line-height:1.5;">
          ${(cand.accommodations || []).map(a => `<div>✓ ${a}</div>`).join('')}
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem; border-top:1px solid var(--surface-border); padding-top:1.25rem;">
        <a href="${cand.portfolioUrl || '#'}" target="_blank" class="btn btn-outline">
          ${I.get('link', 16)}
          <span>Portfolioni Ko'rish</span>
        </a>
        <button type="button" class="btn btn-primary" onclick="window.EmployersComponent.contactCandidate('${cand.id}')">
          ${I.get('send', 16, '#ffffff')}
          <span>Ushbu Nomzodga Yozish (Chat)</span>
        </button>
      </div>
    `;

    if (window.App) {
      window.App.openModal(content);
    }
  },

  openPostJobModal() {
    const I = window.Icons;

    const content = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.65rem;">
          <div style="width:38px; height:38px; border-radius:var(--radius-md); background:var(--accent-teal-600); color:#ffffff; display:flex; align-items:center; justify-content:center;">
            ${I.get('briefcase', 20)}
          </div>
          <div>
            <h3 style="margin:0; font-size:1.35rem;">Yangi Inklyuziv Vakansiya Joylashtirish</h3>
            <span style="font-size:0.8rem; color:var(--text-subtle);">Sertifikatlangan standartlar asosida</span>
          </div>
        </div>
        <button type="button" class="btn btn-sm btn-outline" onclick="window.App.closeAllModals()" aria-label="Yopish">✕</button>
      </div>

      <form onsubmit="event.preventDefault(); window.EmployersComponent.submitJob();" style="display:flex; flex-direction:column; gap:1.15rem;">
        <div>
          <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Vakansiya Nomi</label>
          <input type="text" id="new-job-title" required placeholder="Masalan: Frontend Dasturchi (React / TS)" style="width:100%; padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Kompaniya Nomi</label>
            <input type="text" id="new-job-company" required placeholder="Masalan: Uzum Tech" value="Uzum Technologies" style="width:100%; padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
          </div>
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Oylik Maosh (UZS)</label>
            <input type="text" id="new-job-salary" required placeholder="12,000,000 - 18,000,000 UZS" value="12,000,000 - 18,000,000 UZS" style="width:100%; padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
          </div>
        </div>

        <div>
          <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.5rem;">Ta'minlanadigan Moslashuv Qulayliklari:</label>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-size:0.85rem; color:var(--text-muted);">
            <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;"><input type="checkbox" checked /> 100% Masofaviy ish (Remote)</label>
            <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;"><input type="checkbox" checked /> Ekran o'quvchi (Screen reader) mos</label>
            <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;"><input type="checkbox" checked /> Moslashuvchan ish soatlari</label>
            <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;"><input type="checkbox" /> Ofisda pandus va lift mavjud</label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%; margin-top:0.5rem;">
          <span>Vakansiyani Chop Etish</span>
          ${I.get('arrowRight', 16, '#ffffff')}
        </button>
      </form>
    `;

    if (window.App && window.App.openModal) {
      window.App.openModal(content);
    }
  },

  submitJob() {
    if (window.App) {
      window.App.closeAllModals();
      window.App.showToast('Vakansiyangiz tekshiruvdan o\'tib muvaffaqiyatli e\'lon qilindi!', 'success');
    }
  },

  downloadAuditCertificate() {
    if (window.App) {
      window.App.showToast('Inklyuzivlik Auditi Scorecard hisoboti generatsiya qilindi va yuklab olindi.', 'info');
    }
  },

  refreshView() {
    const mainEl = document.getElementById('employers-mount') || document.getElementById('main-content');
    if (mainEl) {
      mainEl.innerHTML = this.render();
    }
  }
};
