import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { SessionService } from "src/app/services/session.service";

@Component({
	selector: "app-header-overlay-profile",
	templateUrl: "./header-overlay-profile.component.html",
	styleUrls: ["./header-overlay-profile.component.css"],
})
export class HeaderOverlayProfileComponent implements OnInit {
	@Output() close = new EventEmitter<any>();

	constructor(public sessionService: SessionService) {}

	ngOnInit(): void {}

	closeProfileOverlay(): void {
		this.close.emit();
	}

	userIsLogged(): boolean {
		return this.sessionService.isLoggedIn();
	}

	closeSession(): void {
		this.sessionService.logOut();
		this.closeProfileOverlay();
	}

	getUsername(): string {
		return this.sessionService.getUser()?.username || "Undefined";
	}
}
