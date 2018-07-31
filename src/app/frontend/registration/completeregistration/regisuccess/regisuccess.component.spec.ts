import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisuccessComponent } from './regisuccess.component';

describe('RegisuccessComponent', () => {
  let component: RegisuccessComponent;
  let fixture: ComponentFixture<RegisuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
