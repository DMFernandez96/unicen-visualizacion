import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Character } from './Character'

@Component({
  selector: 'app-game-parallax',
  templateUrl: './game-parallax.component.html',
  styleUrls: ['./game-parallax.component.css']
})
export class GameParallaxComponent implements OnInit {
  @ViewChild('characterElement', { static: true })
  characterElement!: ElementRef

  character!: Character

  constructor() {}

  ngOnInit(): void {
    this.character = new Character(this.characterElement.nativeElement)
    requestAnimationFrame(this.gameLoop.bind(this))
    window.addEventListener('keydown', this.keyHandler.bind(this))
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
    requestAnimationFrame(this.gameLoop.bind(this))
  }
}
