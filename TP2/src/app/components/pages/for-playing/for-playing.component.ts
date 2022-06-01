import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "src/app/interfaces/game";
import { FavoritesService } from "src/app/services/favorites.service";
import { GamesService } from "src/app/services/games.service";
import { SessionService } from "src/app/services/session.service";
@Component({
	selector: "app-for-playing",
	templateUrl: "./for-playing.component.html",
	styleUrls: ["./for-playing.component.css"],
})
export class ForPlayingComponent implements OnInit {
	tabSelected: number = 1;
	infoOverlayVisible: boolean = false;
	shareOverlayVisible: boolean = true;
	id: number;
	isFavorite: boolean = false;
	like!: boolean | undefined;
	game: Game | undefined;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private favoritesService: FavoritesService,
		private sessionService: SessionService,
		private gamesService: GamesService
	) {
		this.id = 17;
		this.game = this.gamesService.getById(this.id);
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((p) => {
			this.id = parseInt(p.get("ID")!);
			this.game = this.gamesService.getById(this.id);
			if (this.game.premium && !this.sessionService.userIsPremium())
				this.game = undefined;
			this.isFavorite = this.updateFavorite();
		});
	}

	toggleFavorite() {
		if (!this.sessionService.isLoggedIn()) {
			this.router.navigate(["/crear-cuenta"], {
				queryParams: {
					redirect: "favoritos",
				},
			});
		} else {
			this.favoritesService.toggleFavorite(this.id);
			this.isFavorite = this.updateFavorite();
		}
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

	toggleInfoOverlay(): void {
		this.infoOverlayVisible = !this.infoOverlayVisible;
	}

	closeInfoOverlay(): void {
		this.infoOverlayVisible = false;
	}

	toggleShareOverlay(): void {
		//scroll to show btn share on top
		// if (!this.shareOverlayVisible) {
		// 	let parent: any = document.getElementsByClassName("scrollable")[0];
		// 	parent.scrollTo(0, 3000);
		// }
		this.shareOverlayVisible = !this.infoOverlayVisible;
	}

	closeShareOverlay(): void {
		this.shareOverlayVisible = false;
	}
}
