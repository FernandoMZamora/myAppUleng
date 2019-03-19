import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniGallinaPage } from './ani-gallina.page';

describe('AniGallinaPage', () => {
  let component: AniGallinaPage;
  let fixture: ComponentFixture<AniGallinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniGallinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniGallinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
