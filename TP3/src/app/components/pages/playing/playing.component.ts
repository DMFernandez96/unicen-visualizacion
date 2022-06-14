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
  showDropdown: boolean
  gameMode = '4 en linea'

  constructor(public measures: MeasuresService, public timer: TimerService) {
    this.helpOverlayVisible = false
    this.showDropdown = false
  }

  ngOnInit(): void {
    // this.setCanvasWidth()
    // this.setCanvasHeight()
    this.game = new Game(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.canvas.nativeElement.getContext('2d')!,
      this.measures,
      this.timer
    )
  }

  // setCanvasWidth(): void {
  //   this.canvas.nativeElement.width =
  //     2 * this.measures.columnDeck +
  //     2 * this.measures.radius * this.measures.boardWidth +
  //     4 * this.measures.gapBorder +
  //     this.measures.gap * (this.measures.boardWidth - 1)
  // }

  // setCanvasHeight(): void {
  //   this.canvas.nativeElement.height =
  //     2 * this.measures.gapBorder +
  //     this.measures.radius +
  //     this.measures.gap +
  //     2 * this.measures.radius * this.measures.boardHeigth +
  //     this.measures.gap * (this.measures.boardHeigth - 1)
  // }

  toggleHelpOverlay(): void {
    this.helpOverlayVisible = !this.helpOverlayVisible
  }

  play(): void {
    this.showDropdown = false
    this.setMeasures()
    this.game.play()
  }

  setMeasures(): void {
    switch (this.gameMode) {
      case '4 en linea':
        this.measures.setBoardWidth(7)
        this.measures.setBoardHeight(6)
        break
      case '5 en linea':
        this.measures.setBoardWidth(8)
        this.measures.setBoardHeight(7)
        break
      case '6 en linea':
        this.measures.setBoardWidth(9)
        this.measures.setBoardHeight(8)
        break
      case '7 en linea':
        this.measures.setBoardWidth(10)
        this.measures.setBoardHeight(9)
        break
      case '8 en linea':
        this.measures.setBoardWidth(11)
        this.measures.setBoardHeight(10)
        break
    }
  }

  reset(): void {
    this.game.reset()
  }
}
