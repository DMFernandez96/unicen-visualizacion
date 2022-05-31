import { Component } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	constructor(private router: Router) {}

	isPlayingPage(): boolean {
		return this.router.url.includes("/jugando/");
	}
}
