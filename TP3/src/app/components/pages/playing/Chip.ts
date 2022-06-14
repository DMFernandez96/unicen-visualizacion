export class Chip {
  context: CanvasRenderingContext2D
  posX: number
  posY: number
  radius: number
  id: number
  private state!: number
  circle: Path2D
  img: HTMLImageElement

  constructor(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    radius: number,
    id: number,
    state: number
  ) {
    this.context = context
    this.posX = posX
    this.posY = posY
    this.radius = radius
    this.id = id
    this.circle = new Path2D()
    this.img = new Image()
    this.img.onload = () => {
      this.draw()
    }
    this.setState(state)
  }

  getState(): number {
    return this.state
  }

  setState(state: number): void {
    this.state = state
    if (this.state == 1) {
      this.img.src = 'assets/images/chip-red.webp'
    } else if (this.state == 2) {
      this.img.src = 'assets/images/chip-yellow.webp'
    }
  }

  draw(): void {
    if (this.state == 0) {
      this.context.fillStyle = 'transparent'
      this.circle = new Path2D()
      this.circle.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI)
      this.context.fill(this.circle)
      this.context.stroke(this.circle)
      this.circle.closePath()
    } else {
      this.context.drawImage(
        this.img,
        this.posX - this.radius,
        this.posY - this.radius
      )
    }
  }

  setPosition(x: number, y: number) {
    this.posX = x
    this.posY = y
    this.draw()
  }

  isClicked(x: number, y: number): boolean {
    const _x = this.posX - x
    const _y = this.posY - y
    return Math.sqrt(_x * _x + _y * _y) < this.radius
  }
}
