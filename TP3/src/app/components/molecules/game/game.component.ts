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

  chipsPerPlayer: number

  chips: Array<Array<Chip>>
  dropsContainers: Path2D[]
  chipsDeck: Chip[]
  turnOfPlayer1: boolean

  mouseDown: boolean
  chipSelected: Chip | undefined

  constructor() {
    this.chips = new Array<Array<Chip>>()
    this.dropsContainers = []
    this.chipsDeck = []
    this.turnOfPlayer1 = true
    this.mouseDown = false
    this.chipSelected = undefined
    this.chipsPerPlayer = (this.boardHeigth * this.boardWidth) / 2
  }

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = this.canvas.nativeElement.getContext('2d')!
    this.context.strokeStyle = '#fff'
    this.initializeDropsContainers()
    this.initializeBoard()
    this.addPlayerChips()
  }

  repaint(): void {
    this.context.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
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
  }

  initializeDropsContainers(): void {
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

  getMouseEventCoordinates(event: MouseEvent): { x: number; y: number } {
    const canvasX = this.canvas.nativeElement.getBoundingClientRect().x
    const canvasY = this.canvas.nativeElement.getBoundingClientRect().y
    return { x: event.clientX - canvasX, y: event.clientY - canvasY }
  }

  canvasMouseDown(event: MouseEvent): void {
    const { x, y } = this.getMouseEventCoordinates(event)
    for (let i = 0; i < this.chipsDeck.length; i++) {
      if (this.chipsDeck[i].isClicked(x, y)) {
        this.chipSelected = this.chipsDeck[i]
        this.mouseDown = true
        break
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

    let position = 0
    let positionEmpty = false

    while (!positionEmpty && position < this.boardHeigth) {
      if (this.chips[column][position].state != 0) position++
      else positionEmpty = true
    }
    if (position + 1 > this.boardHeigth) return false

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

  generateRandomChip(id: number): Chip {
    return new Chip(
      this.context,
      this.generateIntRandom(
        2 * this.radius * this.boardWidth +
          this.radius +
          2 * this.gapBorder +
          this.gap * this.boardWidth,
        this.canvas.nativeElement.width - this.radius - this.gapBorder
      ),
      this.generateIntRandom(
        this.gapBorder + this.radius,
        this.canvas.nativeElement.height - this.radius - this.gapBorder
      ),
      this.radius,
      id
    )
  }

  addPlayerChips() {
    let idCounter = 200
    for (let i = 0; i < this.chipsPerPlayer; i++) {
      const chip = this.generateRandomChip(idCounter)
      idCounter++
      chip.state = 1
      chip.draw()
      this.chipsDeck.push(chip)

      const chip2 = this.generateRandomChip(idCounter)
      idCounter++
      chip2.state = 2
      chip2.draw()
      this.chipsDeck.push(chip2)
    }
  }
}
