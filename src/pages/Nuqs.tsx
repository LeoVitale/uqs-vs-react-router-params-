import InputNuqsParams from "@/components/input-nuqs-params"
import CheckboxListNuqs from "@/components/checkbox-list-nuqs"
import InboxObserver from "@/components/inbox-observer"
import FolderObserver from "@/components/folder-observer"
import InboxFolderDisplay from "@/components/inbox-folder-display"
import HelpdeskBreadcrumb from "@/components/helpdesk-breadcrumb"
import IndependentLabelsShowcase from "@/components/independent-labels-showcase"
import ScatteredLabelsDemo from "@/components/scattered-labels-demo"
import Layout from "@/layout"

const Nuqs = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb sempre no topo */}
        <HelpdeskBreadcrumb />
        
        {/* Showcase de Labels Independentes */}
        <IndependentLabelsShowcase />
        
        {/* Demo de Labels Espalhados */}
        <ScatteredLabelsDemo />
        
        <div>
          <h2 className="text-xl font-bold mb-4">Parâmetros Específicos (Observadores)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InboxObserver />
            <FolderObserver />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Read-Only Observer (Somente Leitura)</h3>
            <InboxFolderDisplay />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Outros Exemplos</h2>
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