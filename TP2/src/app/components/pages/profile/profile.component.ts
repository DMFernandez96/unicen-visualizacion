import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UserRegister } from "src/app/interfaces/user-register";

@Component({
 selector: "app-profile",
 templateUrl: "./profile.component.html",
 styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
 	user: UserRegister;
 	confirmPassword: string = "";
	@Output() messageShow = new EventEmitter<boolean>();
	show: boolean = false;

 	constructor(private router: Router) {
  	this.user = {
   	username: "",
   	email: "",
   	password: "",
  	};
 	}
 	ngOnInit(): void {}
 	editProfile(e: any) {
  	e.preventDefault();
		if (
		// this.user.password.length > 0 &&
		this.user.password == this.confirmPassword
		) {
			setTimeout(() => {
				this.router.navigate(["/"]);
			}, 1000);
			} else console.log("TODO: inform errors");
	}

	toggleShow(): void {
  	this.show = true;
		this.messageShow.emit(this.show);
	}

	isShown(show: any): void {
		this.show = show;
	}

}