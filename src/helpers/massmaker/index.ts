export const drawImage = (imageFile: File, canvas: HTMLCanvasElement) => {
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
        ctx!.drawImage(image, 0, 0)
      }
    }
  }
  reader.readAsDataURL(imageFile)
}