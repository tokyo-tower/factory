/**
 * index module
 */
import * as cinerino from '@cinerino/factory';

import * as PerformanceFactory from './factory/performance';
import * as EventReservationFactory from './factory/reservation/event';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import chevre = cinerino.chevre;
export import errors = errors;
export import errorCode = ErrorCode;
export import performance = PerformanceFactory;
export import project = cinerino.project;
export namespace reservation {
    export import event = EventReservationFactory;
}
export import sortType = cinerino.sortType;
