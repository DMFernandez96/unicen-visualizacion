import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { MeasuresService } from './measures.service'

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public subjectWinner: Subject<number> = new Subject<number>()
  private gameTimeInMinutes = 5

  p1chronometer: ReturnType<typeof setInterval> | undefined
  p1minutes: number
  p1seconds: number

  p2chronometer: ReturnType<typeof setInterval> | undefined
  p2minutes: number
  p2seconds: number

  constructor(private measures: MeasuresService) {
    this.p1minutes = this.gameTimeInMinutes
    this.p1seconds = 0
    this.p2minutes = this.gameTimeInMinutes
    this.p2seconds = 0
  }

  setGameTimeInMinutes(minutes: number): void {
    this.gameTimeInMinutes = minutes
    this.p1minutes = this.gameTimeInMinutes
    this.p2minutes = this.gameTimeInMinutes
  }

  start(): void {
    this.reset()
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
          this.emitPlayerWinner(2)
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
          this.emitPlayerWinner(1)
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
    this.p1minutes = this.gameTimeInMinutes
    this.p1seconds = 0
    this.p2minutes = this.gameTimeInMinutes
    this.p2seconds = 0
  }

  emitPlayerWinner(player: number): void {
    this.subjectWinner.next(player)
  }
}
