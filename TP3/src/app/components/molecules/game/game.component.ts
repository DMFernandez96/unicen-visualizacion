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
  colorPlayer1: string
  colorPlayer2: string
  turnOfPlayer1: boolean

  constructor() {
    this.chips = new Array<Array<Chip>>()
    this.colorPlayer1 = 'red'
    this.colorPlayer2 = 'yellow'
    this.turnOfPlayer1 = true
  }

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = this.canvas.nativeElement.getContext('2d')!
    this.initializeBoard()
    this.addPlayerChips()
  }

  initializeBoard(): void {
    let idCounter = 0
    for (let i = 0; i < this.boardWidth; i++) {
      for (let j = 0; j < this.boardHeigth; j++) {
        const chip: Chip = new Chip(
          this.context,
          2 * this.radius * i + this.radius + this.gapBorder + this.gap * i,
          2 * this.radius * j + this.radius + this.gapBorder + this.gap * j,
          this.radius,
          idCounter
        )
        chip.draw()
        if (this.chips[i] == undefined) this.chips[i] = new Array<Chip>()
        this.chips[i].push(chip)
        idCounter++
      }
    }
    console.log(this.chips)
  }

  canvasRepaint(event: MouseEvent): void {
    const canvasX = this.canvas.nativeElement.getBoundingClientRect().x
    const canvasY = this.canvas.nativeElement.getBoundingClientRect().y
    //on click the arrow(simulate 1 arrow for each column) paint player color on its column
    if (
      // this.context.isPointInPath(
      //   this.arrow,
      //   event.clientX - canvasX,
      //   event.clientY - canvasY
      // )
      true
    ) {
      console.log('arrow from column "x" clicked, TODO: insert in column "x"')
      if (this.turnOfPlayer1) {
        this.chips[5][0].setFillStyle(this.colorPlayer1)
        this.chips[5][0].draw()
      } else {
        this.chips[11][0].setFillStyle(this.colorPlayer2)
        this.chips[11][0].draw()
      }
      this.turnOfPlayer1 = !this.turnOfPlayer1
    }
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
