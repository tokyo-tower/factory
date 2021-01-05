/**
 * index module
 */
import * as cinerino from '@cinerino/factory';

import * as PerformanceFactory from './factory/performance';
import * as EventReservationFactory from './factory/reservation/event';
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
    export import updateOrderReportByReservation = UpdateOrderReportByReservationTaskFactory;
}
export import taskName = TaskName;
export import taskStatus = cinerino.taskStatus;
