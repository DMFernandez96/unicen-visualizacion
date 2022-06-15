import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class WinnerService {
  msg: string
  winner: number | undefined

  constructor() {
    this.msg = ''
  }

  reset(): void {
    this.winner = undefined
    this.msg = ''
  }

  setWinner(player: number, movimientos: number) {
    this.winner = player
    this.msg =
      'El jugador ' +
      player +
      ' gano el juego en ' +
      movimientos +
      ' movimientos!'
  }

  setWinnerTime(player: number) {
    this.winner = player
    this.msg =
      'El jugador ' +
      player +
      ' gano el juego debido a que se termino el tiempo del otro jugador!'
  }
}
