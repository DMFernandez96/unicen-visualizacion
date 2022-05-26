import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-select",
	templateUrl: "./select.component.html",
	styleUrls: ["./select.component.css"],
})
export class SelectComponent implements OnInit {
	@Input() value!: string;
	@Output() valueChange = new EventEmitter<string>();

	@Input() label!: string;
	@Input() options!: string[];

	constructor() {}

	ngOnInit(): void {}

	handleChange(): void {
		this.valueChange.emit(this.value);
	}
}
