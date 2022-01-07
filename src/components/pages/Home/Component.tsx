import { NextSeo } from 'next-seo'
import { VFC } from 'react'
import { ContainerProps } from './Container'

type Props = {} & ContainerProps

export const Component: VFC<Props> = () => {
  return (
    <div className="relative">
      <NextSeo title="ホーム" />
    </div>
  )
}
