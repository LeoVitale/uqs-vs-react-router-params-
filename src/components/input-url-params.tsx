import { RenderFlash } from "./RenderFlash"
import { Input } from "./ui/input"
import { useSearchParams } from 'react-router'

const InputUrlParams = ({state}: {state: string}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const value = searchParams.get(state) || ''
  
  const setValue = (newValue: string) => {
    const newSearchParams = new URLSearchParams(searchParams)
    if (newValue) {
      newSearchParams.set(state, newValue)
    } else {
      newSearchParams.delete(state)
    }
    setSearchParams(newSearchParams)
  }

  return (
    <RenderFlash>
      <Input
        type="text"
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </RenderFlash>
  )
}

export default InputUrlParams