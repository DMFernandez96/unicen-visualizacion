import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-playing",
	templateUrl: "./playing.component.html",
	styleUrls: ["./playing.component.css"],
})
export class PlayingComponent implements OnInit {
	helpOverlayVisible: boolean = false;
	orientation: string;
	id: number;

	constructor(private route: ActivatedRoute) {
		this.orientation = window.screen.orientation.type;
		this.id = 17;
	}

	ngOnInit(): void {
		window.addEventListener("orientationchange", () => {
			this.orientation = window.screen.orientation.type;
		});
		this.route.paramMap.subscribe((p) => {
			this.id = parseInt(p.get("ID")!);
		});
	}

	toggleHelpOverlay(): void {
		this.helpOverlayVisible = !this.helpOverlayVisible;
	}
}
