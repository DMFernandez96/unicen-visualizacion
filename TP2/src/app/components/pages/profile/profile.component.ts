import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserRegister } from "src/app/interfaces/user-register";
import { NgZone } from "@angular/core";
@Component({
 selector: "app-profile",
 templateUrl: "./profile.component.html",
 styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
 user: UserRegister;
 confirmPassword: string = "";
 isShown: boolean = false; // hidden by default
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
  }, 2000);
  } else console.log("TODO: inform errors");
 }
 toggleShow(): void {
   this.isShown = !this.isShown;
 }
}