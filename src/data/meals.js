import data from './meals.json'

export const proteins = data.meta.proteins
const meals = data.meals

export function getMealsByProtein(proteinId) {
  return meals.filter((m) => m.protein === proteinId)
}

export function getMealById(id) {
  return meals.find((m) => m.id === id) ?? null
}

function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function getRandomMeals(
    proteinId,
    { count = 3, excludeIds = [], maxTime = null } = {}
  ) {
    let pool = getMealsByProtein(proteinId)
    if (maxTime) pool = pool.filter((m) => m.timeMins <= maxTime)
  
    const fresh = shuffle(pool.filter((m) => !excludeIds.includes(m.id)))
    const seen = shuffle(pool.filter((m) => excludeIds.includes(m.id)))
  
    return [...fresh, ...seen].slice(0, count)
  }