import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AclassObjectComponent } from './aclass-object.component';

describe('AclassObjectComponent', () => {
  let component: AclassObjectComponent;
  let fixture: ComponentFixture<AclassObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AclassObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclassObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
