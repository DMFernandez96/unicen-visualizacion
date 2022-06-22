import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConnectFourComponent } from './game-connect-four.component';

describe('GameConnectFourComponent', () => {
  let component: GameConnectFourComponent;
  let fixture: ComponentFixture<GameConnectFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameConnectFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameConnectFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
