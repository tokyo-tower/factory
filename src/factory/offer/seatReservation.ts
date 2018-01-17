/**
 * 座席予約供給情報ファクトリー
 * @namespace offer.seatReservation
 */

import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import TicketTypeCategory from '../ticketTypeCategory';

/**
 * 券種インターフェース
 * @interface
 * @export
 * @memberof offer.seatReservation
 */
export interface ITicketType {
    /**
     * 券種カテゴリーごとのレート制限単位(何秒に1予約という設定)
     */
    rate_limit_unit_in_seconds: number;
    ttts_extension: ITicketTypeExtension;
    cancel_charge: ITicketCancelCharge[];
    charge: number;
    notes: string;
    description: string;
    name: IMultilingualString;
    id: string;
}

/**
 * ticketCancelCharge.ts
 * キャンセル料mongooseスキーマタイプ
 */
export interface ITicketCancelCharge {
    // 予約日までの日数
    days: number;
    // キャンセル料
    charge: number;
}

/**
 * tttsExtensionTicketType.ts
 * ttts拡張・チケット情報mongooseスキーマタイプ
 * ttts独自の機能拡張用フィールド定義
 */
export interface ITicketTypeExtension {
    // 種別 ('0':通常 '1':車椅子)
    category: TicketTypeCategory;
    // 必要な座席数(通常:1 車椅子:4)
    required_seat_num: number;
    // csv出力用コード
    csv_code: string;
}

/**
 * 座席予約供給情報インターフェース
 * @export
 * @interface
 * @memberof offer.seatReservation
 */
export interface IAcceptedOffer {
    ticket_type: string;
    watcher_name: string;
}

/**
 * 座席予約供給情報(詳細つき)インターフェース
 * @export
 * @interface
 * @memberof offer.seatReservation
 */
export interface IOffer extends OfferFactory.IOffer {
    ticket_type: string;
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    watcher_name: string;
    ticket_cancel_charge: ITicketCancelCharge[];
    ticket_ttts_extension: ITicketTypeExtension;
    rate_limit_unit_in_seconds: number;
}
