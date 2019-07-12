import { propertyValue } from '@cinerino/factory';

import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';

import { ticketType } from '../../chevre';

/**
 * 券種インターフェース
 */
export type ITicketType = ticketType.ITicketType;

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
    additionalProperty?: propertyValue.IPropertyValue<string>[];
    seat_code?: string;
    ticket_type: string;
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    watcher_name: string;
}
