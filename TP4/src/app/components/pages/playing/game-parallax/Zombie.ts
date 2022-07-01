export class Zombie {
  domElement: HTMLDivElement
  deltaMov = '30'

  constructor(domElement: HTMLDivElement) {
    this.domElement = domElement
    this.initMove()
  }

  initMove(): void {
    this.domElement.classList.add('zombie-move')
    setTimeout(() => {
      // this.domElement.classList.remove('zombie-move')
    }, 6000)
  }
}
