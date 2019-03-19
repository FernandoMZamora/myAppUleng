import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRojoPage } from './color-rojo.page';

describe('ColorRojoPage', () => {
  let component: ColorRojoPage;
  let fixture: ComponentFixture<ColorRojoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorRojoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorRojoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
