import { Component, OnInit } from '@angular/core'
import { GamesService } from 'src/app/services/games.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  constructor(public gamesService: GamesService) {}

  ngOnInit(): void {}
}
