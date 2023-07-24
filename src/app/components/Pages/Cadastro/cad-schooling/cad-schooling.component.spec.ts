/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadSchoolingComponent } from './cad-schooling.component';

describe('CadSchoolingComponent', () => {
  let component: CadSchoolingComponent;
  let fixture: ComponentFixture<CadSchoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadSchoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadSchoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
