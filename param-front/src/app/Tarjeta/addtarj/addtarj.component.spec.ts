import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtarjComponent } from './addtarj.component';

describe('AddtarjComponent', () => {
  let component: AddtarjComponent;
  let fixture: ComponentFixture<AddtarjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtarjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtarjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
