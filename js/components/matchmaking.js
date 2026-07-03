/* ==========================================================================
   HUMAN ELEMENTS // MATCHMAKING & DATING ENGINE (TAB 5)
   ========================================================================== */

class MatchmakingComponent {
  constructor() {
    this.myElemSelect = document.getElementById('match-my-elem');
    this.modeSelect = document.getElementById('match-mode');
    this.targetGroupSelect = document.getElementById('match-target-group');
    this.findBtn = document.getElementById('match-find-btn');
    this.resultsGrid = document.getElementById('match-results-grid');

    this.init();
  }

  init() {
    this.populateSelects();

    if (this.findBtn) {
      this.findBtn.addEventListener('click', () => this.runMatchmaking());
    }
  }

  populateSelects() {
    if (this.myElemSelect) {
      this.myElemSelect.innerHTML = HUMAN_ELEMENTS.map(e => `
        <option value="${e.num}">[${e.symbol}] ${e.name.split(' ')[0]} (${e.groupName})</option>
      `).join('');
    }

    if (this.targetGroupSelect) {
      const groups = [
        { id: 'all', name: '✨ Все группы элементов' },
        { id: 'alkali', name: '🔥 Первопроходцы (H, Li, Na, K)' },
        { id: 'alkaline', name: '🛡️ Фундамент (Be, Mg, Ca, Ba)' },
        { id: 'transition', name: '💎 Профессионалы (Fe, Cu, Au, Hg)' },
        { id: 'metalloid', name: '🔮 Синтетики (C, Si, Ge)' },
        { id: 'nonmetal', name: '📊 Аналитики (N, P)' },
        { id: 'halogen', name: '⚡ Катализаторы (O, S, F, Cl)' },
        { id: 'noble', name: '🕊️ Гармонизаторы (He, Ne, Ar, U)' }
      ];
      this.targetGroupSelect.innerHTML = groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
    }
  }

  selectMyElement(elemNum) {
    if (this.myElemSelect) {
      this.myElemSelect.value = elemNum;
    }
    this.runMatchmaking();
  }

