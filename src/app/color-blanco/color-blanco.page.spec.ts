import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBlancoPage } from './color-blanco.page';

describe('ColorBlancoPage', () => {
  let component: ColorBlancoPage;
  let fixture: ComponentFixture<ColorBlancoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorBlancoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBlancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
