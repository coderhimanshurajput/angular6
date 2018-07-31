import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateuniformsComponent } from './corporateuniforms.component';

describe('CorporateuniformsComponent', () => {
  let component: CorporateuniformsComponent;
  let fixture: ComponentFixture<CorporateuniformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateuniformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateuniformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
