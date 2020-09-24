import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittarjComponent } from './edittarj.component';

describe('EdittarjComponent', () => {
  let component: EdittarjComponent;
  let fixture: ComponentFixture<EdittarjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittarjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittarjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
