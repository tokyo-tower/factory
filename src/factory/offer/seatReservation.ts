import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import { IPropertyValue } from '../propertyValue';

import { ticketType } from '../../chevre';

/**
 * 券種インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface ITicketType extends ticketType.ITicketType {
}

/**
 * 座席予約供給情報インターフェース
 */
export interface IAcceptedOffer {
    seat_code?: string;
    ticket_type: string;
    watcher_name: string;
}

/**
 * 座席予約オファー(詳細つき)インターフェース
 */
export interface IOffer extends OfferFactory.IOffer {
    additionalProperty?: IPropertyValue<string>[];
    seat_code?: string;
    ticket_type: string;
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    watcher_name: string;
}
