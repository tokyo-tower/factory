import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * ForbiddenError
 *
 * @class ForbiddenError
 * @extends {TTTSError}
 */
export default class ForbiddenError extends TTTSError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Forbidden.';
        }

        super(ErrorCode.Forbidden, message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
