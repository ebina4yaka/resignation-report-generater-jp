import { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ParameterDescription from '../atoms/ParameterDescription'

const useStyles = makeStyles((theme) =>
  createStyles({
    description: {
      margin: theme.spacing(2, 0, 2),
    },
  })
)

export default function AboutParameters(): ReactElement {
  const classes = useStyles()
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
        <div className={classes.description}>
          <ParameterDescription name="退職者" description={['退職者の氏名']} />
        </div>
        <div className={classes.description}>
          <ParameterDescription
            name="会社名"
            description={['退職する会社の社名']}
          />
        </div>
        <div className={classes.description}>
          <ParameterDescription
            name="所属部署"
            description={['退職者の所属部署名']}
          />
        </div>
        <div className={classes.description}>
          <ParameterDescription
            name="代表取締役"
            description={['退職する会社の代表者の氏名']}
          />
        </div>
        <div className={classes.description}>
          <ParameterDescription
            name="退職理由"
            description={[
              '「○○○により～」の形式で出力されます。',
              '※○○○ = 入力内容',
            ]}
          />
        </div>
        <div className={classes.description}>
          <ParameterDescription
            name="退職届日"
            description={['退職届を提出する日']}
          />
        </div>
        <div className={classes.description}>
          <ParameterDescription
            name="消化有給休暇日数"
            description={['退職届を提出してから消化する有給休暇の日数']}
          />
        </div>
        <div className={classes.description}>
          <ParameterDescription
            name="退職日"
            description={[
              '自動で退職届日から2週間後の日付が入ります。',
              '消化する有給休暇の日数が多い場合は調整してください。',
            ]}
          />
        </div>
      </div>
    </div>
  )
}
