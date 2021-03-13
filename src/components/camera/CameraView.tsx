import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Video from '@/components/common/Video'
import { VideoElement } from '@/components/camera/CameraPage'

const useStyles = makeStyles({
  video: {
    width: '100%',
    height: '100%',
    'object-fit': 'contain',
    'object-position': 'center center',
  },
  image: {
    position: 'absolute',
    left: 0,
    bottom: 50,
    width: '10%',
    height: '10%',
    'object-fit': 'contain',
    'object-position': 'center center',
  },
})

type Props = {
  srcObject?: MediaStream
  imageBlob?: unknown
}

const CameraView = React.forwardRef<VideoElement, Props>(
  ({ srcObject, imageBlob }, ref) => {
    const classes = useStyles()

    return (
      <Box position="absolute" top={0} left={0} width={1} height={1}>
        <Video
          muted
          autoPlay
          playsInline
          srcObject={srcObject}
          className={classes.video}
          ref={ref}
        />
        {Boolean(imageBlob) && (
          <img src={URL.createObjectURL(imageBlob)} className={classes.image} />
        )}
      </Box>
    )
  },
)

export default CameraView
