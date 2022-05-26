import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "src/app/services/categories.service";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
	category: string = "todas";

	constructor(private categoriesService: CategoriesService) {}

	ngOnInit(): void {}

	getCategories(): string[] {
		let result = ["Todas"];
		result = result.concat(this.categoriesService.getCategories());
		return result;
	}
}
