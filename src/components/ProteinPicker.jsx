import { proteins } from '../data/meals'

const EMOJI = {
  chicken: '🍗',
  beef: '🥩',
  salmon: '🐟',
  eggs: '🥚',
  tofu: '🌱',
  beans: '🫘',
  yogurt: '🥛',
}

export default function ProteinPicker({ onSelect }) {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold">What would you like to cook today?</h1>
      <p className="mt-1 text-gray-600">
        Pick a protein and select from a number of meals!
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {proteins.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-5 text-lg font-medium shadow-sm transition hover:border-gray-400 active:scale-95"
          >
            <span className="text-4xl">{EMOJI[p.id] ?? '🍽️'}</span>
            {p.label}
          </button>
        ))}
      </div>
    </main>
  )
}