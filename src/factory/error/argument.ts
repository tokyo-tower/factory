// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * ArgumentError
 *
 * @class ArgumentError
 * @extends {TTTSError}
 */
export default class ArgumentError extends TTTSError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = `Invalid or missing argument supplied: ${argumentName}.`;
        }

        super(ErrorCode.Argument, message);

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentError.prototype);
    }
}
