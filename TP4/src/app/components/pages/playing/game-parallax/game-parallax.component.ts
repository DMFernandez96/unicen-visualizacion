import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Character } from './Character'
import { Gem } from './Gem'
import { Zombie } from './Zombie'

@Component({
  selector: 'app-game-parallax',
  templateUrl: './game-parallax.component.html',
  styleUrls: ['./game-parallax.component.css']
})
export class GameParallaxComponent implements OnInit {
  @ViewChild('characterElement', { static: true })
  characterElement!: ElementRef

  @ViewChild('zombie1Element', { static: true })
  zombie1Element!: ElementRef
  @ViewChild('zombie2Element', { static: true })
  zombie2Element!: ElementRef
  @ViewChild('zombie3Element', { static: true })
  zombie3Element!: ElementRef
  @ViewChild('zombie4Element', { static: true })
  zombie4Element!: ElementRef

  character!: Character
  zombiesToChoose: Zombie[]
  zombiesInGame: Zombie[]
  maxZombiesInGame = 4

  gemsInGame: Gem[]
  gemsColors: string[]

  constructor() {
    this.zombiesToChoose = []
    this.zombiesInGame = []
    this.gemsInGame = []
    this.gemsColors = ['blue', 'green', 'grey', 'orange', 'pink', 'yellow']
  }

  ngOnInit(): void {
    this.character = new Character(this.characterElement.nativeElement)
    window.addEventListener('keydown', this.keyHandler.bind(this))
    requestAnimationFrame(this.gameLoop.bind(this))
  }

  keyHandler(event: KeyboardEvent) {
    event.preventDefault()
    if (event.key == 'ArrowUp' || event.key == 'w') {
      this.character.jump()
    }
    if (event.key == 'd') {
      this.character.die()
    }
  }

  gameLoop(): void {
    this.createZombies()
    this.checkGems()
    requestAnimationFrame(this.gameLoop.bind(this))
  }

  createZombies(): void {
    //TODO: crearlos a diferente tiempo para que no vallan todos juntos
    setTimeout(() => {
      this.zombiesInGame.push(new Zombie(this.zombie1Element.nativeElement))
    }, 2000)
    setTimeout(() => {
      this.zombiesInGame.push(new Zombie(this.zombie2Element.nativeElement))
    }, 5000)
    setTimeout(() => {
      this.zombiesInGame.push(new Zombie(this.zombie3Element.nativeElement))
    }, 13000)
    setTimeout(() => {
      this.zombiesInGame.push(new Zombie(this.zombie4Element.nativeElement))
    }, 21000)
  }

  checkGems(): void {
    if (this.gemsInGame.length < 10) {
      //ToDo: check that the position 'right' from the last gem in array almost
      // 200-300px from right to create a new gem to gain separation between gems
      // How to get the right position?? Hint: see collisions
      const gem = new Gem(
        this.gemsColors[this.randomIntFromInterval(1, this.gemsColors.length)],
        this.randomIntFromInterval(100, 300)
      )
      this.gemsInGame.push(gem)
      setTimeout(() => {
        this.gemsInGame.splice(this.gemsInGame.indexOf(gem), 1)
      }, 6000)
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
