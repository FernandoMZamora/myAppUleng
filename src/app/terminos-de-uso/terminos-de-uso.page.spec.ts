import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosDeUsoPage } from './terminos-de-uso.page';

describe('TerminosDeUsoPage', () => {
  let component: TerminosDeUsoPage;
  let fixture: ComponentFixture<TerminosDeUsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminosDeUsoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosDeUsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
