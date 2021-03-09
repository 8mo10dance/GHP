import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core'
import CameraPage from '@/components/camera/CameraPage'
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
        <AppBar position="fixed">
          <Typography component="h1" variant="h6">
            トップ
          </Typography>
        </AppBar>
        <Toolbar />
        <NumberInput
          ref={ref}
          inputMode="decimal"
          step="0.01"
          min="0"
          max="999"
        />
        <button type="submit">submit</button>
        <Box
          display="flex"
          justifyContent="center"
          position="fixed"
          bottom={50}
          width={1}
        >
          <Button variant="contained" color="primary">
            商品の写真を撮る
          </Button>
        </Box>
      </form>
    </>
  )
}

export default App
