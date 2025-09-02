import InputUrlParams from "@/components/input-url-params"
import CheckboxListUrlParams from "@/components/checkbox-list-url-params"
import Layout from "@/layout"

const UrlParams = () => {
  return (
    <Layout>
      <CheckboxListUrlParams paramName="tipo" />
      
      <InputUrlParams state="depth-1" />
      <InputUrlParams state="depth-2" />
      <InputUrlParams state="depth-3" />
      <InputUrlParams state="depth-4" />
      <InputUrlParams state="depth-5" />
      <InputUrlParams state="depth-6" />
      <InputUrlParams state="depth-7" />
      <InputUrlParams state="depth-8" />
      <InputUrlParams state="depth-9" />
      <InputUrlParams state="depth-10" />
    </Layout>
  )
}

export default UrlParams