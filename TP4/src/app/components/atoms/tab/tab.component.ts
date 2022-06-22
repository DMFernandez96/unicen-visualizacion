import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() text!: string
  @Input() selected = false
  @Input() first = false
  @Input() last = false

  constructor() {}

  ngOnInit(): void {}
}
