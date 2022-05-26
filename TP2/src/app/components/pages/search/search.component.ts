import { Component, OnInit } from "@angular/core";
import { Game } from "src/app/interfaces/game";
import { CategoriesService } from "src/app/services/categories.service";
import { GamesService } from "src/app/services/games.service";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
	name: string = "";
	category: string = "todas";
	orden: string = "mas nuevos primero";

	constructor(
		private categoriesService: CategoriesService,
		public gamesService: GamesService
	) {}

	ngOnInit(): void {}

	getCategories(): string[] {
		return this.categoriesService.getCategories();
	}

	getCategoriesWithAll(): string[] {
		let result = ["Todas"];
		result = result.concat(this.categoriesService.getCategories());
		return result;
	}

	getGames(category: string): Game[] {
		if (this.category == "todas" || this.category == category.toLowerCase())
			return this.gamesService.getFiltered(
				this.name.toLowerCase(),
				category.toLowerCase(),
				this.orden == "mas nuevos primero" ? true : false
			);
		else return [];
	}

	search(e: any): void {
		// e.preventDefault();
	}
}
