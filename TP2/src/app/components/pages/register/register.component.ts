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
	@Output() messageShow = new EventEmitter<boolean>();
	show: boolean = false;
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
 register(e: any) {
  e.preventDefault();
  //TODO: validate inputs (before register and redirect to home)
  if (
   // this.user.password.length > 0 &&
   this.user.password == this.confirmPassword
  ) {
   setTimeout(() => {
    this.sessionService.register(this.user);
    this.router.navigate(["/"]);
   }, 2000);
  
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
