import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameParallaxComponent } from './game-parallax.component';

describe('GameParallaxComponent', () => {
  let component: GameParallaxComponent;
  let fixture: ComponentFixture<GameParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameParallaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
