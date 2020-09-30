import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductosComponent } from './view-productos.component';

describe('ViewProductosComponent', () => {
  let component: ViewProductosComponent;
  let fixture: ComponentFixture<ViewProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
