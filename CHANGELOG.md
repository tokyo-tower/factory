# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased

### Added

### Changed

- update @cinerino/factory
- 決済方法タイプをCinerino化

### Deprecated

### Removed

### Fixed

### Security

## v20.1.0 - 2019-09-24

### Changed

- イベント指定での注文返品タスクに注文返品取引確定後アクション属性を追加

## v20.0.0 - 2019-09-24

### Changed

- update @cinerino/factory

### Removed

- 座席予約承認取消タスクを削除

## v19.0.0 - 2019-09-04

### Changed

- 注文レポート作成元データーを取引から注文へ変更
- 注文返品レポート作成元データーを取引から注文へ変更

### Removed

- SettleSeatReservationタスクを削除
- SendEmailNotificationタスクを削除

## v18.0.1 - 2019-08-28

### Changed

- update @cinerino/factory

## v18.0.0 - 2019-08-27

### Changed

- 注文の決済方法をCinerino化
- タスクインターフェースをCinerino化
- 注文インターフェースをCinerino化
- 注文取引インターフェースをCinerino化

## v17.0.0 - 2019-08-21

### Changed

- 人物インターフェースをCinerino化
- アクションインターフェースをCinerino化
- 取引インターフェースをCinerino化

## v16.0.0 - 2019-08-20

### Removed

- 注文取引から購入者区分属性を削除
- 注文取引から顧客連絡先属性を削除

## v15.0.1 - 2019-08-18

### Changed

- パフォーマンスインターフェースの柔軟性拡張

## v15.0.0 - 2019-08-15

### Changed

- update @cinerino/factory

### Deprecated

- 注文取引の購入者区分を非必須化

### Removed

- CreateOrderタスクを削除
- SettleCreditCardタスクを削除

## v14.0.0 - 2019-08-13

### Changed

- クレジットカード決済承認アクションインターフェースをCinerino化
- 座席予約承認アクションインターフェースをCinerino化

## v13.3.0 - 2019-07-31

### Changed

- アクション、タスク、取引にプロジェクト属性を追加

## v13.2.0 - 2019-07-30

### Changed

- 決済方法インターフェースをCinerino化

### Deprecated

### Removed

- 印刷アクションインターフェースを削除

## v13.1.0 - 2019-07-30

### Changed

- 注文インターフェースをCinerino化

## v13.0.0 - 2019-07-30

### Removed

- 座席予約オファーインターフェース削除
- 企業インターフェース削除
- 予約タイプを削除
- 予約ステータスタイプを削除
- 在庫状況タイプを削除

## v12.0.0 - 2019-07-30

### Added

- 販売者インターフェースを追加

### Changed

- 注文インターフェースをCinerino化

## v11.1.1 - 2019-07-28

### Changed

- update @chevre/factory

## v11.1.0 - 2019-07-25

### Changed

- 仮予約インターフェースにidを追加

## v11.0.1 - 2019-07-24

### Changed

- update @chevre/factory

## v11.0.0 - 2019-07-22

### Changed

- 座席予約承認アクション結果に、外部サービス連携に関わる属性を追加

### Removed

- 座席予約オファーインターフェースから冗長な属性を削除

## v10.0.0 - 2019-07-18

### Changed

- パッケージスコープを変更

### Removed

- 注文照会キーを削除

## v9.0.0 - 2019-07-12

### Added

- プロジェクトインターフェースを追加

### Removed

- パフォーマンスインターフェースから券種情報を削除
- 仮予約インターフェースから冗長な属性を削除

## v8.0.0 - 2019-07-09

### Removed

- パフォーマンスインターフェースから座席情報を削除

## v7.0.0 - 2019-07-08

### Removed

- 映画作品インターフェースを削除
- 座席セクションインターフェースからcodeを削除(branchCodeへ移行)
- 座席インターフェースからcodeを削除(branchCodeへ移行)

## v6.0.0 - 2019-07-03

### Changed

- パフォーマンス検索条件のChevre化

### Removed

- 注文取引結果からeventReservationsを削除(order.acceptedOffersへ移行)
- 仮予約インターフェースからrate_limit_unit_in_secondsを削除
- パフォーマンスインターフェースから非推奨属性を削除

## v5.0.0 - 2019-06-28

### Changed

- 予約の入場以外の全属性をChevre化
- 券種インターフェースをChevre化

## v4.0.0 - 2019-06-24

### Changed

- update @chevre/factory

### Removed

- 券種からキャンセルチャージ属性を削除
- 予約インターフェースから不要な属性を削除
- 予約検索条件インターフェースから不要な属性を削除

## v3.3.0 - 2019-06-19

### Changed

- パフォーマンスインターフェースを拡張

## v3.2.0 - 2019-06-18

### Changed

- パフォーマンスインターフェースを拡張

## v3.1.1 - 2019-06-17

### Changed

- 予約検索条件強化

## v3.1.0 - 2019-06-17

### Changed

- 予約検索条件強化

## v3.0.0 - 2019-06-14

### Changed

- 予約検索条件を拡張
- 予約に追加特性を追加
- 仮予約インターフェースを拡張

### Removed

- 在庫インターフェースを削除

## v2.0.1 - 2019-06-11

### Changed

- 券種のchargeをpriceSpecificationに置換

## v2.0.0 - 2019-06-10

### Added

- イベント予約集計タスクを追加

### Changed

- パフォーマンス検索条件調整
- イベント予約検索条件調整
- パフォーマンス検索結果調整
- パフォーマンスインターフェースをChevre化に向けて補強
- イベント集計にオファーごとの集計を追加

### Removed

- パフォーマンスデータから不要な項目を削除
- 券種から、説明、レート制限単位属性を削除

## v1.0.1 - 2019-04-18

### Changed

- 予約インターフェースをChevreを継承するように拡張
- install @chevre/factory@1.0.0-alpha.88
- install @cinerino/factory@1.0.0-alpha.126
- 人物インターフェースをCinerino継承

## v1.0.0 - 2018-12-22

### Added

- TriggerWebhookタスクを追加

### Changed

- [Cinerino](https://github.com/cinerino/factory)化に向けて注文インターフェースを調整
- 注文検索条件を追加
- 取引検索条件を追加

## v0.2.0 - 2018-11-27

### Added

- 注文取引レポート作成タスクを追加。
- 注文返品取引レポート作成タスクを追加。
- 注文レポート更新タスクを追加。

## v0.1.1 - 2018-04-17

### Changed

- パフォーマンスの拡張属性に、販売ステータス最終更新時の予約データリストを追加。

## v0.1.0 - 2018-03-22

### Added

- 決済方法に手売りを追加。

### Fixed

- typescriptのコンパイルターゲットをes6からes5に変更。

## v0.0.1 - 2018-02-14
### Changed
- 予約スキーマに注文取引主体属性を追加。

## v0.0.0 - 2018-01-17
### Added
- ファーストリリース。
