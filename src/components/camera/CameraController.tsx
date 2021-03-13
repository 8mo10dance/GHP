import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import { Lens } from '@material-ui/icons'

type Props = {
  onClickShutter?: () => void
}

const CameraController: React.FC<Props> = ({ onClickShutter }) => {
  return (
    <Box
      position="absolute"
      right={0}
      bottom={0}
      left={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={1}
      bgcolor="rgba(0,0,0,0.5)"
    >
      <IconButton color="default" onClick={onClickShutter}>
        <Lens fontSize="large" />
      </IconButton>
    </Box>
  )
}

export default CameraController
