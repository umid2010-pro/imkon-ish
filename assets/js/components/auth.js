/**
 * "Imkoniyatlar Kengligi" — Senior Auth & Role Management Component
 */

window.AuthComponent = {
  currentUser: null,

  init() {
    if (window.Store) {
      this.currentUser = window.Store.getState().currentUser;
      window.Store.subscribe('AUTH_SET_USER', (state) => {
        this.currentUser = state.currentUser;
        if (window.App && window.App.renderHeader) {
          window.App.renderHeader();
        }
      });
      window.Store.subscribe('AUTH_LOGOUT', () => {
        this.currentUser = null;
        if (window.App && window.App.renderHeader) {
          window.App.renderHeader();
        }
      });
    }
  },

  openAuthModal(mode = 'login') {
    const I = window.Icons;
    const isLogin = mode === 'login';

    const content = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.65rem;">
          <div style="width:38px; height:38px; border-radius:var(--radius-md); background:var(--primary-600); display:flex; align-items:center; justify-content:center; color:#ffffff;">
            ${I.get(isLogin ? 'user' : 'userPlus', 20)}
          </div>
          <div>
            <h3 style="margin:0; font-size:1.35rem;">${isLogin ? 'Tizimga Kirish' : 'Ro\'yxatdan O\'tish'}</h3>
            <span style="font-size:0.8rem; color:var(--text-subtle);">Inklyuziv imkoniyatlar olamiga ulaning</span>
          </div>
        </div>
        <button type="button" class="btn btn-sm btn-outline" onclick="window.App.closeAllModals()" aria-label="Yopish">✕</button>
      </div>

      <!-- Quick Demo Role Switcher -->
      <div style="background:var(--surface-subtle); border:1px solid var(--surface-border); border-radius:var(--radius-lg); padding:0.85rem; margin-bottom:1.5rem;">
        <div style="font-size:0.78rem; font-weight:800; text-transform:uppercase; color:var(--text-subtle); margin-bottom:0.6rem; letter-spacing:0.04em; display:flex; align-items:center; gap:0.4rem;">
          ${I.get('zap', 13, 'var(--accent-amber-400)')}
          <span>Tezkor Demo Rollari (Bir bosishda kirish):</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
          <button type="button" class="btn btn-sm btn-outline" style="font-size:0.78rem; padding:0.45rem 0.4rem; display:flex; align-items:center; justify-content:center; gap:0.45rem;" onclick="window.AuthComponent.loginAs('candidate')">
            ${I.get('user', 14, 'var(--primary-400)')}
            <span>Nomzod</span>
          </button>
          <button type="button" class="btn btn-sm btn-outline" style="font-size:0.78rem; padding:0.45rem 0.4rem; display:flex; align-items:center; justify-content:center; gap:0.45rem;" onclick="window.AuthComponent.loginAs('employer')">
            ${I.get('building', 14, 'var(--accent-teal-400)')}
            <span>Ish Beruvchi</span>
          </button>
          <button type="button" class="btn btn-sm btn-outline" style="font-size:0.78rem; padding:0.45rem 0.4rem; display:flex; align-items:center; justify-content:center; gap:0.45rem;" onclick="window.AuthComponent.loginAs('mentor')">
            ${I.get('heartHandshake', 14, 'var(--accent-amber-400)')}
            <span>Mentor</span>
          </button>
        </div>
      </div>

      <form onsubmit="event.preventDefault(); window.AuthComponent.handleAuthSubmit('${mode}');" style="display:flex; flex-direction:column; gap:1.15rem;">
        ${!isLogin ? `
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">To'liq Ism-Familiya</label>
            <input type="text" id="auth-name" required placeholder="Masalan: Azizbek Saidov" style="width:100%; padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
          </div>
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Sizning Rolingiz</label>
            <input type="hidden" id="auth-role" value="candidate" />
            <div class="custom-dropdown" id="dropdown-auth-role">
              <button type="button" class="custom-dropdown-btn" onclick="window.AuthComponent.toggleRoleDropdown(event)">
                <span style="display:flex; align-items:center; gap:0.5rem;" id="auth-role-label-text">
                  ${I.get('user', 15, 'var(--primary-400)')}
                  <span>Ish Izlovchi (Nomzod)</span>
                </span>
                ${I.get('chevronDown', 14, 'var(--primary-400)', 2.5)}
              </button>
              <div class="custom-dropdown-menu">
                <div class="custom-dropdown-item selected" data-role-item="candidate" onclick="window.AuthComponent.selectRole('candidate', 'Ish Izlovchi (Nomzod)', 'user', 'var(--primary-400)')">
                  <span style="display:flex; align-items:center; gap:0.55rem;">
                    ${I.get('user', 15, 'var(--primary-400)')}
                    <span>Ish Izlovchi (Nomzod)</span>
                  </span>
                  ${I.get('check', 14, 'var(--accent-teal-400)')}
                </div>
                <div class="custom-dropdown-item" data-role-item="employer" onclick="window.AuthComponent.selectRole('employer', 'Ish Beruvchi (Kompaniya HR)', 'building', 'var(--accent-teal-400)')">
                  <span style="display:flex; align-items:center; gap:0.55rem;">
                    ${I.get('building', 15, 'var(--accent-teal-400)')}
                    <span>Ish Beruvchi (Kompaniya HR)</span>
                  </span>
                </div>
                <div class="custom-dropdown-item" data-role-item="mentor" onclick="window.AuthComponent.selectRole('mentor', 'Surdotarjimon / Maxsus Mentor', 'heartHandshake', 'var(--accent-amber-400)')">
                  <span style="display:flex; align-items:center; gap:0.55rem;">
                    ${I.get('heartHandshake', 15, 'var(--accent-amber-400)')}
                    <span>Surdotarjimon / Maxsus Mentor</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        <div>
          <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Elektron Pochta</label>
          <input type="email" id="auth-email" required value="aziz.saidov@example.com" placeholder="nomingiz@domen.uz" style="width:100%; padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
        </div>

        <div>
          <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Parol</label>
          <input type="password" id="auth-pass" required value="••••••••" style="width:100%; padding:0.75rem 1rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit;" />
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%; margin-top:0.5rem;">
          <span>${isLogin ? 'Hisobga Kirish' : 'Profilni Yaratish'}</span>
          ${I.get('arrowRight', 16, '#ffffff')}
        </button>
      </form>
    `;

    if (window.App && window.App.openModal) {
      window.App.openModal(content);
    }
  },

  loginAs(role) {
    const users = {
      candidate: {
        id: 'usr-cand-1',
        fullName: 'Azizbek Saidov',
        email: 'aziz.saidov@example.com',
        role: 'candidate',
        title: 'Senior Frontend & WCAG 2.1 AA Dasturchi',
        avatar: 'AS',
        condition: 'Harakatlanishda imkoniyati cheklangan (Masofaviy ish)',
        accommodations: ['remote', 'flexible_hours'],
        matchScore: 98
      },
      employer: {
        id: 'usr-emp-1',
        fullName: 'Aziza Karimova',
        email: 'hr@uzum.com',
        role: 'employer',
        title: 'HR Boshqaruvi Rahbari — Uzum Technologies',
        avatar: 'AK',
        condition: 'Inklyuziv Ish Beruvchi',
        accommodations: [],
        matchScore: 100
      },
      mentor: {
        id: 'usr-mnt-1',
        fullName: 'Dilshod Aliyev',
        email: 'dilshod@surdo.uz',
        role: 'mentor',
        title: 'Oliy toifali Surdotarjimon & Mentor',
        avatar: 'DA',
        condition: 'Imo-ishora va Accessibility Mutaxassisi',
        accommodations: [],
        matchScore: 98
      }
    };

    const user = users[role] || users.candidate;
    if (window.Store) {
      window.Store.dispatch('AUTH_SET_USER', user);
    }

    if (window.App) {
      window.App.closeAllModals();
      window.App.showToast(`Xush kelibsiz, ${user.fullName}!`, 'success');
      // Re-render current page
      window.location.reload();
    }
  },

  handleAuthSubmit(mode) {
    const email = document.getElementById('auth-email').value;
    const name = mode === 'signup' && document.getElementById('auth-name') ? document.getElementById('auth-name').value : 'Azizbek Saidov';
    const role = mode === 'signup' && document.getElementById('auth-role') ? document.getElementById('auth-role').value : 'candidate';

    const user = {
      id: 'usr-' + Date.now(),
      fullName: name,
      email: email,
      role: role,
      title: role === 'candidate' ? 'Mutaxassis (Nomzod)' : 'HR Vakil',
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U',
      matchScore: 95
    };

    if (window.Store) {
      window.Store.dispatch('AUTH_SET_USER', user);
    }

    if (window.App) {
      window.App.closeAllModals();
      window.App.showToast(`Muvaffaqiyatli ${mode === 'login' ? 'kirildi' : 'ro\'yxatdan o\'tildi'}!`, 'success');
      window.location.reload();
    }
  },

  toggleRoleDropdown(event) {
    if (event) event.stopPropagation();
    const targetEl = document.getElementById('dropdown-auth-role');
    if (targetEl) {
      targetEl.classList.toggle('open');
    }
  },

  selectRole(roleVal, roleLabel, iconName = 'user', iconColor = 'var(--primary-400)') {
    const input = document.getElementById('auth-role');
    if (input) input.value = roleVal;

    const label = document.getElementById('auth-role-label-text');
    if (label) {
      label.innerHTML = `
        ${window.Icons.get(iconName, 15, iconColor)}
        <span>${roleLabel}</span>
      `;
    }

    const dropdown = document.getElementById('dropdown-auth-role');
    if (dropdown) {
      dropdown.querySelectorAll('.custom-dropdown-item').forEach(item => {
        const isMatch = item.getAttribute('data-role-item') === roleVal;
        item.classList.toggle('selected', isMatch);
        let checkSpan = item.querySelector('.check-mark-slot');
        if (isMatch) {
          if (!checkSpan) {
            checkSpan = document.createElement('span');
            checkSpan.className = 'check-mark-slot';
            checkSpan.innerHTML = window.Icons.get('check', 14, 'var(--accent-teal-400)');
            item.appendChild(checkSpan);
          }
        } else {
          if (checkSpan) checkSpan.remove();
        }
      });
      dropdown.classList.remove('open');
    }
  },

  logout() {
    if (window.Store) {
      window.Store.dispatch('AUTH_LOGOUT');
    }
    if (window.App) {
      window.App.showToast('Tizimdan chiqildi', 'info');
      window.location.reload();
    }
  }
};
