import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { ImageBlob } from '@/types/utils'
import Layout from '@/components/common/Layout'
import CameraView from '@/components/camera/CameraView'
import CameraController from '@/components/camera/CameraController'
import createImageBlob from '@/helpers/createImageBlob'

export type VideoElement = {
  videoEl: () => HTMLVideoElement | null
}

type Props = {
  imageBlobs: ImageBlob[]
  initialize: () => void
  push: (imageBlob: ImageBlob) => void
}

const CameraPage: React.FC<Props> = ({ imageBlobs, initialize, push }) => {
  const [stream, setStream] = React.useState<MediaStream>()
  const videoRef = React.useRef<VideoElement>(null)

  React.useEffect(() => {
    initialize()
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

  const handleClickShutter = async () => {
    if (!videoRef.current) return

    const blob = await createImageBlob(videoRef.current.videoEl())
    push(blob)
  }

  const previewImageBlob =
    imageBlobs.length > 0 ? imageBlobs[imageBlobs.length - 1] : undefined

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
      <CameraView
        srcObject={stream}
        imageBlob={previewImageBlob}
        ref={videoRef}
      />
      <CameraController onClickShutter={handleClickShutter} />
    </Layout>
  )
}

export default CameraPage
