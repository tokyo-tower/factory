/**
 * index module
 */
import * as cinerino from '@cinerino/factory';

import * as MultilingualStringFactory from './factory/multilingualString';
import * as PerformanceFactory from './factory/performance';
import * as CheckinGateFactory from './factory/place/checkinGate';
import * as MovieTheaterFactory from './factory/place/movieTheater';
import * as EventReservationFactory from './factory/reservation/event';
import * as AggregateEventReservationsTaskFactory from './factory/task/aggregateEventReservations';
import * as CreatePlaceOrderReportTaskFactory from './factory/task/createPlaceOrderReport';
import * as CreateReturnOrderReportTaskFactory from './factory/task/createReturnOrderReport';
import * as ImportEventTaskFactory from './factory/task/importEvent';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as UpdateOrderReportByReservationTaskFactory from './factory/task/updateOrderReportByReservation';

import TaskName from './factory/taskName';
import TicketTypeCategory from './factory/ticketTypeCategory';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import chevre = cinerino.chevre;
export import errors = errors;
export import errorCode = ErrorCode;

export import multilingualString = MultilingualStringFactory;
export import performance = PerformanceFactory;
export import project = cinerino.project;
export namespace reservation {
    export import event = EventReservationFactory;
}
export import sortType = cinerino.sortType;
export namespace place {
    export import checkinGate = CheckinGateFactory;
    export import movieTheater = MovieTheaterFactory;
}
export namespace task {
    export import IAttributes = cinerino.task.IAttributes;
    export import IExecutionResult = cinerino.task.IExecutionResult;
    export import ISearchConditions = cinerino.task.ISearchConditions;
    export import ITask = cinerino.task.ITask;
    export import aggregateEventReservations = AggregateEventReservationsTaskFactory;
    export import createPlaceOrderReport = CreatePlaceOrderReportTaskFactory;
    export import createReturnOrderReport = CreateReturnOrderReportTaskFactory;
    export import importEvent = ImportEventTaskFactory;
    export import sendEmailMessage = SendEmailMessageTaskFactory;
    export import updateOrderReportByReservation = UpdateOrderReportByReservationTaskFactory;
}
export import taskName = TaskName;
export import taskStatus = cinerino.taskStatus;

export import ticketTypeCategory = TicketTypeCategory;
