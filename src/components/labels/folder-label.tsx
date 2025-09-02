import { useQueryState, parseAsInteger } from 'nuqs'
import { RenderFlash } from '../RenderFlash'

const FolderLabel = () => {
  // ✅ Observa APENAS folder - completamente independente
  const [folder] = useQueryState('folder', parseAsInteger)

  return (
    <RenderFlash>
      <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
        <span className="text-sm font-medium text-green-700 dark:text-green-300">
          📁 Folder:
        </span>
        {folder ? (
          <span className="font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-sm text-green-800 dark:text-green-200">
            {folder}
          </span>
        ) : (
          <span className="text-green-500 dark:text-green-400 text-sm italic">
            None
          </span>
        )}
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Observando folder"></div>
      </div>
    </RenderFlash>
  )
}

export default FolderLabel
