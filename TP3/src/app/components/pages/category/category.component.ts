import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Game } from 'src/app/interfaces/game'
import { GamesService } from 'src/app/services/games.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category!: string
  games!: Game[]

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.category = p.get('ID')!
      this.games = this.getGames()
    })
  }

  getGames(): Game[] {
    return this.gamesService.getByCategory(this.category)
  }
}
