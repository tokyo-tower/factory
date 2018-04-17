/**
 * パフォーマンスファクトリー
 * @namespace performance
 */

import { IFilm } from './creativeWork/movie';
import { IBilingualString } from './multilingualString';
import { ITicketType } from './offer/seatReservation';
import PaymentMethodType from './paymentMethodType';
import { Group as PersonGroup, IPerson } from './person';
import { IScreen, ITheater } from './place/movieTheater';
import { ICheckin, IReservation } from './reservation/event';
import ReservationStatusType from './reservationStatusType';
import TicketTypeCategory from './ticketTypeCategory';

/**
 * 検索条件インターフェース
 * @export
 * @interface
 * @memberof performance
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    // 上映日
    day?: string;
    // 部門
    section?: string;
    // フリーワード
    words?: string;
    // この時間以降開始のパフォーマンスに絞る(timestamp milliseconds)
    startFrom?: Date;
    startThrough?: Date;
    // 劇場
    theater?: string;
    // スクリーン
    screen?: string;
    // パフォーマンスID
    performanceId?: string;
    // 車椅子チェック要求
    wheelchair?: string;
}

/**
 * エレベータ運行ステータス
 * @enum
 * @export
 * @memberof performance
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
 * オンライン販売ステータス
 * @enum
 * @export
 * @memberof performance
 */
export enum OnlineSalesStatus {
    // 販売
    Normal = 'Normal',
    // 停止
    Suspended = 'Suspended'
}

/**
 * 返金ステータス
 * @enum
 * @export
 * @memberof performance
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
 * tttsExtensionPerformance.ts
 * ttts拡張・パフォーマンス情報mongooseスキーマタイプ
 * ttts独自の機能拡張用フィールド定義
 * @interface
 * @export
 * @memberof performance
 */
export interface IExtension {
    // ツアーナンバー
    // 例）10:00の枠:「101」など
    tour_number: string;
    // エレベータ運行ステータス
    ev_service_status: EvServiceStatus;
    // エレベータ運行ステータス変更者
    ev_service_update_user?: string;
    // エレベータ運行ステータス更新日時
    ev_service_update_at?: Date;
    // オンライン販売ステータス
    online_sales_status: OnlineSalesStatus;
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
    status: ReservationStatusType;
    purchaser_group: PersonGroup;
    transaction_agent: IPerson;
    payment_method: PaymentMethodType;
    order_number: string;
}

/**
 * 券種グループインターフェース
 * @interface
 * @export
 * @memberof performance
 */
export interface ITicketTypeGroup {
    id: string;
    ticket_types: ITicketType[];
    name: IBilingualString;
}

/**
 * 詳細情報つきのパフォーマンスインターフェース
 * @interface
 * @export
 * @memberof performance
 */
export interface IPerformanceWithDetails {
    id: string;
    day: string;
    open_time: string;
    start_time: string;
    end_time: string;
    start_str: IBilingualString;
    location_str: IBilingualString;
    canceled: boolean;
    ticket_type_group: ITicketTypeGroup;
    theater: ITheater;
    screen: IScreen;
    film: IFilm;
    ttts_extension: IExtension;
    door_time: Date;
    start_date: Date;
    end_date: Date;
    duration: string;
    tour_number: string;
}

/**
 * パフォーマンスインターフェース
 * @interface
 * @export
 * @memberof performance
 */
export interface IPerformance {
    id: string;
    theater: string;
    theater_name: IBilingualString;
    screen: string;
    screen_name: IBilingualString;
    film: string;
    ticket_type_group: string;
    day: string;
    open_time: string;
    start_time: string;
    end_time: string;
    canceled: boolean;
    ttts_extension: IExtension;
    door_time: Date;
    start_date: Date;
    end_date: Date;
    duration: string;
    tour_number: string;
}

export type ICheckinWithTicketType = ICheckin & {
    ticketType: string;
    ticketCategory: TicketTypeCategory;
};

