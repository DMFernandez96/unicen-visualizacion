import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UserRegister } from "src/app/interfaces/user-register";
import { SessionService } from "src/app/services/session.service";
@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
	user: UserRegister;
	confirmPassword: string = "";
	showSuccess: boolean = false;

	usernameError: boolean = false;
	emailError: boolean = false;
	passwordError: boolean = false;

	constructor(
		private router: Router,
		private sessionService: SessionService
	) {
		this.user = {
			username: "",
			email: "",
			password: "",
		};
	}

	ngOnInit(): void {}

	register() {
		if (this.validateForm()) {
			this.showSuccess = true;
			setTimeout(() => {
				this.sessionService.register(this.user);
				this.router.navigate(["/"]);
			}, 2000);
		}
	}

	validateForm(): boolean {
		let state: boolean = true;
		if (this.user.username.length < 3) {
			this.usernameError = true;
			state = false;
		} else {
			this.usernameError = false;
		}
		if (this.user.email.length < 5) {
			this.emailError = true;
			state = false;
		} else {
			this.emailError = false;
		}
		if (
			this.user.password.length < 3 ||
			this.user.password != this.confirmPassword
		) {
			this.passwordError = true;
			state = false;
		} else {
			this.passwordError = false;
		}
		return state;
	}
}
