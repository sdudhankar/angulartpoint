import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AinputoutputComponent } from './ainputoutput.component';

describe('AinputoutputComponent', () => {
  let component: AinputoutputComponent;
  let fixture: ComponentFixture<AinputoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AinputoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AinputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
