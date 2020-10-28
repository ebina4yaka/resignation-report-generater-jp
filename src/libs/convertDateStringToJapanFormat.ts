import dayjs from 'dayjs'
import 'dayjs/locale/ja'

export default function convertDateStringToJapanFormat(
  dateString: string
): string {
  dayjs.locale('ja')
  return dayjs(dateString).format('YYYY年MM月DD日 dddd')
}
