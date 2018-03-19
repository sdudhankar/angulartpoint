import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AarchitectureComponent } from './aarchitecture.component';

describe('AarchitectureComponent', () => {
  let component: AarchitectureComponent;
  let fixture: ComponentFixture<AarchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AarchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AarchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
