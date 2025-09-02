import InboxLabel from './labels/inbox-label'
import FolderLabel from './labels/folder-label'
import TicketLabel from './labels/ticket-label'
import EmailLabel from './labels/email-label'

const ScatteredLabelsDemo = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">🌐 Scattered Labels Demo</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Labels scattered in different "locations" of the application - all synchronized!
        </p>
      </div>

      {/* Mock Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold">📱 App Header</span>
            <InboxLabel />
          </div>
          <div className="text-sm opacity-90">
            Status: Online
          </div>
        </div>
      </div>

      {/* Mock Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">📋 Sidebar Navigation</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm">Current Folder:</span>
              <FolderLabel />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              • Dashboard<br/>
              • Reports<br/>
              • Settings
            </div>
          </div>
        </div>

        {/* Mock Main Content */}
        <div className="md:col-span-2 bg-white dark:bg-gray-900 border rounded-lg p-4">
          <h3 className="font-semibold mb-3">📄 Main Content</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm">Active Ticket:</span>
              <TicketLabel />
            </div>
            <div className="h-32 bg-gray-50 dark:bg-gray-800 rounded border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              Content Area Placeholder
            </div>
          </div>
        </div>

        {/* Mock Info Panel */}
        <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">ℹ️ Info Panel</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">Current Email:</span>
              <EmailLabel />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Last updated: Just now
            </div>
          </div>
        </div>
      </div>

      {/* Mock Footer */}
      <div className="bg-gray-800 dark:bg-gray-900 text-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-sm opacity-75">
            © 2024 Helpdesk App
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>Quick Status:</span>
            <div className="flex gap-2">
              <InboxLabel />
              <FolderLabel />
              <TicketLabel />
              <EmailLabel />
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          🧠 How the magic works:
        </h3>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <p>✅ <strong>Each label</strong> is an independent component with its own <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">useQueryState</code></p>
          <p>✅ <strong>Zero coupling</strong> - one label doesn't know about the existence of others</p>
          <p>✅ <strong>Automatic synchronization</strong> - all observe the same URL</p>
          <p>✅ <strong>Performance</strong> - each label re-renders only when ITS parameter changes</p>
          <p>✅ <strong>Reusable</strong> - the same component can be used anywhere</p>
        </div>
      </div>
    </div>
  )
}

export default ScatteredLabelsDemo
