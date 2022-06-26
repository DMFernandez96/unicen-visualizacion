import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-tab-multimedia',
  templateUrl: './tab-multimedia.component.html',
  styleUrls: ['./tab-multimedia.component.css']
})
export class TabMultimediaComponent implements OnInit {
  @Input() id!: number

  constructor() {}

  ngOnInit(): void {}
}
