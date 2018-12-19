import PersonType from './personType';
import * as ProgramMembershipFactory from './programMembership';
import { IPropertyValue } from './propertyValue';

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
export interface IProfile {
    last_name: string;
    first_name: string;
    email: string;
    tel: string;
    age: string;
    address: string;
    gender: string;
    /**
     * 重複項目だが、Cinerino化に向けて補強
     */
    givenName?: string;
    /**
     * 重複項目だが、Cinerino化に向けて補強
     */
    familyName?: string;
    /**
     * 重複項目だが、Cinerino化に向けて補強
     */
    telephone?: string;
}

/**
 * 連絡先インターフェース
 * @alias
 */
export type IContact = IProfile;

/**
 * 識別子インターフェース
 */
export type IIdentifier = IPropertyValue<string>[];

/**
 * 人物インターフェース
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
    familyName?: string;
    givenName?: string;
    email?: string;
    telephone?: string;
    notes?: string;
    group?: Group;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     * 所属会員プログラム
     */
    memberOf?: ProgramMembershipFactory.IProgramMembership;
    /**
     * 人を識別するもの
     * サービスを使用するアプリケーション側で都合のいいように設定する
     */
    identifier?: IIdentifier;
}
