/**
 * タスク名
 */
enum TaskName {
    /**
     * 座席の仮予約削除
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * クレジットカードのオーソリ取消
     */
    CancelCreditCard = 'cancelCreditCard',
    /**
     * メール通知送信
     */
    SendEmailNotification = 'sendEmailNotification',
    /**
     * 座席予約の資産移動
     */
    SettleSeatReservation = 'settleSeatReservation',
    /**
     * クレジットカード実売上
     */
    SettleCreditCard = 'settleCreditCard',
    /**
     * 注文作成
     */
    CreateOrder = 'createOrder',
    /**
     * 返品タスク
     */
    ReturnOrder = 'returnOrder',
    /**
     * パフォーマンスに対する注文返品タスク
     */
    ReturnOrdersByPerformance = 'returnOrdersByPerformance',
    /**
     * 注文取引レポート作成
     */
    CreatePlaceOrderReport = 'createPlaceOrderReport',
    /**
     * 注文返品取引レポート作成
     */
    CreateReturnOrderReport = 'createReturnOrderReport',
    /**
     * 予約から注文レポート更新
     */
    UpdateOrderReportByReservation = 'updateOrderReportByReservation'
}

export default TaskName;
