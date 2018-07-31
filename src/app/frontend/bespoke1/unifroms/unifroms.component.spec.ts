import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifromsComponent } from './unifroms.component';

describe('UnifromsComponent', () => {
  let component: UnifromsComponent;
  let fixture: ComponentFixture<UnifromsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnifromsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnifromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
