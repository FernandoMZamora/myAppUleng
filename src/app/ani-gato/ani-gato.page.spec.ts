import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniGatoPage } from './ani-gato.page';

describe('AniGatoPage', () => {
  let component: AniGatoPage;
  let fixture: ComponentFixture<AniGatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniGatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniGatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
