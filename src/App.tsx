import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core'
import Dialog from '@/components/common/Dialog'
import CameraPage from '@/components/camera/CameraPage'
import useImageBlobs from '@/hooks/useImageBlobs'
import NumberInput, { NumberInputElement } from './NumberInput'

const SamplePage = () => {
  const { imageBlobs, initialize, push } = useImageBlobs()
  const ref = React.useRef<NumberInputElement>(null)
  const history = useHistory()
  const matchCameraPage = useRouteMatch('/camera')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (ref.current) {
      console.log(ref.current.value())
    }
  }

  return (
    <>
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
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/camera"
          >
            商品の写真を撮る
          </Button>
        </Box>
      </form>
      <Dialog open={Boolean(matchCameraPage)} onClose={() => history.push('/')}>
        <Switch>
          <Route path="/camera">
            <CameraPage
              imageBlobs={imageBlobs}
              initialize={initialize}
              push={push}
            />
          </Route>
        </Switch>
      </Dialog>
    </>
  )
}

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/">
            <SamplePage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
