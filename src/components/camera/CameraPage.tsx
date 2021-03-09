import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import Layout from '@/components/common/Layout'
import CameraView from '@/components/camera/CameraView'
import CameraController from '@/components/camera/CameraController'

const CameraPage = () => {
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
      <CameraView />
      <CameraController />
    </Layout>
  )
}

export default CameraPage
