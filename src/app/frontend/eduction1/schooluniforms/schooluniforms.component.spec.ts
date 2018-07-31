import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooluniformsComponent } from './schooluniforms.component';

describe('SchooluniformsComponent', () => {
  let component: SchooluniformsComponent;
  let fixture: ComponentFixture<SchooluniformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooluniformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooluniformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
