import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbindingComponent } from './abinding.component';

describe('AbindingComponent', () => {
  let component: AbindingComponent;
  let fixture: ComponentFixture<AbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
