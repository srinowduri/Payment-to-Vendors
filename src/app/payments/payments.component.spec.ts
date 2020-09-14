import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsComponent } from './payments.component';
import { PayeeDetailsService } from '../payee-details.service';
import { mockPayeeDetailsService, mockPayeeDetails } from '../mock';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsComponent ],
      providers: [ {
        provide: PayeeDetailsService,
        useValue: mockPayeeDetailsService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onInit', () =>{
    component.ngOnInit();
    expect(component.paymentDetails).toEqual(mockPayeeDetails[0].Payment);
  });
});
