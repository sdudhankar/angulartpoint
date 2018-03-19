import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdirStructureComponent } from './adir-structure.component';

describe('AdirStructureComponent', () => {
  let component: AdirStructureComponent;
  let fixture: ComponentFixture<AdirStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdirStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdirStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
