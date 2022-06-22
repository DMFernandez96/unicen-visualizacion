import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderOverlayProfileComponent } from './header-overlay-profile.component'

describe('HeaderOverlayProfileComponent', () => {
  let component: HeaderOverlayProfileComponent
  let fixture: ComponentFixture<HeaderOverlayProfileComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderOverlayProfileComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOverlayProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
