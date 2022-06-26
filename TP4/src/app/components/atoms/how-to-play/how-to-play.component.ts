import { Component, Input, OnInit } from '@angular/core'
import { Game } from 'src/app/interfaces/game'

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.css']
})
export class HowToPlayComponent implements OnInit {
  @Input() game!: Game

  constructor() {}

  ngOnInit(): void {}
}