  runMatchmaking() {
    const myNum = this.myElemSelect ? parseInt(this.myElemSelect.value) : 1;
    const mode = this.modeSelect ? this.modeSelect.value : 'love';
    const targetGroup = this.targetGroupSelect ? this.targetGroupSelect.value : 'all';

    const myElem = HUMAN_ELEMENTS.find(e => e.num === myNum) || HUMAN_ELEMENTS[0];

    // Candidate elements (excluding self)
    const candidates = HUMAN_ELEMENTS.filter(e => e.num !== myNum && (targetGroup === 'all' || e.group === targetGroup));

    if (!this.resultsGrid) return;

    // Calculate compatibility for each candidate and sort by best matches
    const calculatedMatches = candidates.map(elem => {
      const result = window.reactionEngine.calculate(myElem, elem);
      return { elem, result };
    }).sort((a, b) => b.result.score - a.result.score);

    // Pick top 4 matches
    const matches = calculatedMatches.slice(0, 4);

    this.resultsGrid.innerHTML = `
      <div style="grid-column: 1/-1; background: rgba(0,240,255,0.05); border: 1px solid var(--border-glass-bright); border-radius: 16px; padding: 1.2rem; margin-bottom: 1.5rem;">
        <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Квантовое ядро отправителя:</div>
        <div style="font-size: 1.4rem; font-weight: 800; color: var(--grp-metalloid); margin-top: 0.2rem;">
          [${myElem.symbol}] ${myElem.name} <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">(${myElem.groupName})</span>
        </div>
      </div>
    ` + matches.map(({ elem, result }) => {
      const colorVar = getComputedStyle(document.documentElement).getPropertyValue(`--grp-${elem.group}`).trim();
      
      const formula = mode === 'love' 
        ? `${myElem.symbol}·${elem.symbol} (Ковалентный Любовный Союз)` 
        : `${myElem.symbol}-${elem.symbol} (Технологический Сплав Брендов)`;

      const titleBadge = mode === 'love' ? '❤️ ЛЮБОВНЫЙ РЕЗОНАНС И БЫТ' : '💼 ДЕЛОВАЯ СИНЕРГИЯ И БИЗНЕС';

      return `
        <div class="match-card" style="background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: 18px; padding: 1.5rem; margin-bottom: 1.5rem; border-left: 5px solid ${colorVar}; box-shadow: 0 8px 25px rgba(0,0,0,0.4);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.75rem; color: var(--grp-noble); font-weight: 700; text-transform: uppercase; tracking: 1px;">${titleBadge}</span>
              <h3 style="font-size: 1.5rem; font-weight: 800; color: #fff; margin-top: 0.2rem;">[${elem.symbol}] ${elem.name}</h3>
              <span style="font-size: 0.85rem; color: var(--text-muted);">${elem.groupName}</span>
            </div>
            <div style="text-align: right; background: rgba(255,255,255,0.04); padding: 0.5rem 1rem; border-radius: 12px; border: 1px solid var(--border-glass);">
              <span style="font-family: var(--font-mono); font-size: 1.6rem; font-weight: 900; color: ${colorVar}; text-shadow: 0 0 10px ${colorVar};">${result.score}%</span>
              <div style="font-size: 0.7rem; color: var(--text-muted);">Совместимость</div>
            </div>
          </div>

          <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 12px; font-size: 0.9rem; margin-bottom: 1.2rem; border: 1px solid rgba(255,255,255,0.05);">
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.3rem;">Формула квантового союза:</div>
            <div style="font-family: var(--font-mono); font-weight: 700; color: var(--grp-metalloid); font-size: 1rem; margin-bottom: 0.5rem;">${formula}</div>
            
            <div style="margin-top: 0.8rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; font-size: 0.75rem; text-align: center; margin-bottom: 0.8rem;">
              <div style="background: rgba(255,255,255,0.02); padding: 0.4rem; border-radius: 6px;">
                <span style="color: var(--text-muted);">Синергия</span>
                <div style="font-family: var(--font-mono); font-weight: 700; color: var(--grp-post-trans);">${result.synergy}%</div>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 0.4rem; border-radius: 6px;">
                <span style="color: var(--text-muted);">Напряжение</span>
                <div style="font-family: var(--font-mono); font-weight: 700; color: var(--grp-alkali);">${result.tension}%</div>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 0.4rem; border-radius: 6px;">
                <span style="color: var(--text-muted);">Рост</span>
                <div style="font-family: var(--font-mono); font-weight: 700; color: var(--grp-metalloid);">${result.growth}%</div>
              </div>
            </div>

            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 0.5rem;"><strong>Вектор роста:</strong> ${result.growthPoint}</p>
            <p style="color: var(--text-muted); line-height: 1.6; font-size: 0.85rem;"><strong>Зона трения:</strong> ${result.conflictPoint}</p>
          </div>

          <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
            <button class="btn-primary" style="flex: 1; padding: 0.7rem; font-size: 0.9rem;" onclick="window.fullProfileComp.openProfile(HUMAN_ELEMENTS.find(e => e.num === ${elem.num}))">
              📖 Портрет партнера
            </button>
            <button class="btn-primary" style="background: linear-gradient(135deg, #ff3366, #a044ff); color: #fff; padding: 0.7rem 1.2rem; font-size: 0.9rem; font-weight: 700;" onclick="alert('⚡ Запрос совместимости для пары [${myElem.symbol} + ${elem.symbol}] сформирован! Вы можете отправить ссылку партнеру через Вирусный Шэринг.')">
              ⚡ Проверить химию пары
            </button>
          </div>
        </div>
      `;
    }).join('');

    this.resultsGrid.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.matchComp = new MatchmakingComponent();
});
