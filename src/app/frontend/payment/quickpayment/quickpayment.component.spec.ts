import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickpaymentComponent } from './quickpayment.component';

describe('QuickpaymentComponent', () => {
  let component: QuickpaymentComponent;
  let fixture: ComponentFixture<QuickpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
