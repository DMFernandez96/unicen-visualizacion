import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ForPlayingComponent } from './for-playing.component'

describe('ForPlayingComponent', () => {
  let component: ForPlayingComponent
  let fixture: ComponentFixture<ForPlayingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForPlayingComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ForPlayingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
