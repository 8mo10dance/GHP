import React from 'react'
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import Dialog from '@/components/common/Dialog'
import NumberInput, {
  NumberInputElement,
} from '@/components/common/NumberInput'
import CameraPage from '@/components/camera/CameraPage'
import ListViewPage from '@/components/camera/ListViewPage'
import useImageBlobs from '@/hooks/useImageBlobs'

const SamplePage = () => {
  const {
    imageBlobs,
    imageBlobsSelection,
    initialize,
    push,
    toggleSelected,
  } = useImageBlobs()
  const ref = React.useRef<NumberInputElement>(null)
  const history = useHistory()
  const matchCameraPage = useRouteMatch('/camera')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (ref.current) {
      console.log(ref.current.value())
    }
  }

  React.useEffect(() => {
    initialize()
  }, [])

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
            to="/camera/input"
          >
            商品の写真を撮る
          </Button>
        </Box>
      </form>
      <Dialog open={Boolean(matchCameraPage)} onClose={() => history.push('/')}>
        <Switch>
          <Route path="/camera/input">
            <CameraPage imageBlobs={imageBlobs} push={push} />
          </Route>
          <Route path="/camera/confirm">
            <ListViewPage
              imageBlobs={imageBlobs}
              isSelected={(index: number) => imageBlobsSelection[index]}
              toggleSelected={toggleSelected}
            />
          </Route>
        </Switch>
      </Dialog>
    </>
  )
}

export default SamplePage
