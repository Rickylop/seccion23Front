import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHorizontalComponent } from './barra-horizontal.component';

describe('BarraHorizontalComponent', () => {
  let component: BarraHorizontalComponent;
  let fixture: ComponentFixture<BarraHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
