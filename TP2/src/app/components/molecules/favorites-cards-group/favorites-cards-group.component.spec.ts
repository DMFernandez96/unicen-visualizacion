import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCardsGroupComponent } from './favorites-cards-group.component';

describe('FavoritesCardsGroupComponent', () => {
  let component: FavoritesCardsGroupComponent;
  let fixture: ComponentFixture<FavoritesCardsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesCardsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesCardsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
