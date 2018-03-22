// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * ArgumentNullError
 *
 * @class ArgumentNullError
 * @extends {TTTSError}
 */
export default class ArgumentNullError extends TTTSError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = `Missing argument: ${argumentName}.`;
        }

        super(ErrorCode.ArgumentNull, message);

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentNullError.prototype);
    }
}
