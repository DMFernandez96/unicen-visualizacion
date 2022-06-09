import { Chip } from '../../pages/playing/Chip'

export class Board {
  context: CanvasRenderingContext2D
  posX: number
  posY: number
  width: number
  height: number
  chips: Chip[]
  radius: number
  gap: number
  gapBorder: number

  constructor(
    context: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    width: number,
    height: number
  ) {
    this.context = context
    this.context.fillStyle = '#b2b2b2'
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
    this.chips = []
    this.radius = 40
    this.gap = 10
    this.gapBorder = 30
  }

  setPosition(x: number, y: number) {
    this.posX = x
    this.posY = y
  }

  getPosition() {
    return {
      x: this.getPosX(),
      y: this.getPosY()
    }
  }

  getPosX() {
    return this.posX
  }

  getPosY() {
    return this.posY
  }

  setFillStyle(style: string): void {
    this.context.fillStyle = style
  }

  draw(): void {
    this.context.beginPath()
    this.context.fill()
    this.context.stroke()
    this.context.fillRect(this.posX, this.posY, this.width, this.height)
  }

  initializeBoard(): void {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const chip: Chip = new Chip(
          this.context,
          2 * this.radius * i + this.radius + this.gapBorder + this.gap * i,
          2 * this.radius * j + this.radius + this.gapBorder + this.gap * j,
          this.radius
        )
        chip.draw()
        this.chips.push(chip)
      }
    }
  }
}
