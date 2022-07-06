import { Entity } from './Entity'

export class Gem extends Entity {
  color: string
  bottomStyle: number
  value: number
  collected: boolean

  constructor(id: string, color: string, bottom: number, value: number) {
    super(id)
    this.color = color
    this.bottomStyle = bottom
    this.value = value
    this.collected = false
  }
}
