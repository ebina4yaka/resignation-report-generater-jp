import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function AboutUse(): React.ReactElement {
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
      </div>
    </div>
  )
}
