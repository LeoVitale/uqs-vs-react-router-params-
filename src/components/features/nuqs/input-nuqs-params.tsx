import { RenderFlash } from "../../RenderFlash"
import { Input } from "../../ui/input"
import { useQueryState } from 'nuqs'

const InputNuqsParams = ({state}: {state: string}) => {
  const [value, setValue] = useQueryState(state) 

  return (
    <RenderFlash>
      <Input
        type="text"
        placeholder="Type something"
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
      />
    </RenderFlash>
  )
}

export default InputNuqsParams