import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { Chip } from '../../pages/playing/Chip'

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

  chips: Chip[]
  colorPlayer1: string
  colorPlayer2: string
  turnOfPlayer1: boolean

  constructor() {
    this.chips = []
    this.colorPlayer1 = 'red'
    this.colorPlayer2 = 'yellow'
    this.turnOfPlayer1 = true
  }

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = this.canvas.nativeElement.getContext('2d')!
    this.initializeBoard()
  }

  initializeBoard(): void {
    for (let i = 0; i < this.boardWidth; i++) {
      for (let j = 0; j < this.boardHeigth; j++) {
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
        this.chips[5].setFillStyle(this.colorPlayer1)
        this.chips[5].draw()
      } else {
        this.chips[11].setFillStyle(this.colorPlayer2)
        this.chips[11].draw()
      }
      this.turnOfPlayer1 = !this.turnOfPlayer1
    }
  }
}
