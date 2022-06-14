import { Injectable } from '@angular/core'
import { Game } from './Game'

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  p1chronometer: ReturnType<typeof setInterval> | undefined
  p1minutes = 10
  p1seconds = 0

  p2chronometer: ReturnType<typeof setInterval> | undefined
  p2minutes = 10
  p2seconds = 0

  constructor() {}

  start(): void {
    this.p1minutes = 10
    this.p1seconds = 0
    this.p2minutes = 10
    this.p2seconds = 0
    this.stop()
    this.startChronometer(1)
  }

  startChronometer(player: number): void {
    if (player == 1) {
      this.p1chronometer = setInterval(() => {
        this.p1seconds--
        if (this.p1seconds < 0) {
          this.p1seconds = 59
          this.p1minutes--
        }
        if (this.p1seconds == 0 && this.p1minutes == 0) {
          this.stop()
          Game.setWinner()
        }
      }, 1000)
    } else {
      this.p2chronometer = setInterval(() => {
        this.p2seconds--
        if (this.p2seconds < 0) {
          this.p2seconds = 59
          this.p2minutes--
        }
        if (this.p2seconds == 0 && this.p2minutes == 0) {
          this.stop()
        }
      }, 1000)
    }
  }

  checkStart(): void {
    if (this.p1chronometer == undefined && this.p2chronometer == undefined)
      this.start()
  }

  changeTimers() {
    if (this.p1chronometer != undefined) {
      clearInterval(this.p1chronometer)
      this.p1chronometer = undefined
      this.startChronometer(2)
    } else if (this.p2chronometer != undefined) {
      clearInterval(this.p2chronometer)
      this.p2chronometer = undefined
      this.startChronometer(1)
    }
  }

  stop(): void {
    if (this.p1chronometer != undefined) {
      clearInterval(this.p1chronometer)
      this.p1chronometer = undefined
    }
    if (this.p2chronometer != undefined) {
      clearInterval(this.p2chronometer)
      this.p2chronometer = undefined
    }
  }

  reset(): void {
    this.stop()
    this.p1minutes = 10
    this.p1seconds = 0
    this.p2minutes = 10
    this.p2seconds = 0
  }
}
