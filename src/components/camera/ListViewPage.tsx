import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Box, IconButton, Typography } from '@material-ui/core'
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
    </Layout>
  )
}

export default ListViewPage
