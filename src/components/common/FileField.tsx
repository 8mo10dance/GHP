import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
})

type Props = React.HTMLProps<HTMLInputElement>

const FileField: React.FC<Props> = (props) => {
  const classes = useStyles()

  return (
    <span>
      <input
        {...props}
        type="file"
        accept="image/*"
        id="file-upload"
        className={classes.input}
      />
      <label htmlFor="file-upload">
        <Button variant="contained" color="primary" component="span">
          アップロード
        </Button>
      </label>
    </span>
  )
}

export default FileField
