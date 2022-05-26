import { Component, OnInit } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";

@Component({
	selector: "app-spinner-overlay",
	templateUrl: "./spinner-overlay.component.html",
	styleUrls: ["./spinner-overlay.component.css"],
})
export class SpinnerOverlayComponent implements OnInit {
	loading: boolean = false;

	constructor(private router: Router) {
		this.router.events.subscribe((event: Event) => {
			switch (true) {
				case event instanceof NavigationStart: {
					this.router.canceledNavigationResolution = "replace";
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
					}, 2000);
					break;
				}
				default: {
					console.log(event);
					break;
				}
			}
		});
	}

	ngOnInit(): void {}
}
