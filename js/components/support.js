/* ==========================================================================
   HUMAN ELEMENTS // CROWDFUNDING & MONETIZATION COMPONENT
   ========================================================================== */

class SupportComponent {
  constructor() {
    this.modal = document.getElementById('payment-modal');
    this.closeBtn = document.getElementById('payment-close');
    this.form = document.getElementById('payment-form');
    this.selectedTier = { name: 'Персональный Разбор', price: 990 };
    this.selectedMethod = 'sbp';

    this.init();
  }

  init() {
    // Tier Selection Buttons
    document.querySelectorAll('.tier-select-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tierName = btn.getAttribute('data-tier-name');
        const tierPrice = parseInt(btn.getAttribute('data-tier-price'));
        this.openPaymentModal(tierName, tierPrice);
      });
    });

    // Close modal
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }

    // Payment Method Pills
    document.querySelectorAll('.pay-method-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.pay-method-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.selectedMethod = pill.getAttribute('data-method');
      });
    });

    // Submit Payment Form
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.processPayment();
      });
    }
  }

  openPaymentModal(tierName, tierPrice) {
    this.selectedTier = { name: tierName, price: tierPrice };
    
    const titleEl = document.getElementById('pay-tier-title');
    const priceEl = document.getElementById('pay-tier-price');
    const resultBox = document.getElementById('pay-result-box');
    const formBox = document.getElementById('pay-form-box');

    if (titleEl) titleEl.textContent = tierName;
    if (priceEl) priceEl.textContent = `${tierPrice.toLocaleString('ru-RU')} ₽`;

    if (resultBox) resultBox.style.display = 'none';
    if (formBox) formBox.style.display = 'block';

    if (this.modal) this.modal.classList.add('active');
  }

  closeModal() {
    if (this.modal) this.modal.classList.remove('active');
  }

  processPayment() {
    const formBox = document.getElementById('pay-form-box');
    const resultBox = document.getElementById('pay-result-box');

    if (formBox) formBox.style.display = 'none';
    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem; animation: pulse 1.5 infinite;">⚛️✨</div>
          <h2 style="color: var(--grp-metalloid); margin-bottom: 0.5rem;">Благодарим за вклад в развитие!</h2>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">
            Ваш доступ к тарифу <strong>«${this.selectedTier.name}»</strong> успешно активирован.
          </p>
          <div style="background: rgba(0, 240, 255, 0.08); border: 1px dashed var(--grp-metalloid); border-radius: 12px; padding: 1.2rem; margin-bottom: 1.5rem; text-align: left;">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Квантовый Сертификат Спонсора:</div>
            <div style="font-family: var(--font-mono); font-weight: 700; color: #fff; font-size: 1.1rem; margin-top: 0.2rem;">
              HE-${Math.floor(100000 + Math.random() * 900000)}
            </div>
            <div style="font-size: 0.8rem; color: var(--grp-noble); margin-top: 0.4rem;">
              ✓ Включен в реестр меценатов человеческой химии
            </div>
          </div>
          <button class="btn-primary" onclick="window.supportComp.closeModal()">
            🚀 Вернуться к Исследованиям
          </button>
        </div>
      `;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.supportComp = new SupportComponent();
});
