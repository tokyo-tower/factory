/**
 * タスク名
 */
enum TaskName {
    /**
     * イベント予約集計
     */
    AggregateEventReservations = 'aggregateEventReservations',
    /**
     * 座席の仮予約削除
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * メール通知送信
     */
    SendEmailNotification = 'sendEmailNotification',
    /**
     * 座席予約の資産移動
     */
    SettleSeatReservation = 'settleSeatReservation',
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
