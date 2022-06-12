export class Chip {
  context: CanvasRenderingContext2D
  posX: number
  posY: number
  radius: number
  id: number
  state: number
  circle: Path2D
  colorPlayer1: string
  colorPlayer2: string

  constructor(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    radius: number,
    id: number
  ) {
    this.context = context
    // this.context.strokeStyle = '#fff'
    this.context.fillStyle = 'transparent'
    this.posX = posX
    this.posY = posY
    this.radius = radius
    this.id = id
    this.state = 0
    this.circle = new Path2D()
    this.colorPlayer1 = 'red'
    this.colorPlayer2 = 'yellow'
  }

  draw(): void {
    this.setFillStyle()
    this.circle = new Path2D()
    this.circle.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI)
    this.context.fill(this.circle)
    this.context.stroke(this.circle)
    this.circle.closePath()
  }

  setFillStyle(): void {
    if (this.state == 1) this.context.fillStyle = this.colorPlayer1
    else if (this.state == 2) this.context.fillStyle = this.colorPlayer2
    else this.context.fillStyle = 'transparent'
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
