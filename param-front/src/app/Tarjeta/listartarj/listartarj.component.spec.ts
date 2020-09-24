import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartarjComponent } from './listartarj.component';

describe('ListartarjComponent', () => {
  let component: ListartarjComponent;
  let fixture: ComponentFixture<ListartarjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListartarjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartarjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
