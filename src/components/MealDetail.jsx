import { useEffect } from 'react'

export default function MealDetail({ meal, onBack }) {
  // Start at the top when a meal opens
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [meal.id])

  return (
    <main className="mx-auto max-w-md p-6 pb-12">
      <button onClick={onBack} className="py-2 text-sm text-gray-600 underline">
        ← Back to ideas
      </button>

      <h1 className="mt-4 text-2xl font-bold">{meal.name}</h1>
      <p className="mt-1 text-gray-600">{meal.blurb}</p>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-gray-100 px-2 py-1">
          ⏱ {meal.timeMins} min
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-1 capitalize">
          {meal.difficulty}
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-1">
          Serves {meal.serves}
        </span>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Ingredients</h2>
        <ul className="mt-3 space-y-2">
          {meal.ingredients.map((item) => (
            <li key={item} className="rounded-xl bg-white p-3 shadow-sm">
              {item}
            </li>
          ))}
        </ul>

        {meal.pantry.length > 0 && (
          <p className="mt-3 text-sm text-gray-600">
            <span className="font-medium">Pantry staples:</span>{' '}
            {meal.pantry.join(', ')}
          </p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Method</h2>
        <ol className="mt-3 space-y-4">
          {meal.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
                {i + 1}
              </span>
              <p className="pt-0.5">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {meal.tip && (
        <p className="mt-8 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          💡 {meal.tip}
        </p>
      )}
    </main>
  )
}