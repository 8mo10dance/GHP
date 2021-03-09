import React from 'react'

type Props = React.HTMLProps<HTMLVideoElement> & {
  srcObject?: MediaStream
}

const Video: React.FC<Props> = ({ srcObject, ...props }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    if (!srcObject) return

    // srcObject は <video srcObject={srcObject} /> のように React 経由では渡せない。
    // なので、ref を使って直接DOMにわたす。
    videoRef.current!.srcObject = srcObject
  }, [srcObject])

  return <video {...props} ref={videoRef} />
}

export default Video
