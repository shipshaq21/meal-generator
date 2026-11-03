import { proteins, getRandomMeals } from './data/meals'

export default function App() {
  const meals = getRandomMeals('yogurt')

  return (
    <div className="p-6">
      <p className="mb-4 font-semibold">
        {proteins.map((p) => p.label).join(', ')}
      </p>
      <ul className="list-disc pl-5">
        {meals.map((m) => (
          <li key={m.id}>
            {m.name} ({m.timeMins} min)
          </li>
        ))}
      </ul>
    </div>
  )
}