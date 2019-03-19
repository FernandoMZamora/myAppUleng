import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRosadoPage } from './color-rosado.page';

describe('ColorRosadoPage', () => {
  let component: ColorRosadoPage;
  let fixture: ComponentFixture<ColorRosadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorRosadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorRosadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
