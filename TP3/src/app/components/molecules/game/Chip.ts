export class Chip {
  context: CanvasRenderingContext2D
  posX: number
  posY: number
  radius: number
  id: number

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

  setPosition(x: number, y: number) {
    this.posX = x
    this.posY = y
    this.draw()
  }

  IsPointInside(x: number, y: number): boolean {
    //return if x and y are inside the chip (in other words the chip are clicked)
    return false
  }
}
