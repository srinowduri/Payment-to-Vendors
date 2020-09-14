import { Component, OnInit, Input } from '@angular/core';
import { PayeeDetailsService } from '../payee-details.service';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  paymentDetails: Payment;

  @Input()
  payeeName: string;

  constructor(private payeeDetailsService: PayeeDetailsService) { }

  ngOnInit(): void {
    this.paymentDetails = this.payeeDetailsService.getPaymentDetails(this.payeeName);
  }

 
   
  
}
