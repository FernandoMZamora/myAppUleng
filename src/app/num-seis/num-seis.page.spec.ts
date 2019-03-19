import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumSeisPage } from './num-seis.page';

describe('NumSeisPage', () => {
  let component: NumSeisPage;
  let fixture: ComponentFixture<NumSeisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumSeisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumSeisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
