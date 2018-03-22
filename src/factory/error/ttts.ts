// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';

/**
 * TTTSError
 *
 * @class TTTSError
 * @extends {Error}
 */
export class TTTSError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message);

        this.name = 'TTTSError';
        this.reason = code;

        setPrototypeOf(this, TTTSError.prototype);
    }
}
