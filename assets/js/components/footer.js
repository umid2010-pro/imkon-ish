/**
 * "Imkoniyatlar Kengligi" — Senior Enterprise Footer Component
 * Institutional credibility, UN SDG 8 & 10 badges, WCAG 2.1 AA Compliance Declaration, and Sitemap
 */

window.FooterComponent = {
  render() {
    const I = window.Icons;

    return `
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          
          <div class="footer-grid">
            
            <!-- Brand & Mission Column -->
            <div>
              <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1.15rem;">
                <div class="brand-logo-icon" style="width:36px; height:36px;">
                  ${I.get('heartHandshake', 20, '#ffffff')}
                </div>
                <div style="font-size:1.15rem; font-weight:900; color:var(--text-main);">Imkoniyatlar Kengligi</div>
              </div>
              <p style="font-size:0.9rem; color:var(--text-subtle); line-height:1.6; margin-bottom:1.5rem;">
                Nogironligi bor shaxslar uchun sun'iy intellekt hamrohligida to'siqsiz, adolatli va munosib ish o'rinlarini yaratuvchi milliy inklyuziv ekotizim.
              </p>
              <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
                <span class="badge badge-teal">
                  ${I.get('shieldCheck', 13)}
                  <span>WCAG 2.1 Level AA</span>
                </span>
                <span class="badge badge-primary">
                  ${I.get('sparkles', 13)}
                  <span>BMT SDG 8 & 10</span>
                </span>
              </div>
            </div>

            <!-- Nomzodlar Uchun -->
            <div>
              <h4 class="footer-heading">Nomzodlarga</h4>
              <ul class="footer-links">
                <li><a href="jobs.html" class="footer-link">Inklyuziv Vakansiyalar</a></li>
                <li><a href="dashboard.html" class="footer-link">AI Rezyume Skaner</a></li>
                <li><a href="dashboard.html" class="footer-link">Intervyu Murabbiyi</a></li>
                <li><a href="chat.html" class="footer-link">Real-Vaqt AI Tarjimon</a></li>
                <li><a href="onboarding.html" class="footer-link">Profil Yaratish</a></li>
              </ul>
            </div>

            <!-- Ish Beruvchilarga -->
            <div>
              <h4 class="footer-heading">Ish Beruvchilarga</h4>
              <ul class="footer-links">
                <li><a href="employers.html" class="footer-link">Vakansiya E'lon Qilish</a></li>
                <li><a href="employers.html" class="footer-link">Soliq Imtiyozlari ROI</a></li>
                <li><a href="employers.html" class="footer-link">Inklyuzivlik Auditi</a></li>
                <li><a href="employers.html" class="footer-link">Iqtidorlar Bazasi</a></li>
                <li><a href="about.html" class="footer-link">Hamkorlik Shartnomasi</a></li>
              </ul>
            </div>

            <!-- Tizim & Standartlar -->
            <div>
              <h4 class="footer-heading">Standartlar & Resurslar</h4>
              <ul class="footer-links">
                <li><a href="analytics.html" class="footer-link">Ijtimoiy Ta'sir Telemetriyasi</a></li>
                <li><a href="about.html" class="footer-link">WCAG Muvofiqlik Matritsasi</a></li>
                <li><a href="about.html" class="footer-link">Ekspertlar Kengashi</a></li>
                <li><button type="button" class="footer-link" style="text-align:left;" onclick="window.App.openKeyboardShortcutsModal()">Klaviatura Tugmalari (?)</button></li>
                <li><button type="button" class="footer-link" style="text-align:left;" onclick="window.a11y.toggleTTS()">Ovozli Tanishtiruv</button></li>
              </ul>
            </div>

          </div>

          <!-- Bottom Bar -->
          <div style="border-top:1px solid var(--surface-border); padding-top:2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; font-size:0.85rem; color:var(--text-subtle);">
            <div>
              © 2026 Imkoniyatlar Kengligi. Barcha huquqlar himoyalangan. O'zbekiston Respublikasi inklyuzivlik qonunchiligi asosida.
            </div>
            <div style="display:flex; align-items:center; gap:1.25rem;">
              <span style="display:inline-flex; align-items:center; gap:0.4rem;">
                <span class="pulse-dot"></span>
                <span>Tizim holati: 99.98% Faol</span>
              </span>
              <span>Versiya 2.4 Enterprise</span>
            </div>
          </div>

        </div>
      </footer>
    `;
  }
};
