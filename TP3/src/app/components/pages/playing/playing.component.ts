import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Game } from './Game'
import { MeasuresService } from './measures.service'
import { TimerService } from './timer.service'

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>
  game!: Game
  helpOverlayVisible: boolean

  constructor(public measures: MeasuresService, public timer: TimerService) {
    this.helpOverlayVisible = false
  }

  ngOnInit(): void {
    this.setCanvasWidth()
    this.setCanvasHeight()
    this.game = new Game(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.canvas.nativeElement.getContext('2d')!,
      this.measures,
      this.timer
    )
  }

  setCanvasWidth(): void {
    this.canvas.nativeElement.width =
      2 * this.measures.columnDeck +
      2 * this.measures.radius * this.measures.boardWidth +
      4 * this.measures.gapBorder +
      this.measures.gap * (this.measures.boardWidth - 1)
  }

  setCanvasHeight(): void {
    this.canvas.nativeElement.height =
      2 * this.measures.gapBorder +
      this.measures.radius +
      this.measures.gap +
      2 * this.measures.radius * this.measures.boardHeigth +
      this.measures.gap * (this.measures.boardHeigth - 1)
  }

  toggleHelpOverlay(): void {
    this.helpOverlayVisible = !this.helpOverlayVisible
  }

  reset(): void {
    this.game.reset()
  }
}
