import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadToDoComponent } from './cad-to-do.component';

describe('CadToDoComponent', () => {
  let component: CadToDoComponent;
  let fixture: ComponentFixture<CadToDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadToDoComponent]
    });
    fixture = TestBed.createComponent(CadToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
