/**
 * 映画作品ファクトリー
 */
import { IBilingualString } from '../multilingualString';
import { ITheater } from '../place/movieTheater';

/**
 * 作品インターフェース
 */
export interface IFilm {
    id: string;
    name: IBilingualString;
    location: ITheater;
}
