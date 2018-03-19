import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstyleGuideComponent } from './astyle-guide.component';

describe('AstyleGuideComponent', () => {
  let component: AstyleGuideComponent;
  let fixture: ComponentFixture<AstyleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstyleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
