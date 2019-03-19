import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNegroPage } from './color-negro.page';

describe('ColorNegroPage', () => {
  let component: ColorNegroPage;
  let fixture: ComponentFixture<ColorNegroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorNegroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNegroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
