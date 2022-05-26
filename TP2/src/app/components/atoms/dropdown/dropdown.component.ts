import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-dropdown",
	templateUrl: "./dropdown.component.html",
	styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent implements OnInit {
	@Input() text!: string;
	@Input() options!: string[];
	@Input() classList!: string;
	@Input() link: boolean = false;
	@Input() linkPrefix!: string;

	constructor() {}

	ngOnInit(): void {}
}
