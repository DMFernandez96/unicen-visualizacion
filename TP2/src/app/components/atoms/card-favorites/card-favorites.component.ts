import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-favorites',
  templateUrl: './card-favorites.component.html',
  styleUrls: ['./card-favorites.component.css']
})
export class CardFavoritesComponent implements OnInit {
	@Input() src!: string;
	@Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
