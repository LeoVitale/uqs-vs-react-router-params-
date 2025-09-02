import { useQueryStates, parseAsInteger } from 'nuqs'
import InboxLabel from './labels/inbox-label'
import FolderLabel from './labels/folder-label'
import TicketLabel from './labels/ticket-label'
import EmailLabel from './labels/email-label'

const IndependentLabelsShowcase = () => {
  // ✅ Este componente controla os valores, mas os labels observam independentemente
  const [params, setParams] = useQueryStates({
    inbox: parseAsInteger,
    folder: parseAsInteger,
    ticket: parseAsInteger,
    email: parseAsInteger
  })

  console.log(params)

  // Funções para testar a independência
  const setRandomInbox = () => setParams({ inbox: Math.floor(Math.random() * 100) + 1 })
  const setRandomFolder = () => setParams({ folder: Math.floor(Math.random() * 50) + 1 })
  const setRandomTicket = () => setParams({ ticket: Math.floor(Math.random() * 1000) + 1 })
  const setRandomEmail = () => setParams({ email: Math.floor(Math.random() * 999) + 1 })
  
  const clearAll = () => setParams({ inbox: null, folder: null, ticket: null, email: null })
  const setAllRandom = () => setParams({
    inbox: Math.floor(Math.random() * 10) + 1,
    folder: Math.floor(Math.random() * 20) + 1,
    ticket: Math.floor(Math.random() * 100) + 1,
    email: Math.floor(Math.random() * 50) + 1
  })

  return (
    <div className="space-y-6 p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">🎭 Independent Labels Showcase</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Cada label observa apenas seu próprio parâmetro - totalmente independentes!
        </p>
      </div>

      {/* Labels Independentes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">📊 Labels Independentes:</h3>
        <div className="flex flex-wrap gap-3">
          <InboxLabel />
          <FolderLabel />
          <TicketLabel />
          <EmailLabel />
        </div>
      </div>

      {/* Controles para testar */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">🎮 Controles de Teste:</h3>
        
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={setRandomInbox}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              Random Inbox
            </button>
            <button
              onClick={setRandomFolder}
              className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              Random Folder
            </button>
            <button
              onClick={setRandomTicket}
              className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              Random Ticket
            </button>
            <button
              onClick={setRandomEmail}
              className="px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              Random Email
            </button>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={setAllRandom}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 text-sm font-medium"
            >
              🎲 Set All Random
            </button>
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm font-medium"
            >
              🗑️ Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Info técnica */}
      <div className="border-t pt-4">
        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-1">🔥 Como funciona:</p>
              <ul className="space-y-1">
                <li>• Cada label = 1 componente independente</li>
                <li>• Cada um usa seu próprio <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">useQueryState</code></li>
                <li>• Zero coupling entre os labels</li>
                <li>• Re-render individual por label</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">✅ Vantagens:</p>
              <ul className="space-y-1">
                <li>• Performance otimizada</li>
                <li>• Componentes reutilizáveis</li>
                <li>• Fácil manutenção</li>
                <li>• Testabilidade individual</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              💡 <strong>Teste:</strong> Clique nos botões e observe como apenas o label correspondente pisca/atualiza!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndependentLabelsShowcase
