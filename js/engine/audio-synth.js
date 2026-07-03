/* ==========================================================================
   HUMAN ELEMENTS // AUDIO SYNTHESIZER ENGINE (WEB AUDIO API)
   ========================================================================== */

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.isEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playElementTone(freq = 440) {
    if (!this.isEnabled) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Envelope
    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.15, this.ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.65);
  }

  playReactionSynthesis(freq1, freq2, isHarmonic = true) {
    if (!this.isEnabled) return;
    this.init();

    const now = this.ctx.currentTime;

    // Oscillator 1
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = isHarmonic ? 'triangle' : 'sawtooth';
    osc1.frequency.setValueAtTime(freq1, now);
    osc1.frequency.exponentialRampToValueAtTime(freq1 * 1.5, now + 0.8);

    // Oscillator 2
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq2, now);
    osc2.frequency.exponentialRampToValueAtTime(freq2 * (isHarmonic ? 2 : 0.7), now + 0.8);

    // Master Gain
    gain1.gain.setValueAtTime(0.01, now);
    gain1.gain.linearRampToValueAtTime(0.1, now + 0.2);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    gain2.gain.setValueAtTime(0.01, now);
    gain2.gain.linearRampToValueAtTime(0.1, now + 0.2);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(this.ctx.destination);
    gain2.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 1.25);
    osc2.stop(now + 1.25);
  }
}

const audioSynth = new AudioSynth();
