/**
 * "Imkoniyatlar Kengligi" — Senior Application Orchestrator & Dual-Mode Router
 * Coordinates UI Modals, Toast Engine, Hotkey Dialogs, and Dual SPA / Multi-Page Life Cycle
 */

class Application {
  constructor() {
    this.activeModal = null;
  }

  init() {
    // Initialize Core Engines
    if (window.Accessibility) {
      window.Accessibility.init();
    }
    if (window.AuthComponent) {
      window.AuthComponent.init();
    }
    if (window.JobsComponent) {
      window.JobsComponent.init();
    }

    // Auto-create containers if missing
    this.ensureContainersExist();
  }

  ensureContainersExist() {
    if (!document.getElementById('modal-container')) {
      const mc = document.createElement('div');
      mc.id = 'modal-container';
      document.body.appendChild(mc);
    }
    if (!document.getElementById('toast-container')) {
      const tc = document.createElement('div');
      tc.id = 'toast-container';
      tc.className = 'toast-container';
      tc.setAttribute('aria-live', 'assertive');
      document.body.appendChild(tc);
    }
  }

  openModal(contentHtml) {
    this.ensureContainersExist();
    const container = document.getElementById('modal-container');
    if (!container) return;

    container.innerHTML = `
      <div class="modal-backdrop" id="active-modal-backdrop" onclick="if(event.target.id==='active-modal-backdrop') window.App.closeAllModals();">
        <div class="modal-box" role="dialog" aria-modal="true">
          ${contentHtml}
        </div>
      </div>
    `;

    // Focus the first actionable button or close button
    setTimeout(() => {
      const firstBtn = container.querySelector('button, input, select, textarea');
      if (firstBtn) firstBtn.focus();
    }, 50);
  }

  closeAllModals() {
    const container = document.getElementById('modal-container');
    if (container) {
      container.innerHTML = '';
    }
  }

  showToast(message, type = 'info') {
    this.ensureContainersExist();
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <div style="flex:1; font-weight:700; font-size:0.925rem;">${message}</div>
      <button type="button" style="color:var(--text-subtle); padding:2px; font-weight:900; font-size:1.1rem;" onclick="document.getElementById('${toastId}').remove()" aria-label="Xabarni yopish">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      if (document.getElementById(toastId)) {
        document.getElementById(toastId).remove();
      }
    }, 4500);
  }

  openKeyboardShortcutsModal() {
    const shortcuts = [
      { key: 'Alt + 1', desc: 'Bosh sahifa' },
      { key: 'Alt + 2', desc: 'Inklyuziv vakansiyalar portali' },
      { key: 'Alt + 3', desc: 'AI Nomzod markazi (Dashboard)' },
      { key: 'Alt + 4', desc: 'AI Muloqot & Tarjimon' },
      { key: 'Alt + 5', desc: 'Ish beruvchilarga & ROI kalkulyator' },
      { key: 'Alt + 6', desc: 'Statistika & BMT SDG telemetriyasi' },
      { key: 'Alt + 7', desc: 'Biz haqimizda & WCAG muvofiqlik' },
      { key: 'Alt + A', desc: 'Accessibility paneliga fokus o\'tish' },
      { key: 'Alt + S', desc: 'Ovozli o\'quvchi (TTS) yoqish/to\'xtatish' },
      { key: '?', desc: 'Ushbu klaviatura yo\'riqnomasini ochish' },
      { key: 'Esc', desc: 'Modal oynalarni yopish' }
    ];

    const content = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
        <h3 style="margin:0; font-size:1.35rem;">Klaviatura Tezkor Tugmalari</h3>
        <button type="button" class="btn btn-sm btn-outline" onclick="window.App.closeAllModals()" aria-label="Yopish">✕</button>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1.5rem;">
        ${shortcuts.map(s => `
          <div style="display:flex; justify-content:space-between; align-items:center; background:var(--surface-subtle); padding:0.6rem 1rem; border-radius:var(--radius-md); border:1px solid var(--surface-border);">
            <span style="font-size:0.9rem; color:var(--text-main); font-weight:700;">${s.desc}</span>
            <kbd style="background:var(--surface-card); border:1px solid var(--surface-border); border-radius:var(--radius-sm); padding:0.25rem 0.65rem; font-family:var(--font-mono); font-size:0.85rem; font-weight:800; color:var(--accent-teal-400);">${s.key}</kbd>
          </div>
        `).join('')}
      </div>

      <div style="display:flex; justify-content:flex-end;">
        <button type="button" class="btn btn-primary" onclick="window.App.closeAllModals()">Tushunarli</button>
      </div>
    `;

    this.openModal(content);
  }
}

window.App = new Application();

document.addEventListener('DOMContentLoaded', () => {
  window.App.init();
});

// Global click listener to automatically close any open custom dropdown when clicked outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-dropdown')) {
    document.querySelectorAll('.custom-dropdown.open').forEach(d => d.classList.remove('open'));
  }
});
