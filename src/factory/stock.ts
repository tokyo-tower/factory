/**
 * 在庫ファクトリー
 * @namespace stock
 */

import ItemAvailability from './itemAvailability';

/**
 * 在庫インターフェース
 * @export
 * @interface
 * @memberof stock
 */
export interface IStock {
    /**
     * 在庫ID
     * システムでグローバルユニーク
     */
    id: string;
    /**
     * パフォーマンスID
     */
    performance: string;
    /**
     * 座席コード
     */
    seat_code: string;
    /**
     * 在庫状況
     */
    availability: ItemAvailability;
    /**
     * 在庫保持者
     * 保持者がいなかればundefined
     */
    holder?: string;
}
