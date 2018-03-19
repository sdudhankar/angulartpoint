import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AinterfaceComponent } from './ainterface.component';

describe('AinterfaceComponent', () => {
  let component: AinterfaceComponent;
  let fixture: ComponentFixture<AinterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AinterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
