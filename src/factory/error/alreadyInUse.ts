// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * AlreadyInUseError
 *
 * @class AlreadyInUseError
 * @extends {TTTSError}
 */
export default class AlreadyInUseError extends TTTSError {
    public readonly entityName: string;
    public readonly fieldNames: string[];

    constructor(entityName: string, fieldNames: string[], message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = `The specified '${entityName}' value is already in use for: ${fieldNames.join(', ')}.`;
        }

        super(ErrorCode.AlreadyInUse, message);

        this.entityName = entityName;
        this.fieldNames = fieldNames;

        setPrototypeOf(this, AlreadyInUseError.prototype);
    }
}
