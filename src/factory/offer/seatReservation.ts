import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import TicketTypeCategory from '../ticketTypeCategory';

import { ticketType } from '../../chevre';

/**
 * 券種インターフェース
 */
export interface ITicketType extends ticketType.ITicketType {
    ttts_extension: ITicketTypeExtension;
    cancel_charge: ITicketCancelCharge[];
    charge?: number;
    name: IMultilingualString;
    id: string;
}

/**
 * キャンセル料mongooseスキーマタイプ
 */
export interface ITicketCancelCharge {
    // 予約日までの日数
    days: number;
    // キャンセル料
    charge: number;
}

/**
 * ttts拡張属性
 */
export interface ITicketTypeExtension {
    category: TicketTypeCategory;
    // csv出力用コード
    csv_code: string;
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
    seat_code?: string;
    ticket_type: string;
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    watcher_name: string;
    ticket_cancel_charge: ITicketCancelCharge[];
    ticket_ttts_extension: ITicketTypeExtension;
    rate_limit_unit_in_seconds: number;
}
