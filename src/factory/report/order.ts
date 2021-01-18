import { chevre } from '@cinerino/factory';

export interface ICustomer {
    // 購入者（名）
    givenName: string;
    // 購入者（姓）
    familyName: string;
    // 購入者メール
    email: string;
    // 購入者電話
    telephone: string;
    // 購入者区分
    group: string;
    // ユーザーネーム
    username: string;
    // 客層
    segment: string;
}

export interface IReservation {
    id: string;
    reservationFor: {
        id: string;
        startDate: Date;
    };
    reservedTicket?: {
        ticketedSeat?: {
            seatNumber?: string;
        };
        ticketType?: {
            csvCode?: string;
            name?: chevre.multilingualString;
            priceSpecification?: {
                price?: number;
            };
        };
    };
}

/**
 * レポートにおける予約ステータス
 */
export enum ReportCategory {
    Reserved = 'RESERVED',
    Cancelled = 'CANCELLED',
    /**
     * 返品手数料
     */
    CancellationFee = 'CANCELLATION_FEE'
}

/**
 * 注文レポートインターフェース
 */
export interface IReport {
    amount: number;
    /**
     * レポートカテゴリー
     */
    category: ReportCategory;
    /**
     * 予約の使用フラグ
     */
    checkedin: 'TRUE' | 'FALSE';
    /**
     * 入場日時
     */
    checkinDate: string;
    dateRecorded: Date;
    mainEntity: {
        confirmationNumber: string;
        /**
         * 購入者
         */
        customer: ICustomer;
        /**
         * 注文日時
         */
        orderDate: Date;
        /**
         * 決済方法名称
         */
        paymentMethod: string;
        /**
         * 金額
         */
        price: string;
    };
    payment_seat_index?: number;
    project: chevre.project.IProject;
    reservation: IReservation;
    sortBy: string;
}
