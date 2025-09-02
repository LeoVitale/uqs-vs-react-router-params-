import { useState } from 'react'
import { RenderFlash } from './components/RenderFlash'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const addItem = () => {
    setItems(prev => [...prev, `Item ${prev.length + 1}`])
  }

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            RenderFlash Component Demo
          </h1>
          <p className="text-gray-600">
            Component that flashes with random colors <strong>once per render</strong>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Useful for debugging and visualizing when components re-render
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example 1: Simple counter */}
          <RenderFlash>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Simple Counter</h2>
              <p className="text-gray-700 mb-4">Count: {count}</p>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => setCount(c => c + 1)}
              >
                Increment (+1 render)
              </button>
            </div>
          </RenderFlash>

          {/* Example 2: Input that causes render on each keystroke */}
          <RenderFlash duration={150} opacity={0.4}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Input Text</h2>
              <p className="text-gray-700 mb-2">
                Text: "{text}"
              </p>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something (each letter = render)"
              />
            </div>
          </RenderFlash>

          {/* Example 3: Dynamic list */}
          <RenderFlash duration={250} opacity={0.6}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Dynamic List</h2>
              <div className="space-y-2 mb-4">
                {items.map((item, index) => (
                  <RenderFlash key={index} duration={100}>
                    <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                      <span>{item}</span>
                      <button
                        onClick={() => removeItem(index)}
                        className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                      >
                        ✕
                      </button>
                    </div>
                  </RenderFlash>
                ))}
              </div>
              <button
                onClick={addItem}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Add Item
              </button>
            </div>
          </RenderFlash>

          {/* Example 4: Conditionally disabled flash */}
          <RenderFlash disabled={count > 5}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Conditional Flash</h2>
              <p className="text-gray-700 mb-2">
                Status: {count > 5 ? '🔇 Flash disabled' : '🔔 Flash active'}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Flash stops when count {'>'} 5
              </p>
              <div className="space-x-2">
                <button
                  onClick={() => setCount(c => c + 1)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  +1
                </button>
                <button
                  onClick={() => setCount(0)}
                  className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          </RenderFlash>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">How to use:</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Wrap any component with <code className="bg-blue-100 px-1 rounded">&lt;RenderFlash&gt;</code></li>
            <li>• Configure <code className="bg-blue-100 px-1 rounded">duration</code> (default: 200ms)</li>
            <li>• Configure <code className="bg-blue-100 px-1 rounded">opacity</code> (default: 0.3)</li>
            <li>• Use <code className="bg-blue-100 px-1 rounded">disabled</code> to conditionally disable</li>
            <li>• <strong>Guarantee:</strong> Flash happens only <em>once per render cycle</em></li>
            <li>• In development, shows render counter in the top right corner</li>
          </ul>
          
          <div className="mt-4 p-3 bg-blue-100 rounded border-l-4 border-blue-400">
            <p className="text-blue-900 text-sm">
              <strong>💡 Usage tip:</strong> Perfect for identifying unnecessary renders, 
              optimizing performance and debugging rendering issues in React components.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
