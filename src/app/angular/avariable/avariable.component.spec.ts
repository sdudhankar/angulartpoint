import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvariableComponent } from './avariable.component';

describe('AvariableComponent', () => {
  let component: AvariableComponent;
  let fixture: ComponentFixture<AvariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
