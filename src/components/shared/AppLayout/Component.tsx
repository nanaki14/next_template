import { VFC } from 'react'
import { ContainerProps } from './Container'

type Props = {} & ContainerProps

export const Component: VFC<Props> = (props) => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  )
}
