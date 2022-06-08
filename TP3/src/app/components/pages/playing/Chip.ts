export class Chip {
  context: CanvasRenderingContext2D
  posX: number
  posY: number
  radius: number

  constructor(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    radius: number
  ) {
    this.context = context
    this.context.strokeStyle = '#fff'
    this.context.fillStyle = 'transparent'
    this.posX = posX
    this.posY = posY
    this.radius = radius
  }

  draw(): void {
    this.context.beginPath()
    this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI)
    this.context.fill()
    this.context.stroke()
  }

  setFillStyle(style: string): void {
    this.context.fillStyle = style
  }
}