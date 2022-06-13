import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {
  boardWidth = 7
  boardHeigth = 6
  gap = 10
  gapBorder = 30
  radius = 40
  columnDeck = 270
  chipsPerPlayer: number

  constructor() {
    this.chipsPerPlayer = (this.boardWidth * this.boardHeigth) / 2
  }
}
