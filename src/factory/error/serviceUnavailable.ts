// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * ServiceUnavailableError
 *
 * @class ServiceUnavailableError
 * @extends {TTTSError}
 */
export default class ServiceUnavailableError extends TTTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Service unavailable temporarily.';
        }

        super(ErrorCode.ServiceUnavailable, message);

        setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
