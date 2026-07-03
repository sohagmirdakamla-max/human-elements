/* ==========================================================================
   HUMAN ELEMENTS // FULL PROFILE MODAL VIEWER (EMBEDDED NO-FETCH)
   ========================================================================== */

class FullProfileComponent {
  constructor() {
    this.modal = document.getElementById('full-profile-modal');
    this.closeBtn = document.getElementById('full-profile-close');
    this.bodyEl = document.getElementById('full-profile-body');
    this.titleEl = document.getElementById('full-profile-title');

    this.init();
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }
  }

  openProfile(elem) {
    if (!elem || !this.modal) return;

    if (this.titleEl) this.titleEl.textContent = `Психологический портрет: ${elem.name}`;
    
    // Check embedded FULL_PROFILES database
    const markdown = (typeof FULL_PROFILES !== 'undefined' && FULL_PROFILES[elem.symbol]) 
      ? FULL_PROFILES[elem.symbol] 
      : null;

    if (markdown) {
      this.renderMarkdown(markdown, elem);
    } else {
      this.renderFallback(elem);
    }

    this.modal.classList.add('active');
  }

  renderMarkdown(md, elem) {
    if (!this.bodyEl) return;
    
    // Clean markdown formatting to HTML converter
    let html = md
      .replace(/^# (.*$)/gim, '<h1 style="color: var(--grp-metalloid); font-size: 1.6rem; margin-bottom: 1.2rem; border-bottom: 1px solid var(--border-glass-bright); padding-bottom: 0.6rem; text-shadow: 0 0 10px rgba(0,240,255,0.2);">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 style="color: #fff; font-size: 1.25rem; margin-top: 1.6rem; margin-bottom: 0.8rem; border-left: 4px solid var(--grp-noble); padding-left: 0.8rem; background: rgba(255,255,255,0.02); border-radius: 0 8px 8px 0; padding-top: 0.4rem; padding-bottom: 0.4rem;">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 style="color: var(--grp-transition); font-size: 1.1rem; margin-top: 1.2rem; margin-bottom: 0.6rem;">$1</h3>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong style="color: #fff; font-weight: 700;">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em style="color: var(--text-muted);">$1</em>')
      .replace(/^\* (.*$)/gim, '<li style="margin-left: 1.2rem; margin-bottom: 0.5rem; color: var(--text-main); line-height: 1.6;">$1</li>')
      .replace(/\n\n/gim, '<p style="margin-bottom: 1rem; line-height: 1.7; color: var(--text-main); font-size: 1rem;"></p>');

    this.bodyEl.innerHTML = `
      <div class="profile-markdown-content" style="font-size: 1rem; line-height: 1.7; color: var(--text-main);">
        ${html}
      </div>
    `;
  }

  renderFallback(elem) {
    if (!this.bodyEl) return;
    this.bodyEl.innerHTML = `
      <div style="padding: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid var(--border-glass);">
        <h2 style="color: var(--grp-metalloid); margin-bottom: 1rem;">${elem.name} (${elem.symbol})</h2>
        <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Архетип:</strong> ${elem.profiles.ground}</p>
        <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>В драйве:</strong> ${elem.profiles.excited}</p>
        <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>В распаде:</strong> ${elem.profiles.decay}</p>
      </div>
    `;
  }

  closeModal() {
    if (this.modal) this.modal.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.fullProfileComp = new FullProfileComponent();
});
