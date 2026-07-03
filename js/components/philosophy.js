/* ==========================================================================
   HUMAN ELEMENTS // PHILOSOPHY PANEL COMPONENT
   ========================================================================== */

class PhilosophyComponent {
  constructor() {
    this.menuContainer = document.getElementById('philo-menu');
    this.bodyContainer = document.getElementById('philo-body');
    this.currentArticleId = 'codex_1';

    this.init();
  }

  init() {
    this.renderMenu();
    this.renderArticle();
  }

  renderMenu() {
    if (!this.menuContainer) return;

    this.menuContainer.innerHTML = Object.entries(PHILOSOPHY_CONTENT).map(([id, art]) => `
      <button class="philo-menu-btn ${id === this.currentArticleId ? 'active' : ''}" data-id="${id}" style="
        display: block; width: 100%; text-align: left; background: transparent; border: none;
        padding: 0.8rem 1rem; border-radius: 8px; color: var(--text-muted); cursor: pointer;
        font-family: var(--font-main); font-size: 0.95rem; font-weight: 600; transition: var(--transition-fast);
        margin-bottom: 0.4rem; border-left: 3px solid transparent;
      ">
        ${art.title}
      </button>
    `).join('');

    // Highlight active menu item with inline styles
    this.menuContainer.querySelectorAll('.philo-menu-btn').forEach(btn => {
      const id = btn.getAttribute('data-id');
      if (id === this.currentArticleId) {
        btn.style.borderLeftColor = 'var(--grp-metalloid)';
        btn.style.color = '#fff';
        btn.style.background = 'rgba(255, 255, 255, 0.03)';
      }

      btn.addEventListener('click', () => {
        this.menuContainer.querySelectorAll('.philo-menu-btn').forEach(b => {
          b.style.borderLeftColor = 'transparent';
          b.style.color = 'var(--text-muted)';
          b.style.background = 'transparent';
        });

        btn.style.borderLeftColor = 'var(--grp-metalloid)';
        btn.style.color = '#fff';
        btn.style.background = 'rgba(255, 255, 255, 0.03)';

        this.currentArticleId = id;
        this.renderArticle();
      });
    });
  }

  renderArticle() {
    if (!this.bodyContainer) return;

    const art = PHILOSOPHY_CONTENT[this.currentArticleId];
    if (!art) return;

    this.bodyContainer.innerHTML = `
      <div class="philo-article-card" style="
        background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-glass);
        padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.3); animation: fadeIn var(--transition-smooth);
      ">
        <h2 style="color: var(--grp-metalloid); font-size: 1.6rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-glass-bright); padding-bottom: 0.6rem; font-weight: 800;">
          ${art.title}
        </h2>
        <div style="line-height: 1.7; color: var(--text-main); font-size: 1rem;">
          ${art.content}
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.philosophyComp = new PhilosophyComponent();
});
