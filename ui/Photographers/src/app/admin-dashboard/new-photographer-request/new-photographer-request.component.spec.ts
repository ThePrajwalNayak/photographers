import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhotographerRequestComponent } from './new-photographer-request.component';

describe('NewPhotographerRequestComponent', () => {
  let component: NewPhotographerRequestComponent;
  let fixture: ComponentFixture<NewPhotographerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPhotographerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPhotographerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
