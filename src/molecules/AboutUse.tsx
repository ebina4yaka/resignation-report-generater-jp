import React, { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'

export default function AboutUse(): ReactElement {
  return (
    <div>
      <Typography
        variant="h5"
        align="center"
        color="textPrimary"
        paragraph
        gutterBottom
      >
        使い方
      </Typography>
      <div>
        <Typography gutterBottom>1.各種項目を入力します。</Typography>
        <Typography gutterBottom>
          2.画面下部の「確認」ボタンを押します。
        </Typography>
        <Typography gutterBottom>
          3.表示内容を確認し、問題なければ「ダウンロード」ボタンを押します。
        </Typography>
        <Typography gutterBottom>4.完了！</Typography>
        <Typography gutterBottom>
          ※消化有給休暇日数が1日以上ある場合、ダウンロードファイルに有給取得の時季指定書が追加されます。
        </Typography>
      </div>
    </div>
  )
}
