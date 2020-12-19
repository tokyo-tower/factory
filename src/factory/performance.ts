import { chevre, person, propertyValue } from '@cinerino/factory';

import { ICheckin } from './reservation/event';

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
 * エレベータ運行ステータス
 */
export enum EvServiceStatus {
    // 正常運行
    Normal = 'Normal',
    // 減速
    Slowdown = 'Slowdown',
    // 停止
    Suspended = 'Suspended'
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
}

/**
 * 販売ステータス最終更新時の予約データインターフェース
 */
export interface IReservationAtLastupdateDate {
    id: string;
    status: chevre.reservationStatusType;
    transaction_agent: person.IPerson;
}

export type ICheckinWithTicketType = ICheckin & {
    ticketType: string;
    ticketCategory: string;
};

export interface ICheckinCountsByTicketType {
    ticketType: string;
    ticketCategory: string;
    count?: number;
}

export interface ICheckinCountByWhere {
    /**
     * 入場場所
     */
    where: string;
    /**
     * 券種ごとの入場数
     */
    checkinCountsByTicketType: ICheckinCountsByTicketType[];
}

/**
 * 残席数つきの券種インターフェース
 */
export type ITicketTypeWithAvailability = chevre.offer.IUnitPriceOffer & {
    remainingAttendeeCapacity?: number;
};

export interface IOfferAggregation {
    id: string;
    remainingAttendeeCapacity?: number;
    reservationCount?: number;
    checkinCount?: number;
}

export interface IReservationCountByTicketType {
    ticketType: string;
    count?: number;
}

/**
 * パフォーマンス集計データインターフェース
 */
export interface IPerformanceAggregation {
    id: string;
    maximumAttendeeCapacity?: number;
    remainingAttendeeCapacity?: number;
    remainingAttendeeCapacityForWheelchair?: number;
    reservationCount?: number;
    checkinCount?: number;
    reservationCountsByTicketType?: IReservationCountByTicketType[];
    checkinCountsByWhere?: ICheckinCountByWhere[];
}

/**
 * パフォーマンスインターフェース
 */
export type IPerformance = {
    id: string;
    startDate: Date;
    endDate: Date;
    eventStatus: chevre.eventStatusType;
    additionalProperty?: propertyValue.IPropertyValue<string>[];
    ttts_extension?: IExtension;
} & IPerformanceAggregation;
