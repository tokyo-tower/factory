import { chevre } from '@cinerino/factory';

/**
 * 注文レポートインターフェース
 */
export interface IReport {
    project: chevre.project.IProject;
    reservation: { id: string };
    /**
     * 注文の確認番号
     */
    payment_no: string;
    payment_seat_index?: number;
    /**
     * 予約対象イベント
     */
    performance: {
        // パフォーマンスID
        id: string;
        // 入塔予約年月日
        startDay: string;
        // 入塔予約時刻
        startTime: string;
    };
    /**
     * 購入者
     */
    customer: {
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
    };
    /**
     * 注文日時
     */
    orderDate: Date;
    /**
     * 決済方法名称
     */
    paymentMethod: string;
    /**
     * 予約座席
     */
    seat: {
        // 座席コード
        code: string;
    };
    /**
     * 予約オファー
     */
    ticketType: {
        // 券種名称
        name: string;
        // チケットコード
        csvCode: string;
        // 券種料金
        charge: string;
    };
    /**
     * 予約の使用フラグ
     */
    checkedin: 'TRUE' | 'FALSE';
    /**
     * 入場日時
     */
    checkinDate: string;
    status_sort: string;
    cancellationFee: number;
    /**
     * 予約の単価
     */
    price: string;
    /**
     * レポートにおける予約ステータス
     */
    reservationStatus: ReportCategory;
    date_bucket: Date;
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
