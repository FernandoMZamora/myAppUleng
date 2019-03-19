import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumCincoPage } from './num-cinco.page';

describe('NumCincoPage', () => {
  let component: NumCincoPage;
  let fixture: ComponentFixture<NumCincoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumCincoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumCincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
