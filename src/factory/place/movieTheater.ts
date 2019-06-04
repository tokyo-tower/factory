/**
 * 劇場ファクトリー
 */
import { IBilingualString } from '../multilingualString';

/**
 * 劇場施設インターフェース
 */
export interface ITheater {
    id: string;
    branchCode: string;
    name: IBilingualString;
    address: IBilingualString;
}

/**
 * 座席インターフェス
 */
export interface ISeat {
    code: string; // 座席コード
    branchCode: string;
}

/**
 * 座席コードのソート関数
 */
export function sortBySeatCode(a: string, b: string): number {
    const hyphenIndexA = a.lastIndexOf('-');
    const hyphenIndexB = b.lastIndexOf('-');
    const rowA = a.substr(0, hyphenIndexA); // 行
    const rowB = b.substr(0, hyphenIndexB); // 行
    const columnA = a.substr(hyphenIndexA + 1); // 列
    const columnB = b.substr(hyphenIndexB + 1); // 列

    if (rowA < rowB) {
        return -1; // 行は文字列比較
    } else if (rowA > rowB) {
        return 1; // 行は文字列比較
        // tslint:disable-next-line:no-magic-numbers
    } else if (parseInt(columnA, 10) < parseInt(columnB, 10)) {
        return -1; // 列は数値比較
    }

    return 1;
}

/**
 * 座席セクションインターフェース
 */
export interface ISection {
    code: string;
    branchCode: string;
    seats: ISeat[];
}

/**
 * スクリーンインターフェース
 */
export interface IScreen {
    id: string;
    branchCode: string;
    name: IBilingualString;
    sections: ISection[];
    seats_number: number;
}
