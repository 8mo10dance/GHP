import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'
import { NavigateBefore } from '@material-ui/icons'
import { ImageBlob } from '@/types/utils'
import Layout from '@/components/common/Layout'
import ImageListView from '@/components/camera/ImageListView'

type Props = {
  imageBlobs: ImageBlob[]
  isSelected: (index: number) => boolean
  toggleSelected: (index: number) => void
}

const ListViewPage: React.FC<Props> = ({
  imageBlobs,
  isSelected,
  toggleSelected,
}) => {
  const history = useHistory()

  const handleClick = () => {
    const selectedBlobs = imageBlobs.filter((blob, index) => isSelected(index))
    const formData = new FormData()

    selectedBlobs.forEach((blob, index) => {
      if (blob instanceof Blob) {
        formData.append(`image[${index}]`, blob)
      }
    })

    console.log(formData)

    history.push('/')
  }

  return (
    <Layout>
      <AppBar color="secondary">
        <Box display="flex" alignItems="center">
          <IconButton component={Link} to="/camera/input">
            <NavigateBefore />
          </IconButton>
          <Box component="span" flex={1}>
            <Typography component="h2" variant="h6">
              写真を確認
            </Typography>
          </Box>
        </Box>
      </AppBar>
      <Toolbar />
      <ImageListView
        imageBlobs={imageBlobs}
        isSelected={isSelected}
        toggleSelected={toggleSelected}
      />
      <Box
        position="fixed"
        bottom={50}
        width={1}
        display="flex"
        justifyContent="center"
      >
        <Button variant="contained" color="secondary" onClick={handleClick}>
          写真を送信する
        </Button>
      </Box>
    </Layout>
  )
}

export default ListViewPage
