import { Favored } from './favored.model';

export class Loan {
    uid?: string;
    what: string;
    whatDescription: string;
    untilWhen?: any;
    returned?: boolean;
    dateInclusion?: any;
    favorite?: boolean;
}
