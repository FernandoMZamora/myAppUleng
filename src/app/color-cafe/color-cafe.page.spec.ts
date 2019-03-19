import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCafePage } from './color-cafe.page';

describe('ColorCafePage', () => {
  let component: ColorCafePage;
  let fixture: ComponentFixture<ColorCafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCafePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
