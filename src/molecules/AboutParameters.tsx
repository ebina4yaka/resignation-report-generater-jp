import React from 'react'
import Typography from '@material-ui/core/Typography'
import ParameterDescription from '../atoms/ParameterDescription'

export default function AboutParameters(): React.ReactElement {
  return (
    <div>
      <Typography
        variant="h5"
        align="center"
        color="textPrimary"
        paragraph
        gutterBottom
      >
        入力項目の説明
      </Typography>
      <div>
        <ParameterDescription name="退職者" description={['退職者の氏名']} />
        <ParameterDescription
          name="会社名"
          description={['退職する会社の社名']}
        />
        <ParameterDescription
          name="所属部署"
          description={['退職者の所属部署名']}
        />
        <ParameterDescription
          name="代表取締役"
          description={['退職する会社の代表者の氏名']}
        />
        <ParameterDescription
          name="退職理由"
          description={[
            '「○○○により～」の形式で出力されます。',
            '※○○○ = 入力内容',
          ]}
        />
        <ParameterDescription
          name="退職届日"
          description={['退職届を提出する日']}
        />
        <ParameterDescription
          name="消化有給休暇日数"
          description={['退職届を提出してから消化する有給休暇の日数']}
        />
        <ParameterDescription
          name="退職日"
          description={[
            '自動で退職届日から2週間後の日付が入ります。',
            '消化する有給休暇の日数が多い場合は調整してください。',
          ]}
        />
      </div>
    </div>
  )
}
