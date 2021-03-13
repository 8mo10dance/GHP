export const drawImage = (
  imageFile: File,
  canvas: HTMLCanvasElement,
  pattern?: HTMLCanvasElement,
) => {
  const reader = new FileReader()
  reader.onloadend = () => {
    const url = reader.result
    if (typeof url === 'string') {
      const image = new Image()
      image.src = url
      image.onload = () => {
        Object.assign(canvas, {
          width: image.naturalWidth,
          height: image.naturalWidth,
        })
        const ctx = canvas.getContext('2d')
        if (!ctx || !pattern) return

        ctx.drawImage(image, 0, 0)
        const patternStyle = ctx.createPattern(pattern, 'repeat')
        if (!patternStyle) return

        ctx.fillStyle = patternStyle
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }
  reader.readAsDataURL(imageFile)
}
