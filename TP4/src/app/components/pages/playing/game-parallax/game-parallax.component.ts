import { Component, OnInit } from '@angular/core'
import { Character } from './Character'
import { Gem } from './Gem'
import { Zombie } from './Zombie'

@Component({
  selector: 'app-game-parallax',
  templateUrl: './game-parallax.component.html',
  styleUrls: ['./game-parallax.component.css']
})
export class GameParallaxComponent implements OnInit {
  character!: Character
  score: number
  zombiesToChoose: string[]
  zombiesInGame: Zombie[]
  gemsInGame: Gem[]
  gemsColors: string[]
  gemsValues: number[]
  counterId: number

  previousTime: number | undefined
  gameOver: boolean

  constructor() {
    this.score = 0
    this.zombiesToChoose = ['zombie1', 'zombie2', 'zombie3', 'zombie4']
    this.zombiesInGame = []
    this.gemsInGame = []
    this.gemsColors = ['grey', 'blue', 'green', 'orange', 'pink', 'yellow']
    this.gemsValues = [1, 2, 2, 3, 3, 5]
    this.counterId = 1
    this.gameOver = false
  }

  ngOnInit(): void {
    this.character = new Character('character')
    window.addEventListener('keydown', this.keyHandler.bind(this))
    requestAnimationFrame(this.gameLoop.bind(this))
  }

  keyHandler(event: KeyboardEvent) {
    event.preventDefault()
    if (event.key == 'ArrowUp' || event.key == 'w') {
      if (!this.character.isJump()) this.character.jump()
    }
  }

  gameLoop(timestamp: number): void {
    if (this.previousTime == undefined) this.previousTime = timestamp
    const elapsed = timestamp - this.previousTime
    if (elapsed > 50) {
      this.previousTime = timestamp
      this.zombiesInGame.forEach((zombie) => {
        if (this.character.checkCollision(zombie)) {
          this.setGameOver()
          return
        }
      })
      this.gemsInGame.forEach((gem) => {
        if (this.character.checkCollision(gem)) {
          this.score += gem.value
          this.gemsInGame.splice(this.gemsInGame.indexOf(gem), 1)
        }
      })
      this.checkZombies()
      this.checkGems()
    }
    if (!this.gameOver) requestAnimationFrame(this.gameLoop.bind(this))
  }

  checkZombies(): void {
    if (
      this.zombiesInGame.length == 0 ||
      this.zombiesInGame[this.zombiesInGame.length - 1].left <
        this.randomIntFromInterval(400, 600)
    ) {
      const zombie = new Zombie(
        'zombie' + this.counterId,
        this.zombiesToChoose[
          this.randomIntFromInterval(0, this.zombiesToChoose.length - 1)
        ]
      )
      this.counterId++
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
      const random = this.randomIntFromInterval(0, this.gemsColors.length - 1)
      const gem = new Gem(
        'gem' + this.counterId,
        this.gemsColors[random],
        this.randomIntFromInterval(100, 300),
        this.gemsValues[random]
      )
      this.counterId++
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

  setGameOver(): void {
    this.character.die()
    this.previousTime = undefined
    this.gameOver = true
  }

  reset(): void {
    this.gameOver = false
    this.character.reset()
    this.score = 0
    requestAnimationFrame(this.gameLoop.bind(this))
  }
}
