import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodComponent } from './editprod.component';

describe('EditprodComponent', () => {
  let component: EditprodComponent;
  let fixture: ComponentFixture<EditprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
