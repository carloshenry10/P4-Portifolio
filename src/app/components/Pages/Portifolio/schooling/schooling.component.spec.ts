import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolingComponent } from './schooling.component';

describe('SchoolingComponent', () => {
  let component: SchoolingComponent;
  let fixture: ComponentFixture<SchoolingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolingComponent]
    });
    fixture = TestBed.createComponent(SchoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
