import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() value = 'asd'
  @Output() valueChange = new EventEmitter<string>()

  @Input() type = 'text'
  @Input() placeholder = ''

  @Input() label = 'Label'

  constructor() {}

  ngOnInit(): void {}

  handleChange(e: any): void {
    this.value = e
    this.valueChange.emit(this.value)
  }
}
