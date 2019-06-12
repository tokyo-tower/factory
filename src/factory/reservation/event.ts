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
    id: string;
    /**
     * 注文取引ID
     */
    transaction: string;
    /**
     * 注文番号
     */
    order_number: string;
    /**
     * QR文字列
     */
    qr_str: string;
    /**
     * パフォーマンスID
     */
    performance: string;
    /**
     * 座席コード
     */
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

    purchaser_group: PersonGroup; // 購入者区分
    purchaser_name: string;
    purchaser_last_name: string;
    purchaser_first_name: string;
    purchaser_email: string;
    purchaser_tel: string;
    purchaser_international_tel: string;
    purchaser_age: string; // 生まれた年代
    purchaser_address: string; // 住所
    purchaser_gender: string; // 性別

    payment_no: string; // 購入番号
    payment_seat_index: number; // 購入座席インデックス
    purchased_at: Date; // 購入確定日時
    payment_method: PaymentMethodType; // 決済方法

    seat_grade_name: IBilingualString;
    seat_grade_additional_charge: number;

    ticket_type: string; // 券種
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    ticket_cancel_charge: ITicketCancelCharge[];
    ticket_ttts_extension: ITicketTypeExtension;
    rate_limit_unit_in_seconds: number;

    watcher_name: string; // 配布先
    watcher_name_updated_at: Date; // 配布先更新日時 default: Date.now

    charge: number; // 座席単体の料金

    owner_username?: string;
    owner_name?: string;
    owner_last_name?: string;
    owner_first_name?: string;
    owner_email?: string;
    owner_group?: string;

    checkins: ICheckin[];

    gmo_order_id: string; // GMOオーダーID
    /**
     * 注文取引主体者
     * 注文が実行されたアプリケーションのクライアントIDが含まれる
     */
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
