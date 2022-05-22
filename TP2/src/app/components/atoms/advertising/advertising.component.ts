import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css']
})
export class AdvertisingComponent implements OnInit {
	@Input() visible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
		this.visible = !this.visible;
	}

}
