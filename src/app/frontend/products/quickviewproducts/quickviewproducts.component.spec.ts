import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickviewproductsComponent } from './quickviewproducts.component';

describe('QuickviewproductsComponent', () => {
  let component: QuickviewproductsComponent;
  let fixture: ComponentFixture<QuickviewproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickviewproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
