import React from 'react'
import { VideoElement } from '@/components/camera/CameraPage'

type Props = React.HTMLProps<HTMLVideoElement> & {
  srcObject?: MediaStream
}

const Video = React.forwardRef<VideoElement, Props>(
  ({ srcObject, ...props }, ref) => {
    const videoRef = React.useRef<HTMLVideoElement>(null)

    React.useImperativeHandle(ref, () => ({
      videoEl: () => videoRef.current,
    }))

    React.useEffect(() => {
      if (!srcObject) return

      // srcObject は <video srcObject={srcObject} /> のように React 経由では渡せない。
      // なので、ref を使って直接DOMにわたす。
      videoRef.current!.srcObject = srcObject
    }, [srcObject])

    return <video {...props} ref={videoRef} />
  },
)

export default Video
