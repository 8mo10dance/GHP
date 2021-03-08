import React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import Add from './Add.svg'

const AddIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} component={Add} viewBox="0 0 132 84" />
)

export default AddIcon
