import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
	selector: "app-card-game",
	templateUrl: "./card-game.component.html",
	styleUrls: ["./card-game.component.css"],
})
export class CardGameComponent implements OnInit {
	@Input() src!: string;
	@Input() name!: string;
	@Input() width: number = 250;
	@Input() search!: string;

	constructor() {}

	ngOnInit(): void {}

	getNameText(): string {
		if (this.name == undefined) return "";
		if (this.search == "") return this.name;

		this.search = this.search.toLowerCase();
		let searchCapitalize = this.capitalize(this.search);

		let regexp = new RegExp(`${this.search}`, "g");
		let regexp2 = new RegExp(`${searchCapitalize}`, "g");
		let nameHighlighted = this.name
			.replace(/\n$/g, "\n\n")
			.replace(regexp, `<mark>${this.search}</mark>`)
			.replace(regexp2, `<mark>${searchCapitalize}</mark>`);

		return nameHighlighted;
	}

	capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}
