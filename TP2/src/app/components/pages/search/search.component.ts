import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
	categories: string[];
	category: string = "todas";

	constructor() {
		this.categories = [
			"Todas",
			"Accion",
			"Belleza",
			"Carreras",
			"Gestion",
			"Infantiles",
			"Puzzle",
		];
	}

	ngOnInit(): void {}
}
