/**
 * イベント予約ファクトリー
 * @namespace reservation.event
 */

import PaymentMethodType from '../paymentMethodType';
import * as PerformanceFactory from '../performance';
import * as ReservationFactory from '../reservation';

import ItemAvailability from '../itemAvailability';
import { IBilingualString, IMultilingualString } from '../multilingualString';
import { ITicketCancelCharge, ITicketTypeExtension } from '../offer/seatReservation';

/**
 * 入場履歴インターフェース
 * @export
 * @interface
 * @memberof reservation.event
 */
export interface ICheckin {
    when: Date; // いつ
    where: string; // どこで
    why: string; // 何のために
    how: string; // どうやって
}

/**
 * tttsExtensionReservation.ts
 * ttts拡張予予約情報mongooseスキーマタイプ
 * ttts独自の機能拡張用フィールド定義
 * @export
 * @interface
 * @memberof reservation.event
 */
export interface IExtensionReservation {
    // 本体の座席番号 (余分確保チケットと予約本体のチケットを結びつけるためのフィールド)
    seat_code_base: string;
}

/**
 * イベント予約インターフェース
 * @export
 * @interface
 * @memberof reservation.event
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
     * おさえた在庫ID
     */
    stock: string;
    /**
     * 仮予約前の在庫ステータス
     */
    stock_availability_before: ItemAvailability;
    /**
     * 仮予約後の在庫ステータス
     */
    stock_availability_after: ItemAvailability;
    qr_str: string;
    performance: string;
    seat_code: string;
    reservation_ttts_extension: IExtensionReservation;

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

    purchaser_group: string; // 購入者区分
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
}
