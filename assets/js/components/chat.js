/**
 * "Imkoniyatlar Kengligi" — Senior Real-Time Multilingual AI Messenger Component
 * Bilateral Neural Translation, Multi-Language Speech Synthesis, and Quick Smart-Replies
 */

window.ChatComponent = {
  selectedTargetLang: 'uz',
  isTranslating: false,
  showScrollBottomBtn: false,

  languages: [
    { value: 'uz', label: 'O\'zbekcha', code: 'UZ' },
    { value: 'ru', label: 'Русский', code: 'RU' },
    { value: 'en', label: 'English', code: 'EN' },
    { value: 'de', label: 'Deutsch', code: 'DE' },
    { value: 'tr', label: 'Türkçe', code: 'TR' }
  ],

  init() {
    // Check URL parameters for active channel or recipient
    const urlParams = new URLSearchParams(window.location.search);
    const channelParam = urlParams.get('channel');
    if (channelParam && window.Store) {
      const state = window.Store.getState();
      const exists = (state.chatChannels || []).find(c => c.id === channelParam);
      if (exists) {
        window.Store.dispatch('SET_ACTIVE_CHAT_CHANNEL', channelParam);
      }
    }

    // Auto-scroll to bottom after initialization
    this.scrollToBottom();
    setTimeout(() => this.scrollToBottom(), 150);
  },

  render() {
    const I = window.Icons;
    const storeState = window.Store ? window.Store.getState() : {};
    const channels = storeState.chatChannels || [];
    const activeChannelId = storeState.activeChatChannel || (channels[0] ? channels[0].id : 'yandex-hr');
    const activeChannel = channels.find(c => c.id === activeChannelId) || channels[0] || {
      name: 'Muloqot',
      role: 'Hamkor',
      partnerLang: 'uz',
      messages: []
    };

    const curLang = this.languages.find(l => l.value === this.selectedTargetLang) || this.languages[0];

    return `
      <section class="section-spacing container" aria-labelledby="chat-title" style="padding-top:1.5rem; padding-bottom:2.5rem;">
        
        <!-- Header -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.25rem; margin-bottom:1.5rem;">
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
              <span class="badge badge-teal">
                ${I.get('shieldCheck', 13)}
                <span>Real-Vaqt Ikki Tomonlama AI Tarjimon</span>
              </span>
            </div>
            <h1 id="chat-title" style="font-size:2.2rem; margin:0;">AI Inklyuziv Muloqot & Tarjimon</h1>
            <p style="margin:0.25rem 0 0 0; font-size:1rem; color:var(--text-subtle);">
              Xalqaro ish beruvchilar, nomzodlar va mentorlar bilan to'siqsiz, ovozli va avtomatik ikki tomonlama tarjima.
            </p>
          </div>

          <!-- Target Language Custom Dropdown Selector -->
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span style="font-size:0.85rem; font-weight:700; color:var(--text-subtle); white-space:nowrap;">Mening tilim:</span>
            <div class="custom-dropdown" id="dropdown-chat-lang" style="min-width:180px;">
              <button type="button" class="custom-dropdown-btn" style="min-height:38px; padding:0.4rem 0.85rem;" onclick="window.ChatComponent.toggleLangDropdown(event)" aria-label="Tarjima tilini tanlash">
                <span style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; font-weight:800;">
                  ${I.get('globe', 14, 'var(--accent-teal-400)')}
                  <span>${curLang.label}</span>
                  <span style="font-size:0.7rem; color:var(--primary-400); background:rgba(99, 102, 241, 0.15); padding:0.1rem 0.35rem; border-radius:var(--radius-sm); border:1px solid rgba(99, 102, 241, 0.3); font-weight:800;">${curLang.code}</span>
                </span>
                ${I.get('chevronDown', 13, 'var(--primary-400)', 2.5)}
              </button>
              <div class="custom-dropdown-menu">
                ${this.languages.map(l => `
                  <div class="custom-dropdown-item ${this.selectedTargetLang === l.value ? 'selected' : ''}" onclick="window.ChatComponent.selectLang('${l.value}')">
                    <span style="display:flex; align-items:center; gap:0.55rem;">
                      <span style="font-size:0.75rem; font-weight:800; color:var(--primary-400); background:rgba(99, 102, 241, 0.15); padding:0.12rem 0.38rem; border-radius:var(--radius-sm); border:1px solid rgba(99, 102, 241, 0.3);">${l.code}</span>
                      <span>${l.label}</span>
                    </span>
                    ${this.selectedTargetLang === l.value ? I.get('check', 14, 'var(--accent-teal-400)') : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Main Grid -->
        <div class="chat-wrapper">
          
          <!-- Channels Sidebar -->
          <aside class="chat-sidebar" aria-label="Suhbat kanallari">
            <div style="padding:1.15rem 1.25rem; border-bottom:1px solid var(--surface-border); display:flex; justify-content:space-between; align-items:center;">
              <div style="font-weight:900; font-size:1.05rem; color:var(--text-main); display:flex; align-items:center; gap:0.5rem;">
                ${I.get('messageSquare', 16, 'var(--primary-400)')}
                <span>Muloqotlar (${channels.length})</span>
              </div>
            </div>

            <div class="chat-channel-list">
              ${channels.map(ch => `
                <div class="chat-channel-item ${ch.id === activeChannelId ? 'active' : ''}" onclick="window.ChatComponent.selectChannel('${ch.id}')" role="button" tabindex="0">
                  <div style="position:relative;">
                    <div style="width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg, var(--primary-600), var(--accent-teal-600)); color:#ffffff; font-weight:800; display:flex; align-items:center; justify-content:center;">
                      ${ch.avatar || 'U'}
                    </div>
                    ${ch.online ? '<span class="pulse-dot" style="position:absolute; bottom:0; right:0; border:2px solid var(--surface-card);"></span>' : ''}
                  </div>

                  <div style="flex:1; min-width:0;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.2rem;">
                      <span style="font-weight:800; font-size:0.92rem; color:var(--text-main); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${ch.name}</span>
                    </div>
                    <div style="font-size:0.75rem; color:var(--text-subtle); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
                      ${ch.company}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </aside>

          <!-- Chat Messages Area -->
          <main class="chat-messages-area" aria-label="Suhbat xabarlari">
            
            <!-- Channel Header Bar (Fixed at top) -->
            <div class="chat-header-bar">
              <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
                <div style="font-weight:900; font-size:1.1rem; color:var(--text-main);">${activeChannel.name}</div>
                <span class="badge badge-teal">${activeChannel.role}</span>
                <span class="badge badge-cyan" style="font-size:0.75rem; font-weight:800;">
                  ${activeChannel.partnerLang === 'ru' ? '🇷🇺 Rus tili' : (activeChannel.partnerLang === 'en' ? '🇬🇧 Ingliz tili' : '🇺🇿 O\'zbek tili')}
                </span>
              </div>
              <button type="button" class="btn btn-outline btn-sm" onclick="window.a11y.speakText('Siz ${activeChannel.name} bilan suhbatdasiz. Suhbatda ikki tomonlama real vaqtda tarjima yoqilgan.')">
                ${I.get('volume2', 15)}
                <span>Suhbatni Tinglash</span>
              </button>
            </div>

            <!-- Messages Stream (The ONLY scrollable container) -->
            <div class="chat-stream" id="chat-messages-stream" onscroll="window.ChatComponent.handleStreamScroll()">
              ${activeChannel.messages.map(msg => {
                const isIncoming = msg.sender !== 'candidate';
                return `
                  <div class="chat-bubble ${isIncoming ? 'incoming' : 'outgoing'}">
                    
                    <!-- Sender header & language badge -->
                    <div style="font-size:0.75rem; font-weight:800; color:${isIncoming ? 'var(--primary-400)' : '#c7d2fe'}; margin-bottom:0.35rem; display:flex; justify-content:space-between; align-items:center;">
                      <span>${isIncoming ? activeChannel.name : 'Siz'}</span>
                      <span style="font-size:0.7rem; opacity:0.85; text-transform:uppercase; letter-spacing:0.04em;">${msg.sourceLang ? msg.sourceLang.toUpperCase() : (isIncoming ? (activeChannel.partnerLang || 'RU').toUpperCase() : 'UZ')}</span>
                    </div>

                    <!-- Original Message Text -->
                    <div style="font-weight:700; margin-bottom:0.5rem; color:${isIncoming ? 'var(--text-main)' : '#ffffff'};">
                      ${msg.originalText}
                    </div>

                    <!-- AI Translated View with High Contrast Theme-Aware Styling -->
                    <div class="chat-translation-box">
                      <div class="chat-translation-header">
                        ${I.get('sparkles', 13, 'currentColor')}
                        <span>${isIncoming ? `AI Tarjima (${(msg.targetLang || this.selectedTargetLang || 'uz').toUpperCase()}):` : `AI Tarjima (${(msg.targetLang || activeChannel.partnerLang || 'ru').toUpperCase()}):`}</span>
                      </div>
                      <div style="font-weight:600;">
                        ${msg.translatedText}
                      </div>
                    </div>

                    <!-- Audio Playback & Timestamp -->
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:${isIncoming ? 'var(--text-subtle)' : '#c7d2fe'}; margin-top:0.4rem;">
                      <button type="button" style="display:inline-flex; align-items:center; gap:0.3rem; color:inherit; font-weight:700; background:none; border:none; cursor:pointer; padding:0;" onclick="window.a11y.speakText('${(isIncoming ? msg.translatedText : msg.originalText).replace(/'/g, "\\'")}')" title="Ovozda tinglash">
                        ${I.get('volume2', 13)}
                        <span>Tinglash</span>
                      </button>
                      <span>${msg.time}</span>
                    </div>

                  </div>
                `;
              }).join('')}
            </div>

            <!-- Floating Scroll to Bottom Button -->
            <div id="chat-scroll-btn-wrapper" style="display:none;">
              <button type="button" class="chat-scroll-bottom-btn" onclick="window.ChatComponent.scrollToBottom(true)" aria-label="Eng so'nggi xabarga tushish">
                <span>Eng so'nggi xabarlar</span>
                ${I.get('arrowDown', 13)}
              </button>
            </div>

            <!-- Smart Reply Chips (Fixed above input) -->
            <div class="chat-quick-replies">
              <span style="font-size:0.75rem; color:var(--text-subtle); align-self:center;">Tezkor javoblar (O'zbekcha):</span>
              <button type="button" class="btn btn-outline btn-sm" style="font-size:0.78rem; padding:0.35rem 0.65rem; display:flex; align-items:center; gap:0.4rem;" onclick="window.ChatComponent.sendQuickReply('Katta rahmat, masofaviy suhbatga to\\'liq tayyorman.')">
                ${I.get('check', 13, 'var(--accent-teal-400)')}
                <span>Suhbatga tayyorman</span>
              </button>
              <button type="button" class="btn btn-outline btn-sm" style="font-size:0.78rem; padding:0.35rem 0.65rem; display:flex; align-items:center; gap:0.4rem;" onclick="window.ChatComponent.sendQuickReply('Rezyumem va portfoliomni ilova qildim.')">
                ${I.get('fileText', 13, 'var(--primary-400)')}
                <span>Rezyumeni yuborish</span>
              </button>
              <button type="button" class="btn btn-outline btn-sm" style="font-size:0.78rem; padding:0.35rem 0.65rem; display:flex; align-items:center; gap:0.4rem;" onclick="window.ChatComponent.sendQuickReply('Menda NVDA ekran o\\'quvchi o\\'rnatilgan.')">
                ${I.get('shieldCheck', 13, 'var(--accent-cyan-400)')}
                <span>Qulaylikni tasdiqlash</span>
              </button>
            </div>

            <!-- Message Input Form (Fixed at bottom) -->
            <form class="chat-input-form" onsubmit="event.preventDefault(); window.ChatComponent.handleSendMessage();">
              <input type="text" 
                     id="chat-input-text" 
                     placeholder="O'zbekcha yozing (AI suhbatdosh tiliga avtomatik tarjima qiladi)..." 
                     required 
                     style="flex:1; padding:0.85rem 1.25rem; background:var(--surface-subtle); border:1.5px solid var(--surface-border); border-radius:var(--radius-xl); color:var(--text-main); font-family:inherit; font-size:0.95rem;" />
              
              <button type="button" class="btn btn-outline" style="border-radius:var(--radius-xl); padding:0.85rem;" onclick="window.ChatComponent.simulateVoiceInput()" title="Ovozli kiritish" aria-label="Ovozli kiritish">
                ${I.get('mic', 18)}
              </button>

              <button type="submit" class="btn btn-primary" style="border-radius:var(--radius-xl); padding:0.85rem 1.5rem;">
                <span>Yuborish</span>
                ${I.get('send', 16, '#ffffff')}
              </button>
            </form>

          </main>

        </div>

      </section>
    `;
  },

  selectChannel(channelId) {
    if (window.Store) {
      window.Store.dispatch('SET_ACTIVE_CHAT_CHANNEL', channelId);
      this.refreshView();
    }
  },

  setTargetLang(lang) {
    this.selectedTargetLang = lang;
    this.refreshView();
  },

  handleSendMessage() {
    const inputEl = document.getElementById('chat-input-text');
    if (!inputEl || !inputEl.value.trim()) return;

    const text = inputEl.value.trim();
    inputEl.value = '';

    const storeState = window.Store ? window.Store.getState() : {};
    const activeChannelId = storeState.activeChatChannel || 'yandex-hr';
    const channels = storeState.chatChannels || [];
    const activeChannel = channels.find(c => c.id === activeChannelId) || channels[0];
    
    // Partner's native language (e.g. 'ru' for Yandex Russia, 'en' for EPAM Global, 'uz' for Uzbek)
    const partnerLang = (activeChannel && activeChannel.partnerLang) || 'ru';
    
    // Translate into Partner's language
    const translatedToPartner = window.AiEngine ? window.AiEngine.translateText(text, partnerLang, 'uz') : text;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newMsg = {
      id: 'm-' + Date.now(),
      sender: 'candidate',
      originalText: text,
      translatedText: translatedToPartner,
      sourceLang: 'uz',
      targetLang: partnerLang,
      time: timeStr
    };

    if (window.Store) {
      window.Store.dispatch('SEND_CHAT_MESSAGE', { channelId: activeChannelId, message: newMsg });
      this.refreshView();
      this.scrollToBottom();

      // Trigger automatic AI partner response in their native language after 1.5s
      setTimeout(() => {
        let replyNativeText = '';
        if (partnerLang === 'ru') {
          replyNativeText = 'Большое спасибо за быстрый ответ! Мы зафиксировали вашу готовность и назначим онлайн-собеседование в Google Meet на пятницу в 15:00. Вам удобно?';
        } else if (partnerLang === 'en') {
          replyNativeText = 'Thank you for your prompt response! We have scheduled your initial technical interview for this Friday at 15:00 UTC. Does this work for you?';
        } else {
          replyNativeText = 'Xabaringiz uchun katta rahmat! Taklifingizni qabul qildik va suhbat tafsilotlarini kelishib olamiz.';
        }

        // Translate incoming partner reply into User's language (Uzbek)
        const userLang = this.selectedTargetLang || 'uz';
        const replyTranslatedToUser = window.AiEngine ? window.AiEngine.translateText(replyNativeText, userLang, partnerLang) : replyNativeText;

        const now2 = new Date();
        const timeStr2 = `${String(now2.getHours()).padStart(2, '0')}:${String(now2.getMinutes()).padStart(2, '0')}`;

        const replyMsg = {
          id: 'm-' + Date.now(),
          sender: 'employer',
          originalText: replyNativeText,
          translatedText: replyTranslatedToUser,
          sourceLang: partnerLang,
          targetLang: userLang,
          time: timeStr2
        };
        window.Store.dispatch('SEND_CHAT_MESSAGE', { channelId: activeChannelId, message: replyMsg });
        this.refreshView();
        this.scrollToBottom();
      }, 1400);
    }
  },

  sendQuickReply(text) {
    const inputEl = document.getElementById('chat-input-text');
    if (inputEl) {
      inputEl.value = text;
      this.handleSendMessage();
    }
  },

  simulateVoiceInput() {
    const sampleVoice = "Assalomu alaykum! Men to'siqsiz ish o'rni uchun arizamni taqdim etmoqchiman.";
    const inputEl = document.getElementById('chat-input-text');
    if (inputEl) {
      inputEl.value = sampleVoice;
      if (window.App) {
        window.App.showToast('Ovozli matn aniqlandi!', 'success');
      }
    }
  },

  handleStreamScroll() {
    const stream = document.getElementById('chat-messages-stream');
    const scrollBtnWrapper = document.getElementById('chat-scroll-btn-wrapper');
    if (!stream || !scrollBtnWrapper) return;

    const distanceFromBottom = stream.scrollHeight - stream.scrollTop - stream.clientHeight;
    if (distanceFromBottom > 150) {
      scrollBtnWrapper.style.display = 'block';
    } else {
      scrollBtnWrapper.style.display = 'none';
    }
  },

  scrollToBottom(smooth = true) {
    const doScroll = () => {
      const stream = document.getElementById('chat-messages-stream');
      if (stream) {
        stream.scrollTo({
          top: stream.scrollHeight,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
      const scrollBtnWrapper = document.getElementById('chat-scroll-btn-wrapper');
      if (scrollBtnWrapper) {
        scrollBtnWrapper.style.display = 'none';
      }
    };

    doScroll();
    setTimeout(doScroll, 60);
    setTimeout(doScroll, 200);
  },

  toggleLangDropdown(event) {
    if (event) event.stopPropagation();
    const el = document.getElementById('dropdown-chat-lang');
    if (el) el.classList.toggle('open');
  },

  selectLang(langVal) {
    this.selectedTargetLang = langVal;
    const el = document.getElementById('dropdown-chat-lang');
    if (el) el.classList.remove('open');
    this.refreshView();
  },

  refreshView() {
    const mount = document.getElementById('chat-mount') || document.getElementById('main-content');
    if (mount) {
      mount.innerHTML = this.render();
      this.scrollToBottom();
    }
  }
};
