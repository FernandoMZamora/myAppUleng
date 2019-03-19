import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumTresPage } from './num-tres.page';

describe('NumTresPage', () => {
  let component: NumTresPage;
  let fixture: ComponentFixture<NumTresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumTresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
