import InputUrlParams from "@/components/features/url-params/input-url-params"
import CheckboxListUrlParams from "@/components/features/url-params/checkbox-list-url-params"
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