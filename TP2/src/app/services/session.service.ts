import { Injectable } from "@angular/core";
import { UserLogged } from "../interfaces/user-logged";
import { UserLogin } from "../interfaces/user-login";
import { UserRegister } from "../interfaces/user-register";

@Injectable({
	providedIn: "root",
})
export class SessionService {
	private user?: UserLogged;

	constructor() {
		// this.user = {
		// 	email: "jugador@gmail.com",
		// 	username: "Jugador_001",
		// 	premium: false,
		// };
	}

	sigIn(user: UserLogin): boolean {
		this.user = {
			username: "Jugador_001",
			email: user.email,
			premium: false,
		};
		//valid anyone values as true
		return true;
	}

	register(user: UserRegister): boolean {
		//valid anyone values
		this.sigIn(user);
		return true;
	}

	logOut(): void {
		this.user = undefined;
	}

	isLoggedIn(): boolean {
		return this.user != undefined;
	}

	getUser(): UserLogged {
		return this.user!;
	}

	userIsPremium(): boolean {
		if (this.user == undefined) return false;
		return this.user!.premium;
	}

	setPremium(): void {
		this.user!.premium = true;
	}
}
