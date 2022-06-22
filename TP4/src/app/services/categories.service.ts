import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor() {}

  getCategories(): string[] {
    return ['Accion', 'Belleza', 'Carreras', 'Gestion', 'Infantiles', 'Puzzle']
  }
}
