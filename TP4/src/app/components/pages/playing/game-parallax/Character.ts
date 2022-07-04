export class Character {
  domElement: HTMLDivElement
  width: number
  height: number
  position: { top: number; left: number }

  constructor(domElement: HTMLDivElement) {
    this.domElement = domElement
    this.width = this.domElement.getBoundingClientRect().width
    this.height = this.domElement.getBoundingClientRect().height
    this.position = {
      top: this.domElement.getBoundingClientRect().top,
      left: this.domElement.offsetLeft
    }
  }

  jump() {
    this.domElement.classList.add('jump')
    setTimeout(() => {
      this.domElement.classList.remove('jump')
    }, 1800)
  }

  die() {
    this.domElement.classList.add('die')
  }

  getPosition() {
    this.position.top = this.domElement.getBoundingClientRect().top
    this.position.left = this.domElement.offsetLeft
  }
}
