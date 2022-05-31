import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserLogin } from "src/app/interfaces/user-login";
import { SessionService } from "src/app/services/session.service";
@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	user: UserLogin;
	showSuccess: boolean = false;

	emailError: boolean = false;
	passwordError: boolean = false;

	redirect: string = "/";

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private sessionService: SessionService
	) {
		this.user = {
			email: "",
			password: "",
		};
	}

	ngOnInit(): void {
		this.route.queryParamMap.subscribe((params) => {
			if (params.has("redirect")) this.redirect = params.get("redirect")!;
			else {
				this.redirect = "/";
			}
		});
	}

	login() {
		if (this.validateForm()) {
			this.showSuccess = true;
			setTimeout(() => {
				this.sessionService.sigIn(this.user);
				this.router.navigate([this.redirect]);
			}, 2000);
		}
	}

	validateForm(): boolean {
		let state: boolean = true;
		if (this.user.email.length < 5 || !this.user.email.includes("@")) {
			this.emailError = true;
			state = false;
		} else {
			this.emailError = false;
		}
		if (this.user.password.length < 3) {
			this.passwordError = true;
			state = false;
		} else {
			this.passwordError = false;
		}
		return state;
	}
}
