import { useEffect } from 'react'
import { environments } from '@/environments'

export const useResizeObserver = (
  target: globalThis.Element,
  func: (params: { width: number; height: number }) => void
) => {
  useEffect(() => {
    if (environments.isServer || !target) return

    const observer = new ResizeObserver((entries) => {
      for (const e of entries) {
        func({ width: e.contentRect.width, height: e.contentRect.height })
      }
    })
    observer.observe(target)

    return () => {
      observer.unobserve(target)
      observer.disconnect()
    }
  }, [target])
}
