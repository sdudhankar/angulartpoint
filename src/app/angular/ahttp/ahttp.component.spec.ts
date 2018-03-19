import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhttpComponent } from './ahttp.component';

describe('AhttpComponent', () => {
  let component: AhttpComponent;
  let fixture: ComponentFixture<AhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
