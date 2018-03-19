import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcliComponent } from './acli.component';

describe('AcliComponent', () => {
  let component: AcliComponent;
  let fixture: ComponentFixture<AcliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
