import { useQueryState, parseAsInteger } from 'nuqs'
import { RenderFlash } from '../../../RenderFlash'

const InboxLabel = () => {
  // ✅ Observa APENAS inbox - completamente independente
  const [inbox] = useQueryState('inbox', parseAsInteger)

  return (
    <RenderFlash>
      <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
          📥 Inbox:
        </span>
        {inbox ? (
          <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-sm text-blue-800 dark:text-blue-200">
            {inbox}
          </span>
        ) : (
          <span className="text-blue-500 dark:text-blue-400 text-sm italic">
            None
          </span>
        )}
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" title="Observando inbox"></div>
      </div>
    </RenderFlash>
  )
}

export default InboxLabel
