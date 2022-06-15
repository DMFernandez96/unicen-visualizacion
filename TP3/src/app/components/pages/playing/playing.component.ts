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

  play(): void {
    this.showDropdown = false
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
    }
  }

  reset(): void {
    this.game.reset()
  }
}
