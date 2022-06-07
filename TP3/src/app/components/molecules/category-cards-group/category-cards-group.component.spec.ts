import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CategoryCardsGroupComponent } from './category-cards-group.component'

describe('CategoryCardsGroupComponent', () => {
  let component: CategoryCardsGroupComponent
  let fixture: ComponentFixture<CategoryCardsGroupComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCardsGroupComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardsGroupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
