import { Component, Input, OnInit } from '@angular/core';
import { Game } from "src/app/interfaces/game";

@Component({
  selector: 'app-favorites-cards-group',
  templateUrl: './favorites-cards-group.component.html',
  styleUrls: ['./favorites-cards-group.component.css']
})
export class FavoritesCardsGroupComponent implements OnInit {
	@Input() name!: string;
	@Input() games: Game[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
