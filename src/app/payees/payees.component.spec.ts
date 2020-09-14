import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeesComponent } from './payees.component';
import { PayeeDetailsService } from '../payee-details.service';
import { mockPayeeDetailsService, mockPayeeDetails } from '../mock';
describe('PayeesComponent', () => {
  let component: PayeesComponent;
  let fixture: ComponentFixture<PayeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeesComponent ],
      providers: [ {
        provide: PayeeDetailsService,
        useValue: mockPayeeDetailsService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onInit', () => {
    component.ngOnInit();
    expect(component.payeeDetailsList).toEqual(mockPayeeDetails);
    expect(component.payeeNames).toEqual([mockPayeeDetails[0].Payee.Name]);
  });

  it('select on payee name', () => {
    component.onSelectPayee('name');
    expect(component.payeeDetails).toEqual(mockPayeeDetails[0]);
  });

  it('Show payment details', () => {
    component.showInfo = 'pay';
    component.onPayments();
    expect(component.showInfo).toEqual('pay');
  });

  
  it('Show remittance details', () => {
    component.showInfo = 'remit';
    component.onRemit();
    expect(component.showInfo).toEqual('remit');
  });

});
