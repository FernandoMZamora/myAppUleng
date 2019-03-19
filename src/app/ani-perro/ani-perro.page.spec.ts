import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniPerroPage } from './ani-perro.page';

describe('AniPerroPage', () => {
  let component: AniPerroPage;
  let fixture: ComponentFixture<AniPerroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniPerroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniPerroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
