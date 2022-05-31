import { Injectable } from "@angular/core";
import { Game } from "../interfaces/game";
import { GAMES } from "../mock-data/mock-games";
import { FavoritesService } from "./favorites.service";
import { SessionService } from "./session.service";
@Injectable({
	providedIn: "root",
})
export class GamesService {
	games: Game[] = [];
	constructor(
		private favoritesService: FavoritesService,
		private sessionService: SessionService
	) {
		this.games = GAMES;
	}
	getById(id: number): Game {
		return this.games.find((g) => g.id == id)!;
	}

	getByCategory(category: string): Game[] {
		let gamesResponse: Game[] = [];
		// Add games repeatedly at the end for horizontal scroll in desktop
		this.games.forEach((game) => {
			if (game.category == category) gamesResponse.push(game);
		});
		this.games.forEach((game) => {
			if (game.category == category) gamesResponse.push(game);
		});
		return gamesResponse;
	}

	getContinuePlaying(): Game[] {
		let continuePlaying: Game[] = [];
		continuePlaying.push(this.getById(17));
		continuePlaying.push(this.getById(2));
		return continuePlaying;
	}

	getFavorites(): Game[] {
		let favorites: Game[] = [];
		this.favoritesService.getFavorites().forEach((id) => {
			favorites.push(this.getById(id));
		});
		return favorites;
	}

	getRecommendedForYou(): Game[] {
		let recommended: Game[] = [];
		recommended.push(this.getById(10));
		recommended.push(this.getById(13));
		recommended.push(this.getById(18));
		recommended.push(this.getById(16));
		recommended.push(this.getById(19));
		recommended.push(this.getById(23));
		recommended.push(this.getById(3));
		return recommended;
	}

	getFiltered(
		name: string,
		category: string,
		ascendente: boolean,
		premium: string
	): Game[] {
		let gamesFiltered: Game[] = [];
		if (premium == "Especial") {
			gamesFiltered = this.games.filter(
				(g) =>
					g.name.toLowerCase().includes(name) &&
					g.category == category &&
					g.premium == true
			);
		} else if (premium == "Noespecial") {
			gamesFiltered = this.games.filter(
				(g) =>
					g.name.toLowerCase().includes(name) &&
					g.category == category &&
					g.premium == false
			);
		} else if (premium == "Todos") {
			gamesFiltered = this.games.filter(
				(g) =>
					g.name.toLowerCase().includes(name) &&
					g.category == category
			);
		}
		if (!ascendente) gamesFiltered.reverse();
		return gamesFiltered;
	}
}
