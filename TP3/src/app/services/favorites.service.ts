import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: number[] = []

  constructor() {
    this.resetFavorites()
  }

  resetFavorites(): void {
    this.favorites = [15, 17, 23, 20, 10, 4, 9, 6]
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id)
  }

  getFavorites(): number[] {
    return this.favorites
  }

  toggleFavorite(id: number) {
    if (this.favorites.includes(id)) {
      this.removeFavorite(id)
    } else this.addFavorite(id)
  }

  addFavorite(id: number) {
    this.favorites.push(id)
  }

  removeFavorite(id: number) {
    this.favorites.splice(this.favorites.indexOf(id), 1)
  }
}
