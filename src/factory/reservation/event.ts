/**
 * イベント予約ファクトリー
 */
import PaymentMethodType from '../paymentMethodType';
import * as PerformanceFactory from '../performance';
import { IPropertyValue } from '../propertyValue';
import * as ReservationFactory from '../reservation';
import { ReservationStatusType } from '../reservationStatusType';

// import ItemAvailability from '../itemAvailability';
import { IBilingualString, IMultilingualString } from '../multilingualString';
import { ITicketCancelCharge, ITicketTypeExtension } from '../offer/seatReservation';
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
    performance_day: string;
    performance_open_time: string;
    performance_start_time: string;
    performance_end_time: string;
    performance_start_date: Date;
    performance_end_date: Date;
    performance_door_time: Date;
    performance_canceled: boolean;
    performance_ttts_extension: PerformanceFactory.IExtension;
    theater: string;
    theater_name: IBilingualString;
    theater_address: IBilingualString;
    screen: string;
    screen_name: IBilingualString;
    film: string;
    film_name: IBilingualString;
    film_is_mx4d: boolean;
    film_copyright: string;
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
    ticket_type: string;
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    ticket_cancel_charge: ITicketCancelCharge[];
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
        identifiers?: IPropertyValue<string>[];
    };
    orderNumbers?: string[];
    status?: ReservationStatusType;
    performance?: string;
    performances?: string[];
    performanceStartFrom?: Date;
    performanceStartThrough?: Date;
    performanceEndFrom?: Date;
    performanceEndThrough?: Date;
    purchaser_group?: string;
    performance_day?: string;
    performanceStartTimeFrom?: string;
    performanceStartTimeTo?: string;
    payment_no?: string;
    owner_username?: string;
    paymentMethod?: string;
    purchaserLastName?: string;
    purchaserFirstName?: string;
    purchaserEmail?: string;
    purchaserTel?: string;
    watcherName?: string;
    transactionAgentId?: string | { $ne: string };
    ids?: string[];
    checkins?: { $size: number };
}
