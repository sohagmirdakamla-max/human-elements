/* ==========================================================================
   HUMAN ELEMENTS // ADVANCED QUANTUM DIAGNOSTIC QUIZ ENGINE (24 QUESTIONS)
   ========================================================================== */

class QuizComponent {
  constructor() {
    this.quizContainer = document.getElementById('quiz-container');
    this.currentStep = 0;
    
    // Detailed scoring metrics
    this.groupScores = { alkali: 0, alkaline: 0, transition: 0, metalloid: 0, nonmetal: 0, halogen: 0, noble: 0 };
    this.isotopeScores = { ground: 0, excited: 0, decay: 0 };
    this.valenceAccumulator = 0;
    this.collapseTriggers = { burnout: 0, betrayal: 0, overload: 0, isolation: 0, chaos: 0 };
    this.catalystTypes = { challenge: 0, safety: 0, future: 0, order: 0 };

    this.questions = [
      // ----------------------------------------------------------------------
      // BLOCK 1: Источник энергии / Подзарядка ядра
      // ----------------------------------------------------------------------
      {
        text: "1. В каком пространстве ваше личное ядро быстрее всего восстанавливает энергетический заряд?",
        options: [
          { text: "🧘 В абсолютном уединении и тишине, полностью отключившись от внешних полей.", influence: [{ group: "noble", weight: 2 }, { group: "nonmetal", weight: 1 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "⚡ В динамичном движении, спорте или решении срочных, зажигающих задач.", influence: [{ group: "alkali", weight: 2 }, { group: "transition", weight: 1 }], iso: "excited", valence: 2, trigger: "overload", catalyst: "challenge" },
          { text: "🤝 В близком кругу проверенных людей, за душевными и глубокими беседами.", influence: [{ group: "alkaline", weight: 2 }, { group: "metalloid", weight: 1 }], iso: "ground", valence: 3, trigger: "betrayal", catalyst: "safety" },
          { text: "🌐 В центре масштабных событий, координируя потоки информации и людей.", fill: "none", influence: [{ group: "metalloid", weight: 2 }, { group: "halogen", weight: 1 }], iso: "excited", valence: 4, trigger: "chaos", catalyst: "future" }
        ]
      },
      {
        text: "2. Какое состояние ума для вас является естественным индикатором подзарядки?",
        options: [
          { text: "📐 Четкость, упорядоченность мыслей и понимание структуры происходящего.", influence: [{ group: "nonmetal", weight: 2 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "🔥 Вдохновение, азарт и желание немедленно начать действовать или творить.", influence: [{ group: "alkali", weight: 2 }, { group: "halogen", weight: 1 }], iso: "excited", valence: 2, trigger: "burnout", catalyst: "challenge" },
          { text: "🕊️ Легкость, инертность ко внешним раздражителям и глубокое спокойствие.", influence: [{ group: "noble", weight: 2 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "🛠️ Готовность адаптироваться и находить практические решения на ходу.", influence: [{ group: "transition", weight: 2 }, { group: "metalloid", weight: 1 }], iso: "ground", valence: 2, trigger: "overload", catalyst: "order" }
        ]
      },
      {
        text: "3. Как вы относитесь к периодам вынужденного бездействия и тишины?",
        options: [
          { text: "🧘 Воспринимаю это как благословение и лучшее время для калибровки ядра.", influence: [{ group: "noble", weight: 2 }, { group: "nonmetal", weight: 1 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "🔋 Начинаю испытывать беспокойство и искать новые точки применения силы.", influence: [{ group: "alkali", weight: 2 }, { group: "halogen", weight: 1 }], iso: "excited", valence: 3, trigger: "burnout", catalyst: "challenge" },
          { text: "📚 Использую это время для упорядочивания знаний, планов или бытовых архивов.", influence: [{ group: "nonmetal", weight: 2 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "🫂 Переключаю внимание на поддержку близких и укрепление связей.", influence: [{ group: "alkaline", weight: 2 }], iso: "ground", valence: 4, trigger: "betrayal", catalyst: "safety" }
        ]
      },
      {
        text: "4. Что происходит с вашим зарядом в большой, шумной компании незнакомцев?",
        options: [
          { text: "🔋 Быстро истощается — я оксидируюсь (теряю энергию) и хочу уйти.", influence: [{ group: "noble", weight: 2 }, { group: "nonmetal", weight: 1 }], iso: "decay", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "⚡ Накапливается — я ловлю волну и становлюсь центром внимания.", influence: [{ group: "alkali", weight: 2 }, { group: "transition", weight: 1 }], iso: "excited", valence: 4, trigger: "overload", catalyst: "challenge" },
          { text: "🛡️ Остается стабильным — я наблюдаю за процессами со стороны, держа дзен.", influence: [{ group: "alkaline", weight: 2 }], iso: "ground", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "🤝 Начинаю искать интересные элементы для создания точечных полезных альянсов.", influence: [{ group: "metalloid", weight: 2 }, { group: "transition", weight: 1 }], iso: "ground", valence: 2, trigger: "betrayal", catalyst: "future" }
        ]
      },

      // ----------------------------------------------------------------------
      // BLOCK 2: Реакция на угрозу и давление
      // ----------------------------------------------------------------------
      {
        text: "5. Квантовый стресс-тест: В проекте критический сбой. Давление извне растет. Ваш первый шаг:",
        options: [
          { text: "⚡ Беру руководство на себя, раздаю жесткие команды и иду на пролом.", influence: [{ group: "alkali", weight: 3 }, { group: "transition", weight: 1 }], iso: "excited", valence: 3, trigger: "overload", catalyst: "challenge" },
          { text: "📊 Ухожу в сухой аудит данных, чтобы исключить эмоции и найти уязвимость.", influence: [{ group: "nonmetal", weight: 3 }, { group: "noble", weight: 1 }], iso: "ground", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "🛠️ Перестраиваю схему на лету, предлагая оригинальное обходное решение.", influence: [{ group: "metalloid", weight: 3 }, { group: "transition", weight: 1 }], iso: "excited", valence: 2, trigger: "chaos", catalyst: "future" },
          { text: "🕊️ Гашу панику в коллективе, становясь буфером для защиты людей от прессинга.", influence: [{ group: "noble", weight: 3 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 4, trigger: "burnout", catalyst: "safety" }
        ]
      },
      {
        text: "6. Что чувствует ваше ядро при открытом и жестком конфликте?",
        options: [
          { text: "🔥 Вспыхиваю мгновенно — вхожу в реакцию окисления, сжигая препятствия.", influence: [{ group: "halogen", weight: 3 }, { group: "alkali", weight: 1 }], iso: "decay", valence: 2, trigger: "burnout", catalyst: "challenge" },
          { text: "🛡️ Становлюсь сверхпрочным — закрываюсь в кристаллическую решетку и не ломаюсь.", influence: [{ group: "alkaline", weight: 3 }, { group: "transition", weight: 1 }], iso: "ground", valence: 1, trigger: "betrayal", catalyst: "order" },
          { text: "🧘 Полностью отстраняюсь — конфликт проходит сквозь меня, не задевая структуру.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "📈 Вижу в этом повод перестроить правила игры и расставить новые границы.", influence: [{ group: "metalloid", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "excited", valence: 2, trigger: "chaos", catalyst: "future" }
        ]
      },
      {
        text: "7. Какое поведение под давлением для вас наиболее разрушительно?",
        options: [
          { text: "🔴 Истерическая суета, хаотичные метания и потеря фокуса.", influence: [{ group: "halogen", weight: 2 }], iso: "decay", valence: 3, trigger: "chaos", catalyst: "order" },
          { text: "🔴 Полное эмоциональное онемение и уход в глухую изоляцию.", influence: [{ group: "nonmetal", weight: 2 }], iso: "decay", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "🔴 Потеря лица, вспыльчивость и агрессия, разрушающая близкие связи.", influence: [{ group: "alkali", weight: 2 }], iso: "decay", valence: 2, trigger: "betrayal", catalyst: "challenge" },
          { text: "🔴 Безропотное подчинение обстоятельствам во вред собственным принципам.", influence: [{ group: "alkaline", weight: 2 }], iso: "decay", valence: 1, trigger: "burnout", catalyst: "order" }
        ]
      },
      {
        text: "8. Когда вас предают или нарушают договоренности, ваша реакция:",
        options: [
          { text: "🛑 Навсегда вычеркиваю элемент из своей решетки, разрывая связи.", influence: [{ group: "alkaline", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "decay", valence: 1, trigger: "betrayal", catalyst: "order" },
          { text: "🔥 Взрываюсь гремучей смесью — высказываю всё прямо в лицо.", influence: [{ group: "halogen", weight: 3 }, { group: "alkali", weight: 1 }], iso: "decay", valence: 2, trigger: "chaos", catalyst: "challenge" },
          { text: "🧘 Делаю холодные выводы, перестраиваю систему защиты и иду дальше.", influence: [{ group: "transition", weight: 3 }, { group: "noble", weight: 1 }], iso: "ground", valence: 2, trigger: "betrayal", catalyst: "future" },
          { text: "😔 Замыкаюсь в себе, пытаясь переварить токсичный остаток реакции.", influence: [{ group: "noble", weight: 3 }], iso: "decay", valence: 0, trigger: "burnout", catalyst: "safety" }
        ]
      },

      // ----------------------------------------------------------------------
      // BLOCK 3: Социальная химия / Создание связей
      // ----------------------------------------------------------------------
      {
        text: "9. Как вы выстраиваете близкие отношения (ковалентные связи)?",
        options: [
          { text: "🔗 Моногамно и фундаментально: 1-2 связи на всю жизнь с полной отдачей.", influence: [{ group: "alkaline", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "ground", valence: 1, trigger: "betrayal", catalyst: "safety" },
          { text: "🌐 Сетевым образом: легко поддерживаю десятки приятельских и партнерских связей.", influence: [{ group: "metalloid", weight: 3 }, { group: "transition", weight: 1 }], iso: "excited", valence: 5, trigger: "overload", catalyst: "future" },
          { text: "🤝 Избирательно: несколько близких союзов для решения жизненных и творческих задач.", influence: [{ group: "transition", weight: 3 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 3, trigger: "betrayal", catalyst: "order" },
          { text: "🧘 Предпочитаю автономию — не связываю себя прочными обязательствами.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "10. Какое качество в партнере для вас является абсолютно необходимым?",
        options: [
          { text: "🛡️ Надежность, верность слову и предсказуемость поведения.", influence: [{ group: "alkaline", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "ground", valence: 2, trigger: "betrayal", catalyst: "safety" },
          { text: "⚡ Искра, способность вдохновлять, бросать вызовы и подталкивать к росту.", influence: [{ group: "alkali", weight: 3 }, { group: "halogen", weight: 1 }], iso: "excited", valence: 3, trigger: "burnout", catalyst: "challenge" },
          { text: "🧠 Интеллектуальный резонанс, общие ценности и глубина мысли.", influence: [{ group: "nonmetal", weight: 3 }, { group: "metalloid", weight: 1 }], iso: "ground", valence: 1, trigger: "isolation", catalyst: "order" },
          { text: "🕊️ Умение принимать меня целиком, не пытаясь переделать или ограничить.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "11. В любви и браке вы склонны:",
        options: [
          { text: "❤️ Оберегать партнера, брать на себя бытовые и материальные заботы.", influence: [{ group: "alkaline", weight: 2 }, { group: "transition", weight: 1 }], iso: "ground", valence: 4, trigger: "burnout", catalyst: "safety" },
          { text: "⚡ Устраивать бурные эмоциональные качели, страстные сближения и взрывы.", influence: [{ group: "halogen", weight: 2 }, { group: "alkali", weight: 1 }], iso: "excited", valence: 2, trigger: "chaos", catalyst: "challenge" },
          { text: "🤝 Строить партнерство как идеальный слаженный механизм соавторства.", influence: [{ group: "metalloid", weight: 2 }, { group: "nonmetal", weight: 1 }], iso: "ground", valence: 3, trigger: "overload", catalyst: "order" },
          { text: "🕊️ Сохранять дистанцию и свободу, паря над бытовой рутиной.", fill: "none", influence: [{ group: "noble", weight: 2 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "12. Как вы реагируете на токсичные отношения, отравляющие ваше поле?",
        options: [
          { text: "🛑 Терплю до последнего, пытаясь сохранить структуру и починить связь.", influence: [{ group: "alkaline", weight: 3 }], iso: "decay", valence: 4, trigger: "burnout", catalyst: "safety" },
          { text: "💥 Резко и жестко рублю концы, выжигая мосты без возможности возврата.", influence: [{ group: "halogen", weight: 3 }, { group: "alkali", weight: 1 }], iso: "decay", valence: 1, trigger: "betrayal", catalyst: "challenge" },
          { text: "🧘 Холодно дистанцируюсь, переводя общение в сугубо формальный режим.", influence: [{ group: "nonmetal", weight: 3 }, { group: "noble", weight: 1 }], iso: "ground", valence: 2, trigger: "isolation", catalyst: "order" },
          { text: "🛠️ Перестраиваю форматы встреч так, чтобы нейтрализовать вредное влияние.", influence: [{ group: "metalloid", weight: 3 }, { group: "transition", weight: 1 }], iso: "ground", valence: 3, trigger: "chaos", catalyst: "future" }
        ]
      },

      // ----------------------------------------------------------------------
      // BLOCK 4: Воля и контроль / Лидерство
      // ----------------------------------------------------------------------
      {
        text: "13. Какова ваша естественная роль при работе в команде?",
        options: [
          { text: "👑 Инициатор и драйвер: задаю вектор движения и заряжаю команду верой.", influence: [{ group: "alkali", weight: 3 }, { group: "halogen", weight: 1 }], iso: "excited", valence: 4, trigger: "overload", catalyst: "challenge" },
          { text: "📐 Организатор структуры: слежу за порядком, правилами и логикой процессов.", influence: [{ group: "nonmetal", weight: 3 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 2, trigger: "chaos", catalyst: "order" },
          { text: "🛠️ Мастер-исполнитель: беру сложный блок задач и делаю его идеально.", influence: [{ group: "transition", weight: 3 }, { group: "metalloid", weight: 1 }], iso: "ground", valence: 1, trigger: "burnout", catalyst: "order" },
          { text: "🕊️ Гармонизатор: гашу трения между отделами, выравнивая атмосферу.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 3, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "14. Как вы относитесь к контролю и власти?",
        options: [
          { text: "🛡️ Мне важен контроль над своей жизнью и безопасностью, чужая власть не нужна.", influence: [{ group: "alkaline", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "ground", valence: 1, trigger: "isolation", catalyst: "safety" },
          { text: "⚡ Люблю вести за собой, брать власть и отвечать за общие большие результаты.", influence: [{ group: "alkali", weight: 3 }, { group: "transition", weight: 1 }], iso: "excited", valence: 4, trigger: "overload", catalyst: "challenge" },
          { text: "🎨 Власть меня утомляет, мне гораздо важнее творческая свобода и автономия.", influence: [{ group: "noble", weight: 3 }, { group: "metalloid", weight: 1 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "future" },
          { text: "📈 Контроль должен быть системным — через регламенты, а не личную волю.", influence: [{ group: "nonmetal", weight: 3 }, { group: "transition", weight: 1 }], iso: "ground", valence: 2, trigger: "chaos", catalyst: "order" }
        ]
      },
      {
        text: "15. Ваше отношение к регламентам, планам и правилам в работе:",
        options: [
          { text: "📐 План — это скелет, без которого система рассыплется в хаос.", influence: [{ group: "nonmetal", weight: 3 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "⚡ Правила созданы для того, чтобы их обходить или перестраивать ради эффективности.", influence: [{ group: "metalloid", weight: 3 }, { group: "alkali", weight: 1 }], iso: "excited", valence: 3, trigger: "chaos", catalyst: "future" },
          { text: "🛠️ Ценю четкое понимание задач, но жесткие рамки убивают гибкость и мастерство.", influence: [{ group: "transition", weight: 3 }], iso: "ground", valence: 2, trigger: "burnout", catalyst: "order" },
          { text: "🧘 Главное — чтобы правила не мешали спокойной творческой атмосфере.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "16. Когда проект требует резких, непопулярных и болезненных решений, вы:",
        options: [
          { text: "💥 Принимаю их не задумываясь: хирургический надрез лучше гниения.", influence: [{ group: "halogen", weight: 3 }, { group: "alkali", weight: 1 }], iso: "excited", valence: 1, trigger: "betrayal", catalyst: "challenge" },
          { text: "🛑 Долго взвешиваю все риски для людей и стабильности системы.", influence: [{ group: "alkaline", weight: 3 }, { group: "noble", weight: 1 }], iso: "ground", valence: 4, trigger: "burnout", catalyst: "safety" },
          { text: "📊 Просчитываю математический баланс потерь и выгод, убирая жалость.", influence: [{ group: "nonmetal", weight: 3 }, { group: "transition", weight: 1 }], iso: "ground", valence: 2, trigger: "chaos", catalyst: "order" },
          { text: "🕊️ Стараюсь найти мягкий компромисс, чтобы никого не разрушить.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 3, trigger: "isolation", catalyst: "safety" }
        ]
      },

      // ----------------------------------------------------------------------
      // BLOCK 5: Распад / Уязвимости
      // ----------------------------------------------------------------------
      {
        text: "17. Что быстрее всего запускает процесс вашего выгорания (распада)?",
        options: [
          { text: "🔥 Непрерывная рутина, бессмысленная работа и отсутствие ярких вызовов.", influence: [{ group: "alkali", weight: 2 }], iso: "decay", valence: 3, trigger: "burnout", catalyst: "challenge" },
          { text: "🔥 Длительный хаос, отсутствие стабильности, правил и ясности будущего.", influence: [{ group: "alkaline", weight: 2 }], iso: "decay", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "🔥 Необходимость постоянно находиться в шумной толпе и общаться без передышки.", influence: [{ group: "noble", weight: 2 }], iso: "decay", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "🔥 Предательство близких людей или обесценивание моего личного вклада.", influence: [{ group: "transition", weight: 2 }], iso: "decay", valence: 2, trigger: "betrayal", catalyst: "safety" }
        ]
      },
      {
        text: "18. В каком состоянии вы пребываете во время глубокого кризиса?",
        options: [
          { text: "🔴 Тотальная апатия, вялость ядра и отсутствие сил даже на элементарные дела.", influence: [{ group: "noble", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "decay", valence: 0, trigger: "burnout", catalyst: "safety" },
          { text: "🔴 Хаотичная раздражительность, вспышки гнева на окружающих по пустякам.", influence: [{ group: "halogen", weight: 3 }, { group: "alkali", weight: 1 }], iso: "decay", valence: 2, trigger: "chaos", catalyst: "challenge" },
          { text: "🔴 Сверхактивность: пытаюсь спасти всё подряд, перегружая себя еще сильнее.", influence: [{ group: "transition", weight: 3 }, { group: "metalloid", weight: 1 }], iso: "decay", valence: 4, trigger: "overload", catalyst: "order" },
          { text: "🔴 Уход в глухую ментальную изоляцию, отрицание проблем и игнорирование звонков.", influence: [{ group: "nonmetal", weight: 3 }], iso: "decay", valence: 1, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "19. Что является вашим главным триггером потери веры в команду?",
        options: [
          { text: "🛑 Нарушение обещаний, ложь и заспинные интриги коллег.", influence: [{ group: "alkaline", weight: 3 }], iso: "decay", valence: 2, trigger: "betrayal", catalyst: "safety" },
          { text: "🛑 Тотальный непрофессионализм и халатность при выполнении задач.", influence: [{ group: "transition", weight: 3 }], iso: "decay", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "🛑 Подавление моей инициативы и жесткий тоталитарный контроль.", influence: [{ group: "alkali", weight: 3 }], iso: "decay", valence: 3, trigger: "overload", catalyst: "challenge" },
          { text: "🛑 Отсутствие душевного тепла, холодная и токсичная атмосфера.", influence: [{ group: "noble", weight: 3 }], iso: "decay", valence: 4, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "20. Какую цену вы платите, когда слишком долго находитесь в распаде?",
        options: [
          { text: "🔴 Физическое истощение, частые болезни и падение иммунитета.", influence: [{ group: "alkaline", weight: 2 }], iso: "decay", valence: 4, trigger: "burnout", catalyst: "safety" },
          { text: "🔴 Полный разрыв важных социальных связей и одиночество.", influence: [{ group: "noble", weight: 2 }], iso: "decay", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "🔴 Утеря мастерства, веры в свои силы и профессиональная деградация.", influence: [{ group: "transition", weight: 2 }], iso: "decay", valence: 1, trigger: "overload", catalyst: "order" },
          { text: "🔴 Хаос в делах, долги и разрушение привычного порядка жизни.", influence: [{ group: "halogen", weight: 2 }], iso: "decay", valence: 2, trigger: "chaos", catalyst: "order" }
        ]
      },

      // ----------------------------------------------------------------------
      // BLOCK 6: Синтез / Рост и трансформация
      // ----------------------------------------------------------------------
      {
        text: "21. Какая среда для вас является идеальным катализатором роста?",
        options: [
          { text: "💡 Наличие амбициозного вызова, где можно превзойти себя.", influence: [{ group: "alkali", weight: 3 }, { group: "transition", weight: 1 }], iso: "excited", valence: 3, trigger: "overload", catalyst: "challenge" },
          { text: "💡 Безопасная, предсказуемая атмосфера доверия и долгосрочных гарантий.", influence: [{ group: "alkaline", weight: 3 }, { group: "noble", weight: 1 }], iso: "ground", valence: 4, trigger: "betrayal", catalyst: "safety" },
          { text: "💡 Проектирование будущего, создание инноваций и отсутствие рамок.", influence: [{ group: "metalloid", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "excited", valence: 2, trigger: "chaos", catalyst: "future" },
          { text: "💡 Четкие регламенты, понятные критерии успеха и уважение к знаниям.", influence: [{ group: "nonmetal", weight: 3 }, { group: "transition", weight: 1 }], iso: "ground", valence: 1, trigger: "chaos", catalyst: "order" }
        ]
      },
      {
        text: "22. Какое состояние дает вам ощущение максимального раскрытия потенциала?",
        options: [
          { text: "✨ Состояние потока: когда идея воплощается в материю легко и слаженно.", influence: [{ group: "transition", weight: 3 }, { group: "metalloid", weight: 1 }], iso: "excited", valence: 2, trigger: "overload", catalyst: "order" },
          { text: "✨ Победа над сложным конкурентом или достижение сверхрезультата.", influence: [{ group: "alkali", weight: 3 }, { group: "halogen", weight: 1 }], iso: "excited", valence: 3, trigger: "burnout", catalyst: "challenge" },
          { text: "✨ Радость от создания стройной теоретической концепции или системы.", influence: [{ group: "nonmetal", weight: 3 }], iso: "ground", valence: 1, trigger: "isolation", catalyst: "order" },
          { text: "✨ Абсолютная гармония с миром, когда дела идут сами собой.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" }
        ]
      },
      {
        text: "23. Что помогает вам быстрее всего выйти из фазы распада (кризиса)?",
        options: [
          { text: "🚀 Новый вдохновляющий проект или вызов, зажигающий огонь в глазах.", influence: [{ group: "alkali", weight: 3 }, { group: "transition", weight: 1 }], iso: "excited", valence: 3, trigger: "overload", catalyst: "challenge" },
          { text: "🧘 Длительный глубокий сон, изоляция и тишина вдали от людей.", influence: [{ group: "noble", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" },
          { text: "📚 Уборка хаоса в жизни: наведение порядка в комнате, планах и бюджете.", influence: [{ group: "nonmetal", weight: 3 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 1, trigger: "chaos", catalyst: "order" },
          { text: "🤝 Заземление: помощь близкому человеку, душевный семейный ужин.", influence: [{ group: "alkaline", weight: 3 }], iso: "ground", valence: 4, trigger: "betrayal", catalyst: "safety" }
        ]
      },
      {
        text: "24. В чем вы видите высший смысл своей эволюции как личности?",
        options: [
          { text: "🔮 Создавать новые ценности, меняющие мышление будущих поколений.", influence: [{ group: "metalloid", weight: 3 }, { group: "nonmetal", weight: 1 }], iso: "excited", valence: 2, trigger: "chaos", catalyst: "future" },
          { text: "💎 Достичь безупречного уровня мастерства и оставить эталонный след.", influence: [{ group: "transition", weight: 3 }, { group: "alkaline", weight: 1 }], iso: "ground", valence: 1, trigger: "burnout", catalyst: "order" },
          { text: "👑 Вести людей к победам, совершая квантовые прорывы.", influence: [{ group: "alkali", weight: 3 }, { group: "halogen", weight: 1 }], iso: "excited", valence: 4, trigger: "overload", catalyst: "challenge" },
          { text: "🕊️ Сохранить чистую душу, сеять покой и мир вокруг себя.", influence: [{ group: "noble", weight: 3 }], iso: "ground", valence: 0, trigger: "isolation", catalyst: "safety" }
        ]
      }
    ];

    this.init();
  }

  init() {
    this.renderQuestion();
  }

  renderQuestion() {
    if (!this.quizContainer) return;

    if (this.currentStep >= this.questions.length) {
      this.renderResult();
      return;
    }

    const q = this.questions[this.currentStep];
    const progressPercent = Math.round(((this.currentStep + 1) / this.questions.length) * 100);

    this.quizContainer.innerHTML = `
      <div class="quiz-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="quiz-progress" style="font-weight: 700;">Вопрос ${this.currentStep + 1} из ${this.questions.length}</span>
          <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--grp-metalloid);">${progressPercent}%</span>
        </div>
        <div class="meter-bar-bg" style="margin-bottom: 1.8rem; height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;">
          <div class="meter-bar-fill" style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, var(--grp-metalloid), var(--grp-noble)); transition: width 0.3s ease;"></div>
        </div>
        
        <h3 class="quiz-question" style="font-size: 1.25rem; line-height: 1.4; color: #fff; margin-bottom: 1.5rem;">${q.text}</h3>
        <div class="quiz-options" style="display: grid; gap: 0.8rem;">
          ${q.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-idx="${idx}" style="text-align: left; padding: 1rem 1.2rem; border-radius: 12px;">
              ${opt.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    this.quizContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        const opt = q.options[idx];

        // 1. Scoring Group influences with weights
        opt.influence.forEach(inf => {
          this.groupScores[inf.group] = (this.groupScores[inf.group] || 0) + inf.weight;
        });

        // 2. Scoring Isotope state
        if (opt.iso) {
          this.isotopeScores[opt.iso] = (this.isotopeScores[opt.iso] || 0) + 1;
        }

        // 3. Accumulating Valence score
        this.valenceAccumulator += opt.valence;

        // 4. Scoring Collapse Trigger
        if (opt.trigger) {
          this.collapseTriggers[opt.trigger] = (this.collapseTriggers[opt.trigger] || 0) + 1;
        }

        // 5. Scoring Catalyst Type
        if (opt.catalyst) {
          this.catalystTypes[opt.catalyst] = (this.catalystTypes[opt.catalyst] || 0) + 1;
        }
        
        this.currentStep++;
        this.renderQuestion();
      });
    });
  }

  renderResult() {
    const sortedGroups = Object.entries(this.groupScores).sort((a, b) => b[1] - a[1]);
    const topGroup = sortedGroups[0][0];

    const sortedIsotopes = Object.entries(this.isotopeScores).sort((a, b) => b[1] - a[1]);
    const dominantIsotope = sortedIsotopes[0][0];

    // Calculate Valence Index (1 to 8, scaled from accumulator)
    const calculatedValence = Math.max(1, Math.min(8, Math.round((this.valenceAccumulator / 120) * 7) + 1));

    // Determine Collapse Trigger
    const sortedCollapses = Object.entries(this.collapseTriggers).sort((a, b) => b[1] - a[1]);
    const collapseTrigger = sortedCollapses[0][0];

    // Determine Catalyst Type
    const sortedCatalysts = Object.entries(this.catalystTypes).sort((a, b) => b[1] - a[1]);
    const catalystType = sortedCatalysts[0][0];

    // Get primary element representing group
    const primaryElem = HUMAN_ELEMENTS.find(e => e.group === topGroup) || HUMAN_ELEMENTS[0];

    // Predefined psychological map of Shadow Elements
    const shadowMap = {
      'H': 'He', 'Li': 'Pb', 'Na': 'Ar', 'K': 'Kr', 'Be': 'Ne', 'Mg': 'Xe',
      'Ca': 'Rn', 'Fe': 'Hg', 'Cu': 'Zn', 'Au': 'Hg', 'Pt': 'U', 'Ti': 'Pb',
      'C': 'Si', 'Si': 'C', 'O': 'F', 'N': 'P', 'He': 'H', 'Ne': 'Be'
    };
    const shadowSymbol = shadowMap[primaryElem.symbol] || 'Hg';
    const shadowElem = HUMAN_ELEMENTS.find(e => e.symbol === shadowSymbol) || HUMAN_ELEMENTS.find(e => e.symbol === 'Hg') || HUMAN_ELEMENTS[0];

    const isotopeWeight = primaryElem.num * 2 + Math.floor(calculatedValence * 1.5) + 8;
    const formula = `${primaryElem.symbol}-${isotopeWeight} | V${calculatedValence} | D:${collapseTrigger} | C:${catalystType} | Sh:${shadowElem.symbol}`;

    // Store determined element globally
    window.myDeterminedElement = primaryElem;

    const colorVar = getComputedStyle(document.documentElement).getPropertyValue(`--grp-${primaryElem.group}`).trim();

    const archetypeTitle = primaryElem.traits[0] || 'Индивидуальный Архетип';
    const profileText = primaryElem.profiles[dominantIsotope] || primaryElem.profiles.ground;
    const firstSentence = profileText.split(/[.!?]/)[0] + '.';

    this.quizContainer.innerHTML = `
      <div class="quiz-result-box" style="text-align: left; padding: 0; border-radius: 20px; overflow: hidden; border: 1px solid var(--border-glass-bright); box-shadow: 0 15px 40px rgba(0,0,0,0.5);">
        
        <!-- LAYER 1: Human-readable focus (Top) -->
        <div style="background: linear-gradient(135deg, rgba(0,240,255,0.1) 0%, rgba(160,68,255,0.1) 100%); padding: 2.2rem; border-bottom: 1px solid var(--border-glass); text-align: center;">
          <span class="result-badge-top" style="background: var(--grp-metalloid); color: #000; font-weight: 800; padding: 0.35rem 0.9rem; border-radius: 20px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px;">⚛️ Атомный Паспорт Выдан</span>
          <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px; margin-top: 1.5rem; margin-bottom: 0.2rem;">Ваш ведущий архетип:</div>
          <h1 style="font-size: 2.4rem; color: ${colorVar}; font-weight: 900; margin: 0.5rem 0; line-height: 1.2; text-shadow: 0 0 20px ${colorVar}33;">
            ${archetypeTitle}
          </h1>
          <p style="font-size: 1.05rem; color: #fff; max-width: 600px; margin: 0.5rem auto; line-height: 1.5;">
            ${firstSentence}
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.8rem;">
            Элемент личности: <strong>${primaryElem.name}</strong> (${primaryElem.groupName})
          </div>
        </div>

        <div style="padding: 2rem; background: var(--bg-card);">
          
          <!-- LAYER 2: Decoded Parameters -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.2rem; display: flex; align-items: flex-start; gap: 0.8rem;">
              <span style="font-size: 1.5rem;">🔗</span>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Глубина связей:</div>
                <div style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-top: 0.2rem;">До ${calculatedValence} близких контактов</div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem; line-height: 1.3;">Емкость вашего близкого круга общения (валентность).</p>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.2rem; display: flex; align-items: flex-start; gap: 0.8rem;">
              <span style="font-size: 1.5rem;">💥</span>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Что тебя ломает:</div>
                <div style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-top: 0.2rem; text-transform: capitalize;">${this.getCollapseText(collapseTrigger).split(' ')[0]}</div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem; line-height: 1.3;">${this.getCollapseText(collapseTrigger)}.</p>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.2rem; display: flex; align-items: flex-start; gap: 0.8rem;">
              <span style="font-size: 1.5rem;">⚡</span>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Что тебя усиливает:</div>
                <div style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-top: 0.2rem; text-transform: capitalize;">${this.getCatalystText(catalystType).split(' ')[0]}</div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem; line-height: 1.3;">Катализатор перехода в продуктивное состояние.</p>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.2rem; display: flex; align-items: flex-start; gap: 0.8rem;">
              <span style="font-size: 1.5rem;">🔮</span>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Твоя теневая сторона:</div>
                <div style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-top: 0.2rem;">${shadowElem.traits[0]}</div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem; line-height: 1.3;">Подавленная тень: [${shadowElem.symbol}] ${shadowElem.name.split(' ')[0]}.</p>
              </div>
            </div>

          </div>

          <!-- SECTION: What this means for you -->
          <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid var(--border-glass); border-radius: 16px; padding: 1.8rem; margin-bottom: 2rem;">
            <h3 style="color: #fff; margin-bottom: 1.2rem; font-size: 1.2rem; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.5rem; font-weight: 800;">🧬 Что это значит для тебя:</h3>
            
            <div style="display: grid; gap: 1.2rem;">
              <div>
                <strong style="color: var(--grp-noble); font-size: 0.95rem;">❤️ В отношениях ты:</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.25rem; line-height: 1.55;">
                  ${this.getLoveAdvice(primaryElem)}
                </p>
              </div>
              <div>
                <strong style="color: var(--grp-metalloid); font-size: 0.95rem;">💼 В работе ты:</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.25rem; line-height: 1.55;">
                  ${this.getWorkAdvice(primaryElem)}
                </p>
              </div>
              <div>
                <strong style="color: var(--grp-alkali); font-size: 0.95rem;">🔥 Под стрессом ты:</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.25rem; line-height: 1.55;">
                  ${primaryElem.profiles.decay || 'Закрываешься в собственной кристаллической решетке, временно обрывая внешние каналы связи.'}
                </p>
              </div>
              <div>
                <strong style="color: var(--grp-post-trans); font-size: 0.95rem;">🌱 Твой вектор роста:</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.25rem; line-height: 1.55;">
                  Развитие качеств теневой стороны <strong>${shadowElem.traits[0]}</strong> и активация экологических катализаторов группы <em>«${this.getCatalystText(catalystType)}»</em>.
                </p>
              </div>
            </div>
          </div>

          <!-- LAYER 3: Advanced Technical details (Details Accordion) -->
          <details style="background: rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 1.2rem; margin-bottom: 2rem; cursor: pointer;">
            <summary style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700; user-select: none; outline: none;">
              🛠️ Показать техническую формулу личности (для аналитиков)
            </summary>
            
            <div style="margin-top: 1.2rem; cursor: default;">
              <div style="background: #000; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1rem; text-align: center; margin-bottom: 1rem;">
                <code style="font-family: var(--font-mono); font-size: 1.15rem; color: var(--grp-metalloid); word-break: break-all;">
                  ${formula}
                </code>
              </div>
              
              <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.45; margin-bottom: 1rem;">
                Этот сжатый код вашего квантового генома личности используется реакционным движком приложения для мгновенного расчета синергии и построения молекулярной архитектуры в командах.
              </p>

              <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass-bright); color: #fff; width: auto;" onclick="window.quizComp.copyPassport('${formula}')">
                📋 Скопировать техническую формулу
              </button>
            </div>
          </details>

          <!-- Core details block -->
          <div style="margin-bottom: 1.8rem; background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 16px; border: 1px solid var(--border-glass);">
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Полный психологический портрет:</div>
            <p style="font-size: 1rem; line-height: 1.7; color: var(--text-main); margin-top: 0.4rem;">${profileText}</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(255,51,102,0.1) 0%, rgba(160,68,255,0.1) 100%); padding: 1.8rem; border-radius: 18px; border: 1px solid var(--grp-alkali); margin-bottom: 1.8rem;">
            <h4 style="color: #fff; font-size: 1.15rem; margin-bottom: 0.4rem;">❤️ Резонанс в отношениях сохранен</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.2rem;">Ваш элемент зафиксирован. Теперь вы можете рассчитать совместимость в любви и бизнесе с любыми другими элементами!</p>
            
            <button class="btn-primary" style="background: linear-gradient(135deg, #ff3366 0%, #a044ff 100%); color: #fff; width: 100%; font-weight: 800; font-size: 1rem; padding: 0.9rem;" onclick="window.quizComp.goToMatchmaking(${primaryElem.num})">
              ❤️ Рассчитать совместимость союзов →
            </button>
          </div>

          <button class="btn-primary" style="background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass-bright); color: var(--text-main); width: 100%;" onclick="window.quizComp.showPaywall(${primaryElem.num})">
            📖 Читать полный 6-страничный разбор моего элемента
          </button>
        </div>
      </div>
    `;
    this.quizContainer.scrollIntoView({ behavior: 'smooth' });
  }

  showPaywall(elemNum) {
    const elem = HUMAN_ELEMENTS.find(e => e.num === elemNum);
    
    // Create the modal overlay if it doesn't exist
    let modal = document.getElementById('paywall-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'paywall-modal';
      modal.className = 'modal-overlay';
      modal.style.zIndex = '1200';
      document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
      <div class="modal-container" style="max-width: 550px; display: block; padding: 2.2rem; text-align: center; border: 2px solid var(--grp-metalloid); box-shadow: 0 0 45px rgba(0, 240, 255, 0.35);">
        <button class="modal-close" style="top: 1.5rem; right: 1.5rem;" onclick="document.getElementById('paywall-modal').style.display='none'">✕</button>
        
        <div style="font-size: 2.8rem; margin-bottom: 0.8rem;">🔑</div>
        <h2 style="color: #fff; margin-bottom: 0.4rem; font-size: 1.5rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px;">Разблокировать Полную ДНК-Интерпретацию</h2>
        
        <div style="background: rgba(0, 240, 255, 0.05); border: 1px solid var(--grp-metalloid); border-radius: 8px; padding: 0.5rem; margin-bottom: 1.2rem; font-size: 0.8rem; color: var(--grp-metalloid); font-weight: 700;">
          ⚡ Цена первой волны раннего доступа. Скоро повышение до 4 900 ₽
        </div>

        <div style="margin: 1.2rem 0; display: flex; justify-content: center; align-items: center; gap: 1rem;">
          <span style="text-decoration: line-through; color: var(--text-muted); font-size: 1.2rem;">4 900 ₽</span>
          <span style="font-size: 2.2rem; font-weight: 900; color: #ffcc00; text-shadow: 0 0 15px rgba(255,204,0,0.35);">1 490 ₽</span>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border-radius: 14px; padding: 1.2rem; margin-bottom: 1.5rem; text-align: left; border: 1px solid var(--border-glass);">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-bottom: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.3rem;">Узнайте ответы на главные вопросы личности:</div>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: var(--text-main); display: grid; gap: 0.6rem;">
            <li>🔑 <strong>Почему ты застреваешь в деньгах:</strong> разбор вашего финансового потолка и индивидуального кода денег.</li>
            <li>💔 <strong>Почему повторяешь одни и те же ошибки:</strong> разблокировка теневых страхов и сценариев самосаботажа.</li>
            <li>🚀 <strong>Что разрушает тебя изнутри:</strong> детальный триггер распада и пошаговый план выхода из выгорания.</li>
            <li>💼 <strong>Твоя скрытая сила и лидерство:</strong> B2B-карта вашего влияния и идеальная роль в команде.</li>
            <li>❤️ <strong>Идеальные партнеры:</strong> кто тебя усиливает, а кто неизбежно приведет к токсичной коррозии.</li>
          </ul>
        </div>

        <button class="btn-primary" style="width: 100%; background: linear-gradient(135deg, #ffcc00 0%, #ff9933 100%); color: #000; font-weight: 850; font-size: 1.1rem; padding: 0.95rem; margin-bottom: 0.8rem;" onclick="window.quizComp.showUpsell(\${elemNum})">
          💎 Получить Полный Разбор — 1 490 ₽
        </button>

        <button class="btn-primary" style="width: 100%; background: rgba(255,255,255,0.04); border: 1px solid var(--border-glass-bright); color: var(--text-muted); font-size: 0.85rem; padding: 0.6rem;" onclick="document.getElementById('paywall-modal').style.display='none'; window.fullProfileComp.openProfile(HUMAN_ELEMENTS.find(e => e.num === \${elemNum}))">
          🔓 Продолжить в демо-режиме (бесплатно для тестов)
        </button>
      </div>
    `;
    
    modal.style.display = 'flex';
  }

  showUpsell(elemNum) {
    const elem = HUMAN_ELEMENTS.find(e => e.num === elemNum);
    const modal = document.getElementById('paywall-modal');
    if (!modal) return;
    
    modal.innerHTML = `
      <div class="modal-container" style="max-width: 520px; display: block; padding: 2.2rem; text-align: center; border: 2px solid var(--grp-alkali); box-shadow: 0 0 45px rgba(255, 51, 102, 0.35);">
        <button class="modal-close" style="top: 1.5rem; right: 1.5rem;" onclick="document.getElementById('paywall-modal').style.display='none'">✕</button>
        
        <div style="font-size: 3rem; margin-bottom: 0.8rem;">❤️🔥</div>
        <h2 style="color: #fff; margin-bottom: 0.4rem; font-size: 1.5rem; font-weight: 900; text-transform: uppercase;">Добавить Совместимость пар?</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
          Большинство пользователей разблокируют личный паспорт вместе с модулем <strong>«Love Collider»</strong>. Рассчитайте сексуальную химию, совместимость в быту и зоны конфликтов с вашим партнером.
        </p>

        <div style="background: rgba(255, 51, 102, 0.05); border: 1px dashed var(--grp-alkali); border-radius: 12px; padding: 1.2rem; margin-bottom: 1.5rem; text-align: left;">
          <div style="font-size: 0.85rem; color: #fff; font-weight: 700; margin-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.3rem;">Внутри модуля «Love Collider»:</div>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: var(--text-main); display: grid; gap: 0.4rem;">
            <li>✓ 💖 Сексуальный резонанс и химия союзов</li>
            <li>✓ ⚖️ Зоны трения, споров и бытовая совместимость</li>
            <li>✓ 💣 Точный прогноз деструктивного распада пары</li>
          </ul>
        </div>

        <button class="btn-primary" style="width: 100%; background: linear-gradient(135deg, #ff3366 0%, #a044ff 100%); color: #fff; font-weight: 850; font-size: 1.1rem; padding: 0.95rem; margin-bottom: 0.8rem;" onclick="document.getElementById('paywall-modal').style.display='none'; window.supportComp.openPaymentModal('Паспорт + Love Collider', 2480)">
          🔥 Добавить Love Collider (+990 ₽) — Всего 2 480 ₽
        </button>

        <button class="btn-primary" style="width: 100%; background: rgba(255,255,255,0.04); border: 1px solid var(--border-glass-bright); color: var(--text-muted); font-size: 0.85rem; padding: 0.6rem;" onclick="document.getElementById('paywall-modal').style.display='none'; window.supportComp.openPaymentModal('Катализатор (Только Паспорт)', 1490)">
          Нет, только личный разбор за 1 490 ₽
        </button>
      </div>
    `;
  }

  getLoveAdvice(elem) {
    if (elem.group === 'alkali') {
      return 'Вы ищете быстрых, страстных реакций и максимальной отдачи. Важно удерживать баланс, чтобы не сжечь партнера своим избыточным волевым зарядом.';
    }
    if (elem.group === 'alkaline') {
      return 'Для вас важны абсолютная надежность, верность и долгосрочная стабильность. Вы оберегаете общие границы и строите прочные ковалентные связи.';
    }
    if (elem.group === 'noble') {
      return 'Вам жизненно необходимо сохранять личную автономию в отношениях. Вы не терпите тотального контроля, цените свободу и уважение к границам.';
    }
    if (elem.group === 'halogen') {
      return 'Вы активны и динамичны в отношениях, постоянно провоцируете партнера на совместное движение, смену обстановки и яркие эмоции.';
    }
    return 'Вы строите глубокие интеллектуальные союзы, где соавторство, общие ценности и взаимопонимание важнее импульсивных страстей.';
  }

  getWorkAdvice(elem) {
    if (elem.group === 'transition') {
      return 'Вы сверхэффективны в сложных, точечных процессах. Мастер своего дела, отлично справляющийся с задачами внутри отлаженных регламентов.';
    }
    if (elem.group === 'alkali') {
      return 'Яркий лидер-драйвер. Зажигаете людей, берете ответственность на старте проектов, но склонны выгорать в фазе долгой рутины.';
    }
    if (elem.group === 'nonmetal') {
      return 'Идеальный аналитик и стратег. Видите скрытые взаимосвязи, строите логические скелеты систем и регламенты работы.';
    }
    if (elem.group === 'metalloid') {
      return 'Архитектор и создатель нового. Проявляете максимум потенциала при разработке инновационных решений с нуля.';
    }
    return 'Стабилизатор процессов. Координируете работу коллектива, гасите трения и создаете надежный поддерживающий бэкофис.';
  }

  getCollapseText(trigger) {
    const map = {
      burnout: 'рутина и потеря смыслов (выгорание)',
      betrayal: 'предательство и обман доверия',
      overload: 'гипер-перегрузка обязательствами',
      isolation: 'одиночество и глухое непонимание',
      chaos: 'тотальный хаос и дезориентация'
    };
    return map[trigger] || trigger;
  }

  getCatalystText(catalyst) {
    const map = {
      challenge: 'амбициозный вызов и соревнование',
      safety: 'безопасность, тепло и предсказуемость',
      future: 'проектирование будущего и инновации',
      order: 'системность, логика и регламенты'
    };
    return map[catalyst] || catalyst;
  }

  copyPassport(formula) {
    navigator.clipboard.writeText(formula);
    alert(`📋 Квантовый паспорт скопирован в буфер обмена:\n\n${formula}`);
  }

  goToMatchmaking(elemNum) {
    const matchNavBtn = document.querySelector('[data-tab=tab-match]');
    if (matchNavBtn) matchNavBtn.click();
    if (window.matchComp) {
      window.matchComp.selectMyElement(elemNum);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.quizComp = new QuizComponent();
});
