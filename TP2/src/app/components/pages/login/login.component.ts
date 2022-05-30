import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UserLogin } from "src/app/interfaces/user-login";
import { SessionService } from "src/app/services/session.service";
@Component({
 selector: "app-login",
 templateUrl: "./login.component.html",
 styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
 user: UserLogin;
 password: string = "";
 successLoginOverlayVisible: boolean = false;
	@Output() messageShow = new EventEmitter<boolean>();
	show: boolean = false;

 constructor(
  private router: Router,
  private sessionService: SessionService
 ) {
  this.user = {
   email: "",
   password: "",
  };
 }
 ngOnInit(): void {}
 login(e: any) {
  e.preventDefault();
  //TODO: validate inputs (before login and redirect to home)
  if (
   // this.user.password.length > 0 &&
   this.user.password == this.password
  ) {
   setTimeout(() => {
    this.sessionService.sigIn(this.user);
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