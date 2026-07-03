/* ==========================================================================
   HUMAN ELEMENTS // TEAM MOLECULE BUILDER COMPONENT
   ========================================================================== */

class TeamBuilderComponent {
  constructor() {
    this.selectedElements = [];
    this.gridContainer = document.getElementById('team-select-grid');
    this.slotsContainer = document.getElementById('team-slots');
    this.analyzeBtn = document.getElementById('team-analyze-btn');
    this.resultContainer = document.getElementById('team-result');

    this.init();
  }

  init() {
    this.renderElementPicker();
    this.updateSlots();

    if (this.analyzeBtn) {
      this.analyzeBtn.addEventListener('click', () => this.analyzeTeam());
    }
  }

  renderElementPicker() {
    if (!this.gridContainer) return;
    this.gridContainer.innerHTML = HUMAN_ELEMENTS.map(e => `
      <button class="team-pick-btn" data-num="${e.num}" style="--grp-color: var(--grp-${e.group});">
        <span class="pick-symbol">${e.symbol}</span>
        <span class="pick-name">${e.name.split(' ')[0]}</span>
      </button>
    `).join('');

    this.gridContainer.querySelectorAll('.team-pick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const num = parseInt(btn.getAttribute('data-num'));
        const elem = HUMAN_ELEMENTS.find(e => e.num === num);
        if (elem) this.toggleElement(elem, btn);
      });
    });
  }

  toggleElement(elem, btn) {
    const index = this.selectedElements.findIndex(e => e.num === elem.num);
    if (index >= 0) {
      this.selectedElements.splice(index, 1);
      btn.classList.remove('selected');
    } else {
      if (this.selectedElements.length >= 5) {
        alert('Максимум 5 элементов в одной командной молекуле!');
        return;
      }
      this.selectedElements.push(elem);
      btn.classList.add('selected');
    }
    this.updateSlots();
  }

  updateSlots() {
    if (!this.slotsContainer) return;
    const slotsHtml = [];
    for (let i = 0; i < 5; i++) {
      const elem = this.selectedElements[i];
      if (elem) {
        slotsHtml.push(`
          <div class="team-slot filled" style="border-color: var(--grp-${elem.group});">
            <span class="slot-symbol">${elem.symbol}</span>
            <span class="slot-name">${elem.name.split(' ')[0]}</span>
          </div>
        `);
      } else {
        slotsHtml.push(`
          <div class="team-slot empty">
            <span>+ Слот ${i + 1}</span>
          </div>
        `);
      }
    }
    this.slotsContainer.innerHTML = slotsHtml.join('');
  }

  analyzeTeam() {
    if (this.selectedElements.length < 2) {
      alert('Выберите хотя бы 2 элемента для сборки командной молекулы!');
      return;
    }

    const totalMass = this.selectedElements.reduce((acc, e) => acc + e.mass, 0).toFixed(2);
    const groupsPresent = new Set(this.selectedElements.map(e => e.group));
    const hasNoble = groupsPresent.has('noble');
    const hasAlkali = groupsPresent.has('alkali');

    let stabilityIndex = 65 + (groupsPresent.size * 8);
    if (hasNoble) stabilityIndex += 10;
    if (this.selectedElements.length >= 4 && !hasNoble) stabilityIndex -= 15;

    stabilityIndex = Math.max(30, Math.min(98, stabilityIndex));

    let alertMsg = "Команда хорошо сбалансирована по разнообразию ролей.";
    if (!hasNoble && this.selectedElements.length >= 3) {
      alertMsg = "⚠️ Внимание: В молекуле не хватает стабильного элемента (Гармонизатора/Noble Gas). Высокий риск синергетического выгорания!";
    } else if (hasAlkali && groupsPresent.has('halogen')) {
      alertMsg = "⚡ Взрывной потенциал! Высокая скорость реализации, но требуются жесткие дедлайны.";
    }

    if (!this.resultContainer) return;

    this.resultContainer.innerHTML = `
      <div class="team-analysis-card">
        <h3>📊 Анализ Молекулы Команды</h3>
        <div class="team-metrics">
          <div class="metric">
            <span class="m-label">Молекулярный вес</span>
            <span class="m-val">${totalMass} amu</span>
          </div>
          <div class="metric">
            <span class="m-label">Индекс стабильности</span>
            <span class="m-val">${stabilityIndex}%</span>
          </div>
          <div class="metric">
            <span class="m-label">Разнообразие спектра</span>
            <span class="m-val">${groupsPresent.size} / 8 групп</span>
          </div>
        </div>
        <div class="team-alert-box">
          <p>${alertMsg}</p>
        </div>
      </div>
    `;
    this.resultContainer.scrollIntoView({ behavior: 'smooth' });
  }
}
