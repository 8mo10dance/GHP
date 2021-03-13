const Pattern = {
  dotMesh: (rectSize: number) => {
    const canvas = document.createElement('canvas')
    canvas.width = rectSize
    canvas.height = rectSize

    const patternContext = canvas.getContext('2d')
    patternContext!.strokeRect(0, 0, rectSize, rectSize)

    return canvas
  },
}

export default Pattern
