// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * UnauthorizedError
 *
 * @class UnauthorizedError
 * @extends {TTTSError}
 */
export default class UnauthorizedError extends TTTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Unauthorized.';
        }

        super(ErrorCode.Unauthorized, message);

        setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
