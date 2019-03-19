import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniMonoPage } from './ani-mono.page';

describe('AniMonoPage', () => {
  let component: AniMonoPage;
  let fixture: ComponentFixture<AniMonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniMonoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniMonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
