import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import Layout from '@/components/common/Layout'
import FileField from '@/components/common/FileField'
import ImageView from '@/components/massmaker/ImageView'
import { drawImage } from '@/helpers/massmaker'

type Props = {}

const HomePage: React.FC<Props> = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files![0]
    if (!imageFile || !canvasRef.current) return

    drawImage(imageFile, canvasRef.current)
  }

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
      <Box p={2}>
        <Box>
          <FileField onChange={handleChange} />
        </Box>
        <Box pt={2}>
          <ImageView ref={canvasRef} />
        </Box>
      </Box>
    </Layout>
  )
}

export default HomePage
