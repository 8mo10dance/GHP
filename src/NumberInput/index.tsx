import React from 'react'
import { Box, IconButton, TextField } from '@material-ui/core'
import Add from '@/icons/Add'
import Remove from '@/icons/Remove'
import './input.css'

export type NumberInputElement = {
  value: () => number
}

type Props = React.HTMLProps<HTMLInputElement>

const NumberInput = React.forwardRef<NumberInputElement, Props>(
  ({ defaultValue = 0, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => ({
      value: () => {
        if (!inputRef.current) return 0

        return inputRef.current.valueAsNumber
      },
    }))

    const handleDecClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (!inputRef.current) return
      if (isNaN(inputRef.current.valueAsNumber)) return

      inputRef.current.valueAsNumber--
      if (!inputRef.current.validity.valid) {
        inputRef.current.valueAsNumber++
      }
    }

    const handleIncClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (!inputRef.current) return
      if (isNaN(inputRef.current.valueAsNumber)) return

      inputRef.current.valueAsNumber++
      if (!inputRef.current.validity.valid) {
        inputRef.current.valueAsNumber--
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!inputRef.current) return

      if (!inputRef.current.validity.valid) {
        inputRef.current.value = '0'
      }
    }

    return (
      <Box
        component="span"
        display="inline-flex"
        minWidth={160}
        width={160}
        height={60}
      >
        <IconButton onClick={handleDecClick}>
          <Remove fontSize="large" />
        </IconButton>
        <TextField
          type="number"
          fullWidth
          margin="dense"
          inputProps={{
            ...props,
            style: { textAlign: 'right' },
          }}
          defaultValue={defaultValue}
          inputRef={inputRef}
          onChange={handleChange}
        />
        <IconButton onClick={handleIncClick}>
          <Add fontSize="large" />
        </IconButton>
      </Box>
    )
  },
)

export default NumberInput
