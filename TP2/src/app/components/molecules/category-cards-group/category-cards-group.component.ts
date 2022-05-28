import { Component, Input, OnInit } from "@angular/core";
import { Game } from "src/app/interfaces/game";

@Component({
	selector: "app-category-cards-group",
	templateUrl: "./category-cards-group.component.html",
	styleUrls: ["./category-cards-group.component.css"],
})
export class CategoryCardsGroupComponent implements OnInit {
	@Input() name!: string;
	@Input() games: Game[] = [];
	@Input() viewMore: boolean = false;
	@Input() search!: string;

	constructor() {}

	ngOnInit(): void {}

	scrollRight(el: HTMLElement): void {
		// el.scrollIntoView({ behavior: "smooth" });
		el.scrollLeft = el.scrollLeft + 250;
	}

	scrollLeft(el: HTMLElement): void {
		el.scrollLeft = el.scrollLeft - 250;
	}
}
