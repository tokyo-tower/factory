import { person } from '@cinerino/factory';

/**
 * 人物グループ
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
 * 連絡先インターフェース
 */
export interface IProfile extends person.IProfile {
    last_name: string;
    first_name: string;
    email: string;
    tel: string;
    age: string;
    address: string;
    gender: string;
}

/**
 * 連絡先インターフェース
 * @alias
 */
export type IContact = IProfile;

/**
 * 識別子インターフェース
 */
export import IIdentifier = person.IIdentifier;

/**
 * 人物インターフェース
 */
export interface IPerson extends person.IPerson {
    notes?: string;
    group?: Group;
}
