const createImageBlob = async (
  source: HTMLVideoElement | null,
  mimetype = 'image/jpeg',
) => {
  if (!source) return

  // video の内容を canvas に描画してから blob に変換する
  const canvas = document.createElement('canvas')
  Object.assign(canvas, {
    width: source.videoWidth,
    height: source.videoHeight,
  })

  const ctx = canvas.getContext('2d')
  ctx!.drawImage(source, 0, 0)

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, mimetype))
  return blob
}

export default createImageBlob
