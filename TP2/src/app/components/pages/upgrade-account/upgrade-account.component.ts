import { Component, OnInit } from "@angular/core";
import { SessionService } from "src/app/services/session.service";

@Component({
	selector: "app-upgrade-account",
	templateUrl: "./upgrade-account.component.html",
	styleUrls: ["./upgrade-account.component.css"],
})
export class UpgradeAccountComponent implements OnInit {
	show: boolean = false;

	constructor(private sessionService: SessionService) {}

	ngOnInit(): void {}

	userIsPremium(): boolean {
		return this.sessionService.userIsPremium();
	}

	upgradeAccount(): void {
		this.show = true;
		setTimeout(() => {
			this.sessionService.setPremium();
		}, 2000);
	}

	isShown(show: any): void {
		this.show = show;
	}
}
