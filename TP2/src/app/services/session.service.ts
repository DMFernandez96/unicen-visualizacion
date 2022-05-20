import { Injectable } from "@angular/core";
import { UserLogged } from "../interfaces/user-logged";
import { UserLogin } from "../interfaces/user-login";
import { UserRegister } from "../interfaces/user-register";

@Injectable({
	providedIn: "root",
})
export class SessionService {
	private user?: UserLogged;

	constructor() {}

	sigIn(user: UserLogin): boolean {
		//TODO: simulate timeout to api for make animation load
		this.user = {
			username: "Jugador_001",
			email: user.email,
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
}
