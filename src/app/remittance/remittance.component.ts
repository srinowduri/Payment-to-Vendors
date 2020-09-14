import { Component, OnInit, Input } from '@angular/core';
import { Remittance } from '../model/remittence';
import { PayeeDetailsService } from '../payee-details.service';

@Component({
  selector: 'app-remittance',
  templateUrl: './remittance.component.html',
  styleUrls: ['./remittance.component.scss']
})
export class RemittanceComponent implements OnInit {
  remittanceDetails: Remittance;
  remittances: Remittance[];

  @Input() payeeName: string;
  constructor(private payeeDetailsService: PayeeDetailsService) { }

  ngOnInit(): void {
    this.remittances = this.payeeDetailsService.getRemittance(this.payeeName);
  }

  onSelect(remittance: string){
    this.remittanceDetails = this.payeeDetailsService.getRemittanceDetails(remittance);
  }
}
