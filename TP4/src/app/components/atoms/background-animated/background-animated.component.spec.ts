import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BackgroundAnimatedComponent } from './background-animated.component'

describe('BackgroundAnimatedComponent', () => {
  let component: BackgroundAnimatedComponent
  let fixture: ComponentFixture<BackgroundAnimatedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundAnimatedComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundAnimatedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
