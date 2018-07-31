import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaitionComponent } from './avaition.component';

describe('AvaitionComponent', () => {
  let component: AvaitionComponent;
  let fixture: ComponentFixture<AvaitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
