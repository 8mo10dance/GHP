import React from 'react'

const App = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('aaa')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type="submit">submit</button>
    </form>
  )
}

export default App
