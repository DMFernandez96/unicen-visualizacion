import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { Chip } from './Chip'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>
  public context!: CanvasRenderingContext2D

  boardWidth = 7
  boardHeigth = 6
  gap = 10
  gapBorder = 30
  radius = 40

  chipsPerPlayer = 3

  chips: Array<Array<Chip>>
  dropsContainers: Path2D[]
  colorPlayer1: string
  colorPlayer2: string
  turnOfPlayer1: boolean

  constructor() {
    this.chips = new Array<Array<Chip>>()
    this.dropsContainers = []
    this.colorPlayer1 = 'red'
    this.colorPlayer2 = 'yellow'
    this.turnOfPlayer1 = true
  }

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = this.canvas.nativeElement.getContext('2d')!
    this.initializeDropsContainers()
    this.initializeBoard()
    this.addPlayerChips()
  }

  initializeDropsContainers(): void {
    this.context.strokeStyle = '#fff'
    for (let i = 0; i < this.boardWidth; i++) {
      const container = new Path2D()
      container.rect(
        this.gapBorder + this.radius * 2 * i + this.gap * i,
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
          2 * this.radius * i + this.radius + this.gapBorder + this.gap * i,
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

  canvasRepaint(event: MouseEvent): void {
    const canvasX = this.canvas.nativeElement.getBoundingClientRect().x
    const canvasY = this.canvas.nativeElement.getBoundingClientRect().y
    const x = event.clientX - canvasX
    const y = event.clientY - canvasY
    let column = -1
    for (let i = 0; i < this.dropsContainers.length; i++) {
      if (this.context.isPointInPath(this.dropsContainers[i], x, y)) {
        column = i
        break //break the for is the best practice :D ToDo:improve this
      }
    }
    if (column > -1) this.insertInColumn(column)
  }

  insertInColumn(column: number): boolean {
    let position = 0
    let positionEmpty = false

    while (!positionEmpty && position < this.boardHeigth) {
      console.log(this.chips[column][position].state)
      if (this.chips[column][position].state != 0) position++
      else positionEmpty = true
    }
    if (position + 1 > this.boardHeigth) return false

    if (this.turnOfPlayer1) {
      this.chips[column][position].setFillStyle(this.colorPlayer1)
      this.chips[column][position].state = 1
    } else {
      this.chips[column][position].setFillStyle(this.colorPlayer2)
      this.chips[column][position].state = 2
    }
    this.chips[column][position].draw()
    this.turnOfPlayer1 = !this.turnOfPlayer1
    return true
  }

  addPlayerChips() {
    let idCounter = 200
    for (let i = 0; i < this.chipsPerPlayer; i++) {
      const chip: Chip = new Chip(
        this.context,
        800,
        4 * this.radius * i + this.radius + this.gapBorder + this.gap * i * 2,
        this.radius,
        idCounter
      )
      chip.setFillStyle(this.colorPlayer1)
      chip.draw()

      const chip2: Chip = new Chip(
        this.context,
        800,
        2 * this.radius +
          this.gap +
          4 * this.radius * i +
          this.radius +
          this.gapBorder +
          this.gap * i * 2,
        this.radius,
        idCounter
      )
      chip2.setFillStyle(this.colorPlayer2)
      chip2.draw()
      idCounter++
    }
  }
}
