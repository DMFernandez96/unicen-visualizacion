import { Entity } from './Entity'

export class Character extends Entity {
  constructor(id: string) {
    super(id)
  }

  jump(characterSelected: number): void {
    const className = characterSelected == 1 ? 'jump1' : 'jump2'
    this.domElement.classList.add(className)
    setTimeout(() => {
      this.domElement.classList.remove(className)
    }, 1800)
  }

  isJump(): boolean {
    return (
      this.domElement.classList.contains('jump1') ||
      this.domElement.classList.contains('jump2')
    )
  }

  reset(): void {
    this.domElement.classList.remove('die')
  }

  die(characterSelected: number): void {
    const className = characterSelected == 1 ? 'die1' : 'die2'
    this.domElement.classList.add(className)
  }

  checkCollision(entity: Entity) {
    this.updatePosition()
    entity.updatePosition()

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
