import { useQueryStates, parseAsInteger } from 'nuqs'
import InboxLabel from './labels/inbox-label'
import FolderLabel from './labels/folder-label'
import TicketLabel from './labels/ticket-label'
import EmailLabel from './labels/email-label'

const IndependentLabelsShowcase = () => {
  // ✅ This component controls the values, but the labels observe independently
  const [, setParams] = useQueryStates({
    inbox: parseAsInteger,
    folder: parseAsInteger,
    ticket: parseAsInteger,
    email: parseAsInteger
  })


  // Functions to test independence
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
          Each label observes only its own parameter - completely independent!
        </p>
      </div>

      {/* Independent Labels */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">📊 Independent Labels:</h3>
        <div className="flex flex-wrap gap-3">
          <InboxLabel />
          <FolderLabel />
          <TicketLabel />
          <EmailLabel />
        </div>
      </div>

      {/* Test Controls */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">🎮 Test Controls:</h3>
        
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
              <p className="font-semibold mb-1">🔥 How it works:</p>
              <ul className="space-y-1">
                <li>• Each label = 1 independent component</li>
                <li>• Each uses its own <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">useQueryState</code></li>
                <li>• Zero coupling between labels</li>
                <li>• Individual re-render per label</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">✅ Advantages:</p>
              <ul className="space-y-1">
                <li>• Optimized performance</li>
                <li>• Reusable components</li>
                <li>• Easy maintenance</li>
                <li>• Individual testability</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              💡 <strong>Test:</strong> Click the buttons and observe how only the corresponding label flashes/updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndependentLabelsShowcase
