import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  @Input() src!: string
  @Input() name!: string
  @Input() premium!: boolean
  @Input() width = 200
  @Input() search!: string

  constructor() {}

  ngOnInit(): void {}

  getNameText(): string {
    if (this.name == undefined) return ''
    if (this.search == '' || this.search == undefined) return this.name

    this.search = this.search.toLowerCase()
    const searchCapitalize = this.capitalize(this.search)

    const regexp = new RegExp(`${this.search}`, 'g')
    const regexp2 = new RegExp(`${searchCapitalize}`, 'g')
    const nameHighlighted = this.name
      .replace(/\n$/g, '\n\n')
      .replace(regexp, `<mark>${this.search}</mark>`)
      .replace(regexp2, `<mark>${searchCapitalize}</mark>`)

    return nameHighlighted
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}
