import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDirectiveComponent } from './display-directive.component';

describe('DisplayDirectiveComponent', () => {
  let component: DisplayDirectiveComponent;
  let fixture: ComponentFixture<DisplayDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
