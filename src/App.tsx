import React from 'react'
import NumberInput from './NumberInput'

const App = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('aaa')
  }

  return (
    <form onSubmit={handleSubmit}>
      <NumberInput />
      <button type="submit">submit</button>
    </form>
  )
}

export default App
