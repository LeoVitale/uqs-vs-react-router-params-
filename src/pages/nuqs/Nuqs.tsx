import InputNuqsParams from "@/components/features/nuqs/input-nuqs-params"
import CheckboxListNuqs from "@/components/features/nuqs/checkbox-list-nuqs"
import InboxObserver from "@/components/features/nuqs/inbox-observer"
import FolderObserver from "@/components/features/nuqs/folder-observer"
import InboxFolderDisplay from "@/components/features/nuqs/inbox-folder-display"
import HelpdeskBreadcrumb from "@/components/helpdesk-breadcrumb"
import IndependentLabelsShowcase from "@/components/features/nuqs/independent-labels-showcase"
import ScatteredLabelsDemo from "@/components/features/nuqs/scattered-labels-demo"
import Layout from "@/layout"

const Nuqs = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb always at the top */}
        <HelpdeskBreadcrumb />
        
        {/* Independent Labels Showcase */}
        <IndependentLabelsShowcase />
        
        {/* Scattered Labels Demo */}
        <ScatteredLabelsDemo />
        
        <div>
          <h2 className="text-xl font-bold mb-4">Specific Parameters (Observers)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InboxObserver />
            <FolderObserver />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Read-Only Observer</h3>
            <InboxFolderDisplay />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Other Examples</h2>
          <div className="space-y-4">
            <CheckboxListNuqs paramName="tipo" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <InputNuqsParams state="depth-1" />
              <InputNuqsParams state="depth-2" />
              <InputNuqsParams state="depth-3" />
              <InputNuqsParams state="depth-4" />
              <InputNuqsParams state="depth-5" />
              <InputNuqsParams state="depth-6" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Nuqs