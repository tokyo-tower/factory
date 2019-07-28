import { chevre } from '@cinerino/factory';

export type IPriceSpecification = chevre.reservation.IPriceSpecification<chevre.reservationType.EventReservation>;

/**
 * 予約インターフェース
 */
export type IReservation = chevre.reservation.IReservation<chevre.reservationType.EventReservation>;
