import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniCaballoPage } from './ani-caballo.page';

describe('AniCaballoPage', () => {
  let component: AniCaballoPage;
  let fixture: ComponentFixture<AniCaballoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniCaballoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniCaballoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
