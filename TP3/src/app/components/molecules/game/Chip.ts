export class Chip {
  context: CanvasRenderingContext2D
  posX: number
  posY: number
  radius: number
  id: number
  state: number
  circle: Path2D

  constructor(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    radius: number,
    id: number
  ) {
    this.context = context
    this.context.strokeStyle = '#fff'
    this.context.fillStyle = 'transparent'
    this.posX = posX
    this.posY = posY
    this.radius = radius
    this.id = id
    this.state = 0
    this.circle = new Path2D()
  }

  draw(): void {
    this.circle.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI)
    this.context.fill(this.circle)
    this.context.stroke(this.circle)
  }

  setFillStyle(style: string): void {
    this.context.fillStyle = style
  }

  setPosition(x: number, y: number) {
    this.posX = x
    this.posY = y
    this.draw()
  }

  isClicked(x: number, y: number): boolean {
    return this.context.isPointInPath(this.circle, x, y)
  }
}
