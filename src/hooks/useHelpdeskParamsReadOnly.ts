import { useQueryState, useQueryStates, parseAsInteger } from 'nuqs'

export interface HelpdeskLocationParams {
  inbox?: number;
  folder?: number;
  ticket?: number;
  email?: number;
}

/**
 * Hook customizado para observar parâmetros do Helpdesk em modo read-only
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const params = useHelpdeskParamsReadOnly()
 *   // params.inbox, params.folder, params.ticket, params.email
 *   // Não há funções setter - apenas valores observáveis
 * }
 * ```
 */
export const useHelpdeskParamsReadOnly = (): HelpdeskLocationParams => {
  // Só retorna os valores, não o setter
  const [params] = useQueryStates({
    inbox: parseAsInteger,
    folder: parseAsInteger,
    ticket: parseAsInteger,
    email: parseAsInteger
  })

  return {
    inbox: params.inbox ?? undefined,
    folder: params.folder ?? undefined,
    ticket: params.ticket ?? undefined,
    email: params.email ?? undefined
  }
}

/**
 * Hook customizado para observar apenas inbox e folder em modo read-only
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { inbox, folder } = useInboxFolderReadOnly()
 *   return <div>Inbox: {inbox}, Folder: {folder}</div>
 * }
 * ```
 */
export const useInboxFolderReadOnly = () => {
  const [inbox] = useQueryStates({ inbox: parseAsInteger })
  const [folder] = useQueryStates({ folder: parseAsInteger })

  return {
    inbox: inbox.inbox ?? undefined,
    folder: folder.folder ?? undefined
  }
}

/**
 * Hook alternativo usando múltiplos useQueryState (mais eficiente para poucos parâmetros)
 */
export const useInboxFolderReadOnlySimple = () => {
  const [inbox] = useQueryState('inbox', parseAsInteger)
  const [folder] = useQueryState('folder', parseAsInteger)

  return {
    inbox: inbox ?? undefined,
    folder: folder ?? undefined
  }
}
