import { VFC } from 'react'
import { Component } from './Component'

export type ContainerProps = {}

export const Container: VFC<ContainerProps> = ({ ...props }) => {
  return <Component {...props} {...{}} />
}
