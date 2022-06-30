import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-game-parallax',
  templateUrl: './game-parallax.component.html',
  styleUrls: ['./game-parallax.component.css']
})
export class GameParallaxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    requestAnimationFrame(this.gameLoop.bind(this))
    window.addEventListener('keypress', (e) => {
      console.log(e)
    })
  }

  gameLoop(e: any): void {
    requestAnimationFrame(this.gameLoop.bind(this))
  }
}
