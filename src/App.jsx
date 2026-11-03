import { useState } from 'react'
import ProteinPicker from './components/ProteinPicker'
import MealIdeas from './components/MealIdeas'
import { proteins, getRandomMeals, getMealById } from './data/meals'

export default function App() {
  const [protein, setProtein] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [mealId, setMealId] = useState(null)

  const proteinLabel = proteins.find((p) => p.id === protein)?.label
  const meal = mealId ? getMealById(mealId) : null

  function pickProtein(id) {
    setProtein(id)
    setIdeas(getRandomMeals(id))
  }

  function shuffleIdeas() {
    setIdeas(getRandomMeals(protein, { excludeIds: ideas.map((m) => m.id) }))
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
        onShuffle={shuffleIdeas}
        onSelect={setMealId}
        onBack={backToProteins}
      />
    )
  } else {
    // Placeholder until the detail screen is built
    screen = (
      <main className="mx-auto max-w-md p-6">
        <button
          onClick={() => setMealId(null)}
          className="text-sm text-gray-600 underline"
        >
          ← Back to ideas
        </button>
        <h1 className="mt-4 text-2xl font-bold">{meal.name}</h1>
      </main>
    )
  }

  return <div className="min-h-screen bg-gray-50 text-gray-900">{screen}</div>
}