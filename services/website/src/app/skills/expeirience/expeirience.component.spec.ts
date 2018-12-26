import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpeirienceComponent} from './expeirience.component';

describe('ExpeirienceComponent', () => {
  let component: ExpeirienceComponent;
  let fixture: ComponentFixture<ExpeirienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpeirienceComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeirienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
