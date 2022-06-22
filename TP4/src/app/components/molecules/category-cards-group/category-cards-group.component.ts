import { Component, Input, OnInit } from '@angular/core'
import { Game } from 'src/app/interfaces/game'
import { Router } from '@angular/router'
import { SessionService } from 'src/app/services/session.service'

@Component({
  selector: 'app-category-cards-group',
  templateUrl: './category-cards-group.component.html',
  styleUrls: ['./category-cards-group.component.css']
})
export class CategoryCardsGroupComponent implements OnInit {
  @Input() name!: string
  @Input() games: Game[] = []
  @Input() viewMore = false
  @Input() search!: string

  constructor(private router: Router, public sessionService: SessionService) {}

  ngOnInit(): void {}

  scrollRight(el: HTMLElement): void {
    // el.scrollIntoView({ behavior: "smooth" });
    el.scrollLeft = el.scrollLeft + 250
  }

  scrollLeft(el: HTMLElement): void {
    el.scrollLeft = el.scrollLeft - 250
  }

  userIsLogged(): boolean {
    return this.sessionService.isLoggedIn()
  }

  forPlaying(num: number, premium: boolean) {
    if (!this.userIsLogged() && premium) {
      this.router.navigate(['/crear-cuenta'], {
        queryParams: {
          redirect: 'mejorar-cuenta'
        }
      })
    } else if (this.sessionService.userIsPremium() && premium) {
      this.router.navigate(['/juego/', num])
    } else if (!this.sessionService.userIsPremium() && premium) {
      this.router.navigate(['/mejorar-cuenta'])
    } else {
      this.router.navigate(['/juego/', num])
    }
  }
}
