---
title: 設定のインポート
description: 設定のインポート
menu:
  docs:
    weight: 30
    parent: settings-system
---
⚠全てのデータが削除されます。

1. ![settings1](https://raw.githubusercontent.com/cutls/TheDeskDocs/master/media/settings1.png)を選択。
1. ![settings2](https://raw.githubusercontent.com/cutls/TheDeskDocs/master/media/settings2.png)から __環境設定__ を選択。
1. __インポート__ を選びます。
1. 読み込むファイルを指定します。
  
## インポート形式
最新: 20.3.3現在 2.1  
拡張子

* .json5: 18.9.0以降で作成されたエクスポートデータ
* .thedeskconfigv2: 17.2.0~18.8.3で作成されたエクスポートデータ
* .thedeskconfig: 16.0.1~17.2.0で作成されたエクスポートデータ

いずれも読み込み可能ですが、旧バージョンの場合インポートされる情報が減ります。

## インポートができない
一部環境では、システムダイアログが使えない等でファイルを選択できません。
その時は中身をテキストエディタやメモ帳(notepad.exe)で開いてテキストボックスに貼り付けてインポートを押してください。同じようにインポートを行います。

## 旧バージョンからのインポート
Usain (17.2.0)までのバージョンでエクスポートした場合、拡張子が「\*.thedeskconfig」になっています。  
最新のバージョンにもインポートできますが、以下の情報のみインポートされます。

### 17.2.0までのTheDeskからインポートされる情報
1. ログインしているアカウントの認証情報とカラー
1. カラムの並び順とヘッダーカラー(リンク解析や読み上げは除く)
1. テーマ
1. マルチカラムの最低横幅
1. フォント/フォントサイズ
1. 画像の高さ
1. 「起動後や起動時のアカウント」
1. デフォルトの公開設定
1. キーボードショートカットの設定
1. ユーザーの強調
1. クライアントの強調・ミュート
1. ワードの強調・ミュート