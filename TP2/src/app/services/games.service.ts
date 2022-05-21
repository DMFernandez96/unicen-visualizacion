import { Injectable } from "@angular/core";
import { Game } from "../interfaces/game";
import { GAMES } from "../mock-data/mock-games";

@Injectable({
	providedIn: "root",
})
export class GamesService {
	games: Game[] = [];

	constructor() {
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
		favorites.push(this.getById(15));
		favorites.push(this.getById(17));
		favorites.push(this.getById(23));
		favorites.push(this.getById(20));
		favorites.push(this.getById(10));
		favorites.push(this.getById(4));
		favorites.push(this.getById(9));
		favorites.push(this.getById(6));
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
}
