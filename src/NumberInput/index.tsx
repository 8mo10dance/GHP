import React from 'react'
import { Box, IconButton, TextField } from '@material-ui/core'
import Add from '@/icons/Add'
import Remove from '@/icons/Remove'
import './input.css'

const NumberInput = () => {
  return (
    <Box
      component="span"
      display="inline-flex"
      minWidth={160}
      width={160}
      height={60}
    >
      <IconButton>
        <Remove fontSize="large" />
      </IconButton>
      <TextField
        type="number"
        fullWidth
        margin="dense"
        inputProps={{
          inputMode: 'decimal',
          step: '0.01',
          style: { textAlign: 'right' },
        }}
      />
      <IconButton>
        <Add fontSize="large" />
      </IconButton>
    </Box>
  )
}

export default NumberInput
