/**
 * 入場ゲートファクトリー
 * @namespace place.checkinGate
 */

/**
 * 入場ゲートインターフェース
 * @interface
 * @memberof place.checkinGate
 */
export interface IPlace {
    /**
     * 識別子
     */
    identifier: string;
    /**
     * ゲート名
     */
    name: string;
}
