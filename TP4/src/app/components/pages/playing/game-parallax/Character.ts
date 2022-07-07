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
    this.domElement.classList.remove('die1')
    this.domElement.classList.remove('die2')
  }

  die(characterSelected: number): void {
    const audio = new Audio('/assets/sounds/blood-splash.wav')
    audio.volume = 0.1
    audio.play()
    const className = characterSelected == 1 ? 'die1' : 'die2'
    this.domElement.classList.add(className)
  }

  checkCollision(entity: Entity) {
    this.updatePosition()

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
    super.updatePosition()
    this.bottom = this.domElement.getBoundingClientRect().bottom
  }
}
