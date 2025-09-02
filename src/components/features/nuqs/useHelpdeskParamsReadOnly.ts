import { useQueryState, useQueryStates, parseAsInteger } from 'nuqs'

export interface HelpdeskLocationParams {
  inbox?: number;
  folder?: number;
  ticket?: number;
  email?: number;
}

/**
 * Custom hook to observe Helpdesk parameters in read-only mode
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const params = useHelpdeskParamsReadOnly()
 *   // params.inbox, params.folder, params.ticket, params.email
 *   // No setter functions - only observable values
 * }
 * ```
 */
export const useHelpdeskParamsReadOnly = (): HelpdeskLocationParams => {
  // Only returns the values, not the setter
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
 * Custom hook to observe only inbox and folder in read-only mode
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
 * Alternative hook using multiple useQueryState (more efficient for few parameters)
 */
export const useInboxFolderReadOnlySimple = () => {
  const [inbox] = useQueryState('inbox', parseAsInteger)
  const [folder] = useQueryState('folder', parseAsInteger)

  return {
    inbox: inbox ?? undefined,
    folder: folder ?? undefined
  }
}
