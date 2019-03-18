import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbecedarioPage } from './abecedario.page';

describe('AbecedarioPage', () => {
  let component: AbecedarioPage;
  let fixture: ComponentFixture<AbecedarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbecedarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbecedarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
