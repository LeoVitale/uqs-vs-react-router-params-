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
            Componente que pisca com cores aleatórias <strong>uma vez por render</strong>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Útil para debug e visualização de quando componentes rerenderizam
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Exemplo 1: Counter simples */}
          <RenderFlash>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Contador Simples</h2>
              <p className="text-gray-700 mb-4">Count: {count}</p>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => setCount(c => c + 1)}
              >
                Incrementar (+1 render)
              </button>
            </div>
          </RenderFlash>

          {/* Exemplo 2: Input que causa render a cada tecla */}
          <RenderFlash duration={150} opacity={0.4}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Input Text</h2>
              <p className="text-gray-700 mb-2">
                Texto: "{text}"
              </p>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite algo (cada letra = render)"
              />
            </div>
          </RenderFlash>

          {/* Exemplo 3: Lista dinâmica */}
          <RenderFlash duration={250} opacity={0.6}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Lista Dinâmica</h2>
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
                Adicionar Item
              </button>
            </div>
          </RenderFlash>

          {/* Exemplo 4: Flash desabilitado condicionalmente */}
          <RenderFlash disabled={count > 5}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Flash Condicional</h2>
              <p className="text-gray-700 mb-2">
                Status: {count > 5 ? '🔇 Flash desabilitado' : '🔔 Flash ativo'}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                O flash para quando count {'>'} 5
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

        {/* Instruções */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Como usar:</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Envolva qualquer componente com <code className="bg-blue-100 px-1 rounded">&lt;RenderFlash&gt;</code></li>
            <li>• Configure <code className="bg-blue-100 px-1 rounded">duration</code> (padrão: 200ms)</li>
            <li>• Configure <code className="bg-blue-100 px-1 rounded">opacity</code> (padrão: 0.3)</li>
            <li>• Use <code className="bg-blue-100 px-1 rounded">disabled</code> para desativar condicionalmente</li>
            <li>• <strong>Garantia:</strong> Flash acontece apenas <em>uma vez por render cycle</em></li>
            <li>• Em desenvolvimento, mostra contador de renders no canto superior direito</li>
          </ul>
          
          <div className="mt-4 p-3 bg-blue-100 rounded border-l-4 border-blue-400">
            <p className="text-blue-900 text-sm">
              <strong>💡 Dica de uso:</strong> Perfeito para identificar renders desnecessários, 
              otimizar performance e debugar problemas de renderização em componentes React.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
