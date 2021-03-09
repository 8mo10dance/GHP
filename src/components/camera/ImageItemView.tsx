import React from 'react'
import { Badge, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ImageBlob } from '@/types/utils'

const useStyles = makeStyles({
  image: {
    width: '100%',
    height: '100%',
    'object-fit': 'contain',
    'object-position': 'center center',
  },
})

type Props = {
  imageBlob: ImageBlob
  isSelected: boolean
  toggleSelected: () => void
}

const ImageItemView: React.FC<Props> = ({
  imageBlob,
  isSelected,
  toggleSelected,
}) => {
  const classes = useStyles()

  return (
    <Badge color="secondary" variant={isSelected ? 'dot' : undefined}>
      <ButtonBase onClick={toggleSelected}>
        <img src={URL.createObjectURL(imageBlob)} className={classes.image} />
      </ButtonBase>
    </Badge>
  )
}

export default ImageItemView
