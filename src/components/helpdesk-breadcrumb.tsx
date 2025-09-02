
import { useInboxFolderReadOnlySimple } from './features/nuqs/useHelpdeskParamsReadOnly'
import { RenderFlash } from './RenderFlash'

const HelpdeskBreadcrumb = () => {
  // ✅ Hook customizado - observa apenas inbox e folder (read-only)
  const { inbox, folder } = useInboxFolderReadOnlySimple()

  const renderBreadcrumb = () => {
    const parts = []
    
    if (!inbox && !folder) {
      return <span className="text-gray-500 italic">Home</span>
    }
    
    if (inbox) {
      parts.push(
        <span key="inbox" className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-sm">
          Inbox {inbox}
        </span>
      )
    }
    
    if (folder) {
      parts.push(
        <span key="folder" className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-sm">
          Folder {folder}
        </span>
      )
    }
    
    return parts.map((part, index) => (
      <span key={index}>
        {index > 0 && <span className="mx-2 text-gray-400">›</span>}
        {part}
      </span>
    ))
  }

  return (
    <RenderFlash>
      <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-lg border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🍞</span>
          <h3 className="text-lg font-semibold">Breadcrumb Navigation (Read-Only)</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Current Path:
            </span>
            <div className="flex items-center">
              {renderBreadcrumb()}
            </div>
          </div>
          
          <div className="text-xs text-gray-600 dark:text-gray-400 border-t pt-3 space-y-1">
            <p>✅ Usa hook customizado <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">useInboxFolderReadOnlySimple()</code></p>
            <p>🔒 Read-only: Não pode modificar os parâmetros</p>
            <p>⚡ Re-render apenas quando inbox ou folder mudam</p>
            <p>🎯 Perfeito para breadcrumbs, headers, sidebars...</p>
          </div>
        </div>
      </div>
    </RenderFlash>
  )
}

export default HelpdeskBreadcrumb
