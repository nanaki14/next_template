import { VFC, ReactNode } from 'react'
import { Component } from './Component'

export type ContainerProps = {
  className?: string
  children: ReactNode
}

export const Container: VFC<ContainerProps> = ({ ...props }) => {
  return <Component {...props} {...{}} />
}
