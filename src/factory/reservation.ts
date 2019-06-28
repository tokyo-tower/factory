import { reservation, reservationType } from '../chevre';

export type IPriceSpecification = reservation.IPriceSpecification<reservationType.EventReservation>;

/**
 * 予約インターフェース
 */
export type IReservation = reservation.IReservation<reservationType.EventReservation>;
