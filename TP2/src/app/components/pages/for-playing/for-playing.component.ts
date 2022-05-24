import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-for-playing",
	templateUrl: "./for-playing.component.html",
	styleUrls: ["./for-playing.component.css"],
})
export class ForPlayingComponent implements OnInit {
	tabSelected: number = 3;

	constructor() {}

	ngOnInit(): void {}
}
