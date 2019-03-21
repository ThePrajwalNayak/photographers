import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneymoonPhotographerComponent } from './honeymoon-photographer.component';

describe('HoneymoonPhotographerComponent', () => {
  let component: HoneymoonPhotographerComponent;
  let fixture: ComponentFixture<HoneymoonPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneymoonPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneymoonPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
