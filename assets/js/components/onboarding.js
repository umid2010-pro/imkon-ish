/**
 * "Imkoniyatlar Kengligi" — Senior 4-Step Interactive Onboarding Wizard Component
 */

window.OnboardingComponent = {
  currentStep: 1,
  selectedRole: 'candidate',
  selectedAccommodations: ['remote', 'screen_reader'],
  selectedSkills: ['React.js', 'TypeScript', 'WCAG 2.1 AA'],

  render() {
    const I = window.Icons;

    return `
      <section class="section-spacing container" aria-labelledby="onboarding-title">
        
        <div style="max-width:760px; margin:0 auto;">
          
          <!-- Wizard Stepper Indicators -->
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3rem; position:relative;">
            <div style="position:absolute; top:50%; left:0; right:0; height:2px; background:var(--surface-border); z-index:1; transform:translateY(-50%);"></div>
            
            ${[1, 2, 3, 4].map(step => {
              const isCompleted = step < this.currentStep;
              const isActive = step === this.currentStep;
              return `
                <div style="position:relative; z-index:2; display:flex; flex-direction:column; align-items:center; gap:0.4rem;">
                  <div style="width:40px; height:40px; border-radius:50%; background:${isActive ? 'var(--primary-600)' : (isCompleted ? 'var(--accent-teal-600)' : 'var(--surface-card)')}; border:2px solid ${isActive ? 'var(--primary-400)' : (isCompleted ? 'var(--accent-teal-500)' : 'var(--surface-border)')}; color:#ffffff; font-weight:900; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-sm);">
                    ${isCompleted ? I.get('check', 18, '#ffffff') : step}
                  </div>
                  <span style="font-size:0.75rem; font-weight:800; color:${isActive ? 'var(--text-main)' : 'var(--text-subtle)'};">
                    ${step === 1 ? 'Rol' : (step === 2 ? 'Ehtiyojlar' : (step === 3 ? 'Ko\'nikmalar' : 'Xulosa'))}
                  </span>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Main Wizard Card -->
          <div class="card card-elevated" style="padding:2.5rem;">
            ${this.renderStepContent()}
          </div>

        </div>

      </section>
    `;
  },

  renderStepContent() {
    const I = window.Icons;

    if (this.currentStep === 1) {
      return `
        <h2 style="font-size:1.8rem; margin-bottom:0.5rem;">Siz platformadan qanday maqsadda foydalanasiz?</h2>
        <p style="color:var(--text-subtle); margin-bottom:2rem;">O'zingizga mos rolni tanlang, tizim siz uchun mos interfeysni sozlaydi.</p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; margin-bottom:2.5rem;">
          
          <div class="card ${this.selectedRole === 'candidate' ? 'card-elevated' : ''}" style="border-color:${this.selectedRole === 'candidate' ? 'var(--primary-500)' : 'var(--surface-border)'}; cursor:pointer; padding:1.5rem;" onclick="window.OnboardingComponent.setRole('candidate')">
            <div style="width:44px; height:44px; border-radius:var(--radius-md); background:rgba(99, 102, 241, 0.15); color:var(--primary-400); display:flex; align-items:center; justify-content:center; margin-bottom:1rem;">
              ${I.get('user', 22)}
            </div>
            <h3 style="font-size:1.2rem; margin-bottom:0.35rem;">Ish Izlovchi (Nomzod)</h3>
            <p style="font-size:0.875rem; color:var(--text-subtle); margin:0;">To'siqsiz, masofaviy yoki moslashtirilgan qulay ish topishni xohlayman.</p>
          </div>

          <div class="card ${this.selectedRole === 'employer' ? 'card-elevated' : ''}" style="border-color:${this.selectedRole === 'employer' ? 'var(--accent-teal-500)' : 'var(--surface-border)'}; cursor:pointer; padding:1.5rem;" onclick="window.OnboardingComponent.setRole('employer')">
            <div style="width:44px; height:44px; border-radius:var(--radius-md); background:rgba(16, 185, 129, 0.15); color:var(--accent-teal-400); display:flex; align-items:center; justify-content:center; margin-bottom:1rem;">
              ${I.get('building', 22)}
            </div>
            <h3 style="font-size:1.2rem; margin-bottom:0.35rem;">Ish Beruvchi (HR)</h3>
            <p style="font-size:0.875rem; color:var(--text-subtle); margin:0;">Iqtidorli mutaxassislarni jalb qilish va soliq imtiyozlaridan foydalanish.</p>
          </div>

        </div>

        <div style="display:flex; justify-content:flex-end;">
          <button type="button" class="btn btn-primary btn-lg" onclick="window.OnboardingComponent.nextStep()">
            <span>Davom Etish</span>
            ${I.get('arrowRight', 16, '#ffffff')}
          </button>
        </div>
      `;
    } else if (this.currentStep === 2) {
      return `
        <h2 style="font-size:1.8rem; margin-bottom:0.5rem;">Siz uchun qanday moslashuv sharoitlari muhim?</h2>
        <p style="color:var(--text-subtle); margin-bottom:2rem;">AI faqat siz tanlagan qulayliklarga 100% mos keluvchi vakansiyalarni filtrlashda foydalanadi.</p>

        <div style="display:flex; flex-direction:column; gap:0.85rem; margin-bottom:2.5rem;">
          
          <label style="display:flex; align-items:center; gap:0.85rem; background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1rem 1.25rem; cursor:pointer;">
            <input type="checkbox" checked onchange="window.OnboardingComponent.toggleAcc('remote')" style="width:18px; height:18px; accent-color:var(--primary-600);" />
            <div>
              <div style="font-weight:800; color:var(--text-main);">100% Masofaviy ish (Remote-First)</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">Uydan turib, erkin va asinxron aloqa orqali ishlash</div>
            </div>
          </label>

          <label style="display:flex; align-items:center; gap:0.85rem; background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1rem 1.25rem; cursor:pointer;">
            <input type="checkbox" checked onchange="window.OnboardingComponent.toggleAcc('screen_reader')" style="width:18px; height:18px; accent-color:var(--primary-600);" />
            <div>
              <div style="font-weight:800; color:var(--text-main);">Ekran O'quvchi Mos Dasturlar (Screen Reader)</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">NVDA, JAWS yoki VoiceOver bilan to'liq moslashgan muhit</div>
            </div>
          </label>

          <label style="display:flex; align-items:center; gap:0.85rem; background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1rem 1.25rem; cursor:pointer;">
            <input type="checkbox" onchange="window.OnboardingComponent.toggleAcc('hearing')" style="width:18px; height:18px; accent-color:var(--primary-600);" />
            <div>
              <div style="font-weight:800; color:var(--text-main);">Faqat Matnli Muloqot (Eshitish Qulayligi)</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">Ovozli qo'ng'iroqlarsiz, faqat chat va yozma topshiriqlar</div>
            </div>
          </label>

          <label style="display:flex; align-items:center; gap:0.85rem; background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:1rem 1.25rem; cursor:pointer;">
            <input type="checkbox" onchange="window.OnboardingComponent.toggleAcc('flexible_hours')" style="width:18px; height:18px; accent-color:var(--primary-600);" />
            <div>
              <div style="font-weight:800; color:var(--text-main);">Moslashuvchan Ish Soatlari</div>
              <div style="font-size:0.8rem; color:var(--text-subtle);">Sog'liq holati va muolajalar bilan uyg'unlashgan ish grafigi</div>
            </div>
          </label>

        </div>

        <div style="display:flex; justify-content:space-between;">
          <button type="button" class="btn btn-outline" onclick="window.OnboardingComponent.prevStep()">Orqaga</button>
          <button type="button" class="btn btn-primary btn-lg" onclick="window.OnboardingComponent.nextStep()">
            <span>Davom Etish</span>
            ${I.get('arrowRight', 16, '#ffffff')}
          </button>
        </div>
      `;
    } else if (this.currentStep === 3) {
      return `
        <h2 style="font-size:1.8rem; margin-bottom:0.5rem;">Asosiy ko'nikmalaringiz va yo'nalishingiz</h2>
        <p style="color:var(--text-subtle); margin-bottom:2rem;">O'zingizga ma'qul texnologiyalar yoki kasbiy sohalarni belgilang.</p>

        <div style="display:flex; gap:0.6rem; flex-wrap:wrap; margin-bottom:2.5rem;">
          ${['React.js', 'TypeScript', 'WCAG 2.1 AA', 'Figma', 'Python', 'QA Testing', 'Mijozlar bilan Aloqa', 'Kopirayting', 'Data Annotation', 'Grafik Dizayn'].map(skill => `
            <button type="button" class="btn btn-sm ${this.selectedSkills.includes(skill) ? 'btn-primary' : 'btn-outline'}" onclick="window.OnboardingComponent.toggleSkill('${skill}')">
              ${skill}
            </button>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:space-between;">
          <button type="button" class="btn btn-outline" onclick="window.OnboardingComponent.prevStep()">Orqaga</button>
          <button type="button" class="btn btn-primary btn-lg" onclick="window.OnboardingComponent.nextStep()">
            <span>AI Profilni Shakllantirish</span>
            ${I.get('sparkles', 16, '#ffffff')}
          </button>
        </div>
      `;
    } else if (this.currentStep === 4) {
      return `
        <div style="text-align:center; padding:1rem 0;">
          <div style="width:64px; height:64px; border-radius:50%; background:rgba(16, 185, 129, 0.15); color:var(--accent-teal-400); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem;">
            ${I.get('sparkles', 32)}
          </div>
          <h2 style="font-size:2.2rem; margin-bottom:0.75rem;">Profilingiz Muvaffaqiyatli Tayyorlandi!</h2>
          <p style="color:var(--text-subtle); font-size:1.05rem; max-width:540px; margin:0 auto 2rem;">
            Sun'iy intellekt sizning talablaringizga 100% mos keluvchi <strong>6 ta eng yaxshi vakansiya</strong>ni aniqladi.
          </p>

          <div style="display:inline-flex; gap:1rem; flex-wrap:wrap; justify-content:center;">
            <a href="dashboard.html" class="btn btn-primary btn-lg">
              ${I.get('bot', 18, '#ffffff')}
              <span>AI Dashboardga O'tish</span>
            </a>
            <a href="jobs.html" class="btn btn-outline btn-lg">
              ${I.get('briefcase', 18, 'currentColor')}
              <span>Vakansiyalarni Ko'rish</span>
            </a>
          </div>
        </div>
      `;
    }
  },

  setRole(r) {
    this.selectedRole = r;
    this.refreshView();
  },

  toggleAcc(acc) {
    if (this.selectedAccommodations.includes(acc)) {
      this.selectedAccommodations = this.selectedAccommodations.filter(a => a !== acc);
    } else {
      this.selectedAccommodations.push(acc);
    }
  },

  toggleSkill(sk) {
    if (this.selectedSkills.includes(sk)) {
      this.selectedSkills = this.selectedSkills.filter(s => s !== sk);
    } else {
      this.selectedSkills.push(sk);
    }
    this.refreshView();
  },

  nextStep() {
    this.currentStep++;
    this.refreshView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  prevStep() {
    this.currentStep--;
    this.refreshView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  refreshView() {
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.innerHTML = this.render();
    }
  }
};
