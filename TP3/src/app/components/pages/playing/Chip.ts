export class Chip {
  context: CanvasRenderingContext2D
  posX: number
  posY: number
  radius: number
  id: number
  state: number
  circle: Path2D
  img1: any
  img2: any

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
    this.img1 = new Image()
    this.img2 = new Image()
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
    if (this.state == 1) {
      //const img1 = new Image()
      this.img1.src = 'assets/images/chip-red.webp'
      this.img1.onload = () => {
        this.context.drawImage(
          this.img1,
          this.posX - this.radius,
          this.posY - this.radius
        )
      }
    } else if (this.state == 2) {
      //const img2 = new Image()
      this.img2.src = 'assets/images/chip-yellow.webp'
      this.img2.onload = () => {
        this.context.drawImage(
          this.img2,
          this.posX - this.radius,
          this.posY - this.radius
        )
      }
    } else this.context.fillStyle = 'transparent'
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
