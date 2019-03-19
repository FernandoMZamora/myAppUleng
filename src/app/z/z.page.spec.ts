import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZPage } from './z.page';

describe('ZPage', () => {
  let component: ZPage;
  let fixture: ComponentFixture<ZPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
