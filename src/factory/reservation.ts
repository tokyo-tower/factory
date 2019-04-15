import { reservation } from '../chevre';

import { ReservationStatusType } from './reservationStatusType';

export enum ReservationType {
    EventReservation = 'EventReservation'
}

export type IPriceSpecification = reservation.event.IPriceSpecification;

/**
 * 予約インターフェース
 */
export interface IReservation extends reservation.IReservation<IPriceSpecification> {
    /**
     * Current status of the reservation.
     */
    status: ReservationStatusType;
}
