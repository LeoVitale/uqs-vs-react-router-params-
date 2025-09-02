import { useSearchParams } from 'react-router'
import { RenderFlash } from "./RenderFlash"

interface CheckboxOption {
  id: string
  label: string
  value: string
}

const defaultOptions: CheckboxOption[] = [
  { id: '1', label: 'Option 1', value: '1' },
  { id: '2', label: 'Option 2', value: '2' },
  { id: '3', label: 'Option 3', value: '3' },
  { id: '4', label: 'Option 4', value: '4' },
  { id: '5', label: 'Option 5', value: '5' },
]

interface CheckboxListUrlParamsProps {
  paramName?: string
  options?: CheckboxOption[]
}

const CheckboxListUrlParams = ({ 
  paramName = 'tipo', 
  options = defaultOptions 
}: CheckboxListUrlParamsProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  // Get all values for the parameter (handles multiple values like ?tipo=1&tipo=2)
  const selectedValues = searchParams.getAll(paramName)
  
  console.log(selectedValues)

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newSearchParams = new URLSearchParams(searchParams)
    
    if (checked) {
      // Add value if it doesn't exist
      if (!selectedValues.includes(value)) {
        newSearchParams.append(paramName, value)
      }
    } else {
      // Remove all instances of this parameter first
      newSearchParams.delete(paramName)
      // Then add back all values except the one we're removing
      selectedValues
        .filter(v => v !== value)
        .forEach(v => newSearchParams.append(paramName, v))
    }
    
    setSearchParams(newSearchParams)
  }

  const clearAll = () => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete(paramName)
    setSearchParams(newSearchParams)
  }

  return (
    <RenderFlash>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Checkbox List (React Router)</h3>
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                {option.label}
              </span>
            </label>
          ))}
        </div>
        
        {selectedValues.length > 0 && (
          <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Selected values: <strong>{selectedValues.join(', ')}</strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              URL: ?{paramName}={selectedValues.join(`&${paramName}=`)}
            </p>
          </div>
        )}
        
        <button 
          onClick={clearAll}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Clear All
        </button>
      </div>
    </RenderFlash>
  )
}

export default CheckboxListUrlParams
