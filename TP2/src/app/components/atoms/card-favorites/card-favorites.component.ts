import { Component, Input, OnInit } from "@angular/core";
import { FavoritesService } from "src/app/services/favorites.service";

@Component({
	selector: "app-card-favorites",
	templateUrl: "./card-favorites.component.html",
	styleUrls: ["./card-favorites.component.css"],
})
export class CardFavoritesComponent implements OnInit {
	@Input() src!: string;
	@Input() name!: string;
	@Input() id!: number;

	constructor(private favoritesService: FavoritesService) {}

	ngOnInit(): void {}

	removeFavorite(): void {
		this.favoritesService.removeFavorite(this.id);
	}
}
