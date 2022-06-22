import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  //use two-way data binding for allow close overlay from parent or from closing 'X'
  @Input() visible = true
  @Input() help = false
  @Output() visibleChange = new EventEmitter<boolean>()

  @Input() right = false

  constructor() {}

  ngOnInit(): void {}

  toggleVisible(): void {
    this.visible = !this.visible
    this.visibleChange.emit(this.visible)
  }
}
