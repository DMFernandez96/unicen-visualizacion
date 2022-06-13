import { Chip } from './Chip'

export class Game {
  // canvas!: ElementRef<HTMLCanvasElement>
  context: CanvasRenderingContext2D

  boardWidth = 7
  boardHeigth = 6
  gap = 10
  gapBorder = 30
  radius = 40
  columnDeck = 270

  chipsPerPlayer: number

  chips: Array<Array<Chip>>
  dropsContainers: Path2D[]
  chipsDeck: Chip[]
  turnOfPlayer1: boolean

  mouseDown: boolean
  chipSelected: Chip | undefined

  constructor(context: CanvasRenderingContext2D) {
    this.context = context
    this.chips = new Array<Array<Chip>>()
    this.dropsContainers = []
    this.chipsDeck = []
    this.turnOfPlayer1 = true
    this.mouseDown = false
    this.chipSelected = undefined
    this.chipsPerPlayer = (this.boardHeigth * this.boardWidth) / 2

    this.context.strokeStyle = '#fff'
    this.initializeDropsContainers()
    this.initializeBoard()
    this.addPlayerChips()
  }

  repaint(): void {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    )
    this.chips.forEach((column) => {
      column.forEach((chip) => {
        chip.draw()
      })
    })
    this.chipsDeck.forEach((chip) => {
      chip.draw()
    })
    this.dropsContainers.forEach((container) => {
      this.context.stroke(container)
    })
    this.drawBorderDeck()
  }

  initializeDropsContainers(): void {
    for (let i = 0; i < this.boardWidth; i++) {
      const container = new Path2D()
      container.rect(
        this.columnDeck +
          2 * this.gapBorder +
          this.radius * 2 * i +
          this.gap * i,
        this.gapBorder,
        this.radius * 2,
        this.radius
      )
      this.context.stroke(container)
      this.dropsContainers.push(container)
    }
  }

  initializeBoard(): void {
    let idCounter = 0
    for (let i = 0; i < this.boardWidth; i++) {
      for (let j = 0; j < this.boardHeigth; j++) {
        const chip: Chip = new Chip(
          this.context,

          this.columnDeck +
            2 * this.radius * i +
            2 * this.radius +
            this.gapBorder +
            this.gap * (i - 1),
          2 * this.radius * j +
            this.radius +
            this.gapBorder +
            this.gap * j +
            this.gap +
            this.radius,
          this.radius,
          idCounter
        )
        chip.draw()
        if (this.chips[i] == undefined) this.chips[i] = new Array<Chip>()
        this.chips[i].push(chip)
        idCounter++
      }
    }
  }

  getMouseEventCoordinates(event: MouseEvent): { x: number; y: number } {
    const canvasX = this.context.canvas.getBoundingClientRect().x
    const canvasY = this.context.canvas.getBoundingClientRect().y
    return { x: event.clientX - canvasX, y: event.clientY - canvasY }
  }

  canvasMouseDown(event: MouseEvent): void {
    const { x, y } = this.getMouseEventCoordinates(event)
    for (let i = 0; i < this.chipsDeck.length; i++) {
      if (this.chipsDeck[i].isClicked(x, y)) {
        if (this.turnOfPlayer1 && this.chipsDeck[i].state == 1) {
          this.chipSelected = this.chipsDeck[i]
          this.mouseDown = true
          break
        } else if (!this.turnOfPlayer1 && this.chipsDeck[i].state == 2) {
          this.chipSelected = this.chipsDeck[i]
          this.mouseDown = true
          break
        }
      }
    }
  }

  canvasMouseUp(event: MouseEvent): void {
    if (this.chipSelected != undefined) {
      const { x, y } = this.getMouseEventCoordinates(event)
      const inserted = this.insertInColumn(x, y)
      if (inserted)
        this.chipsDeck.splice(this.chipsDeck.indexOf(this.chipSelected), 1)
      this.repaint()
    }
    this.mouseDown = false
    this.chipSelected = undefined
  }

  canvasMouseMove(event: MouseEvent): void {
    const { x, y } = this.getMouseEventCoordinates(event)
    if (this.mouseDown == true) {
      this.chipSelected?.setPosition(x, y)
      this.repaint()
    }
  }

  insertInColumn(x: number, y: number): boolean {
    let column = -1
    for (let i = 0; i < this.dropsContainers.length; i++) {
      if (this.context.isPointInPath(this.dropsContainers[i], x, y)) {
        column = i
        break //break the for is the best practice :D ToDo:improve this
      }
    }
    if (column <= -1) return false

    let position = this.boardHeigth - 1
    let positionEmpty = false

    while (!positionEmpty && position >= 0) {
      if (this.chips[column][position].state != 0) position--
      else positionEmpty = true
    }
    if (position < 0) return false

    if (this.turnOfPlayer1) {
      this.chips[column][position].state = 1
    } else {
      this.chips[column][position].state = 2
    }
    this.chips[column][position].draw()
    this.turnOfPlayer1 = !this.turnOfPlayer1
    return true
  }

  generateIntRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }

  generateRandomChipLeft(id: number): Chip {
    return new Chip(
      this.context,
      this.generateIntRandom(
        this.gapBorder + this.radius,
        this.columnDeck - this.radius + this.gapBorder
      ),
      this.generateIntRandom(
        this.gapBorder + 2 * this.radius + this.gap,
        this.context.canvas.height - this.radius - this.gapBorder
      ),
      this.radius,
      id
    )
  }

  generateRandomChipRight(id: number): Chip {
    return new Chip(
      this.context,
      this.generateIntRandom(
        this.columnDeck +
          2 * this.radius * this.boardWidth +
          3 * this.gapBorder +
          this.gap * (this.boardWidth - 1) +
          this.radius,
        2 * this.columnDeck +
          2 * this.radius * this.boardWidth +
          this.gapBorder +
          this.gap * this.boardWidth
      ),
      this.generateIntRandom(
        this.gapBorder + 2 * this.radius + this.gap,
        this.context.canvas.height - this.radius - this.gapBorder
      ),
      this.radius,
      id
    )
  }

  drawBorderDeck() {
    const container = new Path2D()
    container.rect(
      this.gapBorder,
      this.gapBorder,
      this.columnDeck,
      this.context.canvas.height - 2 * this.gapBorder
    )
    const containerRight = new Path2D()
    containerRight.rect(
      this.columnDeck +
        2 * this.radius * this.boardWidth +
        3 * this.gapBorder +
        this.gap * (this.boardWidth - 1),
      this.gapBorder,
      this.columnDeck,
      this.context.canvas.height - 2 * this.gapBorder
    )
    this.context.stroke(container)
    this.context.stroke(containerRight)
  }

  addPlayerChips() {
    let idCounter = 200
    this.drawBorderDeck()
    for (let i = 0; i < this.chipsPerPlayer; i++) {
      const chip = this.generateRandomChipLeft(idCounter)
      idCounter++
      chip.state = 1
      chip.draw()
      this.chipsDeck.push(chip)

      const chip2 = this.generateRandomChipRight(idCounter)
      idCounter++
      chip2.state = 2
      chip2.draw()
      this.chipsDeck.push(chip2)
    }
  }

  reset(): void {
    this.chips = []
    this.chipsDeck = []
    this.turnOfPlayer1 = true
    this.initializeBoard()
    this.addPlayerChips()
    this.repaint()
  }
}
