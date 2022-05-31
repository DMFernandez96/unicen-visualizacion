import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-playing",
	templateUrl: "./playing.component.html",
	styleUrls: ["./playing.component.css"],
})
export class PlayingComponent implements OnInit {
	helpOverlayVisible: boolean = false;
	orientation: string;

	constructor() {
		this.orientation = window.screen.orientation.type;
	}

	ngOnInit(): void {
		window.addEventListener("orientationchange", () => {
			console.log(window.screen.orientation.type);
			this.orientation = window.screen.orientation.type;
		});
	}

	toggleHelpOverlay(): void {
		this.helpOverlayVisible = !this.helpOverlayVisible;
	}
}
