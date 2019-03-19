import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOchoPage } from './num-ocho.page';

describe('NumOchoPage', () => {
  let component: NumOchoPage;
  let fixture: ComponentFixture<NumOchoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumOchoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOchoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
