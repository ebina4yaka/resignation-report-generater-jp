import dayjs from 'dayjs'

export default function calcDateOfRetirement(
  dateOfNotification: string
): string {
  return dayjs(dateOfNotification).add(2, 'week').format('YYYY-MM-DD')
}
