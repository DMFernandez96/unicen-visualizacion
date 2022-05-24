import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-tabs-header",
	templateUrl: "./tabs-header.component.html",
	styleUrls: ["./tabs-header.component.css"],
})
export class TabsHeaderComponent implements OnInit {
	@Input() tabSelected!: number;
	@Output() tabSelectedChange = new EventEmitter<number>();

	constructor() {}

	ngOnInit(): void {}

	setTabSelected(value: number): void {
		this.tabSelectedChange.emit(value);
	}
}
