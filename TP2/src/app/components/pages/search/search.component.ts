import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Game } from 'src/app/interfaces/game'
import { CategoriesService } from 'src/app/services/categories.service'
import { GamesService } from 'src/app/services/games.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name = ''
  category = 'Todas'
  orden = 'Mas nuevos primero'
  premium = 'Todos'
  search = false
  games: Map<string, Game[]>
  quantityGames = 0

  nameFilter = ''
  categoryFilter = 'Todas'
  ordenFilter = 'Mas nuevos primero'
  premiumFilter = 'Todos'
  filterOverlayVisible = false

  constructor(
    private categoriesService: CategoriesService,
    public gamesService: GamesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.games = new Map()
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      if (
        params.has('name') ||
        params.has('category') ||
        params.has('orden') ||
        params.has('premium')
      )
        this.search = true
      else {
        this.search = false
      }
      this.name = params.get('name') || ''
      this.category = params.get('category') || 'Todas'

      if (params.has('orden')) {
        if (params.get('orden') == 'Masnuevosprimero')
          this.orden = 'Mas nuevos primero'
        else this.orden = 'Mas antiguos primero'
      } else this.orden = 'Mas nuevos primero'

      if (params.has('premium')) {
        if (params.get('premium') == 'Noespecial') this.premium = 'No especial'
        else if (params.get('premium') == 'Especial') this.premium = 'Especial'
        else this.premium = 'Todos'
      } else this.premium = 'Todos'
      this.fetchGames()
    })
  }

  getCategories(): string[] {
    return this.categoriesService.getCategories()
  }

  getCategoriesWithAll(): string[] {
    let result = ['Todas']
    result = result.concat(this.categoriesService.getCategories())
    return result
  }

  fetchGames(): void {
    this.getCategories().forEach((category) =>
      this.games.set(category, this.getGames(category))
    )
    this.gamesCount()
  }

  getGames(category: string): Game[] {
    if (this.category == 'Todas' || this.category == category)
      return this.gamesService.getFiltered(
        this.name.toLowerCase(),
        category.toLowerCase(),
        this.orden == 'Mas nuevos primero' ? true : false,
        this.premium.replace(/ /g, '')
      )
    else return []
  }

  searchGame(): void {
    this.router.navigate(['/busqueda'], {
      queryParams: {
        name: this.name,
        category: this.category,
        orden: this.orden.replace(/ /g, ''),
        premium: this.premium.replace(/ /g, '')
      }
    })
    this.fetchGames()
  }

  searchGameBtnFilter(): void {
    this.name = this.nameFilter
    this.category = this.categoryFilter
    this.orden = this.ordenFilter
    this.premium = this.premiumFilter
    this.searchGame()
    this.closeFilterOverlay()
  }

  toggleFilterOverlay(): void {
    this.filterOverlayVisible = !this.filterOverlayVisible
  }

  closeFilterOverlay(): void {
    this.filterOverlayVisible = false
  }

  gamesCount() {
    let counter = 0
    this.getCategories().forEach((category) => {
      counter += this.games.get(category)!.length
    })
    this.quantityGames = counter
  }
}
