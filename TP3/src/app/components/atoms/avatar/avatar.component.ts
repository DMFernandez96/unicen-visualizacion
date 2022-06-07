import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() size!: number

  constructor() {}

  ngOnInit(): void {}
}
