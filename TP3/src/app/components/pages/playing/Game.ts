import { Board } from './Board'
import { Chip } from './Chip'
import { MeasuresService } from './measures.service'
import { TimerService } from './timer.service'

export class Game {
  context: CanvasRenderingContext2D
  board: Board

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
    this.board = new Board(this.context, measures)
    this.turnOfPlayer1 = true
    this.mouseDown = false
    this.chipSelected = undefined
  }

  getMouseEventCoordinates(event: MouseEvent): { x: number; y: number } {
    const canvasX = this.context.canvas.getBoundingClientRect().x
    const canvasY = this.context.canvas.getBoundingClientRect().y
    return { x: event.clientX - canvasX, y: event.clientY - canvasY }
  }

  canvasMouseDown(event: MouseEvent): void {
    const { x, y } = this.getMouseEventCoordinates(event)
    for (let i = 0; i < this.board.chipsDeck.length; i++) {
      if (
        ((this.turnOfPlayer1 && this.board.chipsDeck[i].getState() == 1) ||
          (!this.turnOfPlayer1 && this.board.chipsDeck[i].getState() == 2)) &&
        this.board.chipsDeck[i].isClicked(x, y)
      ) {
        this.chipSelected = this.board.chipsDeck[i]
        this.mouseDown = true
        break
      }
    }
  }

  canvasMouseUp(event: MouseEvent): void {
    if (this.chipSelected != undefined) {
      const { x, y } = this.getMouseEventCoordinates(event)
      const inserted = this.insertInColumn(x, y)
      if (inserted) {
        this.timer.checkStart()
        this.board.chipsDeck.splice(
          this.board.chipsDeck.indexOf(this.chipSelected),
          1
        )
        if (this.checkWinner(inserted.column, inserted.row)) {
          this.timer.stop()
          this.turnOfPlayer1 = !this.turnOfPlayer1
        } else {
          this.timer.changeTimers()
        }
      }
      this.board.repaint()
    }
    this.mouseDown = false
    this.chipSelected = undefined
  }

  canvasMouseMove(event: MouseEvent): void {
    const { x, y } = this.getMouseEventCoordinates(event)
    if (this.mouseDown == true) {
      this.chipSelected?.setPosition(x, y)
      this.board.repaint()
    }
  }

  insertInColumn(
    x: number,
    y: number
  ): { column: number; row: number } | undefined {
    let column = -1
    for (let i = 0; i < this.board.dropsContainers.length; i++) {
      if (this.board.dropsContainers[i].isPointInPath(x, y)) {
        column = i
        break //break the for is the best practice :D ToDo:improve this
      }
    }
    if (column <= -1) return undefined

    let position = this.measures.boardHeigth - 1
    let positionEmpty = false

    while (!positionEmpty && position >= 0) {
      if (this.board.chips[column][position].getState() != 0) position--
      else positionEmpty = true
    }
    if (position < 0) return undefined

    if (this.turnOfPlayer1) {
      this.board.chips[column][position].setState(1)
    } else {
      this.board.chips[column][position].setState(2)
    }
    this.board.chips[column][position].draw()
    this.turnOfPlayer1 = !this.turnOfPlayer1
    return { column: column, row: position }
  }

  checkWinner(column: number, row: number): boolean {
    if (
      column == this.measures.boardWidth - 1 &&
      row == this.measures.boardHeigth - 1
    ) {
      this.winner = !this.turnOfPlayer1 ? 1 : 2
      return true
    }
    return false
  }

  static setWinner(): void {}

  reset(): void {
    this.board.chips = []
    this.board.chipsDeck = []
    this.turnOfPlayer1 = true
    this.board.initializeBoardChips()
    this.board.initializeDecksChips()
    this.board.repaint()
    this.winner = undefined
    this.timer.start()
  }
}
