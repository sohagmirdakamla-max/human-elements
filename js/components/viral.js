/* ==========================================================================
   HUMAN ELEMENTS // VIRAL MARKETING & SHARING COMPONENT
   ========================================================================== */

class ViralComponent {
  constructor() {
    this.elemSelect = document.getElementById('viral-elem-select');
    this.cardPreview = document.getElementById('viral-card-preview');
    this.currentElement = HUMAN_ELEMENTS[0];

    this.init();
  }

  init() {
    this.populateSelect();
    this.updateCardPreview();

    if (this.elemSelect) {
      this.elemSelect.addEventListener('change', () => {
        const num = parseInt(this.elemSelect.value);
        this.currentElement = HUMAN_ELEMENTS.find(e => e.num === num) || HUMAN_ELEMENTS[0];
        this.updateCardPreview();
      });
    }

    // Share Buttons
    document.querySelectorAll('.viral-share-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const platform = btn.getAttribute('data-platform');
        this.shareToPlatform(platform);
      });
    });
  }

  populateSelect() {
    if (!this.elemSelect) return;
    this.elemSelect.innerHTML = HUMAN_ELEMENTS.map(e => `
      <option value="${e.num}">${e.symbol} — ${e.name.split(' ')[0]} (${e.groupName})</option>
    `).join('');
  }

  updateCardPreview() {
    if (!this.cardPreview || !this.currentElement) return;
    const e = this.currentElement;
    const colorVar = `var(--grp-${e.group})`;

    this.cardPreview.innerHTML = `
      <div style="background: linear-gradient(135deg, rgba(18, 24, 38, 0.95) 0%, rgba(7, 9, 14, 0.98) 100%); border: 2px solid ${colorVar}; border-radius: 20px; padding: 2rem; position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <div style="position: absolute; top: -20px; right: -20px; width: 120px; height: 120px; background: ${colorVar}; filter: blur(60px); opacity: 0.3;"></div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
          <div>
            <div style="font-size: 0.75rem; text-transform: uppercase; tracking: 2px; color: var(--text-muted);">Квантовый Паспорт Личности</div>
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #fff; margin-top: 0.2rem;">${e.name}</h3>
          </div>
          <div style="font-size: 2.5rem; font-weight: 900; font-family: var(--font-mono); color: ${colorVar}; text-shadow: 0 0 15px ${colorVar};">${e.symbol}</div>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
          ${e.traits.map(t => `<span style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; color: var(--text-main);">${t}</span>`).join('')}
        </div>
        <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 1rem; border-left: 3px solid ${colorVar}; font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">
          «${e.profiles.ground}»
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; pt: 1rem; border-top: 1px solid var(--border-glass);">
          <span style="font-size: 0.8rem; color: var(--text-dim);">⚛️ HUMAN ELEMENTS // Психофизика</span>
          <span style="font-size: 0.8rem; color: var(--grp-noble); font-weight: 600;">t.me/human_elements_bot</span>
        </div>
      </div>
    `;
  }

  shareToPlatform(platform) {
    const e = this.currentElement;
    const text = `⚛️ Мой химический элемент личности — ${e.name} (${e.symbol})! Узнай свой элемент и нашу совместимость в приложения HUMAN ELEMENTS:`;
    const url = window.location.href;

    if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'vk') {
      window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(`${text} ${url}`);
      alert('📋 Ссылка и описание скопированы в буфер обмена!');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.viralComp = new ViralComponent();
});
