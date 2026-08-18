/**
 * "Imkoniyatlar Kengligi" — Senior Role-Aware AI Dashboard Architecture
 * Dedicated modules for Candidates (Self-Showcase, Laser CV Scanner, Mock Interview Coach, Kanban),
 * Employers (Candidate Talent Directory, Vacancies Pipeline, ROI Calculator),
 * and Mentors (Sign-Language & Coaching Requests, CV Audits, Live Mentoring).
 */

window.DashboardComponent = {
  activeTab: 'self-showcase', // for candidates: self-showcase | overview | cv-scanner | interview-coach | kanban
  selectedCvSample: 'frontend',
  isScanning: false,
  scanProgress: 0,
  scanResults: null,
  selectedQuestionId: 1,
  userInterviewAnswer: '',
  aiInterviewFeedback: null,
  isRecordingAudio: false,

  // Candidate Showcase Filter states (for Employer view)
  employerSearchQuery: '',
  employerSelectedCategory: 'all',
  employerSelectedAccommodation: 'all',

  render() {
    const data = window.APP_DATA;
    const I = window.Icons;
    const storeState = window.Store ? window.Store.getState() : {};
    const currentUser = storeState.currentUser || {
      fullName: 'Azizbek Saidov',
      role: 'candidate',
      title: 'Senior Frontend & WCAG 2.1 AA Dasturchi'
    };
    const role = currentUser.role || 'candidate';

    return `
      <section class="section-spacing container" aria-labelledby="dashboard-title" style="padding-top:1.5rem;">
        
        <!-- Role-Aware Header & Switcher Banner -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.5rem; margin-bottom:2.25rem;">
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.6rem; margin-bottom:0.4rem;">
              <span class="badge ${role === 'candidate' ? 'badge-teal' : (role === 'employer' ? 'badge-amber' : 'badge-cyan')}">
                ● ${role === 'candidate' ? 'Nomzod Profili (Talent)' : (role === 'employer' ? 'Ish Beruvchi (B2B Hub)' : 'Surdotarjimon & Mentor')}
              </span>
              <span style="font-size:0.85rem; color:var(--text-subtle);">Oxirgi AI yangilanish: Bugun, ${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}</span>
            </div>
            <h1 id="dashboard-title" style="font-size:2.4rem; margin:0;">Xush kelibsiz, ${currentUser.fullName}!</h1>
            <p style="margin:0.25rem 0 0 0; font-size:1.05rem; color:var(--text-subtle);">
              ${role === 'candidate' 
                ? "O'zingizni reklama qilish, AI rezyume tahlili va to'siqsiz ish takliflarini boshqarish markazi." 
                : (role === 'employer'
                  ? "Inklyuziv iqtidorlarni topish, nomzodlar bilan to'g'ridan-to'g'ri bog'lanish va 1% soliq imtiyozlari boshqaruvi."
                  : "Nomzodlarga surdotarjima ko'rsatish, rezyume auditi va inklyuziv karyera murabbiyligi.")
              }
            </p>
          </div>

          <!-- Dynamic Tabs based on Role -->
          <div style="display:flex; background:var(--surface-card); border:1px solid var(--surface-border); border-radius:var(--radius-xl); padding:0.35rem; gap:0.35rem; box-shadow:var(--shadow-sm); flex-wrap:wrap;">
            ${this.renderRoleTabs(role, I)}
          </div>
        </div>

        <!-- Render Content of Current Tab -->
        ${this.renderContentForRole(role, data, storeState, currentUser)}

      </section>
    `;
  },

  renderRoleTabs(role, I) {
    if (role === 'employer') {
      return `
        <button type="button" class="btn btn-sm ${this.activeTab === 'candidate-showcase' || this.activeTab === 'self-showcase' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('candidate-showcase')">
          ${I.get('user', 15)}
          <span>Nomzodlar Reklama Bazasi</span>
        </button>
        <button type="button" class="btn btn-sm ${this.activeTab === 'vacancies-pipeline' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('vacancies-pipeline')">
          ${I.get('briefcase', 15)}
          <span>Vakansiyalar & Arizalar</span>
        </button>
        <button type="button" class="btn btn-sm ${this.activeTab === 'roi-calc' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('roi-calc')">
          ${I.get('trendingUp', 15)}
          <span>1% Soliq ROI</span>
        </button>
      `;
    } else if (role === 'mentor') {
      return `
        <button type="button" class="btn btn-sm ${this.activeTab === 'mentor-requests' || this.activeTab === 'self-showcase' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('mentor-requests')">
          ${I.get('heartHandshake', 15)}
          <span>Kelgan So'rovlar</span>
        </button>
        <button type="button" class="btn btn-sm ${this.activeTab === 'cv-audit' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('cv-audit')">
          ${I.get('fileText', 15)}
          <span>Rezyume Auditi</span>
        </button>
        <button type="button" class="btn btn-sm ${this.activeTab === 'resources' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('resources')">
          ${I.get('award', 15)}
          <span>Sertifikat & Resurslar</span>
        </button>
      `;
    }

    // Default: Candidate
    return `
      <button type="button" class="btn btn-sm ${this.activeTab === 'self-showcase' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('self-showcase')">
        ${I.get('sparkles', 15)}
        <span>Reklama Profilim & Vitrina</span>
      </button>
      <button type="button" class="btn btn-sm ${this.activeTab === 'overview' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('overview')">
        ${I.get('activity', 15)}
        <span>Umumiy Tahlil</span>
      </button>
      <button type="button" class="btn btn-sm ${this.activeTab === 'cv-scanner' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('cv-scanner')">
        ${I.get('fileText', 15)}
        <span>AI CV Skaner</span>
      </button>
      <button type="button" class="btn btn-sm ${this.activeTab === 'interview-coach' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('interview-coach')">
        ${I.get('mic', 15)}
        <span>Intervyu Trenajyori</span>
      </button>
      <button type="button" class="btn btn-sm ${this.activeTab === 'kanban' ? 'btn-primary' : 'btn-ghost'}" onclick="window.DashboardComponent.switchTab('kanban')">
        ${I.get('briefcase', 15)}
        <span>Arizalar Pipeline</span>
      </button>
    `;
  },

  renderContentForRole(role, data, storeState, currentUser) {
    if (role === 'employer') {
      if (this.activeTab === 'vacancies-pipeline') return this.renderEmployerVacanciesTab(storeState);
      if (this.activeTab === 'roi-calc') return this.renderEmployerRoiTab();
      return this.renderCandidateDirectoryTab(data, storeState);
    } else if (role === 'mentor') {
      if (this.activeTab === 'cv-audit') return this.renderMentorAuditTab(data);
      if (this.activeTab === 'resources') return this.renderMentorResourcesTab();
      return this.renderMentorRequestsTab(data, storeState);
    }

    // Candidate tabs
    if (this.activeTab === 'self-showcase') {
      return this.renderCandidateSelfShowcaseTab(data, storeState, currentUser);
    } else if (this.activeTab === 'cv-scanner') {
      return this.renderCvScannerTab(data);
    } else if (this.activeTab === 'interview-coach') {
      return this.renderInterviewCoachTab(data);
    } else if (this.activeTab === 'kanban') {
      return this.renderKanbanTab(storeState);
    }
    return this.renderOverviewTab(data, storeState);
  },

  /* ==========================================================================
     Candidate: Self-Promotion & Talent Showcase Tab (NOMZOD O'ZINI REKLAMA QILISH)
     ========================================================================== */
  renderCandidateSelfShowcaseTab(data, storeState, currentUser) {
    const I = window.Icons;
    const candidates = storeState.candidates || data.candidates || [];
    const myProfile = candidates.find(c => c.id === 'cand-1' || c.name === currentUser.fullName) || candidates[0];

    const isOpen = myProfile.isOpenToWork !== false;

    return `
      <!-- Live Preview Banner for Candidate -->
      <div class="candidate-preview-banner">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1rem;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <div style="width:36px; height:36px; border-radius:50%; background:var(--accent-teal-600); display:flex; align-items:center; justify-content:center; color:#ffffff;">
              ${I.get('sparkles', 18)}
            </div>
            <div>
              <div style="font-weight:900; font-size:1.15rem; color:var(--text-main);">
                Sizning Reklama Kartochkangiz (Jonli Ko'rinish)
              </div>
              <div style="font-size:0.85rem; color:var(--text-subtle);">
                Ish beruvchilar va HR mutaxassislari ushbu kartani ko'rib sizga to'g'ridan-to'g'ri xabar yozishadi.
              </div>
            </div>
          </div>

          <!-- Status Toggle Switch -->
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span style="font-size:0.85rem; font-weight:800; color:${isOpen ? 'var(--accent-teal-400)' : 'var(--text-subtle)'};">
              ${isOpen ? '🟢 Ish beruvchilar uchun ochiq (Faol)' : '⏸️ Profil qidiruvda yopilgan'}
            </span>
            <button type="button" class="btn btn-sm ${isOpen ? 'btn-teal' : 'btn-outline'}" onclick="window.DashboardComponent.toggleOpenToWork('${myProfile.id}')">
              <span>${isOpen ? 'Faoliyatni o\'chirish' : 'Faol qilish'}</span>
            </button>
          </div>
        </div>

        <!-- Render the 3D Talent Card Preview exactly as seen by Employers -->
        <div style="max-width:540px; margin:0 auto;">
          <div class="talent-card-3d" style="background:var(--surface-elevated); border:2px solid var(--primary-500); box-shadow:var(--shadow-xl);">
            <div class="talent-card-header">
              <div class="talent-avatar">${myProfile.avatar || 'AS'}</div>
              <div style="flex:1; min-width:0;">
                <div style="display:flex; align-items:center; gap:0.45rem; margin-bottom:0.25rem;">
                  <span style="font-size:1.15rem; font-weight:900; color:var(--text-main);">${myProfile.name}</span>
                  <span class="badge badge-teal" style="font-size:0.7rem;">${I.get('shieldCheck', 11)} AI Tasdiqlangan</span>
                </div>
                <div style="font-size:0.9rem; font-weight:800; color:var(--primary-400); margin-bottom:0.25rem;">
                  ${myProfile.title}
                </div>
                <div style="font-size:0.78rem; color:var(--text-subtle); display:flex; align-items:center; gap:0.5rem;">
                  <span>📍 ${myProfile.location || 'Toshkent / Masofaviy'}</span>
                  <span>•</span>
                  <span style="color:var(--accent-teal-400); font-weight:800;">💰 ${myProfile.expectedSalary || '16 - 22 mln UZS'}</span>
                </div>
              </div>
            </div>

            <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.55; margin-bottom:1rem;">
              "${myProfile.bio}"
            </p>

            <!-- Skills chips -->
            <div class="talent-skills-cloud">
              ${(myProfile.skills || []).map(s => `
                <span class="talent-skill-chip">${s}</span>
              `).join('')}
            </div>

            <!-- Accommodations box -->
            <div class="talent-accommodations-box">
              <div style="font-size:0.75rem; font-weight:800; color:var(--accent-teal-400); text-transform:uppercase; margin-bottom:0.35rem;">
                Talab qilinadigan inklyuziv qulayliklar:
              </div>
              <div style="font-size:0.82rem; color:var(--text-main); line-height:1.45;">
                ${(myProfile.accommodations || []).map(a => `<div>✓ ${a}</div>`).join('')}
              </div>
            </div>

            <!-- Audio Intro Bar -->
            <div style="background:var(--surface-subtle); padding:0.6rem 0.85rem; border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border:1px solid var(--surface-border-subtle);">
              <span style="font-size:0.78rem; color:var(--text-subtle); display:flex; align-items:center; gap:0.4rem;">
                ${I.get('mic', 13, 'var(--primary-400)')}
                <span>Ovozli / Video Intro</span>
              </span>
              <button type="button" class="btn btn-ghost btn-sm" style="font-size:0.75rem; padding:0.2rem 0.5rem; color:var(--accent-teal-400);" onclick="window.a11y.speakText('${(myProfile.audioIntro || myProfile.bio).replace(/'/g, "\\'")}')">
                ${I.get('volume2', 13)}
                <span>Tinglash</span>
              </button>
            </div>

            <div class="talent-card-actions">
              <button type="button" class="btn btn-primary" style="font-size:0.85rem; padding:0.65rem;" disabled>
                ${I.get('send', 14, '#ffffff')}
                <span>Ish Beruvchi Yozadi</span>
              </button>
              <a href="${myProfile.portfolioUrl || '#'}" target="_blank" class="btn btn-outline" style="font-size:0.85rem; padding:0.65rem;">
                ${I.get('link', 14)}
                <span>Portfolio Havolasi</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Edit Self-Promotion Form -->
      <div class="card" style="margin-bottom:3rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; border-bottom:1px solid var(--surface-border); padding-bottom:1rem;">
          <div>
            <h3 style="font-size:1.35rem; margin:0 0 0.25rem 0;">Reklama Profilingizni Tahrirlash</h3>
            <span style="font-size:0.85rem; color:var(--text-subtle);">Ma'lumotlaringiz barcha ish beruvchilar va hamkor kompaniyalar bazasida yangilanadi</span>
          </div>
          <button type="button" class="btn btn-primary" onclick="window.DashboardComponent.saveCandidateShowcase('${myProfile.id}')">
            ${I.get('check', 16, '#ffffff')}
            <span>O'zgarishlarni Saqlash</span>
          </button>
        </div>

        <form id="form-candidate-showcase" onsubmit="event.preventDefault(); window.DashboardComponent.saveCandidateShowcase('${myProfile.id}');" style="display:flex; flex-direction:column; gap:1.25rem;">
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
            <div>
              <label style="display:block; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem; color:var(--text-main);">
                Mutaxassislik & Sarlavha
              </label>
              <input type="text" id="edit-cand-title" value="${myProfile.title}" required style="width:100%; padding:0.8rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
            </div>

            <div>
              <label style="display:block; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem; color:var(--text-main);">
                Kutilayotgan Oylik Maosh
              </label>
              <input type="text" id="edit-cand-salary" value="${myProfile.expectedSalary || '16,000,000 - 22,000,000 UZS'}" required style="width:100%; padding:0.8rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
            </div>
          </div>

          <div>
            <label style="display:block; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem; color:var(--text-main);">
              Shaxsiy Shior / Karyera Maqsadi (Bio)
            </label>
            <textarea id="edit-cand-bio" rows="3" required style="width:100%; padding:0.8rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit; font-size:0.925rem; line-height:1.6;">${myProfile.bio}</textarea>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
            <div>
              <label style="display:block; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem; color:var(--text-main);">
                Asosiy Ko'nikmalar (Vergul bilan ajrating)
              </label>
              <input type="text" id="edit-cand-skills" value="${(myProfile.skills || []).join(', ')}" required style="width:100%; padding:0.8rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
            </div>

            <div>
              <label style="display:block; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem; color:var(--text-main);">
                Portfolio yoki GitHub Havolasi
              </label>
              <input type="url" id="edit-cand-portfolio" value="${myProfile.portfolioUrl || 'https://github.com/azizbek-dev'}" required style="width:100%; padding:0.8rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
            </div>
          </div>

          <div>
            <label style="display:block; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem; color:var(--text-main);">
              Talab qilinadigan inklyuziv qulayliklar (Har bir qatorda bittadan)
            </label>
            <textarea id="edit-cand-accommodations" rows="3" required style="width:100%; padding:0.8rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit; font-size:0.925rem;">${(myProfile.accommodations || []).join('\n')}</textarea>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:1rem; margin-top:0.5rem;">
            <button type="submit" class="btn btn-primary btn-lg">
              ${I.get('check', 18, '#ffffff')}
              <span>Saqlash va Ish Beruvchilar Bazasida Yangilash</span>
            </button>
          </div>

        </form>
      </div>
    `;
  },

  /* ==========================================================================
     Employer: Candidate Talent Directory Tab (ISH BERUVCHI NOMZODLARNI KO'RISHI)
     ========================================================================== */
  renderCandidateDirectoryTab(data, storeState) {
    const I = window.Icons;
    const candidates = storeState.candidates || data.candidates || [];

    // Filter candidates
    const filtered = candidates.filter(c => {
      const q = (this.employerSearchQuery || '').toLowerCase();
      const matchesQuery = !q || c.name.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || (c.skills || []).some(s => s.toLowerCase().includes(q));
      const matchesCategory = this.employerSelectedCategory === 'all' || c.category === this.employerSelectedCategory;
      const matchesAcc = this.employerSelectedAccommodation === 'all' || (c.accommodationTypes || []).includes(this.employerSelectedAccommodation);
      return matchesQuery && matchesCategory && matchesAcc;
    });

    return `
      <!-- Directory Search and Filter Controls -->
      <div class="card" style="padding:1.5rem; margin-bottom:2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.35rem; margin:0 0 0.25rem 0;">Iqtidorli Nomzodlar Reklama Bazasi</h3>
            <span style="font-size:0.85rem; color:var(--text-subtle);">O'zbekiston bo'ylab inklyuziv mutaxassislar profillari va portfoliolari</span>
          </div>
          <span class="badge badge-teal" style="font-size:0.85rem;">${filtered.length} ta iqtidor mavjud</span>
        </div>

        <div style="display:grid; grid-template-columns:2fr 1fr 1fr; gap:1rem;">
          <input type="text" 
                 placeholder="Ism, kasb yoki ko'nikma bo'yicha qidirish (masalan: React, QA, WCAG)..." 
                 value="${this.employerSearchQuery}"
                 oninput="window.DashboardComponent.handleEmployerSearch(this.value)"
                 style="padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />

          <select onchange="window.DashboardComponent.handleEmployerCategory(this.value)" style="padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;">
            <option value="all" ${this.employerSelectedCategory === 'all' ? 'selected' : ''}>Barcha Sohalar</option>
            <option value="engineering" ${this.employerSelectedCategory === 'engineering' ? 'selected' : ''}>IT & Dasturlash</option>
            <option value="design" ${this.employerSelectedCategory === 'design' ? 'selected' : ''}>UI/UX Dizayn</option>
            <option value="support" ${this.employerSelectedCategory === 'support' ? 'selected' : ''}>Mijozlarga Xizmat (Chat)</option>
            <option value="data" ${this.employerSelectedCategory === 'data' ? 'selected' : ''}>AI & Data Annotation</option>
          </select>

          <select onchange="window.DashboardComponent.handleEmployerAccommodation(this.value)" style="padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;">
            <option value="all" ${this.employerSelectedAccommodation === 'all' ? 'selected' : ''}>Barcha Qulayliklar</option>
            <option value="remote" ${this.employerSelectedAccommodation === 'remote' ? 'selected' : ''}>100% Masofaviy ish</option>
            <option value="screen_reader" ${this.employerSelectedAccommodation === 'screen_reader' ? 'selected' : ''}>Ekran o'quvchi mosligi</option>
            <option value="hearing" ${this.employerSelectedAccommodation === 'hearing' ? 'selected' : ''}>Matnli aloqa (Eshitish)</option>
            <option value="physical_ramps" ${this.employerSelectedAccommodation === 'physical_ramps' ? 'selected' : ''}>Pandusli / Harakatlanish</option>
          </select>
        </div>
      </div>

      <!-- Candidate Talent Cards Grid -->
      <div class="talent-grid" style="margin-bottom:3.5rem;">
        ${filtered.map(cand => `
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
                  Qulaylik talabi:
                </div>
                <div style="font-size:0.8rem; color:var(--text-main); line-height:1.4;">
                  ${(cand.accommodations || []).map(a => `<div>✓ ${a}</div>`).join('')}
                </div>
              </div>
            </div>

            <!-- Action Buttons: Direct Chat & Full Profile -->
            <div class="talent-card-actions">
              <button type="button" class="btn btn-primary" style="padding:0.65rem 0.75rem; font-size:0.85rem;" onclick="window.DashboardComponent.startDirectChatWithCandidate('${cand.id}')">
                ${I.get('send', 14, '#ffffff')}
                <span>Xabar Yozish</span>
              </button>
              <button type="button" class="btn btn-outline" style="padding:0.65rem 0.75rem; font-size:0.85rem;" onclick="window.DashboardComponent.openCandidateModal('${cand.id}')">
                ${I.get('fileText', 14)}
                <span>To'liq Profil</span>
              </button>
            </div>

          </div>
        `).join('')}
      </div>
    `;
  },

  /* ==========================================================================
     Mentor: Requests and Sign-Language Support Tab
     ========================================================================== */
  renderMentorRequestsTab(data, storeState) {
    const I = window.Icons;
    const requests = storeState.mentorRequests || data.mentorRequests || [];

    return `
      <div class="card" style="margin-bottom:3rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; border-bottom:1px solid var(--surface-border); padding-bottom:1rem;">
          <div>
            <h3 style="font-size:1.35rem; margin:0 0 0.25rem 0;">Nomzodlardan Kelgan Mentorlik So'rovlari</h3>
            <span style="font-size:0.85rem; color:var(--text-subtle);">Surdotarjima ko'magi, rezyume auditi va masofaviy suhbat tayyorgarligi</span>
          </div>
          <span class="badge badge-amber">${requests.length} ta faol so'rov</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:1rem;">
          ${requests.map(req => `
            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-xl); padding:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.25rem;">
              <div>
                <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.35rem;">
                  <span style="font-weight:900; font-size:1.1rem; color:var(--text-main);">${req.candidateName}</span>
                  <span class="badge ${req.status === 'accepted' ? 'badge-teal' : 'badge-amber'}">
                    ${req.status === 'accepted' ? '● Qabul qilingan' : '● Yangi so\'rov'}
                  </span>
                </div>
                <div style="font-weight:800; font-size:0.925rem; color:var(--primary-400); margin-bottom:0.25rem;">
                  Xizmat: ${req.serviceType} (${req.company})
                </div>
                <div style="font-size:0.85rem; color:var(--text-subtle); margin-bottom:0.5rem;">
                  📅 Belgilangan vaqt: <strong>${req.date}</strong>
                </div>
                <p style="font-size:0.875rem; color:var(--text-muted); margin:0; line-height:1.5;">
                  "${req.notes}"
                </p>
              </div>

              <div style="display:flex; flex-direction:column; gap:0.5rem; min-width:180px;">
                <button type="button" class="btn btn-primary btn-sm" onclick="window.DashboardComponent.startDirectChatWithCandidate('${req.candidateId || 'cand-1'}')">
                  ${I.get('send', 14, '#ffffff')}
                  <span>Nomzodga Yozish</span>
                </button>
                <button type="button" class="btn btn-outline btn-sm" onclick="window.DashboardComponent.updateMentorRequestStatus('${req.id}', 'accepted')">
                  ${I.get('check', 14, 'var(--accent-teal-400)')}
                  <span>Sessiyani Tasdiqlash</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderMentorAuditTab(data) {
    const I = window.Icons;
    return `
      <div class="card" style="margin-bottom:3rem;">
        <h3 style="font-size:1.35rem; margin-bottom:0.5rem;">Inklyuziv Rezyume & Portfolio Auditi</h3>
        <p style="font-size:0.9rem; color:var(--text-subtle); margin-bottom:1.5rem;">
          Nomzodlarning WCAG 2.1 AA standartlariga mosligini tekshiring va rasmiy mentorlik xulosasini taqdim eting.
        </p>

        <div class="grid-2" style="gap:1.5rem;">
          <div style="background:var(--surface-subtle); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--surface-border);">
            <h4 style="margin:0 0 0.75rem 0; font-size:1.05rem;">Auditorlik Baholash Mezonlari:</h4>
            <ul style="font-size:0.875rem; color:var(--text-muted); line-height:1.7; margin-left:1.25rem;">
              <li>Ekran o'quvchilar (NVDA, JAWS) bilan to'siqsiz ishlash ko'nikmasi</li>
              <li>Asinxron jamoaviy boshqaruv va git madaniyati</li>
              <li>WCAG 2.1 AA kontrast va semantik tuzilma bilimlari</li>
              <li>Shaxsiy ergonomika va masofaviy ish intizomi</li>
            </ul>
          </div>

          <div style="background:var(--surface-subtle); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--surface-border);">
            <h4 style="margin:0 0 0.75rem 0; font-size:1.05rem;">Yangi Mentorlik Xulosasi Yozish</h4>
            <textarea placeholder="Nomzod rezyumesi bo'yicha tavsiyalaringizni yozing..." rows="4" style="width:100%; padding:0.75rem; background:var(--surface-card); border:1px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit; margin-bottom:0.75rem;"></textarea>
            <button type="button" class="btn btn-teal btn-sm" onclick="window.App.showToast('Mentorlik xulosasi nomzod profiliga biriktirildi!', 'success')">
              <span>Xulosani Tasdiqlash & Yuborish</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  renderMentorResourcesTab() {
    return `
      <div class="grid-3" style="margin-bottom:3rem;">
        <div class="card">
          <h4 style="font-size:1.1rem; margin-bottom:0.5rem;">O'zbek Imo-Ishora Tili Standartlari</h4>
          <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">IT terminologiyasining imo-ishora tilidagi maxsus lug'ati va video qo'llanmalari.</p>
        </div>
        <div class="card">
          <h4 style="font-size:1.1rem; margin-bottom:0.5rem;">WCAG 2.1 AA Kouching Metodikasi</h4>
          <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">Xalqaro W3C standartlari bo'yicha nomzodlarni global kompaniyalarga tayyorlash kursi.</p>
        </div>
        <div class="card">
          <h4 style="font-size:1.1rem; margin-bottom:0.5rem;">Rasmiy Mentorlik Sertifikati</h4>
          <p style="font-size:0.875rem; color:var(--text-subtle); line-height:1.5;">Oliy toifali inklyuziv mutaxassis maqomi va rasmiy hamkorlik guvohnomasi.</p>
        </div>
      </div>
    `;
  },

  renderEmployerVacanciesTab(storeState) {
    const data = window.APP_DATA;
    return `
      <div class="card" style="margin-bottom:3rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
          <h3 style="font-size:1.35rem; margin:0;">Joylashtirilgan Inklyuziv Vakansiyalar</h3>
          <button type="button" class="btn btn-primary btn-sm" onclick="window.EmployersComponent.openPostJobModal()">
            <span>+ Yangi Vakansiya E'lon Qilish</span>
          </button>
        </div>

        <div style="display:flex; flex-direction:column; gap:1rem;">
          ${(data.vacancies || []).map(v => `
            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1rem 1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <div style="font-weight:800; font-size:1.05rem; color:var(--text-main);">${v.title}</div>
                <div style="font-size:0.85rem; color:var(--text-subtle);">${v.company} • ${v.salary}</div>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span class="badge badge-teal">Faol E'lon</span>
                <button type="button" class="btn btn-outline btn-sm" onclick="window.DashboardComponent.switchTab('candidate-showcase')">
                  <span>Nomzodlarni Ko'rish</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderEmployerRoiTab() {
    if (window.EmployersComponent) {
      return `
        <div style="margin-bottom:3rem;">
          ${window.EmployersComponent.render()}
        </div>
      `;
    }
    return '';
  },

  renderOverviewTab(data, storeState) {
    const I = window.Icons;
    const applications = storeState.applications || [];

    return `
      <!-- Top 3 Metrics Cards -->
      <div class="grid-3" style="margin-bottom:2.5rem;">
        
        <!-- Match Score Card -->
        <div class="card" style="text-align:center;">
          <h3 style="font-size:1.15rem; margin-bottom:1.25rem;">Umumiy AI Moslik Indeksi</h3>
          <div class="score-circle" style="--score: 98;">
            <div class="score-circle-inner">
              <span style="font-size:2.1rem; font-weight:900; color:var(--accent-teal-400); line-height:1;">98%</span>
              <span style="font-size:0.7rem; color:var(--text-subtle); font-weight:800; text-transform:uppercase;">A'LO DARAJA</span>
            </div>
          </div>
          <p style="font-size:0.875rem; color:var(--text-subtle); margin-bottom:1.25rem; line-height:1.5;">
            Profilingiz IT va masofaviy veb-dasturlash vakansiyalari bilan maksimal darajada mos keladi.
          </p>
          <button type="button" class="btn btn-outline btn-sm" style="width:100%;" onclick="window.DashboardComponent.switchTab('self-showcase')">
            <span>Reklama Profilini Ko'rish</span>
          </button>
        </div>

        <!-- Skills Progress Card -->
        <div class="card" style="grid-column: span 2;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
            <h3 style="font-size:1.15rem; margin:0;">Ko'nikmalar va Qulaylik Standartlari</h3>
            <span class="badge badge-primary">${I.get('sparkles', 13)} AI Diagnostika</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:1.25rem;">
            <div>
              <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.9rem; margin-bottom:0.4rem;">
                <span>Masofaviy Asinxron Jamoaviy Muloqot</span>
                <span style="color:var(--accent-teal-400);">98%</span>
              </div>
              <div style="background:var(--surface-subtle); height:8px; border-radius:4px; overflow:hidden;">
                <div style="background:linear-gradient(90deg, var(--accent-teal-500), var(--accent-teal-400)); width:98%; height:100%;"></div>
              </div>
            </div>

            <div>
              <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.9rem; margin-bottom:0.4rem;">
                <span>Frontend & React / TypeScript Bilimlari</span>
                <span style="color:var(--primary-400);">94%</span>
              </div>
              <div style="background:var(--surface-subtle); height:8px; border-radius:4px; overflow:hidden;">
                <div style="background:linear-gradient(90deg, var(--primary-600), var(--primary-400)); width:94%; height:100%;"></div>
              </div>
            </div>

            <div>
              <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.9rem; margin-bottom:0.4rem;">
                <span>Veb Qulaylik (WCAG 2.1 AA & Accessibility)</span>
                <span style="color:var(--accent-cyan-400);">96%</span>
              </div>
              <div style="background:var(--surface-subtle); height:8px; border-radius:4px; overflow:hidden;">
                <div style="background:linear-gradient(90deg, var(--accent-cyan-500), var(--accent-cyan-400)); width:96%; height:100%;"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Quick Recent Applications List -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
          <div>
            <h3 style="font-size:1.25rem; margin:0 0 0.25rem 0;">Oxirgi Yuborilgan Arizalar</h3>
            <span style="font-size:0.85rem; color:var(--text-subtle);">Ariza holatlari real vaqt rejimida yangilanadi</span>
          </div>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.DashboardComponent.switchTab('kanban')">
            <span>To'liq Pipeline ni ko'rish</span>
            ${I.get('arrowRight', 14)}
          </button>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${applications.map(app => `
            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1rem 1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <div style="font-weight:800; font-size:1.05rem; color:var(--text-main);">${app.jobTitle}</div>
                <div style="font-size:0.85rem; color:var(--text-subtle);">${app.company} • Topshirilgan sana: ${app.appliedDate}</div>
              </div>

              <div style="display:flex; align-items:center; gap:1rem;">
                <span class="badge ${app.status === 'interview' ? 'badge-teal' : (app.status === 'reviewing' ? 'badge-primary' : 'badge-amber')}">
                  ● ${app.status === 'interview' ? 'Intervyu belgilandi' : (app.status === 'reviewing' ? 'Ko\'rib chiqilmoqda' : 'Ariza qabul qilindi')}
                </span>
                <span style="font-weight:800; font-size:0.9rem; color:var(--accent-teal-400);">${app.matchScore}% Mos</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderCvScannerTab(data) {
    const I = window.Icons;
    const sample = data.cvSamples[this.selectedCvSample] || data.cvSamples.frontend;
    const results = this.scanResults;

    return `
      <div class="grid-2" style="margin-bottom:3rem;">
        
        <!-- Left: CV Input / Preset Selector -->
        <div class="card">
          <h3 style="font-size:1.25rem; margin-bottom:0.75rem;">Rezyume Matni & Ma'lumotlar</h3>
          <p style="font-size:0.875rem; color:var(--text-subtle); margin-bottom:1.25rem;">
            O'z rezyume matningizni kiriting yoki quyidagi tayyor inklyuziv namunalardan birini tanlang:
          </p>

          <!-- Presets -->
          <div style="display:flex; gap:0.5rem; margin-bottom:1rem; flex-wrap:wrap;">
            <button type="button" class="btn btn-sm ${this.selectedCvSample === 'frontend' ? 'btn-primary' : 'btn-outline'}" style="display:flex; align-items:center; gap:0.4rem;" onclick="window.DashboardComponent.loadCvSample('frontend')">
              ${I.get('code', 14)}
              <span>Frontend Dev</span>
            </button>
            <button type="button" class="btn btn-sm ${this.selectedCvSample === 'qa' ? 'btn-primary' : 'btn-outline'}" style="display:flex; align-items:center; gap:0.4rem;" onclick="window.DashboardComponent.loadCvSample('qa')">
              ${I.get('shieldCheck', 14)}
              <span>QA Tester</span>
            </button>
            <button type="button" class="btn btn-sm ${this.selectedCvSample === 'support' ? 'btn-primary' : 'btn-outline'}" style="display:flex; align-items:center; gap:0.4rem;" onclick="window.DashboardComponent.loadCvSample('support')">
              ${I.get('messageSquare', 14)}
              <span>Chat Support</span>
            </button>
          </div>

          <textarea id="cv-input-text" rows="10" style="width:100%; padding:1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-lg); color:var(--text-main); font-family:var(--font-mono); font-size:0.875rem; line-height:1.6; resize:vertical; margin-bottom:1.25rem;">${sample.text}</textarea>

          <button type="button" class="btn btn-primary btn-lg" style="width:100%;" onclick="window.DashboardComponent.runLaserScan()">
            ${I.get('sparkles', 18, '#ffffff')}
            <span>${this.isScanning ? 'Lazerli Tahlil Bormoqda...' : 'AI Lazerli Skanerni Ishga Tushirish'}</span>
          </button>
        </div>

        <!-- Right: Scanner Visualizer & Results -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
            <h3 style="font-size:1.25rem; margin:0;">AI Tahlil Natijalari</h3>
            <span class="badge badge-teal">ATS Optimallashtirilgan</span>
          </div>

          <!-- Laser Scanner Visual Box -->
          <div class="scanner-box" style="margin-bottom:1.5rem;">
            ${this.isScanning ? '<div class="laser-beam"></div>' : ''}
            <div style="font-size:0.8rem; color:var(--accent-cyan-400); margin-bottom:0.5rem;">
              ${this.isScanning ? '● AI_NEURAL_SCANNER: [PROCESSING_TOKENS...]' : '✓ AI_SCANNER_STATUS: [ANALYSIS_COMPLETE]'}
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
              <div>
                <div style="font-size:0.85rem; color:var(--text-subtle);">ATS Moslik Bahosi:</div>
                <div style="font-size:2.2rem; font-weight:900; color:var(--accent-teal-400); line-height:1;">
                  ${results ? results.atsScore : '98'}%
                </div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:0.85rem; color:var(--text-subtle);">Tavsiya Sifati:</div>
                <div style="font-size:1.1rem; font-weight:800; color:var(--text-main);">
                  ${results ? results.matchQuality : "A'lo (Top 3%)"}
                </div>
              </div>
            </div>

            <!-- Extracted Skills Badges -->
            <div style="margin-bottom:1rem;">
              <div style="font-size:0.78rem; color:var(--text-subtle); margin-bottom:0.4rem; text-transform:uppercase;">Aniqlangan Texnik Ko'nikmalar:</div>
              <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
                ${(results ? results.skillsExtracted : ['REACT.JS', 'TYPESCRIPT', 'WCAG 2.1 AA', 'NEXT.JS', 'ACCESSIBILITY']).map(s => `
                  <span class="badge badge-primary" style="font-size:0.75rem;">${s}</span>
                `).join('')}
              </div>
            </div>

            <!-- Accommodations Detected -->
            <div>
              <div style="font-size:0.78rem; color:var(--text-subtle); margin-bottom:0.4rem; text-transform:uppercase;">Aniqlangan Qulaylik Ehtiyojlari:</div>
              <div style="color:var(--accent-teal-400); font-size:0.85rem; line-height:1.5;">
                ✓ 100% Masofaviy ish (Remote-First)<br>
                ✓ Ekran o'quvchi (Screen reader) bilan to'liq mos dasturlar<br>
                ✓ Asinxron jamoaviy aloqa madaniyati
              </div>
            </div>
          </div>

          <!-- Recommendations Box -->
          <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
            <h4 style="font-size:0.95rem; margin-bottom:0.5rem; color:var(--accent-amber-400);">AI Tavsiyalari:</h4>
            <ul style="font-size:0.875rem; color:var(--text-muted); line-height:1.6; margin-left:1.25rem;">
              <li>Reklama profilingizdagi portfolio havolasiga ochiq manbali inklyuziv loyihalaringizni qo'shing.</li>
              <li>Ingliz tili B2 darajasi sizga Yandex va EPAM global masofaviy vakansiyalariga yo'l ochadi.</li>
            </ul>
          </div>

        </div>

      </div>
    `;
  },

  renderInterviewCoachTab(data) {
    const I = window.Icons;
    const questions = data.interviewQuestions || [];
    const activeQ = questions.find(q => q.id === this.selectedQuestionId) || questions[0];

    return `
      <div class="grid-2" style="margin-bottom:3rem;">
        
        <!-- Left: Question & Audio Player -->
        <div class="card">
          <span class="badge badge-teal" style="margin-bottom:0.75rem;">AI Intervyu Murabbiyi</span>
          <h3 style="font-size:1.3rem; margin-bottom:1rem;">Mashq Savollari</h3>

          <!-- Question Selector Pills -->
          <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem;">
            ${questions.map((q, idx) => `
              <button type="button" class="btn btn-sm ${this.selectedQuestionId === q.id ? 'btn-primary' : 'btn-outline'}" onclick="window.DashboardComponent.selectQuestion(${q.id})">
                Savol #${idx + 1}
              </button>
            `).join('')}
          </div>

          <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-xl); padding:1.5rem; margin-bottom:1.5rem;">
            <div style="font-size:0.8rem; font-weight:800; color:var(--accent-teal-400); margin-bottom:0.4rem; text-transform:uppercase;">
              Mavzu: ${activeQ.category}
            </div>
            <div style="font-size:1.15rem; font-weight:800; color:var(--text-main); line-height:1.5; margin-bottom:1.25rem;">
              "${activeQ.question}"
            </div>

            <!-- Question Audio Playback -->
            <button type="button" class="btn btn-teal btn-sm" onclick="window.a11y.speakText('${activeQ.question}')">
              ${I.get('volume2', 16, '#ffffff')}
              <span>Savolni Ovozda Tinglash</span>
            </button>
          </div>

          <!-- Ideal Points Hint -->
          <div style="font-size:0.875rem; color:var(--text-subtle);">
            <strong>Kutilayotgan asosiy nuqtalar:</strong> ${activeQ.idealPoints.join(', ')}
          </div>
        </div>

        <!-- Right: Candidate Answer & Rubric Evaluation -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h3 style="font-size:1.25rem; margin:0;">Sizning Javobingiz</h3>
            <button type="button" class="btn btn-sm btn-outline" onclick="window.DashboardComponent.toggleRecording()">
              ${I.get('mic', 15, this.isRecordingAudio ? 'var(--accent-rose-500)' : 'currentColor')}
              <span>${this.isRecordingAudio ? 'To\'xtatish' : 'Ovozda Yozish'}</span>
            </button>
          </div>

          <!-- Audio Wave Visualizer while Recording -->
          ${this.isRecordingAudio ? `
            <div class="audio-wave-container" style="background:var(--surface-subtle); border-radius:var(--radius-lg); margin-bottom:1rem;">
              <div class="audio-bar"></div><div class="audio-bar"></div><div class="audio-bar"></div>
              <div class="audio-bar"></div><div class="audio-bar"></div><div class="audio-bar"></div>
              <div class="audio-bar"></div><div class="audio-bar"></div>
            </div>
          ` : ''}

          <textarea id="interview-user-answer" rows="5" placeholder="Javobingizni bu yerga yozing yoki mikrofondan foydalaning..." style="width:100%; padding:1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-lg); color:var(--text-main); font-family:inherit; font-size:0.925rem; line-height:1.6; resize:vertical; margin-bottom:1rem;">${this.userInterviewAnswer || 'Men o\'z uyimda to\'liq ergonomik ish joyi tashkil qilganman. 100% masofaviy ishlashda Notion, Slack va Jira orqali asinxron muloqot qilaman. Har kuni ertalab qisqa status yangilanishlarini taqdim etaman.'}</textarea>

          <button type="button" class="btn btn-primary" style="width:100%; margin-bottom:1.5rem;" onclick="window.DashboardComponent.evaluateInterview()">
            ${I.get('sparkles', 16, '#ffffff')}
            <span>AI Baholash Rubrikasini Ko'rish</span>
          </button>

          <!-- Evaluation Rubric Results -->
          ${this.aiInterviewFeedback ? `
            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1.25rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <h4 style="margin:0; font-size:1.05rem;">AI Bahosi: ${this.aiInterviewFeedback.overallScore} / 10</h4>
                <span class="badge badge-teal">Yuqori Natija</span>
              </div>
              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem; text-align:center; margin-bottom:1rem; font-size:0.8rem;">
                <div style="background:var(--surface-card); padding:0.5rem; border-radius:var(--radius-sm);">
                  <div style="color:var(--text-subtle);">Aniqlik</div>
                  <div style="font-weight:900; color:var(--accent-teal-400);">${this.aiInterviewFeedback.clarityScore}</div>
                </div>
                <div style="background:var(--surface-card); padding:0.5rem; border-radius:var(--radius-sm);">
                  <div style="color:var(--text-subtle);">Texnik Chuqurlik</div>
                  <div style="font-weight:900; color:var(--primary-400);">${this.aiInterviewFeedback.techScore}</div>
                </div>
                <div style="background:var(--surface-card); padding:0.5rem; border-radius:var(--radius-sm);">
                  <div style="color:var(--text-subtle);">Ishonchlilik</div>
                  <div style="font-weight:900; color:var(--accent-cyan-400);">${this.aiInterviewFeedback.inclusiveScore}</div>
                </div>
              </div>
              <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.55; margin-bottom:0.5rem;">
                ${this.aiInterviewFeedback.feedback}
              </p>
              <div style="font-size:0.8rem; color:var(--accent-amber-400); display:flex; align-items:center; gap:0.4rem;">
                ${I.get('sparkles', 14, 'var(--accent-amber-400)')}
                <span><strong>Maslahat:</strong> ${this.aiInterviewFeedback.tip}</span>
              </div>
            </div>
          ` : ''}

        </div>

      </div>
    `;
  },

  renderKanbanTab(storeState) {
    const applications = storeState.applications || [];
    const I = window.Icons;

    const columns = [
      { id: 'applied', title: 'Topshirilgan (Applied)', color: 'var(--primary-400)' },
      { id: 'reviewing', title: 'Ko\'rib chiqilmoqda', color: 'var(--accent-amber-400)' },
      { id: 'interview', title: 'Intervyu Belgilangan', color: 'var(--accent-teal-400)' },
      { id: 'offer', title: 'Taklif / Offer', color: 'var(--accent-cyan-400)' }
    ];

    return `
      <div style="margin-bottom:3rem;">
        <h3 style="font-size:1.35rem; margin-bottom:1.5rem;">Arizalar Harakati (Kanban Pipeline)</h3>
        
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:1.25rem;">
          ${columns.map(col => {
            const colApps = applications.filter(a => a.status === col.id);
            return `
              <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-xl); padding:1.25rem; min-height:400px; display:flex; flex-direction:column;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                  <span style="font-weight:800; font-size:0.95rem; color:${col.color};">${col.title}</span>
                  <span class="badge badge-primary" style="font-size:0.75rem;">${colApps.length}</span>
                </div>

                <div style="display:flex; flex-direction:column; gap:0.85rem; flex:1;">
                  ${colApps.map(app => `
                    <div class="card" style="padding:1rem; background:var(--surface-card);">
                      <div style="font-weight:800; font-size:0.95rem; color:var(--text-main); margin-bottom:0.25rem;">${app.jobTitle}</div>
                      <div style="font-size:0.8rem; color:var(--text-subtle); margin-bottom:0.75rem;">${app.company}</div>
                      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem;">
                        <span style="color:var(--accent-teal-400); font-weight:800;">${app.matchScore}% Moslik</span>
                        <span style="color:var(--text-faint);">${app.appliedDate}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  /* ==========================================================================
     Interactions & Action Handlers
     ========================================================================== */
  switchTab(tabName) {
    this.activeTab = tabName;
    this.refreshView();
  },

  saveCandidateShowcase(candId) {
    const title = document.getElementById('edit-cand-title') ? document.getElementById('edit-cand-title').value : '';
    const salary = document.getElementById('edit-cand-salary') ? document.getElementById('edit-cand-salary').value : '';
    const bio = document.getElementById('edit-cand-bio') ? document.getElementById('edit-cand-bio').value : '';
    const skillsStr = document.getElementById('edit-cand-skills') ? document.getElementById('edit-cand-skills').value : '';
    const portfolioUrl = document.getElementById('edit-cand-portfolio') ? document.getElementById('edit-cand-portfolio').value : '';
    const accStr = document.getElementById('edit-cand-accommodations') ? document.getElementById('edit-cand-accommodations').value : '';

    const skills = skillsStr.split(',').map(s => s.trim()).filter(Boolean);
    const accommodations = accStr.split('\n').map(s => s.trim()).filter(Boolean);

    const updatedData = {
      title,
      expectedSalary: salary,
      bio,
      skills,
      portfolioUrl,
      accommodations
    };

    if (window.Store) {
      window.Store.dispatch('UPDATE_CANDIDATE_SHOWCASE', {
        candidateId: candId || 'cand-1',
        data: updatedData
      });
    }

    if (window.App) {
      window.App.showToast('Reklama profilingiz muvaffaqiyatli yangilandi va barcha ish beruvchilarga ko\'rsatildi!', 'success');
    }

    this.refreshView();
  },

  toggleOpenToWork(candId) {
    if (window.Store) {
      window.Store.dispatch('TOGGLE_CANDIDATE_STATUS', candId || 'cand-1');
      if (window.App) {
        window.App.showToast('Profilingiz holati muvaffaqiyatli o\'zgartirildi!', 'info');
      }
      this.refreshView();
    }
  },

  startDirectChatWithCandidate(candidateId) {
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
        <button type="button" class="btn btn-primary" onclick="window.DashboardComponent.startDirectChatWithCandidate('${cand.id}')">
          ${I.get('send', 16, '#ffffff')}
          <span>Ushbu Nomzodga Yozish (Chat)</span>
        </button>
      </div>
    `;

    if (window.App) {
      window.App.openModal(content);
    }
  },

  handleEmployerSearch(val) {
    this.employerSearchQuery = val;
    this.refreshView();
  },

  handleEmployerCategory(val) {
    this.employerSelectedCategory = val;
    this.refreshView();
  },

  handleEmployerAccommodation(val) {
    this.employerSelectedAccommodation = val;
    this.refreshView();
  },

  updateMentorRequestStatus(reqId, status) {
    if (window.Store) {
      window.Store.dispatch('UPDATE_MENTOR_REQUEST_STATUS', { requestId: reqId, status });
      if (window.App) {
        window.App.showToast('Mentorlik so\'rovi holati yangilandi!', 'success');
      }
      this.refreshView();
    }
  },

  loadCvSample(sampleKey) {
    this.selectedCvSample = sampleKey;
    const sample = window.APP_DATA.cvSamples[sampleKey];
    const inputEl = document.getElementById('cv-input-text');
    if (inputEl && sample) {
      inputEl.value = sample.text;
    }
    this.refreshView();
  },

  async runLaserScan() {
    this.isScanning = true;
    this.refreshView();

    const inputEl = document.getElementById('cv-input-text');
    const text = inputEl ? inputEl.value : '';

    const results = await window.AiEngine.scanResume(text);
    this.scanResults = results;
    this.isScanning = false;
    this.refreshView();

    if (window.App) {
      window.App.showToast('Lazerli tahlil yakunlandi! ATS moslik: ' + results.atsScore + '%', 'success');
    }
  },

  selectQuestion(qId) {
    this.selectedQuestionId = qId;
    this.aiInterviewFeedback = null;
    this.refreshView();
  },

  toggleRecording() {
    this.isRecordingAudio = !this.isRecordingAudio;
    this.refreshView();

    if (this.isRecordingAudio && window.App) {
      window.App.showToast('Mikrofon yozishni boshladi...', 'info');
      setTimeout(() => {
        if (this.isRecordingAudio) {
          this.isRecordingAudio = false;
          this.evaluateInterview();
        }
      }, 4000);
    }
  },

  evaluateInterview() {
    const questions = window.APP_DATA.interviewQuestions || [];
    const activeQ = questions.find(q => q.id === this.selectedQuestionId) || questions[0];
    const textEl = document.getElementById('interview-user-answer');
    const text = textEl ? textEl.value : this.userInterviewAnswer;

    this.aiInterviewFeedback = window.AiEngine.evaluateInterviewAnswer(activeQ.question, text);
    this.refreshView();

    if (window.App) {
      window.App.showToast('AI baholash tayyor!', 'success');
    }
  },

  refreshView() {
    const mainEl = document.getElementById('dashboard-mount') || document.getElementById('main-content');
    if (mainEl) {
      mainEl.innerHTML = this.render();
    }
  }
};
