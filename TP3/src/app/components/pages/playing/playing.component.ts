import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { Chip } from './Chip'

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements AfterViewInit {
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>
  public context!: CanvasRenderingContext2D

  svgArrow =
    'M16.782 31.6928L1.48676 12.3463C0.42959 11.0092 0.42959 8.84692 1.48676 7.52396L4.02847 4.30904C5.08563 2.97186 6.7951 2.97186 7.84102 4.30904L18.6826 18.0223L29.5242 4.30904C30.5814 2.97186 32.2909 2.97186 33.3368 4.30904L35.901 7.50974C36.9582 8.84692 36.9582 11.0092 35.901 12.3321L20.6058 31.6786C19.5486 33.03 17.8391 33.03 16.782 31.6928Z'
  arrow: Path2D

  helpOverlayVisible: boolean
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
    this.helpOverlayVisible = false
    this.chips = []
    this.colorPlayer1 = 'red'
    this.colorPlayer2 = 'yellow'
    this.turnOfPlayer1 = true
    this.arrow = new Path2D(this.svgArrow)
  }

  //angular hook that executes after constructor and guarantees access to canvas (ngOnInit not guarantees)
  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = this.canvas.nativeElement.getContext('2d')!
    this.initializeBoard()
  }

  toggleHelpOverlay(): void {
    this.helpOverlayVisible = !this.helpOverlayVisible
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
    this.context.stroke(this.arrow)
  }

  canvasRepaint(event: MouseEvent): void {
    const canvasX = this.canvas.nativeElement.getBoundingClientRect().x
    const canvasY = this.canvas.nativeElement.getBoundingClientRect().y
    //on click the arrow(simulate 1 arrow for each column) paint player color on its column
    if (
      this.context.isPointInPath(
        this.arrow,
        event.clientX - canvasX,
        event.clientY - canvasY
      )
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
