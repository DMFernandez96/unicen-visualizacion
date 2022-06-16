import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Game } from 'src/app/interfaces/game'
import { FavoritesService } from 'src/app/services/favorites.service'
import { GamesService } from 'src/app/services/games.service'
import { SessionService } from 'src/app/services/session.service'
@Component({
  selector: 'app-for-playing',
  templateUrl: './for-playing.component.html',
  styleUrls: ['./for-playing.component.css']
})
export class ForPlayingComponent implements OnInit {
  tabSelected = 1
  id: number
  isFavorite = false
  like!: boolean | undefined
  game: Game | undefined

  infoVisible: boolean
  shareLinksVisible: boolean

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService,
    private sessionService: SessionService,
    private gamesService: GamesService
  ) {
    this.id = 17
    this.game = this.gamesService.getById(this.id)
    this.infoVisible = false
    this.shareLinksVisible = false
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.id = parseInt(p.get('ID')!)
      this.game = this.gamesService.getById(this.id)
      if (this.game.premium && !this.sessionService.userIsPremium())
        this.game = undefined
      this.isFavorite = this.updateFavorite()
    })
  }

  toggleFavorite() {
    if (!this.sessionService.isLoggedIn()) {
      this.router.navigate(['/crear-cuenta'], {
        queryParams: {
          redirect: 'favoritos'
        }
      })
    } else {
      this.favoritesService.toggleFavorite(this.id)
      this.isFavorite = this.updateFavorite()
    }
  }

  updateFavorite(): boolean {
    if (
      this.sessionService.isLoggedIn() &&
      this.favoritesService.isFavorite(this.id)
    ) {
      return true
    } else return false
  }

  isLoggedIn(): boolean {
    return this.sessionService.isLoggedIn()
  }

  toggleLike(state: string) {
    if (this.like == undefined) {
      this.like = state == 'like'
    } else {
      if ((this.like && state == 'like') || (!this.like && state == 'dislike'))
        this.like = undefined
      else this.like = !this.like
    }
  }

  showHelpInfo() {
    this.infoVisible = !this.infoVisible
  }

  showShareLinks() {
    this.shareLinksVisible = !this.shareLinksVisible
  }

  scrollRight(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' })
    el.scrollLeft = el.scrollLeft + 600
  }

  scrollLeft(el: HTMLElement): void {
    el.scrollLeft = el.scrollLeft - 600
  }
}
