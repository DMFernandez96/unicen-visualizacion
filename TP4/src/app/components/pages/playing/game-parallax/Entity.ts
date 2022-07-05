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

  updatePosition(): void {}
}
