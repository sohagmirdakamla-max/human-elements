/* ==========================================================================
   HUMAN ELEMENTS // TABLE COMPONENT & MODAL MANAGER
   ========================================================================== */

class TableComponent {
  constructor() {
    this.gridEl = document.getElementById('table-grid');
    this.searchInput = document.getElementById('search-input');
    this.groupFilters = document.getElementById('group-filters');
    this.currentGroup = 'all';
    this.currentQuery = '';

    // Modal elements
    this.modalOverlay = document.getElementById('element-modal');
    this.modalClose = document.getElementById('modal-close');
    this.atomVisualizer = new AtomVisualizer('atom-canvas');
    this.currentElement = null;
    this.currentIsotope = 'ground';

    this.init();
  }

  init() {
    this.renderFilters();
    this.renderGrid();
    this.renderCircle();

    // View Mode Toggle Listeners
    const btnTable = document.getElementById('view-mode-table');
    const btnCircle = document.getElementById('view-mode-circle');
    const panelTable = document.getElementById('table-view-panel');
    const panelCircle = document.getElementById('circle-view-panel');

    if (btnTable && btnCircle && panelTable && panelCircle) {
      btnTable.addEventListener('click', () => {
        btnCircle.classList.remove('active');
        btnTable.classList.add('active');
        panelCircle.style.display = 'none';
        panelTable.style.display = 'block';
      });

      btnCircle.addEventListener('click', () => {
        btnTable.classList.remove('active');
        btnCircle.classList.add('active');
        panelTable.style.display = 'none';
        panelCircle.style.display = 'block';
        this.renderCircle(); // Recalculate if window was resized
      });
    }

    // Event Listeners
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentQuery = e.target.value.toLowerCase();
        this.renderGrid();
      });
    }

    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) this.closeModal();
      });
    }

    // Full Profile Button
    const fullProfileBtn = document.getElementById('modal-full-profile-btn');
    if (fullProfileBtn) {
      fullProfileBtn.addEventListener('click', () => {
        if (this.currentElement && window.fullProfileComp) {
          window.fullProfileComp.openProfile(this.currentElement);
        }
      });
    }

    // Isotope Selector Buttons in Modal
    document.querySelectorAll('.iso-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.iso-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentIsotope = btn.getAttribute('data-state');
        this.updateModalProfile();
      });
    });
  }

  renderFilters() {
    if (!this.groupFilters) return;
    const groups = [
      { id: 'all', name: 'Все элементы' },
      { id: 'alkali', name: 'Первопроходцы (H, Li, Na, K)' },
      { id: 'alkaline', name: 'Фундамент (Be, Mg, Ca, Ba)' },
      { id: 'transition', name: 'Профессионалы (Fe, Cu, Au, Hg)' },
      { id: 'metalloid', name: 'Синтетики (C, Si, Ge)' },
      { id: 'nonmetal', name: 'Аналитики (N, P)' },
      { id: 'halogen', name: 'Катализаторы (O, S, F, Cl)' },
      { id: 'noble', name: 'Гармонизаторы (He, Ne, Ar, U)' }
    ];

    this.groupFilters.innerHTML = groups.map(g => `
      <button class="chip-btn ${g.id === 'all' ? 'active' : ''}" data-group="${g.id}">
        ${g.name}
      </button>
    `).join('');

    this.groupFilters.querySelectorAll('.chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.groupFilters.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentGroup = btn.getAttribute('data-group');
        this.renderGrid();
      });
    });
  }

  renderGrid() {
    if (!this.gridEl) return;

    const filtered = HUMAN_ELEMENTS.filter(elem => {
      const matchesGroup = this.currentGroup === 'all' || elem.group === this.currentGroup;
      const matchesQuery = !this.currentQuery || 
        elem.name.toLowerCase().includes(this.currentQuery) ||
        elem.symbol.toLowerCase().includes(this.currentQuery) ||
        elem.traits.some(t => t.toLowerCase().includes(this.currentQuery));
      return matchesGroup && matchesQuery;
    });

    if (filtered.length === 0) {
      this.gridEl.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <h3>Квантовый резонанс не найден</h3>
          <p>Попробуйте изменить параметры поиска или группы</p>
        </div>
      `;
      return;
    }

    this.gridEl.innerHTML = filtered.map(elem => {
      const colorVar = `var(--grp-${elem.group})`;
      const valenceDots = Array(elem.valence).fill(0).map(() => `<span class="valence-dot"></span>`).join('');
      
      return `
        <div class="element-card" data-num="${elem.num}" style="--group-color: ${colorVar}; --group-glow: ${colorVar};">
          <div class="card-top">
            <span class="card-number">${elem.num}</span>
            <span class="card-mass">${elem.mass}</span>
          </div>
          <div class="card-center">
            <div class="card-symbol">${elem.symbol}</div>
            <div class="card-name">${elem.name.split(' ')[0]}</div>
          </div>
          <div class="card-bottom">
            <span class="card-group-name">${elem.groupName}</span>
            <div class="card-valence">${valenceDots}</div>
          </div>
        </div>
      `;
    }).join('');

    // Attach Click Event to Cards
    this.gridEl.querySelectorAll('.element-card').forEach(card => {
      card.addEventListener('click', () => {
        const num = parseInt(card.getAttribute('data-num'));
        const elem = HUMAN_ELEMENTS.find(e => e.num === num);
        if (elem) this.openModal(elem);
      });
    });
  }

  openModal(elem) {
    this.currentElement = elem;
    this.currentIsotope = 'ground';

    // Audio synth feedback
    if (window.audioSynth) {
      window.audioSynth.playElementTone(elem.freq);
    }

    const colorVar = getComputedStyle(document.documentElement).getPropertyValue(`--grp-${elem.group}`).trim() || '#00f0ff';

    // Populate Info
    document.getElementById('modal-group-badge').textContent = elem.groupName;
    document.getElementById('modal-group-badge').style.background = `${colorVar}22`;
    document.getElementById('modal-group-badge').style.color = colorVar;
    document.getElementById('modal-group-badge').style.border = `1px solid ${colorVar}44`;

    document.getElementById('modal-title').textContent = elem.name;
    document.getElementById('modal-symbol').textContent = elem.symbol;
    document.getElementById('modal-symbol').style.color = colorVar;

    document.getElementById('stat-num').textContent = elem.num;
    document.getElementById('stat-mass').textContent = elem.mass;
    document.getElementById('stat-valence').textContent = `${elem.valence} связей`;
    document.getElementById('stat-freq').textContent = `${elem.freq} Hz`;

    // Reset Isotope buttons
    document.querySelectorAll('.iso-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.iso-btn[data-state="ground"]').classList.add('active');

    this.updateModalProfile();

    // Canvas Atom start
    this.atomVisualizer.setElement(elem, colorVar);
    this.atomVisualizer.start();

    // Show Overlay
    this.modalOverlay.classList.add('active');
  }

  updateModalProfile() {
    if (!this.currentElement) return;
    const descEl = document.getElementById('modal-description');
    if (descEl) {
      descEl.textContent = this.currentElement.profiles[this.currentIsotope] || this.currentElement.profiles.ground;
    }
  }

  closeModal() {
    if (this.modalOverlay) this.modalOverlay.classList.remove('active');
    this.atomVisualizer.stop();
  }

  renderCircle() {
    const circleContainer = document.getElementById('table-circle');
    const reactorSymbol = document.querySelector('.reactor-core-symbol');
    const reactorName = document.querySelector('.reactor-core-name');
    const reactorGroup = document.querySelector('.reactor-core-group');
    const reactorComplementary = document.querySelector('.reactor-core-complementary');
    const reactorCore = document.getElementById('circle-reactor');

    if (!circleContainer) return;

    // Remove existing nodes (keep reactor core)
    const nodes = circleContainer.querySelectorAll('.circle-node');
    nodes.forEach(n => n.remove());

    const isMobile = window.innerWidth <= 768;
    const r = isMobile ? 180 : 330;
    const nodeSize = isMobile ? 32 : 50;

    // Sort elements by atomic number for continuous weight flow
    const sorted = [...HUMAN_ELEMENTS].sort((a, b) => a.num - b.num);
    const N = sorted.length;

    sorted.forEach((elem, i) => {
      const angle = (i * (360 / N)) * (Math.PI / 180);
      const x = Math.round(r * Math.cos(angle));
      const y = Math.round(r * Math.sin(angle));

      const hue = Math.round(i * (360 / N));
      const color = `hsl(${hue}, 85%, 60%)`;
      const bgStyle = `hsl(${hue}, 85%, 15%)`;

      const node = document.createElement('div');
      node.className = 'circle-node';
      node.style.left = `calc(50% + ${x}px - ${nodeSize / 2}px)`;
      node.style.top = `calc(50% + ${y}px - ${nodeSize / 2}px)`;
      node.style.backgroundColor = bgStyle;
      node.style.border = `2px solid ${color}`;
      node.style.setProperty('--node-color', color);
      node.setAttribute('data-num', elem.num);

      node.innerHTML = `
        <div class="circle-node-symbol">${elem.symbol}</div>
        <div class="circle-node-num">${elem.num}</div>
      `;

      // Event: Hover updates Reactor Core and draws connections
      node.addEventListener('mouseenter', () => {
        if (reactorSymbol) {
          reactorSymbol.textContent = elem.symbol;
          reactorSymbol.style.color = color;
          reactorSymbol.style.textShadow = `0 0 20px ${color}`;
        }
        if (reactorName) reactorName.textContent = elem.name.split(' ')[0];
        if (reactorGroup) {
          reactorGroup.textContent = elem.groupName;
          reactorGroup.style.color = color;
        }
        if (reactorCore) {
          reactorCore.style.borderColor = color;
          reactorCore.style.setProperty('--reactor-color', color);
          reactorCore.style.boxShadow = `0 0 40px ${color}33, inset 0 0 20px ${color}1a`;
        }

        // Calculate complementary opposite element (approx 180 degrees away)
        const compIndex = (i + Math.floor(N / 2)) % N;
        const compElem = sorted[compIndex];
        if (reactorComplementary) {
          reactorComplementary.innerHTML = `
            <span>Напротив: <strong style="color: hsl(${Math.round(compIndex * (360 / N))}, 85%, 60%);">[${compElem.symbol}] ${compElem.name.split(' ')[0]}</strong></span>
          `;
        }

        // Draw connections inside SVG
        const svg = document.getElementById('circle-connections-svg');
        if (svg) {
          const rect = svg.getBoundingClientRect();
          const cx = rect.width / 2;
          const cy = rect.height / 2;

          // Positions
          const currX = cx + r * Math.cos(angle);
          const currY = cy + r * Math.sin(angle);

          // 1. Complementary (Opposite)
          const compAngle = (compIndex * (360 / N)) * (Math.PI / 180);
          const compX = cx + r * Math.cos(compAngle);
          const compY = cy + r * Math.sin(compAngle);
          const compColor = `hsl(${Math.round(compIndex * (360 / N))}, 85%, 60%)`;

          // 2. Triad (+120 and -120 degrees)
          const triIndex1 = (i + Math.floor(N / 3)) % N;
          const triIndex2 = (i + Math.floor(2 * N / 3)) % N;
          const triAngle1 = (triIndex1 * (360 / N)) * (Math.PI / 180);
          const triAngle2 = (triIndex2 * (360 / N)) * (Math.PI / 180);
          const triX1 = cx + r * Math.cos(triAngle1);
          const triY1 = cy + r * Math.sin(triAngle1);
          const triX2 = cx + r * Math.cos(triAngle2);
          const triY2 = cy + r * Math.sin(triAngle2);

          // 3. Analogous (Adjacent neighbors)
          const anaIndex1 = (i - 1 + N) % N;
          const anaIndex2 = (i + 1) % N;
          const anaAngle1 = (anaIndex1 * (360 / N)) * (Math.PI / 180);
          const anaAngle2 = (anaIndex2 * (360 / N)) * (Math.PI / 180);
          const anaX1 = cx + r * Math.cos(anaAngle1);
          const anaY1 = cy + r * Math.sin(anaAngle1);
          const anaX2 = cx + r * Math.cos(anaAngle2);
          const anaY2 = cy + r * Math.sin(anaAngle2);

          svg.innerHTML = `
            <!-- Defs for Gradient -->
            <defs>
              <linearGradient id="comp-grad-${i}" x1="${currX}" y1="${currY}" x2="${compX}" y2="${compY}" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="${color}" />
                <stop offset="100%" stop-color="${compColor}" />
              </linearGradient>
            </defs>

            <!-- Triadic Triangle (Dashed) -->
            <polygon points="${currX},${currY} ${triX1},${triY1} ${triX2},${triY2}" 
                     fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" 
                     stroke-dasharray="5,5" />
            <line x1="${currX}" y1="${currY}" x2="${triX1}" y2="${triY1}" stroke="${color}" stroke-width="1.5" stroke-dasharray="5,5" style="opacity: 0.5;" />
            <line x1="${currX}" y1="${currY}" x2="${triX2}" y2="${triY2}" stroke="${color}" stroke-width="1.5" stroke-dasharray="5,5" style="opacity: 0.5;" />

            <!-- Analogous Connections to Neighbors -->
            <line x1="${currX}" y1="${currY}" x2="${anaX1}" y2="${anaY1}" stroke="${color}" stroke-width="2" style="opacity: 0.5;" />
            <line x1="${currX}" y1="${currY}" x2="${anaX2}" y2="${anaY2}" stroke="${color}" stroke-width="2" style="opacity: 0.5;" />

            <!-- Complementary Opposite Line (Strong Glow) -->
            <line x1="${currX}" y1="${currY}" x2="${compX}" y2="${compY}" 
                  stroke="url(#comp-grad-${i})" stroke-width="4.5" stroke-linecap="round"
                  style="filter: drop-shadow(0 0 10px ${color}); opacity: 0.9;" />
          `;
        }
      });

      node.addEventListener('mouseleave', () => {
        const svg = document.getElementById('circle-connections-svg');
        if (svg) svg.innerHTML = '';
      });

      // Event: Click opens detailed modal
      node.addEventListener('click', () => {
        this.openModal(elem);
      });

      circleContainer.appendChild(node);
    });
  }
}
