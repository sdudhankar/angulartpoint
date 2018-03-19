import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdataTypeComponent } from './adata-type.component';

describe('AdataTypeComponent', () => {
  let component: AdataTypeComponent;
  let fixture: ComponentFixture<AdataTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdataTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
