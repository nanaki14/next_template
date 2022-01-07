import { VFC } from 'react'
import { Container, ContainerProps } from './Container'

export const AppLayout: VFC<ContainerProps> = (props) => (
  <Container {...props} />
)
