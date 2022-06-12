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

  constructor() {
    this.helpOverlayVisible = false
  }

  ngAfterViewInit(): void {
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
