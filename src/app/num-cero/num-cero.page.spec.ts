import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumCeroPage } from './num-cero.page';

describe('NumCeroPage', () => {
  let component: NumCeroPage;
  let fixture: ComponentFixture<NumCeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumCeroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumCeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
