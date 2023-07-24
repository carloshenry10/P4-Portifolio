import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAboutComponent } from './cad-about.component';

describe('CadAboutComponent', () => {
  let component: CadAboutComponent;
  let fixture: ComponentFixture<CadAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadAboutComponent]
    });
    fixture = TestBed.createComponent(CadAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
