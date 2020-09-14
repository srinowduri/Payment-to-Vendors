import { Component, OnInit } from '@angular/core';
import { PayeeDetailsService } from '../payee-details.service';
import { PayeeDetails } from '../model/payeeDetails';
@Component({
  selector: 'app-payees',
  templateUrl: './payees.component.html',
  styleUrls: ['./payees.component.scss']
})
export class PayeesComponent implements OnInit {
  payeeDetailsList: PayeeDetails[];
  payeeNames: string[];
  payeeDetails: PayeeDetails;
  showInfo: string;
  constructor(private payeeDetailsService: PayeeDetailsService) { }

  ngOnInit(): void {
    this.payeeDetailsList = this.payeeDetailsService.getPayeesDetails();
    this.payeeNames = this.payeeDetailsService.getPayeeNames();
  }

  onSelectPayee(name: string){

    this.payeeDetails = this.payeeDetailsService.getPayeeInfo(name);
    this.showInfo = null;
  }

  onPayments()  {
    this.showInfo = 'pay';
  }

  onRemit() {
    this.showInfo = 'remit';
  }
}
