import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AserviceComponent } from './aservice.component';

describe('AserviceComponent', () => {
  let component: AserviceComponent;
  let fixture: ComponentFixture<AserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
