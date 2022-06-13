import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { Game } from './Game'

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements AfterViewInit {
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>
  game!: Game
  helpOverlayVisible: boolean

  chronometer: any
  seconds = 0
  minutes = 0

  boardWidth = 7
  boardHeigth = 6
  gap = 10
  gapBorder = 30
  radius = 40
  columnDeck = 270

  constructor() {
    this.helpOverlayVisible = false
  }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.width =
      2 * this.columnDeck +
      2 * this.radius * this.boardWidth +
      2 * this.radius +
      2 * this.gapBorder +
      this.gap * this.boardWidth
    this.canvas.nativeElement.height =
      2 * this.gapBorder +
      this.radius +
      this.gap +
      2 * this.radius * this.boardHeigth +
      this.gap * (this.boardHeigth - 1)
    this.game = new Game(this.canvas.nativeElement.getContext('2d')!)
  }

  toggleHelpOverlay(): void {
    this.helpOverlayVisible = !this.helpOverlayVisible
  }

  startChronometer(): void {
    if (this.chronometer != undefined) {
      clearInterval(this.chronometer)
      this.minutes = 0
      this.seconds = 0
    }
    this.chronometer = setInterval(() => {
      this.seconds++
      if (this.seconds == 60) {
        this.seconds = 0
        this.minutes++
      }
    }, 1000)
  }

  reset(): void {
    // this.chips = []
    // this.chipsDeck = []
    // this.turnOfPlayer1 = true
    // this.initializeBoard()
    // this.addPlayerChips()
    // this.repaint()
    this.startChronometer()
  }
}
