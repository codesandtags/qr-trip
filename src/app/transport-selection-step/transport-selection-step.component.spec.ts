import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSelectionStepComponent } from './transport-selection-step.component';

describe('TransportSelectionStepComponent', () => {
  let component: TransportSelectionStepComponent;
  let fixture: ComponentFixture<TransportSelectionStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSelectionStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSelectionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
