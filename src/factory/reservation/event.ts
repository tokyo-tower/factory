import * as ReservationFactory from '../reservation';

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
}

/**
 * 予約検索条件インターフェース
 */
export interface ISearchConditions extends reservation.ISearchConditions<reservationType.EventReservation> {
    sort?: any;
    checkins?: { $size: number };
}
