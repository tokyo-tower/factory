import PaymentMethodType from '../paymentMethodType';
import * as PerformanceFactory from '../performance';
import { IPropertyValue } from '../propertyValue';
import * as ReservationFactory from '../reservation';

import { IBilingualString } from '../multilingualString';
import { ITicketTypeExtension } from '../offer/seatReservation';
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
    transaction: string;
    order_number: string;
    qr_str: string;
    performance: string;
    seat_code: string;
    performance_ttts_extension: PerformanceFactory.IExtension;
    purchaser_group: PersonGroup;
    purchaser_name: string;
    purchaser_last_name: string;
    purchaser_first_name: string;
    purchaser_email: string;
    purchaser_tel: string;
    purchaser_international_tel: string;
    purchaser_age: string;
    purchaser_address: string;
    purchaser_gender: string;
    payment_no: string;
    payment_seat_index: number;
    purchased_at: Date;
    payment_method: PaymentMethodType;
    seat_grade_name: IBilingualString;
    seat_grade_additional_charge: number;
    ticket_ttts_extension: ITicketTypeExtension;
    rate_limit_unit_in_seconds: number;
    watcher_name: string;
    watcher_name_updated_at: Date;
    charge: number;
    owner_username?: string;
    owner_name?: string;
    owner_last_name?: string;
    owner_first_name?: string;
    owner_email?: string;
    owner_group?: string;
    checkins: ICheckin[];
    gmo_order_id: string;
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
