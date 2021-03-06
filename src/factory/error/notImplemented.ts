// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * NotImplementedError
 *
 * @class NotImplementedError
 * @extends {TTTSError}
 */
export default class NotImplementedError extends TTTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Method is not yet implemented.';
        }

        super(ErrorCode.NotImplemented, message);

        setPrototypeOf(this, NotImplementedError.prototype);
    }
}
