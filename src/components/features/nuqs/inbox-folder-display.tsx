import { useQueryState, parseAsInteger } from 'nuqs'
import { RenderFlash } from '../../RenderFlash'

const InboxFolderDisplay = () => {
  // ✅ Observa APENAS os valores, sem possibilidade de modificar
  const [inbox] = useQueryState('inbox', parseAsInteger)
  const [folder] = useQueryState('folder', parseAsInteger)

  return (
    <RenderFlash>
      <div className="space-y-4 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-600">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          📖 Read-Only Observer Component
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">Inbox:</span>
            {inbox ? (
              <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-sm">
                {inbox}
              </span>
            ) : (
              <span className="text-gray-500 text-sm italic">None selected</span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">Folder:</span>
            {folder ? (
              <span className="font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-sm">
                {folder}
              </span>
            ) : (
              <span className="text-gray-500 text-sm italic">None selected</span>
            )}
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <p>✅ Observa apenas <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">inbox</code> e <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">folder</code></p>
            <p>🔒 Read-only: Não pode modificar os valores</p>
            <p>⚡ Re-render apenas quando inbox ou folder mudam</p>
          </div>
        </div>

        {/* Breadcrumb-style display */}
        <div className="border-t pt-3">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">Navigation Path:</span>
            <span className="ml-2">
              {!inbox && !folder && <span className="italic text-gray-500">Root</span>}
              {inbox && <span>Inbox {inbox}</span>}
              {inbox && folder && <span> › </span>}
              {folder && <span>Folder {folder}</span>}
            </span>
          </div>
        </div>
      </div>
    </RenderFlash>
  )
}

export default InboxFolderDisplay
