import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersDeatilsComponent } from './photographers-deatils.component';

describe('PhotographersDeatilsComponent', () => {
  let component: PhotographersDeatilsComponent;
  let fixture: ComponentFixture<PhotographersDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographersDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographersDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
