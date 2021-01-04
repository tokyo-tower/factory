import { chevre, person, propertyValue } from '@cinerino/factory';

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: any;
    ids?: string[];
    startFrom?: Date;
    startThrough?: Date;
    ttts_extension?: {
        online_sales_update_at?: any;
        refund_status?: string;
    };
    eventStatus?: {
        $in?: chevre.eventStatusType[];
    };
}

/**
 * 返金ステータス
 */
export enum RefundStatus {
    // なし
    None = 'None',
    // 未指示
    NotInstructed = 'NotInstructed',
    // 指示済
    Instructed = 'Instructed',
    // 返金完了
    Compeleted = 'Compeleted'
}

/**
 * ttts拡張インターフェース
 */
export interface IExtension {
    // エレベータ運行ステータス変更者
    ev_service_update_user?: string;
    // エレベータ運行ステータス更新日時
    ev_service_update_at?: Date;
    // オンライン販売ステータス変更者
    online_sales_update_user?: string;
    // オンライン販売ステータス更新日時
    online_sales_update_at?: Date;
    // 返金ステータス
    refund_status?: RefundStatus;
    // 一括返金ステータス変更者
    refund_update_user?: string;
    // 一括返金ステータス更新日時
    refund_update_at?: Date;
    // 返金済数
    refunded_count?: number;
    // 未返金数
    unrefunded_count?: number;
    /**
     * 販売ステータス最終更新時の予約データリスト
     */
    reservationsAtLastUpdateDate?: IReservationAtLastupdateDate[];
    /**
     * 入場済予約リスト
     */
    checkedReservations?: { id: string }[];
}

/**
 * 販売ステータス最終更新時の予約データインターフェース
 */
export interface IReservationAtLastupdateDate {
    id: string;
    status: chevre.reservationStatusType;
    transaction_agent: person.IPerson;
}

/**
 * パフォーマンスインターフェース
 */
export interface IPerformance {
    project: chevre.project.IProject;
    id: string;
    startDate: Date;
    endDate: Date;
    eventStatus: chevre.eventStatusType;
    additionalProperty?: propertyValue.IPropertyValue<string>[];
    ttts_extension?: IExtension;
}
