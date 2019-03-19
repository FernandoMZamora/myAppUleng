import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCelestePage } from './color-celeste.page';

describe('ColorCelestePage', () => {
  let component: ColorCelestePage;
  let fixture: ComponentFixture<ColorCelestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCelestePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCelestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
