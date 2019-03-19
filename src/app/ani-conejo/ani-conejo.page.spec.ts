import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniConejoPage } from './ani-conejo.page';

describe('AniConejoPage', () => {
  let component: AniConejoPage;
  let fixture: ComponentFixture<AniConejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniConejoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniConejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
