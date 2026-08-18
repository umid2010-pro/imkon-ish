/**
 * "Imkoniyatlar Kengligi" — Senior UN SDG Impact Telemetry & Economic Analytics Component
 */

window.AnalyticsComponent = {
  render() {
    const data = window.APP_DATA;
    const I = window.Icons;

    return `
      <section class="section-spacing container" aria-labelledby="analytics-title">
        
        <!-- Header -->
        <div style="text-align:center; max-width:800px; margin:0 auto 3.5rem;">
          <span class="badge badge-teal" style="margin-bottom:0.75rem;">
            ${I.get('trendingUp', 13)}
            <span>BMT SDG 8 & 10 Milliy Ta'sir Ko'rsatkichlari</span>
          </span>
          <h1 id="analytics-title" style="font-size:2.8rem; margin-bottom:1rem;">
            Ijtimoiy-Iqtisodiy Ta'sir Telemetriyasi
          </h1>
          <p style="color:var(--text-subtle); font-size:1.15rem; line-height:1.7;">
            Har bir ish o'rni — bu inson qadr-qimmati, iqtisodiy mustaqillik va teng imkoniyatlar sari qadamdir.
          </p>
        </div>

        <!-- 4 Top Impact KPI Cards -->
        <div class="grid-4" style="margin-bottom:3.5rem;">
          
          <div class="card" style="text-align:center;">
            <div style="width:48px; height:48px; border-radius:var(--radius-md); background:rgba(16, 185, 129, 0.15); color:var(--accent-teal-400); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              ${I.get('users', 24)}
            </div>
            <div style="font-size:2.5rem; font-weight:900; color:var(--accent-teal-400); line-height:1; margin-bottom:0.35rem;">1,420+</div>
            <div style="font-weight:800; font-size:0.95rem; color:var(--text-main); margin-bottom:0.35rem;">Band Bo'lgan Nomzodlar</div>
            <div style="font-size:0.8rem; color:var(--text-subtle);">Rasmiy shartnoma bilan ta'minlangan</div>
          </div>

          <div class="card" style="text-align:center;">
            <div style="width:48px; height:48px; border-radius:var(--radius-md); background:rgba(99, 102, 241, 0.15); color:var(--primary-400); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              ${I.get('dollarSign', 24)}
            </div>
            <div style="font-size:2.5rem; font-weight:900; color:var(--primary-400); line-height:1; margin-bottom:0.35rem;">48.5 mlrd</div>
            <div style="font-weight:800; font-size:0.95rem; color:var(--text-main); margin-bottom:0.35rem;">Yaratilgan Yalpi Qiymat</div>
            <div style="font-size:0.8rem; color:var(--text-subtle);">Nomzodlarning umumiy daromadi (UZS)</div>
          </div>

          <div class="card" style="text-align:center;">
            <div style="width:48px; height:48px; border-radius:var(--radius-md); background:rgba(6, 182, 212, 0.15); color:var(--accent-cyan-400); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              ${I.get('building', 24)}
            </div>
            <div style="font-size:2.5rem; font-weight:900; color:var(--accent-cyan-400); line-height:1; margin-bottom:0.35rem;">86+</div>
            <div style="font-weight:800; font-size:0.95rem; color:var(--text-main); margin-bottom:0.35rem;">Hamkor Kompaniyalar</div>
            <div style="font-size:0.8rem; color:var(--text-subtle);">Sertifikatlangan ish beruvchilar</div>
          </div>

          <div class="card" style="text-align:center;">
            <div style="width:48px; height:48px; border-radius:var(--radius-md); background:rgba(245, 158, 11, 0.15); color:var(--accent-amber-400); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              ${I.get('award', 24)}
            </div>
            <div style="font-size:2.5rem; font-weight:900; color:var(--accent-amber-400); line-height:1; margin-bottom:0.35rem;">940+</div>
            <div style="font-weight:800; font-size:0.95rem; color:var(--text-main); margin-bottom:0.35rem;">Moslashtirilgan Ish Joyi</div>
            <div style="font-size:0.8rem; color:var(--text-subtle);">Ergonomik va maxsus dasturlar</div>
          </div>

        </div>

        <!-- UN SDG 8 & 10 Interactive Progress Radar -->
        <div class="grid-2" style="margin-bottom:3.5rem;">
          
          <!-- SDG 8 Decent Work Card -->
          <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
              <div>
                <span class="badge badge-teal" style="margin-bottom:0.35rem;">SDG 8: Munosib Mehnat</span>
                <h3 style="font-size:1.3rem; margin:0;">Iqtisodiy Faollik va Bandlik O'sishi</h3>
              </div>
              <div style="font-size:2rem; font-weight:900; color:var(--accent-teal-400);">+42%</div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-subtle); line-height:1.6; margin-bottom:1.5rem;">
              Platforma orqali ishga joylashgan fuqarolarning 88% i uzoq muddatli (1 yildan ortiq) barqaror mehnat shartnomasiga ega bo'ldi.
            </p>
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.3rem;">
                  <span>Masofaviy IT va Dasturlash</span>
                  <span style="color:var(--accent-teal-400);">58%</span>
                </div>
                <div style="background:var(--surface-subtle); height:7px; border-radius:3.5px; overflow:hidden;">
                  <div style="background:var(--accent-teal-400); width:58%; height:100%;"></div>
                </div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.3rem;">
                  <span>Mijozlar bilan Aloqa & Chat</span>
                  <span style="color:var(--primary-400);">24%</span>
                </div>
                <div style="background:var(--surface-subtle); height:7px; border-radius:3.5px; overflow:hidden;">
                  <div style="background:var(--primary-400); width:24%; height:100%;"></div>
                </div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.3rem;">
                  <span>Dizayn & Kontent Menejment</span>
                  <span style="color:var(--accent-cyan-400);">18%</span>
                </div>
                <div style="background:var(--surface-subtle); height:7px; border-radius:3.5px; overflow:hidden;">
                  <div style="background:var(--accent-cyan-400); width:18%; height:100%;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- SDG 10 Reduced Inequalities Card -->
          <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
              <div>
                <span class="badge badge-primary" style="margin-bottom:0.35rem;">SDG 10: Tengsizlikni Kamaytirish</span>
                <h3 style="font-size:1.3rem; margin:0;">Hududlar Bo'yicha Qamrov</h3>
              </div>
              <div style="font-size:2rem; font-weight:900; color:var(--primary-400);">14/14</div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-subtle); line-height:1.6; margin-bottom:1.5rem;">
              O'zbekistonning barcha 14 ta hududi va Qoraqalpog'iston Respublikasidan nomzodlar 100% masofaviy ishlash imkoniyatiga ega.
            </p>
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.3rem;">
                  <span>Toshkent shahri & viloyati</span>
                  <span style="color:var(--primary-400);">34%</span>
                </div>
                <div style="background:var(--surface-subtle); height:7px; border-radius:3.5px; overflow:hidden;">
                  <div style="background:var(--primary-400); width:34%; height:100%;"></div>
                </div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.3rem;">
                  <span>Farg'ona vodiysi viloyatlari</span>
                  <span style="color:var(--accent-teal-400);">28%</span>
                </div>
                <div style="background:var(--surface-subtle); height:7px; border-radius:3.5px; overflow:hidden;">
                  <div style="background:var(--accent-teal-400); width:28%; height:100%;"></div>
                </div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.3rem;">
                  <span>Samarqand, Buxoro & Qashqadaryo</span>
                  <span style="color:var(--accent-amber-400);">22%</span>
                </div>
                <div style="background:var(--surface-subtle); height:7px; border-radius:3.5px; overflow:hidden;">
                  <div style="background:var(--accent-amber-400); width:22%; height:100%;"></div>
                </div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.3rem;">
                  <span>Qoraqalpog'iston, Xorazm & boshqa viloyatlar</span>
                  <span style="color:var(--accent-cyan-400);">16%</span>
                </div>
                <div style="background:var(--surface-subtle); height:7px; border-radius:3.5px; overflow:hidden;">
                  <div style="background:var(--accent-cyan-400); width:16%; height:100%;"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    `;
  }
};
