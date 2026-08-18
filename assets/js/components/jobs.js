/**
 * "Imkoniyatlar Kengligi" — Senior Inclusive Jobs Portal Component
 * Faceted Multi-Criteria Filter, Dynamic AI Match Engine, Cover Letter Generator, and Persistent Bookmarking
 */

window.JobsComponent = {
  searchQuery: '',
  selectedDepartment: 'all',
  selectedAccommodation: 'all',
  minSalary: 0,
  sortBy: 'match', // match | salary | newest

  departments: [
    { value: 'all', label: 'Barcha Yo\'nalishlar', icon: 'layers' },
    { value: 'engineering', label: 'IT & Dasturlash', icon: 'code' },
    { value: 'design', label: 'Dizayn & UI/UX', icon: 'penTool' },
    { value: 'support', label: 'Mijozlar bilan Aloqa', icon: 'headphones' },
    { value: 'data', label: 'Ma\'lumotlar & AI', icon: 'database' },
    { value: 'marketing', label: 'Marketing & Kontent', icon: 'trendingUp' }
  ],

  accommodations: [
    { value: 'all', label: 'Barcha Qulayliklar', icon: 'shieldCheck' },
    { value: 'remote', label: '100% Masofaviy ish', icon: 'home' },
    { value: 'screen_reader', label: 'Ekran O\'quvchi Mos (Ko\'rish)', icon: 'eye' },
    { value: 'hearing', label: 'Faqat Matnli (Eshitish)', icon: 'volumeX' },
    { value: 'physical_ramps', label: 'Pandusli Ofis (Harakatlanish)', icon: 'mapPin' },
    { value: 'flexible_hours', label: 'Moslashuvchan Grafik', icon: 'clock' }
  ],

  sortOptions: [
    { value: 'match', label: 'Eng Yuqori AI Moslik', icon: 'sparkles' },
    { value: 'salary', label: 'Maosh (Kattadan-kichikka)', icon: 'dollarSign' },
    { value: 'newest', label: 'Eng Yangi Vakansiyalar', icon: 'calendar' }
  ],

  init() {
    // Parse URL search params if present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('q')) {
      this.searchQuery = urlParams.get('q');
    }
  },

  render() {
    const data = window.APP_DATA;
    const I = window.Icons;
    const storeState = window.Store ? window.Store.getState() : {};
    const savedJobs = storeState.savedJobs || [];
    const applications = storeState.applications || [];

    const filteredJobs = this.getFilteredVacancies(data.vacancies);

    return `
      <section class="section-spacing container" aria-labelledby="jobs-page-title">
        
        <!-- Page Header -->
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:1.5rem; margin-bottom:2.5rem;">
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
              <span class="badge badge-teal">
                ${I.get('shieldCheck', 13)}
                <span>100% Tasdiqlangan Inklyuziv Vakansiyalar</span>
              </span>
            </div>
            <h1 id="jobs-page-title" style="font-size:2.4rem; margin:0;">Inklyuziv Vakansiyalar Portali</h1>
            <p style="margin:0.25rem 0 0 0; font-size:1.05rem; color:var(--text-subtle);">
              Sizning qulaylik ehtiyojlaringiz va ko'nikmalaringizga moslashtirilgan bo'sh ish o'rinlari.
            </p>
          </div>

          <!-- Applied Stats Pill -->
          <div style="display:flex; align-items:center; gap:1rem;">
            <div class="card" style="padding:0.75rem 1.25rem; display:flex; align-items:center; gap:0.75rem;">
              <div style="width:36px; height:36px; border-radius:var(--radius-md); background:rgba(99, 102, 241, 0.15); display:flex; align-items:center; justify-content:center; color:var(--primary-400);">
                ${I.get('fileText', 18, 'var(--primary-400)')}
              </div>
              <div>
                <div style="font-size:0.8rem; color:var(--text-subtle);">Mening Arizalarim</div>
                <div style="font-size:1.1rem; font-weight:900; color:var(--text-main);">${applications.length} ta topshirilgan</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Search & Filter Control Bar -->
        <div class="card filter-bar-card" style="padding:1.5rem; margin-bottom:2.5rem; overflow:visible; position:relative; z-index:100;">
          <div style="display:grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap:1rem; align-items:center; position:relative; overflow:visible;">
            
            <!-- Keyword Search -->
            <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-md); padding:0.55rem 0.85rem; display:flex; align-items:center; gap:0.6rem;">
              ${I.get('search', 16, 'var(--text-subtle)')}
              <input type="text" 
                     id="job-filter-search" 
                     value="${this.searchQuery}" 
                     placeholder="Lavozim yoki kompaniya..." 
                     style="border:none; outline:none; background:transparent; width:100%; font-size:0.9rem; font-family:inherit; color:var(--text-main);"
                     oninput="window.JobsComponent.setSearch(this.value)" />
            </div>

            <!-- Department Custom Dropdown Filter -->
            <div class="custom-dropdown" id="dropdown-department">
              <button type="button" class="custom-dropdown-btn" onclick="window.JobsComponent.toggleDropdown('department', event)" aria-label="Yo'nalishni tanlash">
                <span style="display:flex; align-items:center; gap:0.5rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  ${I.get(this.departments.find(d => d.value === this.selectedDepartment)?.icon || 'layers', 16, 'var(--primary-400)')}
                  <span>${this.departments.find(d => d.value === this.selectedDepartment)?.label || 'Barcha Yo\'nalishlar'}</span>
                </span>
                ${I.get('chevronDown', 14, 'var(--primary-400)', 2.5)}
              </button>
              <div class="custom-dropdown-menu">
                ${this.departments.map(d => `
                  <div class="custom-dropdown-item ${this.selectedDepartment === d.value ? 'selected' : ''}" onclick="window.JobsComponent.selectDepartment('${d.value}')">
                    <span style="display:flex; align-items:center; gap:0.55rem;">
                      ${I.get(d.icon, 15, this.selectedDepartment === d.value ? 'var(--accent-teal-400)' : 'var(--text-subtle)')}
                      <span>${d.label}</span>
                    </span>
                    ${this.selectedDepartment === d.value ? I.get('check', 14, 'var(--accent-teal-400)') : ''}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Accommodation Custom Dropdown Filter -->
            <div class="custom-dropdown" id="dropdown-accommodation">
              <button type="button" class="custom-dropdown-btn" onclick="window.JobsComponent.toggleDropdown('accommodation', event)" aria-label="Qulaylik turini tanlash">
                <span style="display:flex; align-items:center; gap:0.5rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  ${I.get(this.accommodations.find(a => a.value === this.selectedAccommodation)?.icon || 'shieldCheck', 16, 'var(--accent-teal-400)')}
                  <span>${this.accommodations.find(a => a.value === this.selectedAccommodation)?.label || 'Barcha Qulayliklar'}</span>
                </span>
                ${I.get('chevronDown', 14, 'var(--accent-teal-400)', 2.5)}
              </button>
              <div class="custom-dropdown-menu">
                ${this.accommodations.map(a => `
                  <div class="custom-dropdown-item ${this.selectedAccommodation === a.value ? 'selected' : ''}" onclick="window.JobsComponent.selectAccommodation('${a.value}')">
                    <span style="display:flex; align-items:center; gap:0.55rem;">
                      ${I.get(a.icon, 15, this.selectedAccommodation === a.value ? 'var(--accent-teal-400)' : 'var(--text-subtle)')}
                      <span>${a.label}</span>
                    </span>
                    ${this.selectedAccommodation === a.value ? I.get('check', 14, 'var(--accent-teal-400)') : ''}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Sort By Custom Dropdown Selector -->
            <div class="custom-dropdown" id="dropdown-sort">
              <button type="button" class="custom-dropdown-btn" onclick="window.JobsComponent.toggleDropdown('sort', event)" aria-label="Saralashni tanlash">
                <span style="display:flex; align-items:center; gap:0.5rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  ${I.get(this.sortOptions.find(s => s.value === this.sortBy)?.icon || 'sparkles', 16, 'var(--accent-cyan-400)')}
                  <span>${this.sortOptions.find(s => s.value === this.sortBy)?.label || 'Eng Yuqori AI Moslik'}</span>
                </span>
                ${I.get('chevronDown', 14, 'var(--accent-cyan-400)', 2.5)}
              </button>
              <div class="custom-dropdown-menu">
                ${this.sortOptions.map(s => `
                  <div class="custom-dropdown-item ${this.sortBy === s.value ? 'selected' : ''}" onclick="window.JobsComponent.selectSort('${s.value}')">
                    <span style="display:flex; align-items:center; gap:0.55rem;">
                      ${I.get(s.icon, 15, this.sortBy === s.value ? 'var(--accent-teal-400)' : 'var(--text-subtle)')}
                      <span>${s.label}</span>
                    </span>
                    ${this.sortBy === s.value ? I.get('check', 14, 'var(--accent-teal-400)') : ''}
                  </div>
                `).join('')}
              </div>
            </div>

          </div>
        </div>

        <!-- Filter Count and Results Grid -->
        <div style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center; font-size:0.95rem; font-weight:700; color:var(--text-subtle);">
          <div>Natijalar: <span style="color:var(--text-main); font-weight:900;">${filteredJobs.length} ta vakansiya</span> topildi</div>
          <button type="button" class="btn btn-ghost btn-sm" onclick="window.JobsComponent.resetFilters()">Filtrlarni tozalash</button>
        </div>

        <!-- Vacancies List Grid -->
        <div class="grid-2">
          ${filteredJobs.map(job => {
            const isSaved = savedJobs.includes(job.id);
            const isApplied = applications.some(a => a.jobId === job.id);

            return `
              <article class="card" aria-labelledby="job-title-${job.id}" style="display:flex; flex-direction:column; justify-content:space-between;">
                
                <!-- Card Header -->
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; gap:1rem;">
                    <div>
                      <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
                        <span style="font-size:0.9rem; font-weight:800; color:var(--accent-teal-400);">${job.company}</span>
                        ${I.get('shieldCheck', 14, 'var(--accent-teal-400)')}
                      </div>
                      <h2 id="job-title-${job.id}" style="font-size:1.35rem; margin:0 0 0.5rem 0;">${job.title}</h2>
                    </div>

                    <!-- AI Match Score Badge -->
                    <div style="background:rgba(16, 185, 129, 0.15); border:1px solid rgba(16, 185, 129, 0.35); border-radius:var(--radius-lg); padding:0.4rem 0.75rem; text-align:center; flex-shrink:0;">
                      <div style="font-size:1.15rem; font-weight:900; color:var(--accent-teal-400); line-height:1;">${job.aiMatch}%</div>
                      <div style="font-size:0.65rem; font-weight:800; color:var(--text-subtle); text-transform:uppercase;">AI Moslik</div>
                    </div>
                  </div>

                  <!-- Location and Salary Tags -->
                  <div style="display:flex; gap:0.75rem; flex-wrap:wrap; font-size:0.875rem; color:var(--text-subtle); margin-bottom:1.15rem;">
                    <div style="display:flex; align-items:center; gap:0.35rem;">
                      ${I.get('mapPin', 14)}
                      <span>${job.location}</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.35rem; color:var(--accent-amber-400); font-weight:700;">
                      ${I.get('dollarSign', 14)}
                      <span>${job.salary}</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.35rem;">
                      ${I.get('clock', 14)}
                      <span>${job.employmentType}</span>
                    </div>
                  </div>

                  <p style="font-size:0.925rem; color:var(--text-muted); line-height:1.55; margin-bottom:1.25rem;">
                    ${job.description}
                  </p>

                  <!-- Accommodations List Pills -->
                  <div style="display:flex; flex-wrap:wrap; gap:0.45rem; margin-bottom:1.5rem;">
                    ${job.accommodations.map(acc => `
                      <span class="badge badge-teal" style="font-size:0.75rem;">
                        ${I.get('check', 11)}
                        <span>${acc}</span>
                      </span>
                    `).join('')}
                  </div>
                </div>

                <!-- Card Actions Bottom Bar -->
                <div style="border-top:1px solid var(--surface-border); padding-top:1.15rem; display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
                  
                  <div style="display:flex; gap:0.5rem;">
                    <button type="button" class="btn btn-outline btn-sm" onclick="window.JobsComponent.openJobDetails(${job.id})" aria-label="${job.title} batafsil ko'rish">
                      <span>Batafsil</span>
                    </button>
                    <button type="button" class="btn btn-ghost btn-sm" style="color:${isSaved ? 'var(--accent-amber-400)' : 'var(--text-subtle)'};" onclick="window.JobsComponent.toggleSave(${job.id})" title="${isSaved ? 'Saqlanganlardan olib tashlash' : 'Saqlash'}" aria-label="Saqlash">
                      ${I.get('bookmark', 16, isSaved ? 'var(--accent-amber-400)' : 'currentColor')}
                    </button>
                  </div>

                  <div>
                    ${isApplied ? `
                      <span class="badge badge-teal" style="padding:0.5rem 0.85rem; font-size:0.825rem;">
                        ${I.get('check', 13)}
                        <span>Ariza topshirilgan</span>
                      </span>
                    ` : `
                      <button type="button" class="btn btn-primary btn-sm" onclick="window.JobsComponent.openApplyModal(${job.id})" aria-label="${job.title} bo'yicha ariza topshirish">
                        ${I.get('sparkles', 14, '#ffffff')}
                        <span>AI Tezkor Ariza</span>
                      </button>
                    `}
                  </div>

                </div>

              </article>
            `;
          }).join('')}
        </div>

      </section>
    `;
  },

  getFilteredVacancies(vacancies) {
    let result = [...vacancies];

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(v => 
        v.title.toLowerCase().includes(q) || 
        v.company.toLowerCase().includes(q) || 
        v.description.toLowerCase().includes(q)
      );
    }

    if (this.selectedDepartment !== 'all') {
      result = result.filter(v => v.department === this.selectedDepartment);
    }

    if (this.selectedAccommodation !== 'all') {
      result = result.filter(v => v.accommodationTypes && v.accommodationTypes.includes(this.selectedAccommodation));
    }

    if (this.sortBy === 'match') {
      result.sort((a, b) => b.aiMatch - a.aiMatch);
    } else if (this.sortBy === 'salary') {
      result.sort((a, b) => (b.salaryNumeric || 0) - (a.salaryNumeric || 0));
    } else if (this.sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  },

  toggleDropdown(dropdownName, event) {
    if (event) event.stopPropagation();
    const targetEl = document.getElementById(`dropdown-${dropdownName}`);
    const isAlreadyOpen = targetEl ? targetEl.classList.contains('open') : false;
    
    // Close all open dropdowns
    document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));
    
    if (targetEl && !isAlreadyOpen) {
      targetEl.classList.add('open');
    }
  },

  selectDepartment(val) {
    this.selectedDepartment = val;
    this.refreshView();
  },

  selectAccommodation(val) {
    this.selectedAccommodation = val;
    this.refreshView();
  },

  selectSort(val) {
    this.sortBy = val;
    this.refreshView();
  },

  setSearch(val) {
    this.searchQuery = val;
    this.refreshView();
  },

  setDepartment(val) {
    this.selectedDepartment = val;
    this.refreshView();
  },

  setAccommodation(val) {
    this.selectedAccommodation = val;
    this.refreshView();
  },

  setSort(val) {
    this.sortBy = val;
    this.refreshView();
  },

  resetFilters() {
    this.searchQuery = '';
    this.selectedDepartment = 'all';
    this.selectedAccommodation = 'all';
    this.sortBy = 'match';
    this.refreshView();
  },

  refreshView() {
    const mountEl = document.getElementById('jobs-mount') || document.getElementById('main-content');
    if (mountEl) {
      if (document.getElementById('jobs-mount')) {
        document.getElementById('jobs-mount').innerHTML = this.render();
      } else {
        mountEl.innerHTML = this.render();
      }
    }
  },

  toggleSave(jobId) {
    if (window.Store) {
      window.Store.dispatch('TOGGLE_SAVE_JOB', jobId);
      const isSaved = window.Store.getState().savedJobs.includes(jobId);
      if (window.App) {
        window.App.showToast(isSaved ? 'Vakansiya saqlandi' : 'Saqlanganlardan olib tashlandi', 'info');
      }
      this.refreshView();
    }
  },

  openJobDetails(jobId) {
    const job = window.APP_DATA.vacancies.find(v => v.id === jobId);
    if (!job) return;
    const I = window.Icons;

    const content = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.5rem; gap:1rem;">
        <div>
          <span class="badge badge-teal" style="margin-bottom:0.35rem;">
            ${I.get('shieldCheck', 13)}
            <span>${job.company} — Sertifikatlangan Inklyuziv Tashkilot</span>
          </span>
          <h2 style="font-size:1.6rem; margin:0;">${job.title}</h2>
        </div>
        <button type="button" class="btn btn-sm btn-outline" onclick="window.App.closeAllModals()" aria-label="Yopish">✕</button>
      </div>

      <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1rem; margin-bottom:1.5rem; display:grid; grid-template-columns:repeat(3, 1fr); gap:0.75rem; text-align:center;">
        <div>
          <div style="font-size:0.75rem; color:var(--text-subtle);">Maosh</div>
          <div style="font-size:0.95rem; font-weight:800; color:var(--accent-amber-400);">${job.salary}</div>
        </div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-subtle);">Format</div>
          <div style="font-size:0.95rem; font-weight:800; color:var(--text-main);">${job.workType === 'remote' ? '100% Masofaviy' : 'Gibrid'}</div>
        </div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-subtle);">AI Moslik</div>
          <div style="font-size:0.95rem; font-weight:900; color:var(--accent-teal-400);">${job.aiMatch}%</div>
        </div>
      </div>

      <h4 style="font-size:1.05rem; margin-bottom:0.5rem;">Vakansiya Tavsifi</h4>
      <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.25rem;">${job.description}</p>

      <h4 style="font-size:1.05rem; margin-bottom:0.5rem;">Moslashtirilgan Inklyuziv Qulayliklar:</h4>
      <ul style="margin-left:1.25rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.5rem;">
        ${job.accommodations.map(acc => `<li><strong>${acc}</strong></li>`).join('')}
      </ul>

      <h4 style="font-size:1.05rem; margin-bottom:0.5rem;">Talablar:</h4>
      <ul style="margin-left:1.25rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.75rem;">
        ${job.requirements.map(req => `<li>${req}</li>`).join('')}
      </ul>

      <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
        <button type="button" class="btn btn-outline" onclick="window.App.closeAllModals()">Yopish</button>
        <button type="button" class="btn btn-primary" onclick="window.JobsComponent.openApplyModal(${job.id})">
          ${I.get('sparkles', 16, '#ffffff')}
          <span>AI Tezkor Ariza Topshirish</span>
        </button>
      </div>
    `;

    if (window.App && window.App.openModal) {
      window.App.openModal(content);
    }
  },

  openApplyModal(jobId) {
    const job = window.APP_DATA.vacancies.find(v => v.id === jobId);
    if (!job) return;
    const I = window.Icons;
    const storeState = window.Store ? window.Store.getState() : {};
    const candidate = storeState.currentUser;

    const generatedLetter = window.AiEngine.generateCoverLetter(job, candidate);

    const content = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
        <div style="display:flex; align-items:center; gap:0.65rem;">
          <div style="width:40px; height:40px; border-radius:var(--radius-md); background:rgba(99, 102, 241, 0.15); color:var(--primary-400); display:flex; align-items:center; justify-content:center;">
            ${I.get('sparkles', 22)}
          </div>
          <div>
            <h3 style="margin:0; font-size:1.35rem;">AI Bir Bosishda Ariza (Cover Letter)</h3>
            <span style="font-size:0.8rem; color:var(--accent-teal-400); font-weight:700;">${job.title} — ${job.company}</span>
          </div>
        </div>
        <button type="button" class="btn btn-sm btn-outline" onclick="window.App.closeAllModals()" aria-label="Yopish">✕</button>
      </div>

      <p style="font-size:0.9rem; color:var(--text-subtle); margin-bottom:1rem;">
        Sun'iy intellekt sizning profilingizdagi masofaviy qulaylik ehtiyojlaringiz va texnik tajribangiz asosida ushbu ilova xatini tayyorladi:
      </p>

      <div style="margin-bottom:1.5rem;">
        <textarea id="apply-cover-letter" rows="8" style="width:100%; padding:1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-lg); color:var(--text-main); font-family:inherit; font-size:0.925rem; line-height:1.6; resize:vertical;">${generatedLetter}</textarea>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
        <button type="button" class="btn btn-outline btn-sm" onclick="navigator.clipboard.writeText(document.getElementById('apply-cover-letter').value); window.App.showToast('Nusxalandi', 'info');">
          ${I.get('fileText', 14)}
          <span>Matnni Nusxalash</span>
        </button>

        <div style="display:flex; gap:0.6rem;">
          <button type="button" class="btn btn-outline" onclick="window.App.closeAllModals()">Bekor qilish</button>
          <button type="button" class="btn btn-primary" onclick="window.JobsComponent.submitApplication(${job.id})">
            ${I.get('send', 16, '#ffffff')}
            <span>Arizani Yuborish</span>
          </button>
        </div>
      </div>
    `;

    if (window.App && window.App.openModal) {
      window.App.openModal(content);
    }
  },

  submitApplication(jobId) {
    const job = window.APP_DATA.vacancies.find(v => v.id === jobId);
    if (!job) return;

    const letterEl = document.getElementById('apply-cover-letter');
    const letter = letterEl ? letterEl.value : '';

    if (window.Store) {
      window.Store.dispatch('APPLY_JOB', {
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
        matchScore: job.aiMatch,
        coverLetter: letter
      });
    }

    if (window.App) {
      window.App.closeAllModals();
      window.App.showToast(`"${job.title}" vakansiyasiga arizangiz muvaffaqiyatli yuborildi!`, 'success');
      this.refreshView();
    }
  }
};
