import { Address } from './address';
export class Payee {
    constructor(
        public Name: string,
        public Fax: string,
        public Phone: string,
        public Address: Address,
        public Attention: string,
        public SubmissionDate: string
    ){}
}