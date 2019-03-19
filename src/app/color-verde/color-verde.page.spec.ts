import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorVerdePage } from './color-verde.page';

describe('ColorVerdePage', () => {
  let component: ColorVerdePage;
  let fixture: ComponentFixture<ColorVerdePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorVerdePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorVerdePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
