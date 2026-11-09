const TIME_OPTIONS = [
    { label: 'Any time', value: null },
    { label: '20 min or less', value: 20 },
    { label: '40 min or less', value: 40 },
  ]
  
  export default function MealIdeas({
    proteinLabel,
    meals,
    maxTime,
    canShuffle,
    onTimeChange,
    onShuffle,
    onSelect,
    onBack,
  }) {
    return (
      <main className="mx-auto max-w-md p-6">
        <button onClick={onBack} className="py-2 text-sm text-gray-600 underline">
          ← Change protein
        </button>
  
        <h1 className="mt-4 text-2xl font-bold">{proteinLabel} ideas</h1>
  
        <div className="mt-4 flex flex-wrap gap-2">
          {TIME_OPTIONS.map((opt) => (
            <button
              key={opt.label}
              onClick={() => onTimeChange(opt.value)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                maxTime === opt.value
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 bg-white text-gray-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
  
        {meals.length === 0 ? (
          <p className="mt-6 rounded-xl bg-white p-4 text-gray-600 shadow-sm">
            No {proteinLabel.toLowerCase()} meals in {maxTime} minutes or less.
            Try a longer time to see more ideas.
          </p>
        ) : (
          <>
            <ul className="mt-6 space-y-3">
              {meals.map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => onSelect(m.id)}
                    className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:border-gray-400 active:scale-[0.98]"
                  >
                    <h2 className="text-lg font-semibold">{m.name}</h2>
                    <p className="mt-1 text-sm text-gray-600">{m.blurb}</p>
                    <div className="mt-3 flex gap-2 text-xs">
                      <span className="rounded-full bg-gray-100 px-2 py-1">
                        ⏱ {m.timeMins} min
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-1 capitalize">
                        {m.difficulty}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
  
            {canShuffle && (
              <button
                onClick={onShuffle}
                className="mt-6 w-full rounded-2xl bg-gray-900 py-3 font-medium text-white transition active:scale-95"
              >
                Show me different ones
              </button>
            )}
          </>
        )}
      </main>
    )
  }