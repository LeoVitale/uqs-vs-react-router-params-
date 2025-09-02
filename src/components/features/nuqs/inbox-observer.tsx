import { useQueryState, parseAsInteger } from 'nuqs'
import { RenderFlash } from '../../RenderFlash'

const InboxObserver = () => {
  // ✅ Observa APENAS o parâmetro "inbox"
  const [inbox, setInbox] = useQueryState('inbox', parseAsInteger)

  return (
    <RenderFlash>
      <div className="space-y-4 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Inbox Observer Component</h3>
        
        <div className="space-y-2">
          <div className="text-sm">
            Current Inbox: {inbox ? (
              <span className="font-mono bg-blue-100 px-2 py-1 rounded">{inbox}</span>
            ) : (
              <span className="text-gray-500">None selected</span>
            )}
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <button 
              onClick={() => setInbox(1)}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Inbox 1
            </button>
            <button 
              onClick={() => setInbox(2)}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Inbox 2
            </button>
            <button 
              onClick={() => setInbox(3)}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Inbox 3
            </button>
            <button 
              onClick={() => setInbox(null)}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Inbox
            </button>
          </div>
        </div>

        <div className="text-xs text-gray-600">
          <p>✅ Este componente observa apenas o parâmetro "inbox"</p>
          <p>✅ Mudanças em outros parâmetros não afetam este componente</p>
          <p>✅ Este componente pode modificar apenas inbox</p>
        </div>
      </div>
    </RenderFlash>
  )
}

export default InboxObserver
