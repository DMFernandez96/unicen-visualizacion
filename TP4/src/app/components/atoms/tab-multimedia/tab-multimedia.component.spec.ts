import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMultimediaComponent } from './tab-multimedia.component';

describe('TabMultimediaComponent', () => {
  let component: TabMultimediaComponent;
  let fixture: ComponentFixture<TabMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
