import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumCuatroPage } from './num-cuatro.page';

describe('NumCuatroPage', () => {
  let component: NumCuatroPage;
  let fixture: ComponentFixture<NumCuatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumCuatroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumCuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
