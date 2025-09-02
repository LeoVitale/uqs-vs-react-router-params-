import { useQueryState, parseAsInteger } from 'nuqs'
import { RenderFlash } from '../../../RenderFlash'

const EmailLabel = () => {
  // ✅ Observa APENAS email - completamente independente
  const [email] = useQueryState('email', parseAsInteger)

  return (
    <RenderFlash>
      <div className="inline-flex items-center gap-2 px-3 py-2 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg">
        <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
          ✉️ Email:
        </span>
        {email ? (
          <span className="font-mono bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded text-sm text-orange-800 dark:text-orange-200">
            {email}
          </span>
        ) : (
          <span className="text-orange-500 dark:text-orange-400 text-sm italic">
            None
          </span>
        )}
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" title="Observando email"></div>
      </div>
    </RenderFlash>
  )
}

export default EmailLabel
