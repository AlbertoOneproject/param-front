import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listar061Component } from './listar061.component';

describe('Listar061Component', () => {
  let component: Listar061Component;
  let fixture: ComponentFixture<Listar061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listar061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listar061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
