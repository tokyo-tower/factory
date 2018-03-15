// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { TTTSError } from './ttts';

/**
 * NotFoundError
 *
 * @class NotFoundError
 * @extends {TTTSError}
 */
export default class NotFoundError extends TTTSError {
    public readonly entityName: string;

    constructor(entityName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = `Not Found: ${entityName}.`;
        }

        super(ErrorCode.NotFound, message);

        this.entityName = entityName;

        setPrototypeOf(this, NotFoundError.prototype);
    }
}
