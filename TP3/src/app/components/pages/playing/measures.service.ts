import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {
  public subjectChangeBoard: Subject<void> = new Subject<void>()

  boardWidth = 7
  boardHeigth = 6
  gap = 10
  gapBorder = 30
  radius = 39
  columnDeck = 270
  chipsPerPlayer: number

  constructor() {
    this.chipsPerPlayer = (this.boardWidth * this.boardHeigth) / 2
  }

  setBoardWidth(width: number): void {
    this.boardWidth = width
    this.chipsPerPlayer = (this.boardWidth * this.boardHeigth) / 2
    this.emitchangeBoard()
  }

  setBoardHeight(height: number): void {
    this.boardHeigth = height
    this.chipsPerPlayer = (this.boardWidth * this.boardHeigth) / 2
    this.emitchangeBoard()
  }

  emitchangeBoard(): void {
    this.subjectChangeBoard.next()
  }
}
