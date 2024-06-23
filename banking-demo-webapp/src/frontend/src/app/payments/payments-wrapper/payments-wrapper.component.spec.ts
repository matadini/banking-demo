import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsWrapperComponent } from './payments-wrapper.component';

describe('PaymentsWrapperComponent', () => {
  let component: PaymentsWrapperComponent;
  let fixture: ComponentFixture<PaymentsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
