import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {
  @Input() name!: string
  @Input() width!: number
  hidden = true

  constructor() {}

  ngOnInit(): void {}

  toggleHidden(): void {
    this.hidden = !this.hidden
  }
}
