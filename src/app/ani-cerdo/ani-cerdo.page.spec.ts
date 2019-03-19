import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniCerdoPage } from './ani-cerdo.page';

describe('AniCerdoPage', () => {
  let component: AniCerdoPage;
  let fixture: ComponentFixture<AniCerdoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniCerdoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniCerdoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
