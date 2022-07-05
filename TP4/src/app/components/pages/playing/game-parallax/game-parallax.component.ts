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
    if_elapsed_50: if (elapsed > 50) {
      this.previousTime = timestamp
      for (let index = 0; index < this.zombiesInGame.length; index++) {
        if (this.character.checkCollision(this.zombiesInGame[index])) {
          this.setGameOver()
          break if_elapsed_50
        }
      }
      for (let index = 0; index < this.gemsInGame.length; index++) {
        if (this.character.checkCollision(this.gemsInGame[index])) {
          this.score += this.gemsInGame[index].value
          this.gemsInGame.splice(index, 1)
        }
      }
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
      // 20% generate one zombie, 80% generate horde
      if (this.randomIntFromInterval(1, 100) > 20) {
        this.generateZombie()
      } else {
        //Generate zombies horde
        for (let index = 0; index < 5; index++) {
          this.generateZombie()
        }
      }
    }
  }

  generateZombie(): void {
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

  checkGems(): void {
    if (this.gemsInGame.length < 10) {
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
      }, 7000)
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  setGameOver(): void {
    this.character.die()
    this.gemsInGame.forEach((gem) => {
      gem.paused = true
    })
    this.zombiesInGame.forEach((zombie) => {
      zombie.paused = true
    })
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
