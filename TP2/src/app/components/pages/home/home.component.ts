import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "src/app/services/categories.service";
import { GamesService } from "src/app/services/games.service";
import { SessionService } from "src/app/services/session.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
	constructor(
		public gamesService: GamesService,
		public sessionService: SessionService,
		private categoriesService: CategoriesService
	) {}

	ngOnInit(): void {}

	getCategories(): string[] {
		return this.categoriesService.getCategories();
	}
}
