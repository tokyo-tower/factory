/**
 * person factory
 * 人物ファクトリー
 * @namespace person
 */

import PersonType from './personType';
import * as ProgramMembershipFactory from './programMembership';

/**
 * 人物グループ
 * @export
 * @enum
 * @memberof person
 */
export enum Group {
    /**
     * 一般
     */
    Customer = 'Customer',
    /**
     * 内部関係者
     */
    Staff = 'Staff'
}

/**
 * contact interface
 * 連絡先インターフェース
 * @export
 * @interface
 * @memberof person
 */
export interface IContact {
    last_name: string;
    first_name: string;
    email: string;
    tel: string;
    age: string;
    address: string;
    gender: string;
}

/**
 * person interface
 * 人物インターフェース
 * @export
 * @interface
 * @memberof person
 */
export interface IPerson {
    typeOf: PersonType;
    /**
     * id
     */
    id: string;
    /**
     * URL of the item.
     */
    url?: string;
    name?: string;
    notes?: string;
    email?: string;
    group?: Group;
    signature?: string;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     * 所属会員プログラム
     */
    memberOf?: ProgramMembershipFactory.IProgramMembership;
}
