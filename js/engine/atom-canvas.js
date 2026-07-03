/* ==========================================================================
   HUMAN ELEMENTS // ATOM CANVAS VISUALIZER ENGINE
   ========================================================================== */

class AtomVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.animId = null;
    this.angle = 0;
    this.element = null;
    this.groupColor = '#00f0ff';
    
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio || 300;
    this.canvas.height = rect.height * window.devicePixelRatio || 300;
  }

  setElement(elem, color) {
    this.element = elem;
    this.groupColor = color || '#00f0ff';
  }

  start() {
    if (this.animId) cancelAnimationFrame(this.animId);
    const render = () => {
      this.draw();
      this.angle += 0.015;
      this.animId = requestAnimationFrame(render);
    };
    render();
  }

  stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    this.ctx.clearRect(0, 0, w, h);

    if (!this.element) return;

    // 1. Draw Nucleus (Glowing Center)
    const nucleusRadius = 22 * (w / 300);
    
    // Outer Glow
    const glowGradient = this.ctx.createRadialGradient(cx, cy, nucleusRadius * 0.2, cx, cy, nucleusRadius * 2.5);
    glowGradient.addColorStop(0, this.groupColor);
    glowGradient.addColorStop(0.5, this.hexToRgba(this.groupColor, 0.3));
    glowGradient.addColorStop(1, 'transparent');
    
    this.ctx.fillStyle = glowGradient;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, nucleusRadius * 2.5, 0, Math.PI * 2);
    this.ctx.fill();

    // Solid Nucleus Core
    this.ctx.fillStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, nucleusRadius * 0.6, 0, Math.PI * 2);
    this.ctx.fill();

    // Symbol Text in Center
    this.ctx.fillStyle = '#0a0d14';
    this.ctx.font = `bold ${Math.floor(14 * (w/300))}px Fira Code, monospace`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(this.element.symbol, cx, cy);

    // 2. Draw Electron Orbital Rings
    const orbitalCount = Math.max(2, Math.min(5, this.element.valence + 1));
    const maxRadius = (w / 2) - (25 * (w / 300));
    
    for (let i = 0; i < orbitalCount; i++) {
      const radiusX = (maxRadius / orbitalCount) * (i + 1);
      const radiusY = radiusX * 0.4;
      const rotAngle = (Math.PI / orbitalCount) * i + (this.angle * 0.2);

      this.ctx.save();
      this.ctx.translate(cx, cy);
      this.ctx.rotate(rotAngle);

      // Orbital Path Line
      this.ctx.strokeStyle = this.hexToRgba(this.groupColor, 0.25);
      this.ctx.lineWidth = 1.5 * (w / 300);
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
      this.ctx.stroke();

      // Electron Particle
      const electronAngle = this.angle * (1 + i * 0.3) * (i % 2 === 0 ? 1 : -1);
      const ex = Math.cos(electronAngle) * radiusX;
      const ey = Math.sin(electronAngle) * radiusY;

      // Electron Glow
      this.ctx.fillStyle = '#ffffff';
      this.ctx.shadowColor = this.groupColor;
      this.ctx.shadowBlur = 12;
      this.ctx.beginPath();
      this.ctx.arc(ex, ey, 4.5 * (w / 300), 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // reset

      this.ctx.restore();
    }
  }

  hexToRgba(hex, alpha) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
  }
}
