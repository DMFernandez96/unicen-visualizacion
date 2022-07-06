export class Entity {
  id: string
  domElement!: HTMLElement
  width!: number
  height!: number
  left!: number
  bottom!: number
  paused = false

  constructor(id: string) {
    this.id = id
  }

  updatePosition(): void {
    if (this.domElement == undefined) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.domElement = document.getElementById(this.id)!
      this.width = this.domElement.getBoundingClientRect().width
      this.height = this.domElement.getBoundingClientRect().height
      this.bottom = this.domElement.getBoundingClientRect().bottom
    }
    this.left = this.domElement.offsetLeft
  }

  isOutOfScreen(): boolean {
    return this.left + this.width <= 0
  }
}
