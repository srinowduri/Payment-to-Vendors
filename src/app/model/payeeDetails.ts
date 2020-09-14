import { Payee } from "./payee";
import { Payment } from "./payment";
import { Remittance } from "./remittence";

export class PayeeDetails{
    constructor(
        public Payee: Payee,
        public Payment:Payment,
        public Remittance: Remittance[]
    ){}
}