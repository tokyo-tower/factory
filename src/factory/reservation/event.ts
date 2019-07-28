import { chevre } from '@cinerino/factory';

import * as ReservationFactory from '../reservation';

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
export interface ISearchConditions extends chevre.reservation.ISearchConditions<chevre.reservationType.EventReservation> {
    sort?: any;
    checkins?: { $size: number };
}
