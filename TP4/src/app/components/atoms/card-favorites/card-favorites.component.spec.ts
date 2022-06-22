import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CardFavoritesComponent } from './card-favorites.component'

describe('CardFavoritesComponent', () => {
  let component: CardFavoritesComponent
  let fixture: ComponentFixture<CardFavoritesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFavoritesComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFavoritesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
