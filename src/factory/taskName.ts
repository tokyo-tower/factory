/**
 * タスク名
 */
enum TaskName {
    /**
     * イベント予約集計
     */
    AggregateEventReservations = 'aggregateEventReservations',
    /**
     * 注文取引レポート作成
     */
    CreatePlaceOrderReport = 'createPlaceOrderReport',
    /**
     * 注文返品取引レポート作成
     */
    CreateReturnOrderReport = 'createReturnOrderReport',
    /**
     * Cinerinoイベントインポート
     */
    ImportEvent = 'importEvent',
    /**
     * 予約から注文レポート更新
     */
    UpdateOrderReportByReservation = 'updateOrderReportByReservation'
}

export default TaskName;
