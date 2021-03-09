import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import Layout from '@/components/common/Layout'
import CameraView from '@/components/camera/CameraView'
import CameraController from '@/components/camera/CameraController'

const CameraPage = () => {
  const [stream, setStream] = React.useState<MediaStream>()

  React.useEffect(() => {
    updateStream()
  }, [])

  // 端末のカメラを取得する。
  const updateStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        aspectRatio: { ideal: 16 / 9 },
        facingMode: { ideal: 'environment' }, // environment: 外型のカメラ, user: 内側のカメラ
      },
    })

    setStream(stream)
  }

  return (
    <Layout>
      <AppBar color="secondary">
        <Box display="flex" alignItems="center">
          <IconButton component={Link} to="/">
            <Close />
          </IconButton>
          <Typography component="h2" variant="h6">
            写真を撮影
          </Typography>
        </Box>
      </AppBar>
      <Toolbar />
      <CameraView srcObject={stream} />
      <CameraController />
    </Layout>
  )
}

export default CameraPage
