import { Chip } from './Chip'
import { DropContainer } from './DropContainer'
import { MeasuresService } from './measures.service'
import { TimerService } from './timer.service'

export class Game {
  context: CanvasRenderingContext2D

  chips: Array<Array<Chip>>
  dropsContainers: DropContainer[]
  chipsDeck: Chip[]
  turnOfPlayer1: boolean

  mouseDown: boolean
  chipSelected: Chip | undefined

  winner: number | undefined

  constructor(
    context: CanvasRenderingContext2D,
    private measures: MeasuresService,
    private timer: TimerService
  ) {
    this.context = context
    this.chips = new Array<Array<Chip>>()
    this.dropsContainers = []
    this.chipsDeck = []
    this.turnOfPlayer1 = true
    this.mouseDown = false
    this.chipSelected = undefined
    this.context.strokeStyle = '#fff'
    this.initializeDropsContainers()
    this.initializeBoard()
    this.addPlayerChips()
    this.repaint()
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
      container.draw()
    })
    this.drawBorderDeck()
  }

  initializeDropsContainers(): void {
    for (let i = 0; i < this.measures.boardWidth; i++) {
      const container = new DropContainer(
        this.context,
        this.measures.columnDeck +
          2 * this.measures.gapBorder +
          this.measures.radius * 2 * i +
          this.measures.gap * i,
        this.measures.gapBorder,
        this.measures.radius * 2,
        this.measures.radius
      )
      this.dropsContainers.push(container)
    }
  }

  initializeBoard(): void {
    let idCounter = 0
    for (let i = 0; i < this.measures.boardWidth; i++) {
      for (let j = 0; j < this.measures.boardHeigth; j++) {
        const chip: Chip = new Chip(
          this.context,
          this.measures.columnDeck +
            2 * this.measures.radius * i +
            2 * this.measures.radius +
            this.measures.gapBorder +
            this.measures.gap * (i - 1),
          2 * this.measures.radius * j +
            this.measures.radius +
            this.measures.gapBorder +
            this.measures.gap * j +
            this.measures.gap +
            this.measures.radius,
          this.measures.radius,
          idCounter,
          0
        )
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
      if (
        this.chipsDeck[i].getState() > 0 &&
        this.chipsDeck[i].isClicked(x, y)
      ) {
        if (this.turnOfPlayer1 && this.chipsDeck[i].getState() == 1) {
          this.chipSelected = this.chipsDeck[i]
          this.mouseDown = true
          break
        } else if (!this.turnOfPlayer1 && this.chipsDeck[i].getState() == 2) {
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
      if (inserted) {
        this.timer.checkStart()
        this.chipsDeck.splice(this.chipsDeck.indexOf(this.chipSelected), 1)
        if (this.checkWinner()) {
          this.timer.stop()
          this.turnOfPlayer1 = !this.turnOfPlayer1
        } else {
          this.timer.changeTimers()
        }
      }
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
      if (this.dropsContainers[i].isPointInPath(x, y)) {
        column = i
        break //break the for is the best practice :D ToDo:improve this
      }
    }
    if (column <= -1) return false

    let position = this.measures.boardHeigth - 1
    let positionEmpty = false

    while (!positionEmpty && position >= 0) {
      if (this.chips[column][position].getState() != 0) position--
      else positionEmpty = true
    }
    if (position < 0) return false

    if (this.turnOfPlayer1) {
      this.chips[column][position].setState(1)
    } else {
      this.chips[column][position].setState(2)
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
        this.measures.gapBorder + this.measures.radius,
        this.measures.columnDeck -
          this.measures.radius +
          this.measures.gapBorder
      ),
      this.generateIntRandom(
        this.measures.gapBorder + 2 * this.measures.radius + this.measures.gap,
        this.context.canvas.height -
          this.measures.radius -
          this.measures.gapBorder
      ),
      this.measures.radius,
      id,
      1
    )
  }

  generateRandomChipRight(id: number): Chip {
    return new Chip(
      this.context,
      this.generateIntRandom(
        this.measures.columnDeck +
          2 * this.measures.radius * this.measures.boardWidth +
          3 * this.measures.gapBorder +
          this.measures.gap * (this.measures.boardWidth - 1) +
          this.measures.radius,
        2 * this.measures.columnDeck +
          2 * this.measures.radius * this.measures.boardWidth +
          this.measures.gapBorder +
          this.measures.gap * this.measures.boardWidth
      ),
      this.generateIntRandom(
        this.measures.gapBorder + 2 * this.measures.radius + this.measures.gap,
        this.context.canvas.height -
          this.measures.radius -
          this.measures.gapBorder
      ),
      this.measures.radius,
      id,
      2
    )
  }

  drawBorderDeck() {
    const container = new Path2D()
    container.rect(
      this.measures.gapBorder,
      this.measures.gapBorder,
      this.measures.columnDeck,
      this.context.canvas.height - 2 * this.measures.gapBorder
    )
    const containerRight = new Path2D()
    containerRight.rect(
      this.measures.columnDeck +
        2 * this.measures.radius * this.measures.boardWidth +
        3 * this.measures.gapBorder +
        this.measures.gap * (this.measures.boardWidth - 1),
      this.measures.gapBorder,
      this.measures.columnDeck,
      this.context.canvas.height - 2 * this.measures.gapBorder
    )
    this.context.stroke(container)
    this.context.stroke(containerRight)
  }

  addPlayerChips() {
    let idCounter = 200
    this.drawBorderDeck()
    for (let i = 0; i < this.measures.chipsPerPlayer; i++) {
      const chip = this.generateRandomChipLeft(idCounter)
      idCounter++
      this.chipsDeck.push(chip)

      const chip2 = this.generateRandomChipRight(idCounter)
      idCounter++
      this.chipsDeck.push(chip2)
    }
  }

  checkWinner(): boolean {
    if (Math.random() > 0.5) {
      this.winner = !this.turnOfPlayer1 ? 1 : 2
      return true
    }
    return false
  }

  static setWinner(): void {}
}
