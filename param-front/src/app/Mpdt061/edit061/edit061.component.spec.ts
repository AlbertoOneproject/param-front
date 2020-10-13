import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit061Component } from './edit061.component';

describe('Edit061Component', () => {
  let component: Edit061Component;
  let fixture: ComponentFixture<Edit061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
