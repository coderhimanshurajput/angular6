import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrunpolicyComponent } from './retrunpolicy.component';

describe('RetrunpolicyComponent', () => {
  let component: RetrunpolicyComponent;
  let fixture: ComponentFixture<RetrunpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrunpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrunpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
