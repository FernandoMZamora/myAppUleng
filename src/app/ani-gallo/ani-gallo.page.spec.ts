import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniGalloPage } from './ani-gallo.page';

describe('AniGalloPage', () => {
  let component: AniGalloPage;
  let fixture: ComponentFixture<AniGalloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniGalloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniGalloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
