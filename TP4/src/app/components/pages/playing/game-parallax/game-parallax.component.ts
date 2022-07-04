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

  character!: Character
  score: number
  zombiesToChoose: string[]
  zombiesInGame: Zombie[]
  gemsInGame: Gem[]
  gemsColors: string[]
  cont = 1

  constructor() {
    this.score = 0 //ToDo: change for 0 on improvements
    this.zombiesToChoose = ['zombie1', 'zombie2', 'zombie3', 'zombie4']
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
    if (this.zombiesInGame.length < 1) {
      const zombie = new Zombie(
        this.zombiesToChoose[
          this.randomIntFromInterval(0, this.zombiesToChoose.length - 1)
        ],
        this.cont
      )
      this.cont++
      this.zombiesInGame.push(zombie)
      setTimeout(() => {
        this.zombiesInGame.splice(this.zombiesInGame.indexOf(zombie), 1)
      }, 5000)
    }
  }

  checkGems(): void {
    if (this.gemsInGame.length < 10) {
      //ToDo: check that the position 'right' from the last gem in array almost
      // 200-300px from right to create a new gem to gain separation between gems
      // How to get the right position?? Hint: see collisions
      const gem = new Gem(
        this.gemsColors[
          this.randomIntFromInterval(0, this.gemsColors.length - 1)
        ],
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
