import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AoperatorsLoopsComponent } from './aoperators-loops.component';

describe('AoperatorsLoopsComponent', () => {
  let component: AoperatorsLoopsComponent;
  let fixture: ComponentFixture<AoperatorsLoopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AoperatorsLoopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AoperatorsLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
