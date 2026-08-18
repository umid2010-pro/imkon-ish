/**
 * "Imkoniyatlar Kengligi" — Senior Floating Capsule Navbar Component
 * Linear/Stripe-Grade Floating Header with Embedded 3D Accessibility Center & Smooth Active Glow
 */

window.NavbarComponent = {
  isA11yOpen: false,

  render(activePage = '') {
    const I = window.Icons;
    const storeState = window.Store ? window.Store.getState() : {};
    const currentUser = storeState.currentUser;
    const a11y = storeState.a11y || {};

    // Auto-detect active page from location
    if (!activePage) {
      const path = window.location.pathname;
      if (path.includes('jobs.html')) activePage = 'jobs';
      else if (path.includes('dashboard.html')) activePage = 'dashboard';
      else if (path.includes('chat.html')) activePage = 'chat';
      else if (path.includes('employers.html')) activePage = 'employers';
      else if (path.includes('analytics.html')) activePage = 'analytics';
      else if (path.includes('about.html')) activePage = 'about';
      else activePage = 'index';
    }

    return `
      <div class="header-wrapper">
        <header class="site-header" role="banner">
          <nav class="nav-container" aria-label="Asosiy menyu">
            
            <!-- Brand Logo with 3D Shine -->
            <a href="index.html" class="brand-logo" aria-label="Imkoniyatlar Kengligi bosh sahifasi">
              <div class="brand-logo-icon" aria-hidden="true">
                ${I.get('heartHandshake', 20, '#ffffff', 2.5)}
              </div>
              <div style="display:flex; flex-direction:column;">
                <span class="brand-logo-title">Imkoniyatlar Kengligi</span>
                <span class="brand-logo-sub">AI Inklyuziv Bandlik</span>
              </div>
            </a>

            <!-- Multi-Page Navigation Menu (Single Line, Never Wraps!) -->
            <ul class="nav-menu" role="menubar">
              <li role="none">
                <a href="index.html" class="nav-link ${activePage === 'index' || activePage === 'landing' ? 'active' : ''}" role="menuitem">
                  ${I.get('home', 13)}
                  <span>Bosh Sahifa</span>
                </a>
              </li>
              <li role="none">
                <a href="jobs.html" class="nav-link ${activePage === 'jobs' ? 'active' : ''}" role="menuitem">
                  ${I.get('briefcase', 13)}
                  <span>Vakansiyalar</span>
                </a>
              </li>
              <li role="none">
                <a href="dashboard.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}" role="menuitem">
                  ${I.get('bot', 13)}
                  <span>AI Markaz</span>
                  <span class="badge badge-teal" style="font-size:0.6rem; padding:1px 4px;">AI</span>
                </a>
              </li>
              <li role="none">
                <a href="chat.html" class="nav-link ${activePage === 'chat' ? 'active' : ''}" role="menuitem">
                  ${I.get('messageSquare', 13)}
                  <span>AI Muloqot</span>
                </a>
              </li>
              <li role="none">
                <a href="employers.html" class="nav-link ${activePage === 'employers' ? 'active' : ''}" role="menuitem">
                  ${I.get('building', 13)}
                  <span>Ish Beruvchilar</span>
                </a>
              </li>
              <li role="none">
                <a href="analytics.html" class="nav-link ${activePage === 'analytics' ? 'active' : ''}" role="menuitem">
                  ${I.get('trendingUp', 13)}
                  <span>Statistika</span>
                </a>
              </li>
              <li role="none">
                <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}" role="menuitem">
                  ${I.get('info', 13)}
                  <span>Haqimizda</span>
                </a>
              </li>
            </ul>

            <!-- Header Right: A11y Hub & User Pill (Cleanly Contained) -->
            <div class="nav-actions">
              
              <!-- Embedded Accessibility Control Center Dropdown -->
              <div class="a11y-dropdown" id="a11y-dropdown-container">
                <button type="button" 
                        id="a11y-toggle-btn"
                        class="nav-btn nav-btn-a11y" 
                        onclick="window.NavbarComponent.toggleA11yMenu()"
                        aria-expanded="false"
                        aria-haspopup="true"
                        title="WCAG 2.1 AA Qulaylik sozlamalari">
                  <span class="pulse-dot" style="width:6px; height:6px;"></span>
                  <span>Qulaylik</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                <!-- Dropdown Menu Panel -->
                <div class="a11y-menu-panel" id="a11y-menu-panel" role="region" aria-label="Qulaylik sozlamalari">
                  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--surface-border); padding-bottom:0.75rem;">
                    <div style="font-weight:900; font-size:1.05rem; color:var(--text-main); display:flex; align-items:center; gap:0.45rem;">
                      ${I.get('shieldCheck', 16, 'var(--accent-teal-400)')}
                      <span>WCAG 2.1 AA Qulaylik</span>
                    </div>
                    <button type="button" class="btn btn-ghost btn-sm" style="padding:0.2rem 0.4rem;" onclick="window.NavbarComponent.toggleA11yMenu()" aria-label="Yopish">✕</button>
                  </div>

                  <!-- Font Size -->
                  <div class="a11y-panel-section">
                    <span class="a11y-panel-title">${I.get('type', 13)} Shrift O'lchami:</span>
                    <div class="a11y-grid-btn">
                      <button type="button" class="a11y-btn ${a11y.fontScale === 'sm' ? 'active' : ''}" data-font-scale="sm" onclick="window.a11y.setFontScale('sm')">A- (14)</button>
                      <button type="button" class="a11y-btn ${!a11y.fontScale || a11y.fontScale === 'md' ? 'active' : ''}" data-font-scale="md" onclick="window.a11y.setFontScale('md')">A (16)</button>
                      <button type="button" class="a11y-btn ${a11y.fontScale === 'lg' ? 'active' : ''}" data-font-scale="lg" onclick="window.a11y.setFontScale('lg')">A+ (18)</button>
                      <button type="button" class="a11y-btn ${a11y.fontScale === 'xl' ? 'active' : ''}" data-font-scale="xl" onclick="window.a11y.setFontScale('xl')">A++ (22)</button>
                    </div>
                  </div>

                  <!-- Contrast Modes -->
                  <div class="a11y-panel-section">
                    <span class="a11y-panel-title">${I.get('contrast', 13)} Mavzu & Kontrast:</span>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.4rem;">
                      <button type="button" class="a11y-btn ${!a11y.theme || a11y.theme === 'default' ? 'active' : ''}" data-theme-btn="default" onclick="window.a11y.setTheme('default')">
                        ${I.get('moon', 12)} Tungi
                      </button>
                      <button type="button" class="a11y-btn ${a11y.theme === 'light' ? 'active' : ''}" data-theme-btn="light" onclick="window.a11y.setTheme('light')">
                        ${I.get('sun', 12)} Yorug'
                      </button>
                      <button type="button" class="a11y-btn ${a11y.theme === 'high-contrast' ? 'active' : ''}" data-theme-btn="high-contrast" onclick="window.a11y.setTheme('high-contrast')">
                        ${I.get('zap', 12)} 16:1 Sariq
                      </button>
                    </div>
                  </div>

                  <!-- Specialized Tools -->
                  <div class="a11y-panel-section">
                    <span class="a11y-panel-title">Maxsus Yordamchilar:</span>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem;">
                      <button type="button" id="btn-tts-toggle" class="a11y-btn" onclick="window.a11y.toggleTTS()" style="justify-content:flex-start;">
                        ${I.get('volume2', 14)}
                        <span>Ovozli O'quvchi</span>
                      </button>
                      <button type="button" id="btn-dyslexia" class="a11y-btn ${a11y.dyslexiaFont ? 'active' : ''}" onclick="window.a11y.toggleDyslexiaFont()" style="justify-content:flex-start;">
                        ${I.get('eye', 14)}
                        <span>Disleksiya</span>
                      </button>
                      <button type="button" id="btn-large-cursor" class="a11y-btn ${a11y.largeCursor ? 'active' : ''}" onclick="window.a11y.toggleLargeCursor()" style="justify-content:flex-start;">
                        ${I.get('mousePointer', 14)}
                        <span>Katta Kursor</span>
                      </button>
                      <button type="button" class="a11y-btn" onclick="window.App.openKeyboardShortcutsModal()" style="justify-content:flex-start;">
                        <kbd style="background:var(--surface-subtle); padding:1px 4px; border-radius:3px; font-size:10px;">?</kbd>
                        <span>Tugmalar</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              ${currentUser ? `
                <!-- Logged In User Pill -->
                <div style="display:flex; align-items:center; gap:0.45rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-full); padding:0.2rem 0.55rem 0.2rem 0.25rem;">
                  <div style="width:28px; height:28px; border-radius:50%; background:linear-gradient(135deg, ${currentUser.role === 'employer' ? 'var(--accent-amber-500), #ea580c' : (currentUser.role === 'mentor' ? 'var(--accent-cyan-500), #0284c7' : 'var(--primary-600), var(--accent-teal-600)')}); color:#ffffff; font-weight:800; font-size:0.75rem; display:flex; align-items:center; justify-content:center;">
                    ${currentUser.avatar || 'U'}
                  </div>
                  <div style="display:flex; flex-direction:column; line-height:1.1; text-align:left;">
                    <span style="font-size:0.78rem; font-weight:800; color:var(--text-main); max-width:95px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currentUser.fullName}</span>
                    <span style="font-size:0.65rem; color:${currentUser.role === 'employer' ? 'var(--accent-amber-400)' : (currentUser.role === 'mentor' ? 'var(--accent-cyan-400)' : 'var(--accent-teal-400)')}; font-weight:700;">
                      ${currentUser.role === 'employer' ? 'Ish Beruvchi' : (currentUser.role === 'mentor' ? 'Mentor' : 'Nomzod')}
                    </span>
                  </div>
                  <button type="button" class="btn btn-sm btn-ghost" style="padding:0.1rem 0.3rem; font-size:0.65rem; border-radius:var(--radius-full); color:var(--text-subtle);" onclick="window.AuthComponent.logout()" title="Tizimdan chiqish" aria-label="Chiqish">
                    ✕
                  </button>
                </div>
              ` : `
                <button type="button" class="nav-btn nav-btn-outline" onclick="window.AuthComponent.openAuthModal('login')" aria-label="Tizimga kirish">
                  ${I.get('user', 13)}
                  <span>Kirish</span>
                </button>
                <button type="button" class="nav-btn nav-btn-primary" onclick="window.AuthComponent.openAuthModal('signup')" aria-label="Ro'yxatdan o'tish">
                  ${I.get('userPlus', 13)}
                  <span>Ro'yxatdan O'tish</span>
                </button>
              `}

              <!-- Mobile Menu Toggle Button -->
              <button type="button" class="mobile-menu-btn" onclick="window.NavbarComponent.toggleMobileMenu()" aria-label="Mobil menyuni ochish">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </button>
            </div>

          </nav>
        </header>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-drawer" class="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobil menyu">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
          <div style="font-weight:900; font-size:1.2rem; color:var(--text-main);">Menyu</div>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.NavbarComponent.toggleMobileMenu()" aria-label="Menyuni yopish">✕</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:1rem; font-size:1.15rem; font-weight:700;">
          <a href="index.html" class="nav-link ${activePage === 'index' ? 'active' : ''}">Bosh Sahifa</a>
          <a href="jobs.html" class="nav-link ${activePage === 'jobs' ? 'active' : ''}">Inklyuziv Vakansiyalar</a>
          <a href="dashboard.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">AI Nomzod Markazi</a>
          <a href="chat.html" class="nav-link ${activePage === 'chat' ? 'active' : ''}">AI Tarjimon & Muloqot</a>
          <a href="employers.html" class="nav-link ${activePage === 'employers' ? 'active' : ''}">Ish Beruvchilar</a>
          <a href="analytics.html" class="nav-link ${activePage === 'analytics' ? 'active' : ''}">Statistika & SDG</a>
          <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">Biz Haqimizda</a>
        </div>
        <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--surface-border); display:flex; flex-direction:column; gap:0.75rem;">
          ${currentUser ? `
            <div style="display:flex; align-items:center; gap:0.75rem; background:var(--surface-subtle); padding:0.75rem 1rem; border-radius:var(--radius-lg); border:1px solid var(--surface-border);">
              <div style="width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg, ${currentUser.role === 'employer' ? 'var(--accent-amber-500), #ea580c' : (currentUser.role === 'mentor' ? 'var(--accent-cyan-500), #0284c7' : 'var(--primary-600), var(--accent-teal-600)')}); color:#ffffff; font-weight:800; display:flex; align-items:center; justify-content:center;">
                ${currentUser.avatar || 'U'}
              </div>
              <div>
                <div style="font-weight:800; color:var(--text-main); font-size:1rem;">${currentUser.fullName}</div>
                <div style="font-size:0.75rem; color:${currentUser.role === 'employer' ? 'var(--accent-amber-400)' : (currentUser.role === 'mentor' ? 'var(--accent-cyan-400)' : 'var(--accent-teal-400)')}; font-weight:700;">
                  ${currentUser.role === 'employer' ? 'Ish Beruvchi' : (currentUser.role === 'mentor' ? 'Mentor' : 'Nomzod')}
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-outline" style="margin-left:auto;" onclick="window.AuthComponent.logout(); window.NavbarComponent.toggleMobileMenu();">Chiqish</button>
            </div>
          ` : `
            <button type="button" class="btn btn-outline" style="width:100%; justify-content:center;" onclick="window.NavbarComponent.toggleMobileMenu(); window.AuthComponent.openAuthModal('login');">
              ${I.get('user', 16)} <span>Kirish</span>
            </button>
            <button type="button" class="btn btn-primary" style="width:100%; justify-content:center;" onclick="window.NavbarComponent.toggleMobileMenu(); window.AuthComponent.openAuthModal('signup');">
              ${I.get('userPlus', 16)} <span>Ro'yxatdan O'tish</span>
            </button>
          `}
        </div>
      </div>
    `;
  },

  toggleA11yMenu() {
    const panel = document.getElementById('a11y-menu-panel');
    const btn = document.getElementById('a11y-toggle-btn');
    if (panel) {
      const isOpen = panel.classList.toggle('show');
      if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  },

  toggleMobileMenu() {
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) {
      drawer.classList.toggle('open');
    }
  }
};

// Global click listener to close a11y panel if clicked outside
document.addEventListener('click', (e) => {
  const container = document.getElementById('a11y-dropdown-container');
  const panel = document.getElementById('a11y-menu-panel');
  if (container && panel && panel.classList.contains('show') && !container.contains(e.target)) {
    panel.classList.remove('show');
    const btn = document.getElementById('a11y-toggle-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});
