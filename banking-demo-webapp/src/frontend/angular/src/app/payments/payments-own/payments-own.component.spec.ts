import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsOwnComponent } from './payments-own.component';

describe('PaymentsOwnComponent', () => {
  let component: PaymentsOwnComponent;
  let fixture: ComponentFixture<PaymentsOwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsOwnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
