/**
 * 映画作品ファクトリー
 * @namespace creativeWork.movie
 */

import { IBilingualString } from '../multilingualString';

/**
 * 作品インターフェース
 * @export
 * @interface
 * @memberof creativeWork.movie
 */
export interface IFilm {
    id: string;
    name: IBilingualString;
    // image: `${req.protocol}://${req.hostname}/images/film/${performance.get('film').get('_id')}.jpg`,
    is_mx4d: boolean;
    copyright: string;
}
