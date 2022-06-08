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

  helpOverlayVisible: boolean
  boardWidth: number
  boardHeigth: number

  constructor() {
    this.helpOverlayVisible = false
    this.boardWidth = 7
    this.boardHeigth = 6
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
    const gap = 10
    const gapBorder = 30
    const radius = 40
    for (let i = 0; i < this.boardWidth; i++) {
      for (let j = 0; j < this.boardHeigth; j++) {
        const chip: Chip = new Chip(
          this.context,
          2 * radius * i + radius + gapBorder + gap * i,
          2 * radius * j + radius + gapBorder + gap * j,
          radius
        )
        chip.draw()
      }
    }
  }
}
