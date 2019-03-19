import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumUnoPage } from './num-uno.page';

describe('NumUnoPage', () => {
  let component: NumUnoPage;
  let fixture: ComponentFixture<NumUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumUnoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
