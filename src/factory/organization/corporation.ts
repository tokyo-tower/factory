import * as OrganizationFactory from '../organization';

/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass: string;
}

export interface IOrganizationWithoutGMOInfo extends OrganizationFactory.IOrganization {
    url: string;
}

/**
 * 企業組織インターフェース
 */
export type IOrganization = IOrganizationWithoutGMOInfo & {
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
};
