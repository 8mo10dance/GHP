import React from 'react'
import { Dialog, Slide } from '@material-ui/core'
import { DialogProps } from '@material-ui/core/Dialog'
import { TransitionProps } from '@material-ui/core/transitions'

const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children?: React.ReactElement }
>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
  open: boolean
  onClose: () => void
}

const _Dialog: React.FC<Props> = (props) => {
  return <Dialog TransitionComponent={Transition} fullScreen {...props} />
}

export default _Dialog
