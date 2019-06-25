import { IPropertyValue } from '../propertyValue';
import * as ReservationFactory from '../reservation';

import { Group as PersonGroup } from '../person';
import { IAgent } from '../transaction/placeOrder';

import { reservation, reservationType } from '../../chevre';

/**
 * 入場履歴インターフェース
 */
export interface ICheckin {
    when: Date; // いつ
    where: string; // どこで
    why: string; // 何のために
    how: string; // どうやって
}

/**
 * イベント予約インターフェース
 */
export interface IReservation extends ReservationFactory.IReservation {
    checkins: ICheckin[];
    purchaser_group: PersonGroup;
    transaction_agent: IAgent;
}

/**
 * 予約検索条件インターフェース
 */
export interface ISearchConditions extends reservation.ISearchConditions<reservationType.EventReservation> {
    sort?: any;
    additionalProperty?: {
        $in?: IPropertyValue<string>[];
        $nin?: IPropertyValue<string>[];
    };
    reservationNumber?: string;
    additionalTicketText?: string;
    underName?: {
        id?: string;
        name?: string;
        email?: string;
        telephone?: string;
        givenName?: string;
        familyName?: string;
        identifier?: {
            $all?: IPropertyValue<string>[];
            $in?: IPropertyValue<string>[];
            $nin?: IPropertyValue<string>[];
        };
        identifiers?: IPropertyValue<string>[];
    };
    purchaser_group?: string;
    ids?: string[];
    checkins?: { $size: number };
}
