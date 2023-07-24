/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadWorksComponent } from './cad-works.component';

describe('CadWorksComponent', () => {
  let component: CadWorksComponent;
  let fixture: ComponentFixture<CadWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
