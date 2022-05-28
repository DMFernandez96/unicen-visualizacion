import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
	search: boolean = false;
	games: Map<string, Game[]>;
	quantityGames: number = 0;

	filterOverlayVisible: boolean = false;

	constructor(
		private categoriesService: CategoriesService,
		public gamesService: GamesService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.games = new Map();
		this.fetchGames();
	}

	ngOnInit(): void {
		this.route.queryParamMap.subscribe((params) => {
			if (
				params.has("name") ||
				params.has("category") ||
				params.has("orden")
			)
				this.search = true;
			else {
				this.search = false;
			}

			this.name = params.get("name") || "";
			this.category = params.get("category") || "todas";
			if (params.has("orden")) {
				if (params.get("orden") == "masnuevosprimero")
					this.orden = "mas nuevos primero";
				else this.orden = "mas antiguos primero";
			} else this.orden = "mas nuevos primero";
		});
	}

	getCategories(): string[] {
		return this.categoriesService.getCategories();
	}

	getCategoriesWithAll(): string[] {
		let result = ["Todas"];
		result = result.concat(this.categoriesService.getCategories());
		return result;
	}

	fetchGames(): void {
		this.getCategories().forEach((category) =>
			this.games.set(category, this.getGames(category))
		);
		this.gamesCount();
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

	searchGame(e: any): void {
		this.router.navigate(["/busqueda"], {
			queryParams: {
				name: this.name,
				category: this.category,
				orden: this.orden.replace(/ /g, ""),
			},
		});
		this.fetchGames();
		this.closeFilterOverlay();
	}

	toggleFilterOverlay(): void {
		this.filterOverlayVisible = !this.filterOverlayVisible;
	}

	closeFilterOverlay(): void {
		this.filterOverlayVisible = false;
	}

	gamesCount() {
		let counter = 0;
		this.getCategories().forEach((category) => {
			counter += this.games.get(category)!.length;
		});
		this.quantityGames = counter;
	}
}
