/* ==========================================================================
   HUMAN ELEMENTS // REACTION LAB & COLLIDER COMPONENT
   ========================================================================== */

class ReactionLabComponent {
  constructor() {
    this.elem1Select = document.getElementById('lab-elem-1');
    this.elem2Select = document.getElementById('lab-elem-2');
    this.catalystSelect = document.getElementById('lab-catalyst');
    this.collideBtn = document.getElementById('lab-collide-btn');
    this.resultContainer = document.getElementById('lab-result');

    this.init();
  }

  init() {
    this.populateDropdowns();

    if (this.collideBtn) {
      this.collideBtn.addEventListener('click', () => this.runSynthesis());
    }
  }

  populateDropdowns() {
    const optionsHtml = `<option value="">-- Выберите элемент --</option>` + 
      HUMAN_ELEMENTS.map(e => `<option value="${e.num}">[${e.symbol}] ${e.name}</option>`).join('');

    const catalystOptionsHtml = `<option value="">-- Без катализатора --</option>` + 
      HUMAN_ELEMENTS.map(e => `<option value="${e.num}">[${e.symbol}] ${e.name}</option>`).join('');

    if (this.elem1Select) this.elem1Select.innerHTML = optionsHtml;
    if (this.elem2Select) this.elem2Select.innerHTML = optionsHtml;
    if (this.catalystSelect) this.catalystSelect.innerHTML = catalystOptionsHtml;
  }

  runSynthesis() {
    const num1 = parseInt(this.elem1Select.value);
    const num2 = parseInt(this.elem2Select.value);
    const numCat = parseInt(this.catalystSelect.value);

    if (!num1 || !num2) {
      alert('Пожалуйста, выберите оба главных элемента для запуска коллайдера!');
      return;
    }

    const e1 = HUMAN_ELEMENTS.find(e => e.num === num1);
    const e2 = HUMAN_ELEMENTS.find(e => e.num === num2);
    const cat = numCat ? HUMAN_ELEMENTS.find(e => e.num === numCat) : null;

    // Delegate calculation to central reactionEngine
    const result = window.reactionEngine.calculate(e1, e2, cat);

    // Audio synth trigger
    if (window.audioSynth) {
      window.audioSynth.playReactionSynthesis(e1.freq, e2.freq, result.score > 60);
    }

    // Render Results
    this.renderResult(e1, e2, cat, result);
  }

  renderResult(e1, e2, cat, result) {
    if (!this.resultContainer) return;

    const color1 = getComputedStyle(document.documentElement).getPropertyValue(`--grp-${e1.group}`).trim();
    const color2 = getComputedStyle(document.documentElement).getPropertyValue(`--grp-${e2.group}`).trim();

    this.resultContainer.innerHTML = `
      <div class="reaction-result-box ${result.unionClass}">
        <div class="result-header">
          <div class="result-formula" style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 800; color: #fff;">${result.formula}</div>
          <div class="result-badge" style="background: rgba(255,255,255,0.06); padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.85rem; color: #fff;">${result.unionName}</div>
        </div>
        
        <div class="synergy-meter-wrapper" style="margin: 1.5rem 0;">
          <div class="meter-label" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Индекс квантовой совместимости</span>
            <span class="meter-score" style="font-family: var(--font-mono); font-weight: 700; color: #fff;">${result.score}%</span>
          </div>
          <div class="meter-bar-bg" style="background: rgba(255,255,255,0.06); height: 10px; border-radius: 5px; overflow: hidden;">
            <div class="meter-bar-fill" style="width: ${result.score}%; height: 100%; background: linear-gradient(90deg, ${color1}, ${color2});"></div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.8rem; margin-bottom: 1.5rem;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 10px; padding: 0.6rem; text-align: center;">
            <div style="font-size: 0.7rem; color: var(--text-muted);">Синергия</div>
            <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: var(--grp-post-trans);">${result.synergy}%</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 10px; padding: 0.6rem; text-align: center;">
            <div style="font-size: 0.7rem; color: var(--text-muted);">Напряжение</div>
            <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: var(--grp-alkali);">${result.tension}%</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 10px; padding: 0.6rem; text-align: center;">
            <div style="font-size: 0.7rem; color: var(--text-muted);">Рост</div>
            <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: var(--grp-metalloid);">${result.growth}%</div>
          </div>
        </div>

        <div class="reaction-details-grid" style="display: grid; gap: 1rem;">
          <div class="detail-card" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.2rem;">
            <h4 style="margin-bottom: 0.4rem; color: #fff;">⚡ Точка потенциального конфликта (Аномалия)</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${result.conflictPoint}</p>
          </div>

          <div class="detail-card" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.2rem;">
            <h4 style="margin-bottom: 0.4rem; color: #fff;">💡 Вектор роста & Созидание</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${result.growthPoint}</p>
          </div>
          
          ${cat ? `
          <div class="detail-card catalyst-card" style="background: rgba(0, 240, 255, 0.04); border: 1px solid var(--grp-metalloid); border-radius: 12px; padding: 1.2rem;">
            <h4 style="margin-bottom: 0.4rem; color: #fff;">🧪 Модификатор катализатора [${cat.symbol}]</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">Катализатор <strong>${cat.name.split(' ')[0]}</strong> привнес изменения в реакцию: ${cat.group === 'noble' ? 'снижение трения и гашение напряжений.' : 'активизация поля обмена и ускорение синтеза.'}</p>
          </div>
          ` : ''}
        </div>
      </div>
    `;
    this.resultContainer.scrollIntoView({ behavior: 'smooth' });
  }
}
