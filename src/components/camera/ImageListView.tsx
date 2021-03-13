import React from 'react'
import { Grid } from '@material-ui/core'
import { ImageBlob } from '@/types/utils'
import ImageItemView from '@/components/camera/ImageItemView'

type Props = {
  imageBlobs: ImageBlob[]
  isSelected: (index: number) => boolean
  toggleSelected: (index: number) => void
}

const ImageListView: React.FC<Props> = ({
  imageBlobs,
  isSelected,
  toggleSelected,
}) => {
  return (
    <Grid container spacing={2}>
      {imageBlobs.map((blob, index) => (
        <Grid key={index} item xs={3}>
          <ImageItemView
            imageBlob={blob}
            isSelected={isSelected(index)}
            toggleSelected={() => toggleSelected(index)}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ImageListView
