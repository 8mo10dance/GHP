import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

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

const SAMPLE_IMAGE_SRC = 'https://picsum.photos/1080/1920/?image=15'

const CameraView = () => {
  const classes = useStyles()

  return <img src={SAMPLE_IMAGE_SRC} className={classes.base} />
}

export default CameraView
