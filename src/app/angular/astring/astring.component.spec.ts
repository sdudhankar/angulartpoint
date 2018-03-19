import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstringComponent } from './astring.component';

describe('AstringComponent', () => {
  let component: AstringComponent;
  let fixture: ComponentFixture<AstringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
