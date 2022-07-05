import { Entity } from './Entity'

export class Character extends Entity {
  constructor(id: string) {
    super(id)
  }

  jump(): void {
    this.domElement.classList.add('jump')
    setTimeout(() => {
      this.domElement.classList.remove('jump')
    }, 1800)
  }

  reset(): void {
    this.domElement.classList.remove('die')
  }

  die(): void {
    this.domElement.classList.add('die')
  }

  checkCollision(entity: Entity) {
    this.updatePosition()
    entity.updatePosition()

    // console.log(entity)
    // console.log(this.bottom + this.height > entity.bottom)
    // console.log(this.bottom < entity.bottom + entity.height)
    if (
      this.left + this.width > entity.left &&
      this.left < entity.left + entity.width &&
      this.bottom > entity.bottom - this.height &&
      this.bottom - this.height < entity.bottom
    ) {
      return true
    }
    return false
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
    this.bottom = this.domElement.getBoundingClientRect().bottom
  }
}
