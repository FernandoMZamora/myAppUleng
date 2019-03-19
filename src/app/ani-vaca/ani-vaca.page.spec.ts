import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniVacaPage } from './ani-vaca.page';

describe('AniVacaPage', () => {
  let component: AniVacaPage;
  let fixture: ComponentFixture<AniVacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniVacaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniVacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
