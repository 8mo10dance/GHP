import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Video from '@/components/common/Video'

const useStyles = makeStyles({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    'object-fit': 'contain',
    'object-position': 'center center',
  },
})

type Props = {
  srcObject?: MediaStream
}

const CameraView: React.FC<Props> = ({ srcObject }) => {
  const classes = useStyles()

  return (
    <Video
      muted
      autoPlay
      playsInline
      srcObject={srcObject}
      className={classes.base}
    />
  )
}

export default CameraView
