import { useState } from "react"

export const useToggleState = initialVal => {
  const [state, setState] = useState(initialVal)
  const onToggle = () => {
    setState(!state)
  }
  return [state, onToggle]
}