export interface ICheckinCountsByTicketType {
    ticketType: string;
    ticketCategory: TicketTypeCategory;
    count: number;
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
 * @export
 * @interface
 * @memberof performance
 */
export type ITicketTypeWithAvailability = ITicketType & {
    remainingAttendeeCapacity: number;
};

/**
 * 在庫状況つきのパフォーマンスインターフェース
 * @export
 * @interface
 * @memberof performance
 */
export interface IPerformanceWithAvailability {
    id: string;
    /**
     * 入場日時
     */
    doorTime: Date;
    /**
     * 開演日時
     */
    startDate: Date;
    /**
     * 終演日時
     */
    endDate: Date;
    /**
     * 上演時間
     */
    duration: string;
    /**
     * ツアーナンバー
     */
    tourNumber: string;
    /**
     * エレベータ運行ステータス
     */
    evServiceStatus: EvServiceStatus;
    /**
     * オンライン販売ステータス
     */
    onlineSalesStatus: OnlineSalesStatus;
    /**
     * 最大収容人数
     */
    maximumAttendeeCapacity: number;
    /**
     * 残収容人数
     */
    remainingAttendeeCapacity: number;
    /**
     * 車椅子客にとっての残収容人数
     */
    remainingAttendeeCapacityForWheelchair: number;
    /**
     * 券種情報
     */
    ticketTypes: ITicketTypeWithAvailability[];
}

/**
 * 集計データつきのパフォーマンスインターフェース
 * @interface
 * @export
 * @memberof performance
 */
export interface IPerformanceWithAggregation {
    id: string;
    /**
     * 入場日時
     */
    doorTime: Date;
    /**
     * 開演日時
     */
    startDate: Date;
    /**
     * 終演日時
     */
    endDate: Date;
    /**
     * 上演時間
     */
    duration: string;
    /**
     * ツアーナンバー
     */
    tourNumber: string;
    /**
     * エレベータ運行ステータス
     */
    evServiceStatus: EvServiceStatus;
    /**
     * オンライン販売ステータス
     */
    onlineSalesStatus: OnlineSalesStatus;
    /**
     * 最大収容人数
     */
    maximumAttendeeCapacity: number;
    /**
     * 残収容人数
     */
    remainingAttendeeCapacity: number;
    /**
     * 車椅子客にとっての残収容人数
     */
    remainingAttendeeCapacityForWheelchair: number;
    /**
     * 全予約数
     */
    reservationCount: number;
    /**
     * 全入場数
     */
    checkinCount: number;
    /**
     * 券種ごとの予約数
     */
    reservationCountsByTicketType: IReservationCountByTicketType[];
    /**
     * 場所ごとの入場数
     */
    checkinCountsByWhere: ICheckinCountByWhere[];
}

export interface ICheckpoint {
    where: string;
    description: string;
}

export interface IReservedExtra {
    ticketType: string;
    reservedNum: number;
}
export interface IReservationCountByTicketType {
    ticketType: string;
    count: number;
}
export interface IReservationAggregation {
    /**
     * パフォーマンス情報
     */
    performance: IPerformanceWithDetails;
    /**
     * 予約リスト
     */
    reservations: IReservation[];
    /**
     * 券種ごとの予約数
     */
    reservationCountsByTicketType: IReservationCountByTicketType[];
}

export type IReservationAggregations = IReservationAggregation[];

/**
 * 券種ごとの入場数インターフェース
 * @interface
 */
export interface IArrivedCountByTicketType {
    ticketType: string;
    ticketCategory: TicketTypeCategory;
    count: number;
}
/**
 * 入場場所ごとの入場履歴情報
 */
export interface ICheckinInfoByWhere {
    /**
     * 入場場所
     */
    where: string;
    /**
     * 入場履歴
     */
    checkins: ICheckinWithTicketType[];
    /**
     * 券種ごとの入場数
     */
    arrivedCountsByTicketType: IArrivedCountByTicketType[];
}

export type ICheckinInfosByWhere = ICheckinInfoByWhere[];

/**
 * パフォーマンスごとの入場情報インターフェース
 * @interface
 */
export interface ICheckinInfoByPerformance {
    performanceId: string;
    /**
     * 場所ごとの入場情報
     */
    checkinInfosByWhere: ICheckinInfosByWhere;
}

/**
 * 在庫状況インターフェース
 * @interface
 * @memberof performance
 */
export interface IAvailability {
    id: string;
    remainingAttendeeCapacity: number;
}
