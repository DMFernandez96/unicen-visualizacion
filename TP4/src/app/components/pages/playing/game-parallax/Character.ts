export class Character {
  domElement: HTMLDivElement

  constructor(domElement: HTMLDivElement) {
    this.domElement = domElement
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
}
