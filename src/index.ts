/**
 * index module
 */
import * as cinerino from '@cinerino/factory';

import * as PerformanceFactory from './factory/performance';
import * as EventReservationFactory from './factory/reservation/event';
import * as AggregateEventReservationsTaskFactory from './factory/task/aggregateEventReservations';
import * as CreatePlaceOrderReportTaskFactory from './factory/task/createPlaceOrderReport';
import * as CreateReturnOrderReportTaskFactory from './factory/task/createReturnOrderReport';
import * as ImportEventTaskFactory from './factory/task/importEvent';
import * as UpdateOrderReportByReservationTaskFactory from './factory/task/updateOrderReportByReservation';

import TaskName from './factory/taskName';

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
export namespace task {
    export import IAttributes = cinerino.task.IAttributes;
    export import IExecutionResult = cinerino.task.IExecutionResult;
    export import ISearchConditions = cinerino.task.ISearchConditions;
    export import ITask = cinerino.task.ITask;
    export import aggregateEventReservations = AggregateEventReservationsTaskFactory;
    export import createPlaceOrderReport = CreatePlaceOrderReportTaskFactory;
    export import createReturnOrderReport = CreateReturnOrderReportTaskFactory;
    export import importEvent = ImportEventTaskFactory;
    export import updateOrderReportByReservation = UpdateOrderReportByReservationTaskFactory;
}
export import taskName = TaskName;
export import taskStatus = cinerino.taskStatus;
