import { useState } from 'react'
import ProteinPicker from './components/ProteinPicker'
import MealIdeas from './components/MealIdeas'
import MealDetail from './components/MealDetail'
import {
  proteins,
  getRandomMeals,
  getMealById,
  countMeals,
} from './data/meals'

export default function App() {
  const [protein, setProtein] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [mealId, setMealId] = useState(null)
  const [maxTime, setMaxTime] = useState(null)

  const proteinLabel = proteins.find((p) => p.id === protein)?.label
  const meal = mealId ? getMealById(mealId) : null

  function pickProtein(id) {
    setProtein(id)
    setIdeas(getRandomMeals(id, { maxTime }))
  }

  function changeTime(value) {
    setMaxTime(value)
    setIdeas(getRandomMeals(protein, { maxTime: value }))
  }

  function shuffleIdeas() {
    setIdeas(
      getRandomMeals(protein, {
        maxTime,
        excludeIds: ideas.map((m) => m.id),
      })
    )
  }

  function backToProteins() {
    setProtein(null)
    setMealId(null)
  }

  let screen
  if (!protein) {
    screen = <ProteinPicker onSelect={pickProtein} />
  } else if (!meal) {
    screen = (
      <MealIdeas
        proteinLabel={proteinLabel}
        meals={ideas}
        maxTime={maxTime}
        canShuffle={countMeals(protein, maxTime) > ideas.length}
        onTimeChange={changeTime}
        onShuffle={shuffleIdeas}
        onSelect={setMealId}
        onBack={backToProteins}
      />
    )
  } else {
    screen = <MealDetail meal={meal} onBack={() => setMealId(null)} />
  }

  return <div className="min-h-screen bg-gray-50 text-gray-900">{screen}</div>
}