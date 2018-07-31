import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformguideComponent } from './uniformguide.component';

describe('UniformguideComponent', () => {
  let component: UniformguideComponent;
  let fixture: ComponentFixture<UniformguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniformguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniformguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
