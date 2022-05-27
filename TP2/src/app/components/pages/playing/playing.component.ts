import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  @Input() visible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleHelpOverlay():void{
    this.visible= !this.visible;
  }

  close():void{
    this.visible = !this.visible;
  }
}
