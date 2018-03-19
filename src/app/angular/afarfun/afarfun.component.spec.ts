import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfarfunComponent } from './afarfun.component';

describe('AfarfunComponent', () => {
  let component: AfarfunComponent;
  let fixture: ComponentFixture<AfarfunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfarfunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfarfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
