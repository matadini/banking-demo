import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsUnsupportedComponent } from './payments-unsupported.component';

describe('PaymentsUnsupportedComponent', () => {
  let component: PaymentsUnsupportedComponent;
  let fixture: ComponentFixture<PaymentsUnsupportedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsUnsupportedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsUnsupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
