import { chevre, propertyValue } from '@cinerino/factory';

import * as OfferFactory from '../offer';

/**
 * 券種インターフェース
 */
export type ITicketType = chevre.ticketType.ITicketType;

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
}
