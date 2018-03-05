import { Favored } from './favored.model';
import { DateApp } from './date.model';

export class Loan {
    uid: string;
    what: string;
    whatDescription: string;
    untilWhen: DateApp;
    returned: boolean;
    dateInclusion: DateApp;
    favorite?: boolean;
    favored: Favored;
}
