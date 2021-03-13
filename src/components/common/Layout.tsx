import React from 'react'
import { Box } from '@material-ui/core'

type Props = React.HTMLProps<HTMLDivElement>

const Layout: React.FC<Props> = (props) => (
  <Box position="fixed" top={0} left={0} width={1} height={1} {...props} />
)

export default Layout
