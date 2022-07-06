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

  override updatePosition(): void {
    if (this.domElement == undefined) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.domElement = document.getElementById(this.id)!
      this.width = this.domElement.getBoundingClientRect().width
      this.height = this.domElement.getBoundingClientRect().height
      this.bottom = this.domElement.getBoundingClientRect().bottom
    }
    this.left = this.domElement.offsetLeft
  }
}
