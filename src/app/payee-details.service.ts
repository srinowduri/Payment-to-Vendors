import { Injectable } from '@angular/core';
import { PayeeDetails } from './model/payeeDetails';
import { PayeesDetailsList } from './data/payeesDetailsList.data';
import { Payment } from './model/payment';
import { Remittance } from './model/remittence';
@Injectable({
  providedIn: 'root'
})
export class PayeeDetailsService {
payeesdetailsList: PayeeDetails[];

  constructor() { 
    this.payeesdetailsList = PayeesDetailsList;
  }

  getPayeesDetails(): PayeeDetails[]  {
    return this.payeesdetailsList;
  }

  getPayeeNames() : string[] {
    let payeeNames: string[] = [];
    this.payeesdetailsList.forEach(person => {
      payeeNames.push(person.Payee.Name);
    });
    return payeeNames;
  }

  getPayeeInfo(name: string) : PayeeDetails {
    let payeeInfo: PayeeDetails;

    this.payeesdetailsList.forEach((person) => {
      if(person.Payee.Name === name){
        payeeInfo = person;
      }
    });
    return payeeInfo;
  }

  getPaymentDetails(payeeName: string): Payment {
    let paymentdetails : Payment;
    this.payeesdetailsList.forEach(person => {
      if(person.Payee.Name === payeeName){
        paymentdetails = person.Payment;
      }
    });
    return paymentdetails;
  }

  getRemittance(payeeName: string): Remittance[]{
    let remittances: Remittance[];
    this.payeesdetailsList.forEach(person => {
      if(person.Payee.Name === payeeName){
        remittances = person.Remittance;
      }
    });
    return remittances;
  }

  getRemittanceDetails(remittance: string): Remittance {
    let remittanceDetails: Remittance;
    this.payeesdetailsList.forEach(person => {
      person.Remittance.forEach(payor => {
        if(payor.PayorName === remittance){
          remittanceDetails = payor;
        }
      });
    });
    return remittanceDetails;
  }
}
