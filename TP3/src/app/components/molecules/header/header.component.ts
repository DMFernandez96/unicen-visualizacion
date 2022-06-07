import { Component, OnInit } from '@angular/core'
import { SessionService } from 'src/app/services/session.service'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { CategoriesService } from 'src/app/services/categories.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOverlayVisible = false
  profileOverlayVisible = false
  searchValue!: string

  constructor(
    public sessionService: SessionService,
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {}

  toggleMenuOverlay(): void {
    this.menuOverlayVisible = !this.menuOverlayVisible
  }

  closeMenuOverlay(): void {
    this.menuOverlayVisible = false
  }

  toggleProfileOverlay(): void {
    this.profileOverlayVisible = !this.profileOverlayVisible
  }

  closeProfileOverlay(): void {
    this.profileOverlayVisible = false
  }

  userIsLogged(): boolean {
    return this.sessionService.isLoggedIn()
  }

  search(): void {
    if (this.searchValue == '' || this.searchValue == undefined) {
      this.router.navigate(['/busqueda'])
    } else {
      const search = this.searchValue
      this.searchValue = ''
      this.router.navigate(['/busqueda'], {
        queryParams: {
          name: search,
          category: 'Todas',
          orden: 'Masnuevosprimero'
        }
      })
    }
  }

  getCategories(): string[] {
    return this.categoriesService.getCategories()
  }
}
