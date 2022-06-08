import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  helpOverlayVisible: boolean

  constructor() {
    this.helpOverlayVisible = false
  }

  ngOnInit(): void {}

  toggleHelpOverlay(): void {
    this.helpOverlayVisible = !this.helpOverlayVisible
  }
}
