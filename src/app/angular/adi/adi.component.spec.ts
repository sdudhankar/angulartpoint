import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiComponent } from './adi.component';

describe('AdiComponent', () => {
  let component: AdiComponent;
  let fixture: ComponentFixture<AdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
