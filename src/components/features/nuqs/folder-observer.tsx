import { useQueryState, parseAsInteger } from 'nuqs'
import { RenderFlash } from '../../RenderFlash'

const FolderObserver = () => {
  // ✅ Observa APENAS o parâmetro "folder"  
  const [folder, setFolder] = useQueryState('folder', parseAsInteger)

  return (
    <RenderFlash>
      <div className="space-y-4 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Folder Observer Component</h3>
        
        <div className="space-y-2">
          <div className="text-sm">
            Current Folder: {folder ? (
              <span className="font-mono bg-green-100 px-2 py-1 rounded">{folder}</span>
            ) : (
              <span className="text-gray-500">None selected</span>
            )}
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <button 
              onClick={() => setFolder(10)}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Folder 10
            </button>
            <button 
              onClick={() => setFolder(20)}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Folder 20
            </button>
            <button 
              onClick={() => setFolder(30)}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Folder 30
            </button>
            <button 
              onClick={() => setFolder(null)}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Folder
            </button>
          </div>
        </div>

        <div className="text-xs text-gray-600">
          <p>✅ Este componente observa apenas o parâmetro "folder"</p>
          <p>✅ Mudanças em inbox, ticket, email não afetam este componente</p>
          <p>✅ Este componente pode modificar apenas folder</p>
        </div>
      </div>
    </RenderFlash>
  )
}

export default FolderObserver
