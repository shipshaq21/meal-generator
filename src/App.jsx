import { useState } from 'react'
import ProteinPicker from './components/ProteinPicker'
import { proteins } from './data/meals'

export default function App() {
  const [protein, setProtein] = useState(null)

  const label = proteins.find((p) => p.id === protein)?.label

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {!protein ? (
        <ProteinPicker onSelect={setProtein} />
      ) : (
        <main className="mx-auto max-w-md p-6">
          <button
            onClick={() => setProtein(null)}
            className="text-sm text-gray-600 underline"
          >
            ← Back
          </button>
          <h1 className="mt-4 text-2xl font-bold">You picked: {label}</h1>
        </main>
      )}
    </div>
  )
}