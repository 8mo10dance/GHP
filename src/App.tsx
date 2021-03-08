import React from 'react'
import { CssBaseline } from '@material-ui/core'
import NumberInput, { NumberInputElement } from './NumberInput'

const App = () => {
  const ref = React.useRef<NumberInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (ref.current) {
      console.log(ref.current.value())
    }
  }

  return (
    <>
      <CssBaseline />
      <form onSubmit={handleSubmit}>
        <NumberInput
          ref={ref}
          inputMode="decimal"
          step="0.01"
          min="0"
          max="999"
        />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default App
