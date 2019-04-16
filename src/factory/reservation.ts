import { reservation, reservationType } from '../chevre';

import { ReservationStatusType } from './reservationStatusType';

// export enum ReservationType {
//     EventReservation = 'EventReservation'
// }

export type IPriceSpecification = reservation.IPriceSpecification<reservationType.EventReservation>;

/**
 * 予約インターフェース
 */
export interface IReservation extends reservation.IReservation<reservationType.EventReservation> {
    /**
     * Current status of the reservation.
     */
    status: ReservationStatusType;
}
