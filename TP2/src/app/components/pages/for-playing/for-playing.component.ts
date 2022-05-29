import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "src/app/services/favorites.service";
import { SessionService } from "src/app/services/session.service";

@Component({
	selector: "app-for-playing",
	templateUrl: "./for-playing.component.html",
	styleUrls: ["./for-playing.component.css"],
})
export class ForPlayingComponent implements OnInit {
	tabSelected: number = 1;
	id: number = 17;
	isFavorite: boolean = false;
	like!: boolean | undefined;

	constructor(
		private favoritesService: FavoritesService,
		private sessionService: SessionService
	) {}

	ngOnInit(): void {
		this.isFavorite = this.updateFavorite();
	}

	toggleFavorite() {
		this.favoritesService.toggleFavorite(this.id);
		this.isFavorite = this.updateFavorite();
	}

	updateFavorite(): boolean {
		if (
			this.sessionService.isLoggedIn() &&
			this.favoritesService.isFavorite(this.id)
		) {
			return true;
		} else return false;
	}

	isLoggedIn(): boolean {
		return this.sessionService.isLoggedIn();
	}

	toggleLike(state: string) {
		if (this.like == undefined) {
			this.like = state == "like";
		} else {
			if (
				(this.like && state == "like") ||
				(!this.like && state == "dislike")
			)
				this.like = undefined;
			else this.like = !this.like;
		}
	}
}
