import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniArdillaPage } from './ani-ardilla.page';

describe('AniArdillaPage', () => {
  let component: AniArdillaPage;
  let fixture: ComponentFixture<AniArdillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniArdillaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniArdillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
