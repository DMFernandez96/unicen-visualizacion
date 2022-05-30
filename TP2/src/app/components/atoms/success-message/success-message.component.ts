import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {
  show: boolean = false;
  @Output() messageShow = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(): void {
    this.show = true;
      this.messageShow.emit(this.show);
  }

}
