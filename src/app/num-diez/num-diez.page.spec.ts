import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumDiezPage } from './num-diez.page';

describe('NumDiezPage', () => {
  let component: NumDiezPage;
  let fixture: ComponentFixture<NumDiezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumDiezPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumDiezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
