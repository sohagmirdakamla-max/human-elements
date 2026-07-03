/* ==========================================================================
   HUMAN ELEMENTS // APPLICATION INITIALIZER & ROUTER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚛️ HUMAN ELEMENTS // Initializing Quantum Platform...');

  // Initialize Core Components
  window.tableComp = new TableComponent();
  window.labComp = new ReactionLabComponent();
  window.teamComp = new TeamBuilderComponent();
  window.quizComp = new QuizComponent();
  window.matchComp = new MatchmakingComponent();

  // Navigation Tab Switcher
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');

      // Update Nav Buttons State
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Tab Contents State
      tabContents.forEach(tab => {
        if (tab.id === targetTabId) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    });
  });
});
