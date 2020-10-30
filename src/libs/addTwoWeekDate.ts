import dayjs from 'dayjs'

export default function addTwoWeekDate(dateString: string): string {
  return dayjs(dateString).add(2, 'week').format('YYYY-MM-DD')
}
