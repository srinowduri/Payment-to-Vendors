import { Payor } from './payor';
export class Remittance {
    constructor(
        public PayorName: string,
        public PayorId: number,
        public InvoiceNo: number,
        public Description: string,
        public Amount: string
    ){}
}