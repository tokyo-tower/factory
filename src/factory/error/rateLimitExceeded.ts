// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * RateLimitExceededError
 * @class RateLimitExceededError
 * @extends {TTTSError}
 */
export default class RateLimitExceededError extends TTTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Rate limit exceeded.';
        }

        super(ErrorCode.RateLimitExceeded, message);

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}
