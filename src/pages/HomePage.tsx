import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import Layout from '@/components/common/Layout'

type Props = {}

const HomePage: React.FC<Props> = () => {
  return (
    <Layout>
      <AppBar color="primary">
        <Box display="flex" alignItems="center">
          <Box component="span" flex={1}>
            <Typography component="h2" variant="h6">
              マスメーカー
            </Typography>
          </Box>
        </Box>
      </AppBar>
      <Toolbar />
    </Layout>
  )
}

export default HomePage
