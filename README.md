# 退職届ジェネレーター
[![codecov](https://codecov.io/gh/ebina4yaka/resignation-report-generater-jp/branch/main/graph/badge.svg)](https://codecov.io/gh/ebina4yaka/resignation-report-generater-jp)  
[letsretire.app](https://letsretire.app)  
退職届が簡単に作成できるWEBアプリです。  
Microsoft Office Word形式でダウンロードが可能です。(拡張子.docx)  
必要に応じて
[Microsoft Office Online](https://www.microsoft.com/ja-jp/microsoft-365/free-office-online-for-the-web)
や
[LibreOffice](https://ja.libreoffice.org/)
などを使って表示、編集、印刷等してください。

## 使い方

### 流れ

1. 「作成する」ボタンから作成画面に入ってください。
1. 各種項目を入力します。
1. 画面下部の「確認」ボタンを押します。
1. 表示内容を確認し、問題なければ「ダウンロード」ボタンを押します。
1. 完了！

※消化有給休暇日数が1日以上ある場合、ダウンロードファイルに有給取得の時季指定書が追加されます。

### 入力項目

- 退職者  
  退職者の氏名

- 会社名  
  退職する会社の社名

- 所属部署  
  退職者の所属部署名

- 代表取締役  
  退職する会社の代表者の氏名

 - 退職理由  
  「○○○により～」の形式で出力されます。
   ※○○○ = 入力内容

- 退職届日  
  退職届を提出する日

- 消化有給休暇日数  
  退職届を提出してから消化する有給休暇の日数

- 退職日  
  自動で退職届日から2週間後の日付が入ります。  
  消化する有給休暇の日数が多い場合は調整してください。
  
## 開発環境

```
Node.js v15.0.1
Next.js v10.0.1
React.js v17.0.1
docx.js v5.4.0
material-ui v4.11.0
```
