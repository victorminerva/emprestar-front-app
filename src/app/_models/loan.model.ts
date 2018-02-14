import { Favored } from './favored.model';

export class Loan {
    uid: string;
    what: string;
    whatDescription: string;
    untilWhen: Date;
    returned: boolean;
    dateInclusion: Date;
    favorite?: boolean;
    favored: Favored;
}
