import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { Game } from './Game'
import { MeasuresService } from './measures.service'
import { TimerService } from './timer.service'

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

  constructor(public measures: MeasuresService, public timer: TimerService) {
    this.helpOverlayVisible = false
  }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.width =
      2 * this.measures.columnDeck +
      2 * this.measures.radius * this.measures.boardWidth +
      4 * this.measures.gapBorder +
      this.measures.gap * (this.measures.boardWidth - 1)
    this.canvas.nativeElement.height =
      2 * this.measures.gapBorder +
      this.measures.radius +
      this.measures.gap +
      2 * this.measures.radius * this.measures.boardHeigth +
      this.measures.gap * (this.measures.boardHeigth - 1)
    this.game = new Game(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.canvas.nativeElement.getContext('2d')!,
      this.measures,
      this.timer
    )
  }

  toggleHelpOverlay(): void {
    this.helpOverlayVisible = !this.helpOverlayVisible
  }

  reset(): void {
    this.game.chips = []
    this.game.chipsDeck = []
    this.game.turnOfPlayer1 = true
    this.game.initializeBoard()
    this.game.addPlayerChips()
    this.game.repaint()
    this.game.winner = undefined
    this.timer.start()
  }
}
