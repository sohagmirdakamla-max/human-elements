/* ==========================================================================
   HUMAN ELEMENTS // UPGRADED ELEMENT GENOME DATABASE
   ========================================================================== */

const HUMAN_ELEMENTS = [
  {
    "num": 1,
    "symbol": "H",
    "name": "Водород (Hydrogen)",
    "group": "alkali",
    "groupName": "Первопроходцы",
    "mass": 1.008,
    "valence": 1,
    "freq": 261.63,
    "traits": [
      "Первопроходец-минималист",
      "Социальный клей",
      "Энергетический гигант"
    ],
    "shadow": "He",
    "complementary": [
      "O",
      "C"
    ],
    "evolution_prev": null,
    "evolution_next": "Li",
    "valence_range": [
      1,
      2
    ],
    "collapse_types": [
      "burnout",
      "isolation"
    ],
    "catalysts": [
      "challenge"
    ],
    "anti_elements": [
      "He",
      "Ar"
    ],
    "ideal_roles": [
      "pioneer",
      "initiator"
    ],
    "profiles": {
      "ground": "Архетип «Первопроходец-минималист». Ценность сути выше формы. Самый общительный элемент во Вселенной (75% массы космоса). Создает мягкие водородные связи — гибкая дипломатия, на которой держится жизнь.",
      "excited": "«Энергетический гигант» и топливо будущего. В звездных недрах осуществляет термоядерный синтез, даря свет и жизнь целым планетным системам через чистый прорыв.",
      "decay": "«Неуловимый бунтарь». Всполохи кризиса самоидентификации. При давлении реагирует чистым, мгновенным и бескомпромиссным гремучим взрывом."
    }
  },
  {
    "num": 2,
    "symbol": "He",
    "name": "Гелий (Helium)",
    "group": "noble",
    "groupName": "Гармонизаторы",
    "mass": 4.0026,
    "valence": 0,
    "freq": 174,
    "traits": [
      "Архитектор Невесомости",
      "Мастер Атмосферы",
      "Алхимия Благородства"
    ],
    "shadow": "H",
    "complementary": [
      "H",
      "Ne"
    ],
    "evolution_prev": null,
    "evolution_next": "Ne",
    "valence_range": [
      0,
      1
    ],
    "collapse_types": [
      "isolation",
      "burnout"
    ],
    "catalysts": [
      "safety"
    ],
    "anti_elements": [
      "H",
      "F"
    ],
    "ideal_roles": [
      "observer",
      "harmonizer"
    ],
    "profiles": {
      "ground": "Архетип «Архитектор Невесомости и Высшего Порядка». Квантовая завершенность и внутренний баланс. Личность первого акта гармонии, управляющая контекстом через присутствие.",
      "excited": "«Мастер Атмосферы и Элевации». Подъем команды над уровнем проблемы, изменение высоты полета проекта и создание гравитационного поля идей.",
      "decay": "«Холод Космического Вакуума». Эмоциональная диссоциация, эффект башни из слоновой кости и страх заземления о земную рутину."
    }
  },
  {
    "num": 3,
    "symbol": "Li",
    "name": "Литий (Lithium)",
    "group": "alkali",
    "groupName": "Первопроходцы",
    "mass": 6.94,
    "valence": 1,
    "freq": 293.66,
    "traits": [
      "Катализатор энергии",
      "Эмоциональный аккумулятор",
      "Хранитель баланса"
    ],
    "shadow": "Pb",
    "complementary": [
      "O",
      "S"
    ],
    "evolution_prev": "H",
    "evolution_next": "Na",
    "valence_range": [
      1,
      2
    ],
    "collapse_types": [
      "burnout",
      "overload"
    ],
    "catalysts": [
      "safety"
    ],
    "anti_elements": [
      "Pb",
      "Hg"
    ],
    "ideal_roles": [
      "accumulator",
      "stabilizer"
    ],
    "profiles": {
      "ground": "Архетип «Катализатор энергии». Эмоциональный аккумулятор команды. Накапливает потенциал и аккуратно выравнивает ментальные и ресурсоемкие колебания группы.",
      "excited": "«Заряженный импульс». Выдает точный, мощный разряд тока в момент продуктивного или эмоционального кризиса.",
      "decay": "Глубокое истощение ресурсов при длительном отсутствии фазы подзарядки и заземления."
    }
  },
  {
    "num": 4,
    "symbol": "Be",
    "name": "Бериллий (Beryllium)",
    "group": "alkaline",
    "groupName": "Фундамент",
    "mass": 9.012,
    "valence": 2,
    "freq": 440,
    "traits": [
      "Аэрокосмический Атлант",
      "Закаленный прагматик",
      "Недеформируемость"
    ],
    "shadow": "Ne",
    "complementary": [
      "O",
      "F"
    ],
    "evolution_prev": null,
    "evolution_next": "Mg",
    "valence_range": [
      2,
      3
    ],
    "collapse_types": [
      "overload",
      "chaos"
    ],
    "catalysts": [
      "order"
    ],
    "anti_elements": [
      "Hg",
      "U"
    ],
    "ideal_roles": [
      "architect",
      "builder"
    ],
    "profiles": {
      "ground": "Архетип «Аэрокосмический Атлант». Сочетает невероятную прочность характера с эмоциональной легкостью. Не ломается под гигантским давлением.",
      "excited": "«Сверхзвуковой каркас». Создает несгибаемые конструкции в экстремальных условиях бизнеса.",
      "decay": "Холодная отстраненность от чужих эмоций и токсичная изоляция."
    }
  },
  {
    "num": 5,
    "symbol": "B",
    "name": "Бор (Boron)",
    "group": "metalloid",
    "groupName": "Синтетики",
    "mass": 10.81,
    "valence": 3,
    "freq": 392,
    "traits": [
      "Поглотитель конфликтов",
      "Термостойкий кристалл",
      "Контролер реакций"
    ],
    "shadow": "Zn",
    "complementary": [
      "Zn"
    ],
    "evolution_prev": null,
    "evolution_next": "C",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "future",
      "challenge"
    ],
    "anti_elements": [
      "alkaline",
      "noble"
    ],
    "ideal_roles": [
      "architect",
      "creator",
      "synthesizer"
    ],
    "profiles": {
      "ground": "Архетип «Поглотитель конфликтов». Поглощает избыточные нейтроны хаоса в команде. Придает хрупким стеклам идей космическую термостойкость.",
      "excited": "«Стабилизация реактора». Предотвращает неконтролируемый разгон суеты во время спринтов.",
      "decay": "Сухость и жесткая кристаллическая негибкость при диалоге."
    }
  },
  {
    "num": 6,
    "symbol": "C",
    "name": "Углерод (Carbon)",
    "group": "metalloid",
    "groupName": "Синтетики",
    "mass": 12.011,
    "valence": 4,
    "freq": 440,
    "traits": [
      "Основа всякой жизни",
      "Многоликий синтетик",
      "Алмазная прочность"
    ],
    "shadow": "U",
    "complementary": [
      "O",
      "H"
    ],
    "evolution_prev": null,
    "evolution_next": "Si",
    "valence_range": [
      4,
      4
    ],
    "collapse_types": [
      "overload",
      "chaos"
    ],
    "catalysts": [
      "future"
    ],
    "anti_elements": [
      "U",
      "Pu"
    ],
    "ideal_roles": [
      "creator",
      "architect"
    ],
    "profiles": {
      "ground": "Архетип «Основа всякой жизни». Создает полиморфные связи: от мягкого слоистого графита мысли до несокрушимого алмаза воли.",
      "excited": "«Органический синтез». Организует бесконечное разнообразие новых бизнес-форм и нейросетевых структур.",
      "decay": "Обугливание от постоянного перегрева и дефицита кислорода."
    }
  },
  {
    "num": 7,
    "symbol": "N",
    "name": "Азот (Nitrogen)",
    "group": "nonmetal",
    "groupName": "Аналитики",
    "mass": 14.007,
    "valence": 3,
    "freq": 261.63,
    "traits": [
      "Атмосфера",
      "Защитный газ",
      "Питание"
    ],
    "shadow": "Ge",
    "complementary": [
      "Ge"
    ],
    "evolution_prev": null,
    "evolution_next": "P",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "isolation",
      "chaos"
    ],
    "catalysts": [
      "order",
      "future"
    ],
    "anti_elements": [
      "alkali",
      "halogen"
    ],
    "ideal_roles": [
      "analyst",
      "thinker",
      "strategist"
    ],
    "profiles": {
      "ground": "Заполняет собой 78% пространства команды. Создает стабильное давление среды и предотвращает пожары.",
      "excited": "Создание жидкого азота — мгновенное замораживание конфликтов и паники.",
      "decay": "Духота и отсутствие свежего воздуха для новых идей."
    }
  },
  {
    "num": 8,
    "symbol": "O",
    "name": "Кислород (Oxygen)",
    "group": "halogen",
    "groupName": "Катализаторы",
    "mass": 15.999,
    "valence": 2,
    "freq": 329.63,
    "traits": [
      "Дыхание жизни",
      "Огонь окисления",
      "Необходимый драйвер"
    ],
    "shadow": "As",
    "complementary": [
      "As"
    ],
    "evolution_prev": null,
    "evolution_next": "F",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "chaos",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "alkaline"
    ],
    "ideal_roles": [
      "catalyst",
      "activator",
      "disruptor"
    ],
    "profiles": {
      "ground": "Архетип «Дыхание жизни и огонь окисления». Жизненно необходимый драйвер метаболизма. Без него гаснет любое пламя идеи.",
      "excited": "«Чистый кислород». Процессы вспыхивают ярким контролируемым горением, давая колоссальную продуктивность.",
      "decay": "Гиперокисление — коррозия и разрушение окружающих деталей от гиперактивности."
    }
  },
  {
    "num": 9,
    "symbol": "F",
    "name": "Фтор (Fluorine)",
    "group": "halogen",
    "groupName": "Катализаторы",
    "mass": 18.998,
    "valence": 1,
    "freq": 392,
    "traits": [
      "Бескомпромиссный драйвер",
      "Самый электроотрицательный",
      "Разрушитель догм"
    ],
    "shadow": "Se",
    "complementary": [
      "Se"
    ],
    "evolution_prev": "O",
    "evolution_next": "S",
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "chaos",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "alkaline"
    ],
    "ideal_roles": [
      "catalyst",
      "activator",
      "disruptor"
    ],
    "profiles": {
      "ground": "Архетип «Абсолютный бескомпромиссный драйвер». Вскрывает любые защиты и реагирует даже с инертными барьерами.",
      "excited": "«Ураганный реформатор». Сносит устаревшие заскорузлые стены и иллюзии в рекордные сроки.",
      "decay": "Экстремальная агрессивность, разъедающая здоровые отношения."
    }
  },
  {
    "num": 10,
    "symbol": "Ne",
    "name": "Неон (Neon)",
    "group": "noble",
    "groupName": "Гармонизаторы",
    "mass": 20.18,
    "valence": 0,
    "freq": 285,
    "traits": [
      "Зажигатель магистралей",
      "Ослепительная витрина",
      "Красно-оранжевое шоу"
    ],
    "shadow": "Br",
    "complementary": [
      "Br"
    ],
    "evolution_prev": "He",
    "evolution_next": "Ar",
    "valence_range": [
      0,
      2
    ],
    "collapse_types": [
      "isolation",
      "burnout"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "alkali"
    ],
    "ideal_roles": [
      "observer",
      "harmonizer",
      "buffer"
    ],
    "profiles": {
      "ground": "Архетип «Зажигатель магистралей». Зажигается ярким огненным светом под действием импульса задач.",
      "excited": "«Ослепительное шоу». Витрина проекта, привлекающая внимание всего мира к продукту.",
      "decay": "Фокусировка исключительно на внешней красивой вывеске в ущерб внутреннему смыслу."
    }
  },
  {
    "num": 11,
    "symbol": "Na",
    "name": "Натрий (Sodium)",
    "group": "alkali",
    "groupName": "Первопроходцы",
    "mass": 22.99,
    "valence": 1,
    "freq": 329.63,
    "traits": [
      "Импульсивный жизнелюб",
      "Осмотическое давление",
      "Катализатор общения"
    ],
    "shadow": "Kr",
    "complementary": [
      "Kr"
    ],
    "evolution_prev": "Li",
    "evolution_next": "K",
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "nonmetal"
    ],
    "ideal_roles": [
      "pioneer",
      "initiator",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Импульсивный жизнелюб». Вступает в реакцию мгновенно, превращая пресную среду в соленое, насыщенное жизнью динамичное пространство.",
      "excited": "«Бурлящий поток эмоций». Запускает осмотическое давление в команде, заставляя ресурсы активно циркулировать.",
      "decay": "Взрывоопасная вспыльчивость при контакте с высокой влажностью чужих эмоций."
    }
  },
  {
    "num": 12,
    "symbol": "Mg",
    "name": "Магний (Magnesium)",
    "group": "alkaline",
    "groupName": "Фундамент",
    "mass": 24.305,
    "valence": 2,
    "freq": 493.88,
    "traits": [
      "Ослепительный вдохновитель",
      "Сердце хлорофилла",
      "Активатор ферментов"
    ],
    "shadow": "Rb",
    "complementary": [
      "Rb"
    ],
    "evolution_prev": "Be",
    "evolution_next": "Ca",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "burnout",
      "betrayal"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "radioactive"
    ],
    "ideal_roles": [
      "builder",
      "protector",
      "stabilizer"
    ],
    "profiles": {
      "ground": "Архетип «Ослепительный вдохновитель». Превращает солнечный свет идей в биомассу реальных продуктов. Активирует ферменты творчества.",
      "excited": "«Ослепительная вспышка». Освещает чистым белым светом темные зоны неопределенности.",
      "decay": "Быстрое выгорание до белого пепла при чрезмерной самоотдаче."
    }
  },
  {
    "num": 13,
    "symbol": "Al",
    "name": "Алюминий (Aluminium)",
    "group": "metalloid",
    "groupName": "Синтетики",
    "mass": 26.982,
    "valence": 3,
    "freq": 466.16,
    "traits": [
      "Крылатый конструктор",
      "Авиатор прогресса",
      "Оксидный щит"
    ],
    "shadow": "Sr",
    "complementary": [
      "Sr"
    ],
    "evolution_prev": "C",
    "evolution_next": "Si",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "future",
      "challenge"
    ],
    "anti_elements": [
      "alkaline",
      "noble"
    ],
    "ideal_roles": [
      "architect",
      "creator",
      "synthesizer"
    ],
    "profiles": {
      "ground": "Архетип «Крылатый конструктор». Легкий конструкционный материал, мгновенно покрывающийся оксидной защитной пленкой от обид.",
      "excited": "«Быстрый взлет». Дает проекту крылья и строит аэродинамические каркасы масштабирования.",
      "decay": "Пластическая деформация перед прямым деструктивным давлением."
    }
  },
  {
    "num": 14,
    "symbol": "Si",
    "name": "Кремний (Silicon)",
    "group": "metalloid",
    "groupName": "Синтетики",
    "mass": 28.085,
    "valence": 4,
    "freq": 493.88,
    "traits": [
      "Архитектор интеллекта",
      "Полупроводниковый мозг",
      "Кристаллическая логика"
    ],
    "shadow": "Ag",
    "complementary": [
      "Ag"
    ],
    "evolution_prev": "Al",
    "evolution_next": "Ga",
    "valence_range": [
      3,
      6
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "future",
      "challenge"
    ],
    "anti_elements": [
      "alkaline",
      "noble"
    ],
    "ideal_roles": [
      "architect",
      "creator",
      "synthesizer"
    ],
    "profiles": {
      "ground": "Архетип «Архитектор цифрового интеллекта». Фундамент микрочипов и полупроводниковой логики. Превращает абстрактный код в работающий разум.",
      "excited": "«Алгоритмический прорыв». Выстраивает архитектуры искусственного интеллекта и кристаллы данных.",
      "decay": "Холодный хрустальный расчет без учета человеческого фактора."
    }
  },
  {
    "num": 15,
    "symbol": "P",
    "name": "Фосфор (Phosphorus)",
    "group": "nonmetal",
    "groupName": "Аналитики",
    "mass": 30.974,
    "valence": 3,
    "freq": 293.66,
    "traits": [
      "Свечение в темноте",
      "Энергия АТФ",
      "Мысль"
    ],
    "shadow": "Sn",
    "complementary": [
      "Sn"
    ],
    "evolution_prev": "N",
    "evolution_next": "As",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "isolation",
      "chaos"
    ],
    "catalysts": [
      "order",
      "future"
    ],
    "anti_elements": [
      "alkali",
      "halogen"
    ],
    "ideal_roles": [
      "analyst",
      "thinker",
      "strategist"
    ],
    "profiles": {
      "ground": "Носитель ментальной энергии (АТФ). Светится в темноте неопределенности и подсвечивает ответы.",
      "excited": "Яркая вспышка гениального озарения.",
      "decay": "Опасная самовозгораемость при трении."
    }
  },
  {
    "num": 16,
    "symbol": "S",
    "name": "Сера (Sulfur)",
    "group": "halogen",
    "groupName": "Катализаторы",
    "mass": 32.06,
    "valence": 2,
    "freq": 349.23,
    "traits": [
      "Вулканический формовщик",
      "Мастер вулканизации",
      "Характерная острота"
    ],
    "shadow": "Xe",
    "complementary": [
      "Xe"
    ],
    "evolution_prev": "F",
    "evolution_next": "Cl",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "chaos",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "alkaline"
    ],
    "ideal_roles": [
      "catalyst",
      "activator",
      "disruptor"
    ],
    "profiles": {
      "ground": "Архетип «Вулканический формовщик». Превращает сырой сыпучий каучук идей в прочную упругую резину конструкций.",
      "excited": "«Вулканический прорыв». Закаливает структуры и придает проектам характерную остроту и прочность.",
      "decay": "Едкий запах претензий и токсичных конфликтов при перегреве."
    }
  },
  {
    "num": 17,
    "symbol": "Cl",
    "name": "Хлор (Chlorine)",
    "group": "halogen",
    "groupName": "Катализаторы",
    "mass": 35.45,
    "valence": 1,
    "freq": 440,
    "traits": [
      "Санитар пространства",
      "Беспощадный дезинфектор",
      "Стерильный стандарт"
    ],
    "shadow": "Cs",
    "complementary": [
      "Cs"
    ],
    "evolution_prev": "S",
    "evolution_next": "Br",
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "chaos",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "alkaline"
    ],
    "ideal_roles": [
      "catalyst",
      "activator",
      "disruptor"
    ],
    "profiles": {
      "ground": "Архетип «Санитар пространства». Выжигает бактерии лжи, хаоса и безалаберности в процессах.",
      "excited": "«Кристальная дезинфекция». Очищает проектную среду до безупречного стерильного блеска.",
      "decay": "Удушливая атмосфера чрезмерного контроля и стерильности."
    }
  },
  {
    "num": 18,
    "symbol": "Ar",
    "name": "Аргон (Argon)",
    "group": "noble",
    "groupName": "Гармонизаторы",
    "mass": 39.948,
    "valence": 0,
    "freq": 396,
    "traits": [
      "Хранитель инертного щита",
      "Защитник сварки",
      "Нейтральный покой"
    ],
    "shadow": "Ba",
    "complementary": [
      "Ba"
    ],
    "evolution_prev": "Ne",
    "evolution_next": "Kr",
    "valence_range": [
      0,
      2
    ],
    "collapse_types": [
      "isolation",
      "burnout"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "alkali"
    ],
    "ideal_roles": [
      "observer",
      "harmonizer",
      "buffer"
    ],
    "profiles": {
      "ground": "Архетип «Хранитель инертного щита». Заполняет собой зону стыка («сварки») процессов, не давая деталям сгореть на воздухе.",
      "excited": "«Сварочный купол». Обеспечивает безопасные инертные условия для глубокой трансформации коллег.",
      "decay": "Абсолютный пофигизм и невлечение к происходящему вокруг."
    }
  },
  {
    "num": 19,
    "symbol": "K",
    "name": "Калий (Potassium)",
    "group": "alkali",
    "groupName": "Первопроходцы",
    "mass": 39.098,
    "valence": 1,
    "freq": 349.23,
    "traits": [
      "Дирижер импульсов",
      "Ритм сердца",
      "Сетевой регулятор"
    ],
    "shadow": "Pt",
    "complementary": [
      "Pt"
    ],
    "evolution_prev": "Na",
    "evolution_next": "Rb",
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "nonmetal"
    ],
    "ideal_roles": [
      "pioneer",
      "initiator",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Дирижер нервных импульсов». Отвечает за ритм, сердцебиение коллектива и моментальную передачу информации по каналам связи.",
      "excited": "«Молниеносный сангвиник». Поддерживает высокий электрический потенциал и скорость реакций.",
      "decay": "Хаотичная суетливость и страх физической остановки процесса."
    }
  },
  {
    "num": 20,
    "symbol": "Ca",
    "name": "Кальций (Calcium)",
    "group": "alkaline",
    "groupName": "Фундамент",
    "mass": 40.078,
    "valence": 2,
    "freq": 523.25,
    "traits": [
      "Архитектор структур",
      "Несущая опора",
      "Монументальный каркас"
    ],
    "shadow": "Au",
    "complementary": [
      "Au"
    ],
    "evolution_prev": "Mg",
    "evolution_next": "Sr",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "burnout",
      "betrayal"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "radioactive"
    ],
    "ideal_roles": [
      "builder",
      "protector",
      "stabilizer"
    ],
    "profiles": {
      "ground": "Архетип «Архитектор структур». Несущая опора и скелет организации. Без него система превращается в бесформенную массу.",
      "excited": "«Монументальное укрепление». Задает нерастворимые стандарты и надежные институциональные формы.",
      "decay": "Закостенелость мышления, кальциноз процессов и страх перемен."
    }
  },
  {
    "num": 22,
    "symbol": "Ti",
    "name": "Титан (Titanium)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 47.867,
    "valence": 4,
    "freq": 523.25,
    "traits": [
      "Сверхчеловек неуязвимости",
      "Биосовместимость",
      "Монолитная легкость"
    ],
    "shadow": "Hg",
    "complementary": [
      "Hg"
    ],
    "evolution_prev": null,
    "evolution_next": "Cr",
    "valence_range": [
      3,
      6
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Сверхчеловек неуязвимости». Идеальный биосовместимый профессионал. Высочайшая прочность при минимальном весе нагрузки на команду.",
      "excited": "«Космический старт». Создает решения и артефакты, способные выдержать любые перепады температур и давлений рынка.",
      "decay": "Холодная эмоциональная непробиваемость для чужих чувств и советов."
    }
  },
  {
    "num": 24,
    "symbol": "Cr",
    "name": "Хром (Chromium)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 51.996,
    "valence": 3,
    "freq": 587.33,
    "traits": [
      "Зеркальный защитник",
      "Безупречный глянец",
      "Твердый перфекционист"
    ],
    "shadow": "Ra",
    "complementary": [
      "Ra"
    ],
    "evolution_prev": "Ti",
    "evolution_next": "Mn",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Зеркальный защитник». Покрывает уязвимые ядра процессов безупречным антикоррозийным глянцем.",
      "excited": "«Бриллиантовый внешний вид». Обеспечивает абсолютный стиль и защитную броню от агрессивных сред.",
      "decay": "Холодный зеркальный снобизм и нетерпимость к мелким изъянам."
    }
  },
  {
    "num": 25,
    "symbol": "Mn",
    "name": "Марганец (Manganum)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 54.938,
    "valence": 4,
    "freq": 622.25,
    "traits": [
      "Мастер сплавов",
      "Раскислитель",
      "Дипломат-закальщик"
    ],
    "shadow": "U",
    "complementary": [
      "U"
    ],
    "evolution_prev": "Cr",
    "evolution_next": "Fe",
    "valence_range": [
      3,
      6
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Мастер сплавов». Связывает хрупкие элементы в броневую сталь, связывая лишний «кислород» токсичных конфликтов.",
      "excited": "«Закаленный броненосец». Превращает рядовые команды в несокрушимые профессиональные союзы.",
      "decay": "Хаотичная смена эмоциональных ролей и масок."
    }
  },
  {
    "num": 26,
    "symbol": "Fe",
    "name": "Железо (Iron)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 55.845,
    "valence": 3,
    "freq": 659.25,
    "traits": [
      "Индустриальный магнит",
      "Гемоглобин духа",
      "Работящий гигант"
    ],
    "shadow": "Hg",
    "complementary": [
      "O",
      "C"
    ],
    "evolution_prev": "Mn",
    "evolution_next": "Co",
    "valence_range": [
      2,
      4
    ],
    "collapse_types": [
      "burnout",
      "overload"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "Hg",
      "Cl"
    ],
    "ideal_roles": [
      "leader",
      "builder"
    ],
    "profiles": {
      "ground": "Архетип «Индустриальный магнит». Стальной стержень команды. Носитель гемоглобина (кислорода) и несущая основа всех стройплощадок.",
      "excited": "«Индустриальный гигант». Обладает мощным внутренним магнетизмом и вытягивает самые тяжелые задачи.",
      "decay": "Ржавчина (глубокое выгорание) при отсутствии антикоррозийной защиты."
    }
  },
  {
    "num": 27,
    "symbol": "Co",
    "name": "Кобальт (Cobalt)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 58.933,
    "valence": 3,
    "freq": 698.46,
    "traits": [
      "Магнитная память",
      "Жаропрочный сплав",
      "Глубокий синий"
    ],
    "shadow": "H",
    "complementary": [
      "H"
    ],
    "evolution_prev": "Fe",
    "evolution_next": "Ni",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Мастер магнитной памяти». Создает сверхсплавы для турбин, работающих в аду дедлайнов. Хранит память о стандартах.",
      "excited": "«Работа в экстриме». Не теряет форму и свойства при катастрофических нагрузках.",
      "decay": "Жесткая консервативная негибкость в коммуникации."
    }
  },
  {
    "num": 28,
    "symbol": "Ni",
    "name": "Никель (Nickel)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 58.693,
    "valence": 2,
    "freq": 739.99,
    "traits": [
      "Чеканщик монет",
      "Износостойкость",
      "Ювелирный блеск"
    ],
    "shadow": "He",
    "complementary": [
      "He"
    ],
    "evolution_prev": "Co",
    "evolution_next": "Cu",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Чеканщик монет». Отвечает за финальную полировку и монетизацию процессов. Придает идеям товарный блестящий вид.",
      "excited": "«Чеканная стабильность». Превращает сырые концепты в стабильную ликвидную монету.",
      "decay": "Аллергическая раздражительность на малейшие неточности в отчетах."
    }
  },
  {
    "num": 29,
    "symbol": "Cu",
    "name": "Медь (Copper)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 63.546,
    "valence": 2,
    "freq": 783.99,
    "traits": [
      "Энергетический проводник",
      "Душа коммуникаций",
      "Теплый эмпат"
    ],
    "shadow": "Li",
    "complementary": [
      "Li"
    ],
    "evolution_prev": "Ni",
    "evolution_next": "Zn",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Энергетический проводник». Мгновенно передает мысли, энергию и тепло от заказчика к разработчикам без потерь.",
      "excited": "«Сверхпроводимость смыслов». Легко гнется, не рвется и соединяет разрозненные узлы в живую сеть.",
      "decay": "Покрывается зеленой патиной при длительном контакте с токсичной влажностью."
    }
  },
  {
    "num": 30,
    "symbol": "Zn",
    "name": "Цинк (Zinc)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 65.38,
    "valence": 2,
    "freq": 830.61,
    "traits": [
      "Страж иммунитета",
      "Оцинковка защиты",
      "Жертвенный спасатель"
    ],
    "shadow": "Be",
    "complementary": [
      "Be"
    ],
    "evolution_prev": "Cu",
    "evolution_next": "Ag",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Страж иммунитета». Оцинковывает процессы, беря удар коррозии хаоса на себя ради спасения железа проекта.",
      "excited": "«Иммунный ответ». Восстанавливает поврежденные ткани организации за считанные часы.",
      "decay": "Саморазрушение и эмоциональное истощение от роли постоянного спасателя."
    }
  },
  {
    "num": 31,
    "symbol": "Ga",
    "name": "Галлий (Gallium)",
    "group": "metalloid",
    "groupName": "Синтетики",
    "mass": 69.723,
    "valence": 3,
    "freq": 523.25,
    "traits": [
      "Текучий эмпат",
      "Металл в ладонях",
      "Чувствительный трансформер"
    ],
    "shadow": "B",
    "complementary": [
      "B"
    ],
    "evolution_prev": "Si",
    "evolution_next": "Ge",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "future",
      "challenge"
    ],
    "anti_elements": [
      "alkaline",
      "noble"
    ],
    "ideal_roles": [
      "architect",
      "creator",
      "synthesizer"
    ],
    "profiles": {
      "ground": "Архетип «Текучий эмпат». Металл, размягчающийся от человеческого тепла и искренности. Готов принять форму задачи.",
      "excited": "«Слияние структур». Мгновенно проникает в кристаллическую решетку команды для объединения.",
      "decay": "Потеря собственной формы и границ при малейшем эмоциональном нагреве."
    }
  },
  {
    "num": 32,
    "symbol": "Ge",
    "name": "Германий (Germanium)",
    "group": "metalloid",
    "groupName": "Синтетики",
    "mass": 72.63,
    "valence": 4,
    "freq": 554.37,
    "traits": [
      "Оптический стратег",
      "Инфракрасный визионер",
      "Фокусировка лазера"
    ],
    "shadow": "C",
    "complementary": [
      "C"
    ],
    "evolution_prev": "Ga",
    "evolution_next": "Sn",
    "valence_range": [
      3,
      6
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "future",
      "challenge"
    ],
    "anti_elements": [
      "alkaline",
      "noble"
    ],
    "ideal_roles": [
      "architect",
      "creator",
      "synthesizer"
    ],
    "profiles": {
      "ground": "Архетип «Оптический стратег». Улавливает тепловые следы процессов в полной темноте неопределенности.",
      "excited": "«Лазерная фокусировка». Фокусирует волоконную оптику смыслов и дает точнейшие прогнозы.",
      "decay": "Хрупкость кристалла при прямом механическом ударе."
    }
  },
  {
    "num": 33,
    "symbol": "As",
    "name": "Мышьяк (Arsenic)",
    "group": "nonmetal",
    "groupName": "Аналитики",
    "mass": 74.922,
    "valence": 3,
    "freq": 329.63,
    "traits": [
      "Тонкий яд / Лекарство",
      "Двойственность",
      "Стратегия"
    ],
    "shadow": "N",
    "complementary": [
      "N"
    ],
    "evolution_prev": "P",
    "evolution_next": "Se",
    "valence_range": [
      2,
      5
    ],
    "collapse_types": [
      "isolation",
      "chaos"
    ],
    "catalysts": [
      "order",
      "future"
    ],
    "anti_elements": [
      "alkali",
      "halogen"
    ],
    "ideal_roles": [
      "analyst",
      "thinker",
      "strategist"
    ],
    "profiles": {
      "ground": "Мастер малых доз. В микродозах — мощное лекарство для бизнеса, в больших — яд для конкурентов.",
      "excited": "Точечное устранение уязвимостей и слабых игроков на рынке.",
      "decay": "Интриги и скрытое разрушение доверия."
    }
  },
  {
    "num": 34,
    "symbol": "Se",
    "name": "Селен (Selenium)",
    "group": "nonmetal",
    "groupName": "Аналитики",
    "mass": 78.96,
    "valence": 2,
    "freq": 349.23,
    "traits": [
      "Фотопроводимость",
      "Реакция на свет",
      "Антиоксидант"
    ],
    "shadow": "O",
    "complementary": [
      "O"
    ],
    "evolution_prev": "As",
    "evolution_next": null,
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "isolation",
      "chaos"
    ],
    "catalysts": [
      "order",
      "future"
    ],
    "anti_elements": [
      "alkali",
      "halogen"
    ],
    "ideal_roles": [
      "analyst",
      "thinker",
      "strategist"
    ],
    "profiles": {
      "ground": "Проводимость меняется от света знания. Мощный антиоксидант, защищающий команду от старения процессов.",
      "excited": "Мгновенное превращение света знаний в реальную продуктивную работу.",
      "decay": "Пассивность в тени неопределенности."
    }
  },
  {
    "num": 35,
    "symbol": "Br",
    "name": "Бром (Bromine)",
    "group": "halogen",
    "groupName": "Катализаторы",
    "mass": 79.904,
    "valence": 1,
    "freq": 493.88,
    "traits": [
      "Стабилизатор страстей",
      "Жидкий модератор",
      "Трезвость ума"
    ],
    "shadow": "F",
    "complementary": [
      "F"
    ],
    "evolution_prev": "Cl",
    "evolution_next": null,
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "chaos",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "alkaline"
    ],
    "ideal_roles": [
      "catalyst",
      "activator",
      "disruptor"
    ],
    "profiles": {
      "ground": "Архетип «Стабилизатор кипящих страстей». Тяжелая бурая жидкость, способная погасить любую панику в коллективе.",
      "excited": "«Охлаждающий седатив». Возвращает трезвость ума и точный контроль температур во время кризисов.",
      "decay": "Подавление здоровой творческой инициативы и апатия."
    }
  },
  {
    "num": 36,
    "symbol": "Kr",
    "name": "Криптон (Krypton)",
    "group": "noble",
    "groupName": "Гармонизаторы",
    "mass": 83.798,
    "valence": 0,
    "freq": 432,
    "traits": [
      "Скрытый космический луч",
      "Зеленый импульс",
      "Лазерный тоннель"
    ],
    "shadow": "Ne",
    "complementary": [
      "Ne"
    ],
    "evolution_prev": "Ar",
    "evolution_next": "Xe",
    "valence_range": [
      0,
      2
    ],
    "collapse_types": [
      "isolation",
      "burnout"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "alkali"
    ],
    "ideal_roles": [
      "observer",
      "harmonizer",
      "buffer"
    ],
    "profiles": {
      "ground": "Архетип «Мастер скрытого космического луча». Хранит в себе мощный потенциал зелёного лазерного излучения.",
      "excited": "«Световой прорыв». Пробивает тоннели в полной темноте неопределенности сверхмощным световым импульсом.",
      "decay": "Уход в глубокий летаргический сон и уклонение от ответственности."
    }
  },
  {
    "num": 37,
    "symbol": "Rb",
    "name": "Рубидий (Rubidium)",
    "group": "alkali",
    "groupName": "Первопроходцы",
    "mass": 85.468,
    "valence": 1,
    "freq": 392,
    "traits": [
      "Квантовый сенсор",
      "Инфракрасный отклик",
      "Предвестник сдвигов"
    ],
    "shadow": "Na",
    "complementary": [
      "Na"
    ],
    "evolution_prev": "K",
    "evolution_next": "Cs",
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "nonmetal"
    ],
    "ideal_roles": [
      "pioneer",
      "initiator",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Квантовый сенсор». Улавливает микроколебания трендов и настроений еще до того, как они оформятся в явные слова.",
      "excited": "«Лазерный отклик». Мгновенно откликается даже на невидимый свет скрытых возможностей.",
      "decay": "Гиперчувствительность к внешнему шуму, приводящая к эмоциональным ожогам."
    }
  },
  {
    "num": 38,
    "symbol": "Sr",
    "name": "Стронций (Strontium)",
    "group": "alkaline",
    "groupName": "Фундамент",
    "mass": 87.62,
    "valence": 2,
    "freq": 587.33,
    "traits": [
      "Страж сигнальных огней",
      "Мастер контраста",
      "Алармист-навигатор"
    ],
    "shadow": "Mg",
    "complementary": [
      "Mg"
    ],
    "evolution_prev": "Ca",
    "evolution_next": "Ba",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "burnout",
      "betrayal"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "radioactive"
    ],
    "ideal_roles": [
      "builder",
      "protector",
      "stabilizer"
    ],
    "profiles": {
      "ground": "Архетип «Страж Сигнальных Огней». Зажигает ярко-малиновое пламя при приближении опасности или на рубеже триумфа.",
      "excited": "«Факел навигации». Выступает надежным сигнальным маяком в период полной ночной неопределенности.",
      "decay": "Фоновая тревожность и постоянный поиск невидимых рисков."
    }
  },
  {
    "num": 47,
    "symbol": "Ag",
    "name": "Серебро (Silver)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 107.87,
    "valence": 1,
    "freq": 880,
    "traits": [
      "Кристальный очиститель",
      "Благородный стандарт",
      "Максимальный свет"
    ],
    "shadow": "Al",
    "complementary": [
      "Al"
    ],
    "evolution_prev": "Zn",
    "evolution_next": "Pt",
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Кристальный очиститель». Чистота помыслов и высшая электропроводимость доверия. Очищает среду от бактерий фальши.",
      "excited": "«Прозрачный арбитр». Кристально чистые сделки и отражение истины.",
      "decay": "Быстрое потемнение при контакте с серой (токсичными интригами)."
    }
  },
  {
    "num": 50,
    "symbol": "Sn",
    "name": "Олово (Tin)",
    "group": "metalloid",
    "groupName": "Синтетики",
    "mass": 118.71,
    "valence": 2,
    "freq": 587.33,
    "traits": [
      "Великий припой",
      "Связующий микросхем",
      "Пластичный медиатор"
    ],
    "shadow": "Si",
    "complementary": [
      "Si"
    ],
    "evolution_prev": "Ge",
    "evolution_next": null,
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "future",
      "challenge"
    ],
    "anti_elements": [
      "alkaline",
      "noble"
    ],
    "ideal_roles": [
      "architect",
      "creator",
      "synthesizer"
    ],
    "profiles": {
      "ground": "Архетип «Великий припой». Надежно спаивает между собой самые разные элементы, создавая неразрывные контакты.",
      "excited": "«Непрерывная цепь». Обеспечивает безупречную проводимость между модулями проекта.",
      "decay": "«Оловянная чума» — рассыпание в порошок от холодного отчуждения коллег."
    }
  },
  {
    "num": 54,
    "symbol": "Xe",
    "name": "Ксенон (Xenon)",
    "group": "noble",
    "groupName": "Гармонизаторы",
    "mass": 131.29,
    "valence": 0,
    "freq": 528,
    "traits": [
      "Двигатель ионной тяги",
      "Межгалактический навигатор",
      "Безболезненный полет"
    ],
    "shadow": "P",
    "complementary": [
      "P"
    ],
    "evolution_prev": "Kr",
    "evolution_next": "U",
    "valence_range": [
      0,
      2
    ],
    "collapse_types": [
      "isolation",
      "burnout"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "alkali"
    ],
    "ideal_roles": [
      "observer",
      "harmonizer",
      "buffer"
    ],
    "profiles": {
      "ground": "Архетип «Двигатель ионной тяги». Тяжелый благородный газ, дающий плавную, но непрерывную тягу к дальним орбитам.",
      "excited": "«Межгалактический перелет». Мягко и безболезненно выводит проекты на новые уровни масштаба.",
      "decay": "Глубокая анестезия и усыпление чуткости к системным проблемам."
    }
  },
  {
    "num": 55,
    "symbol": "Cs",
    "name": "Цезий (Cesium)",
    "group": "alkali",
    "groupName": "Первопроходцы",
    "mass": 132.91,
    "valence": 1,
    "freq": 440,
    "traits": [
      "Хронист времени",
      "Атомный эталон",
      "Максимальный резонанс"
    ],
    "shadow": "S",
    "complementary": [
      "S"
    ],
    "evolution_prev": "Rb",
    "evolution_next": null,
    "valence_range": [
      0,
      3
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "nonmetal"
    ],
    "ideal_roles": [
      "pioneer",
      "initiator",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Хронист Атомного Времени». Настраивает секундный шаг процессов с точностью до миллиардных долей.",
      "excited": "«Синхронизатор эпохи». Обладает наивысшей химической активностью, выстраивая идеальный хронометраж.",
      "decay": "Мгновенное самовоспламенение при грубом нарушении его личного графика."
    }
  },
  {
    "num": 56,
    "symbol": "Ba",
    "name": "Барий (Barium)",
    "group": "alkaline",
    "groupName": "Фундамент",
    "mass": 137.33,
    "valence": 2,
    "freq": 659.25,
    "traits": [
      "Рентгеновский аудитор",
      "Сканер скрытого",
      "Проявление сути"
    ],
    "shadow": "Cl",
    "complementary": [
      "Cl"
    ],
    "evolution_prev": "Sr",
    "evolution_next": "Ra",
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "burnout",
      "betrayal"
    ],
    "catalysts": [
      "safety",
      "order"
    ],
    "anti_elements": [
      "halogen",
      "radioactive"
    ],
    "ideal_roles": [
      "builder",
      "protector",
      "stabilizer"
    ],
    "profiles": {
      "ground": "Архетип «Рентгеновский аудитор». Сканирует скрытую суть процессов, проявляя невидимые уязвимости и фальшь.",
      "excited": "«Контрастный аудит». Дает кристально четкую картинку скрытых системных проблем.",
      "decay": "Тяжеловесность и замедление командных спринтов из-за въедливости."
    }
  },
  {
    "num": 78,
    "symbol": "Pt",
    "name": "Платина (Platinum)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 195.08,
    "valence": 4,
    "freq": 932.33,
    "traits": [
      "Верховный катализатор",
      "Благородный арбитр",
      "Кислотоустойчивость"
    ],
    "shadow": "Ar",
    "complementary": [
      "Ar"
    ],
    "evolution_prev": "Ag",
    "evolution_next": "Au",
    "valence_range": [
      3,
      6
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Верховный катализатор». Не вступает в мелкие реакции, но ускоряет химические процессы в команде в миллионы раз.",
      "excited": "«Масштабитор премиум-класса». Создание фундаментальных систем мирового уровня.",
      "decay": "Недоступная холодная элитарность для рядовых коллег."
    }
  },
  {
    "num": 79,
    "symbol": "Au",
    "name": "Золото (Gold)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 196.97,
    "valence": 3,
    "freq": 987.77,
    "traits": [
      "Абсолютный эталон",
      "Солнечный монарх",
      "Немеркнущий резерв"
    ],
    "shadow": "Hg",
    "complementary": [
      "Pt",
      "Ag"
    ],
    "evolution_prev": "Pt",
    "evolution_next": null,
    "valence_range": [
      1,
      3
    ],
    "collapse_types": [
      "burnout",
      "isolation"
    ],
    "catalysts": [
      "challenge"
    ],
    "anti_elements": [
      "Hg",
      "Cl"
    ],
    "ideal_roles": [
      "leader",
      "expert"
    ],
    "profiles": {
      "ground": "Архетип «Абсолютный эталон ценности». Носитель высших стандартов. Не поддается коррозии времени, сплетен и критики.",
      "excited": "«Немеркнущий авторитет». Абсолютная ковкость и ценность в любых экономических системах.",
      "decay": "Высокомерная инертность и элитарная недоступность."
    }
  },
  {
    "num": 80,
    "symbol": "Hg",
    "name": "Ртуть (Mercury)",
    "group": "transition",
    "groupName": "Профессионалы",
    "mass": 200.59,
    "valence": 2,
    "freq": 1046.5,
    "traits": [
      "Алхимический трикстер",
      "Жидкий металл",
      "Подвижная плотность"
    ],
    "shadow": "Ca",
    "complementary": [
      "Ca"
    ],
    "evolution_prev": "Au",
    "evolution_next": null,
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "overload",
      "burnout"
    ],
    "catalysts": [
      "challenge",
      "order"
    ],
    "anti_elements": [
      "noble",
      "halogen"
    ],
    "ideal_roles": [
      "expert",
      "master",
      "leader"
    ],
    "profiles": {
      "ground": "Архетип «Алхимический трикстер». Уникальный жидкий металл. Проникает сквозь любые барьеры, принимая форму любого контекста.",
      "excited": "«Температурный сканер». Невероятный прорыв в нестандартных текучих нишах.",
      "decay": "Ядовитые испарения токсичности при сильном эмоциональном нагреве."
    }
  },
  {
    "num": 88,
    "symbol": "Ra",
    "name": "Радий (Radium)",
    "group": "radioactive",
    "groupName": "Реакторы",
    "mass": 226,
    "valence": 2,
    "freq": 698.46,
    "traits": [
      "Люминесцентный лидер",
      "Автономный источник",
      "Легендарный свет"
    ],
    "shadow": "Ti",
    "complementary": [
      "Ti"
    ],
    "evolution_prev": null,
    "evolution_next": null,
    "valence_range": [
      1,
      4
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "challenge",
      "future"
    ],
    "anti_elements": [
      "noble",
      "alkaline"
    ],
    "ideal_roles": [
      "disruptor",
      "transformer",
      "rebel"
    ],
    "profiles": {
      "ground": "Архетип «Легендарный источник излучения». Неугасаемый люминесцентный свет и тепло из глубины своего ядра без внешнего питания.",
      "excited": "«Радиоактивный харизматик». Заражает своей версией реальности и светит в абсолютной тьме веками.",
      "decay": "Разрушительное лучевое воздействие на близких при отсутствии свинцовой защиты."
    }
  },
  {
    "num": 92,
    "symbol": "U",
    "name": "Уран (Uranium)",
    "group": "radioactive",
    "groupName": "Реакторы",
    "mass": 238.03,
    "valence": 6,
    "freq": 639,
    "traits": [
      "Гигаваттный реактор",
      "Цепная реакция",
      "Цивилизационный сдвиг"
    ],
    "shadow": "C",
    "complementary": [
      "Pu",
      "F"
    ],
    "evolution_prev": "Ra",
    "evolution_next": "Pu",
    "valence_range": [
      3,
      6
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "challenge"
    ],
    "anti_elements": [
      "C",
      "Si"
    ],
    "ideal_roles": [
      "disruptor",
      "transformer"
    ],
    "profiles": {
      "ground": "Архетип «Гигаваттный ядерный реактор». В его ядре скрыты гигаватты энергии, способные питать глобальные проекты годами.",
      "excited": "«Цепная реакция». Эпохальный прорыв масштаба цивилизации и рыночных индустрий.",
      "decay": "Радиоактивный фон и заражение среды при ошибках управления реактором."
    }
  },
  {
    "num": 94,
    "symbol": "Pu",
    "name": "Плутоний (Plutonium)",
    "group": "radioactive",
    "groupName": "Реакторы",
    "mass": 244,
    "valence": 6,
    "freq": 741,
    "traits": [
      "Страж дальнего космоса",
      "Сверхтяжелый автоном",
      "Вечный генератор"
    ],
    "shadow": "C",
    "complementary": [
      "U",
      "F"
    ],
    "evolution_prev": "U",
    "evolution_next": null,
    "valence_range": [
      3,
      6
    ],
    "collapse_types": [
      "chaos",
      "overload"
    ],
    "catalysts": [
      "challenge"
    ],
    "anti_elements": [
      "C",
      "Si"
    ],
    "ideal_roles": [
      "disruptor",
      "transformer"
    ],
    "profiles": {
      "ground": "Архетип «Страж дальнего космоса». Питает автономные космические станции и зонды на самых ледяных краях Вселенной.",
      "excited": "«Абсолютная автономность». Создание продуктов, работающих без внешней поддержки десятилетиями.",
      "decay": "Достижение критической массы и опасная токсичность при перегреве."
    }
  }
];
