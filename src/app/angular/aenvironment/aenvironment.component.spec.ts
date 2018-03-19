import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AenvironmentComponent } from './aenvironment.component';

describe('AenvironmentComponent', () => {
  let component: AenvironmentComponent;
  let fixture: ComponentFixture<AenvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AenvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
