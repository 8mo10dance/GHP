import React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import Remove from './Remove.svg'

const RemoveIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} component={Remove} viewBox="0 0 132 84" />
)

export default RemoveIcon
