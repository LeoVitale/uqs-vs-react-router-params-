import { useQueryState, parseAsInteger } from 'nuqs'
import { RenderFlash } from '../RenderFlash'

const TicketLabel = () => {
  // ✅ Observa APENAS ticket - completamente independente
  const [ticket] = useQueryState('ticket', parseAsInteger)

  return (
    <RenderFlash>
      <div className="inline-flex items-center gap-2 px-3 py-2 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg">
        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
          🎫 Ticket:
        </span>
        {ticket ? (
          <span className="font-mono bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-sm text-purple-800 dark:text-purple-200">
            {ticket}
          </span>
        ) : (
          <span className="text-purple-500 dark:text-purple-400 text-sm italic">
            None
          </span>
        )}
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" title="Observando ticket"></div>
      </div>
    </RenderFlash>
  )
}

export default TicketLabel
