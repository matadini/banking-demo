import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsNewComponent } from './payments-new.component';

describe('PaymentsNewComponent', () => {
  let component: PaymentsNewComponent;
  let fixture: ComponentFixture<PaymentsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
