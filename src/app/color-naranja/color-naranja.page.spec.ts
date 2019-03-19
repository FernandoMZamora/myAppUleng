import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNaranjaPage } from './color-naranja.page';

describe('ColorNaranjaPage', () => {
  let component: ColorNaranjaPage;
  let fixture: ComponentFixture<ColorNaranjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorNaranjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNaranjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
