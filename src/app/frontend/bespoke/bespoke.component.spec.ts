import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BespokeComponent } from './bespoke.component';

describe('BespokeComponent', () => {
  let component: BespokeComponent;
  let fixture: ComponentFixture<BespokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BespokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BespokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
