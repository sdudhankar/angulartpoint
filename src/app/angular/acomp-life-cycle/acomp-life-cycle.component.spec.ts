import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompLifeCycleComponent } from './acomp-life-cycle.component';

describe('AcompLifeCycleComponent', () => {
  let component: AcompLifeCycleComponent;
  let fixture: ComponentFixture<AcompLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
