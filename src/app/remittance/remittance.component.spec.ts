import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceComponent } from './remittance.component';
import { PayeeDetailsService } from '../payee-details.service';
import { mockPayeeDetailsService, mockPayeeDetails } from '../mock';

describe('RemittanceComponent', () => {
  let component: RemittanceComponent;
  let fixture: ComponentFixture<RemittanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemittanceComponent ],
      providers: [ {
        provide: PayeeDetailsService,
        useValue: mockPayeeDetailsService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Rmittances names onInit', () => {
    component.payeeName = 'payeeName';
    component.ngOnInit();
    expect(component.remittances).toEqual([mockPayeeDetails[0].Remittance[0]]);
  });

  it('Select on remittance name', () => {
    component.onSelect('remittance');
    expect(component.remittanceDetails).toEqual(mockPayeeDetails[0].Remittance[1]);
  });
});
