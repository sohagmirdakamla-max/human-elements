/* ==========================================================================
   HUMAN ELEMENTS // CENTRAL QUANTUM REACTION ENGINE
   ========================================================================== */

class ReactionEngine {
  constructor() {}

  calculate(elemA, elemB, catalystElem = null) {
    if (!elemA || !elemB) return null;

    let score = 50; // Base compatibility
    let synergy = 50;
    let tension = 10;
    let growth = 10;

    // 1. Complementary Match (Attraction of opposite valencies)
    const isCompA = elemA.complementary && elemA.complementary.includes(elemB.symbol);
    const isCompB = elemB.complementary && elemB.complementary.includes(elemA.symbol);
    if (isCompA || isCompB) {
      score += 30;
      synergy += 30;
    }

    // 2. Shadow Collision (Tension + Growth Potential)
    const isShadowA = elemA.shadow === elemB.symbol;
    const isShadowB = elemB.shadow === elemA.symbol;
    if (isShadowA || isShadowB) {
      tension += 30;
      growth += 40;
      score += 15; // Risky but high potential
    }

    // 3. Anti-Element Collision (Friction and decay acceleration)
    const isAntiA = elemA.anti_elements && (elemA.anti_elements.includes(elemB.symbol) || elemA.anti_elements.includes(elemB.group));
    const isAntiB = elemB.anti_elements && (elemB.anti_elements.includes(elemA.symbol) || elemB.anti_elements.includes(elemA.group));
    if (isAntiA || isAntiB) {
      score -= 40;
      tension += 45;
      synergy -= 20;
    }

    // 4. Shared Catalysts (Similar growth accelerators)
    if (elemA.catalysts && elemB.catalysts) {
      const sharedCats = elemA.catalysts.filter(c => elemB.catalysts.includes(c));
      if (sharedCats.length > 0) {
        score += 20;
        synergy += 20;
        growth += 15;
      }
    }

    // 5. Shared Collapse/Decay Types (Shared vulnerability -> Empathy or Toxicity)
    if (elemA.collapse_types && elemB.collapse_types) {
      const sharedCollapses = elemA.collapse_types.filter(c => elemB.collapse_types.includes(c));
      if (sharedCollapses.length > 0) {
        score += 15;
        // Shared decay gives mutual understanding but high risk if both enter decay
        tension += 10;
      }
    }

    // 6. Evolution Proximity (Steps of same developmental line)
    const isEvoA = elemA.evolution_next === elemB.symbol || elemA.evolution_prev === elemB.symbol;
    const isEvoB = elemB.evolution_next === elemA.symbol || elemB.evolution_prev === elemA.symbol;
    if (isEvoA || isEvoB) {
      score += 20;
      synergy += 15;
    }

    // 7. Catalyst Element Adjustments (If a third element is added in the collider)
    if (catalystElem) {
      if (catalystElem.group === 'noble') {
        // Harmonizer catalyst decreases tension
        tension = Math.max(5, tension - 25);
        score += 12;
      } else if (catalystElem.group === 'halogen') {
        // Catalyst accelerator boosts synergy and growth, but slightly raises friction
        synergy += 15;
        growth += 20;
        tension += 10;
      } else if (catalystElem.group === 'alkali') {
        // Highly active alkali raises tension
        tension += 30;
        score -= 10;
      } else if (catalystElem.group === 'radioactive') {
        // Radioactive catalyst triggers unstable growth and extreme friction
        tension += 40;
        growth += 35;
        score -= 15;
      }
    }

    // Bounds check
    score = Math.max(10, Math.min(99, score));
    synergy = Math.max(10, Math.min(99, synergy));
    tension = Math.max(5, Math.min(95, tension));
    growth = Math.max(5, Math.min(95, growth));

    // Determine Union Type / Classification
    let unionName = "Квантовое Соединение";
    let unionClass = "harmonic";
    if (score >= 85) {
      unionName = "Кристаллическая Синергия / Ковалентный Союз 🚀";
      unionClass = "harmonic";
    } else if (score >= 65) {
      unionName = "Стабильный Энергетический Сплав 🤝";
      unionClass = "harmonic";
    } else if (score >= 45) {
      unionName = "Инертное Соприкосновение (Требует ресурсов) ⚖️";
      unionClass = "neutral";
    } else {
      unionName = "Термоядерная Диссоциация / Критический Риск 💥";
      unionClass = "explosive";
    }

    // Generate Custom Dynamic Predictions
    const nameA = elemA.name.split(' ')[0];
    const nameB = elemB.name.split(' ')[0];

    const conflictPoint = isAntiA || isAntiB
      ? `Конфликт из-за взаимного отторжения антиподов (анти-элементы). Один разрушает кристаллическую решетку другого.`
      : (tension > 50
        ? `Высокое напряжение из-за теневого притяжения. Тень [${elemA.shadow}] сталкивается с тенью [${elemB.shadow}].`
        : `Возможны небольшие разногласия в фазах полураспада (разница в периодах восстановления).`);

    const growthPoint = isShadowA || isShadowB
      ? `Огромный потенциал роста через интеграцию теневых аспектов. Преодоление страхов закаляет оба ядра.`
      : (synergy > 70
        ? `Синтез новых целей. Элементы расширяют орбитали друг друга, ускоряя соавторство.`
        : `Накопление опыта через терпеливую притирку индивидуальных качеств.`);

    return {
      score,
      synergy,
      tension,
      growth,
      unionName,
      unionClass,
      conflictPoint,
      growthPoint,
      formula: `${elemA.symbol} + ${elemB.symbol}${catalystElem ? ' · ' + catalystElem.symbol : ''}`
    };
  }
}

// Global initialization
window.reactionEngine = new ReactionEngine();
