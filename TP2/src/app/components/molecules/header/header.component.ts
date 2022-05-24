import { Component, OnInit } from "@angular/core";
import { SessionService } from "src/app/services/session.service";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
	menuOverlayVisible: boolean = false;
	profileOverlayVisible: boolean = false;
	categoryOverlayVisible: boolean =false;
	searchValue!: String;
	constructor(public sessionService: SessionService, private router: Router) {}

	ngOnInit(): void {}

	toggleMenuOverlay(): void {
		this.menuOverlayVisible = !this.menuOverlayVisible;
	}

	closeMenuOverlay(): void {
		this.menuOverlayVisible = false;
	}

	toggleProfileOverlay(): void {
		this.profileOverlayVisible = !this.profileOverlayVisible;
	}

	closeProfileOverlay(): void {
		this.profileOverlayVisible = false;
	}

	userIsLogged(): boolean {
		return this.sessionService.isLoggedIn();
	}

	onKeyDownEvent(): void{
		this.searchValue= " ";
		this.router.navigate(['/busqueda']);
	}

	toggleCategoryOverlay():void{
		this.categoryOverlayVisible = !this.categoryOverlayVisible;
	}
	closeCategoryOverlay(): Observable<MouseEvent> | void{
		this.categoryOverlayVisible = false;	
	}

}
