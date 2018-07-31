import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalregistrationComponent } from './finalregistration.component';

describe('FinalregistrationComponent', () => {
  let component: FinalregistrationComponent;
  let fixture: ComponentFixture<FinalregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
