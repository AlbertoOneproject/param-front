import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add061Component } from './add061.component';

describe('Add061Component', () => {
  let component: Add061Component;
  let fixture: ComponentFixture<Add061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
