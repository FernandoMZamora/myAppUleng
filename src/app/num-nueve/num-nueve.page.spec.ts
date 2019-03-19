import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumNuevePage } from './num-nueve.page';

describe('NumNuevePage', () => {
  let component: NumNuevePage;
  let fixture: ComponentFixture<NumNuevePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumNuevePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumNuevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
