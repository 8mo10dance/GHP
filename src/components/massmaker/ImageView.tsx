import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  canvas: {
    width: '100%',
    height: '100%',
  },
})

const ImageView = React.forwardRef<HTMLCanvasElement, {}>(({}, ref) => {
  const classes = useStyles()

  return <canvas ref={ref} className={classes.canvas} />
})

export default ImageView
