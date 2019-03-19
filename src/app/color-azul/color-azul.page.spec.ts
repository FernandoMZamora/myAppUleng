import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAzulPage } from './color-azul.page';

describe('ColorAzulPage', () => {
  let component: ColorAzulPage;
  let fixture: ComponentFixture<ColorAzulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorAzulPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAzulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
