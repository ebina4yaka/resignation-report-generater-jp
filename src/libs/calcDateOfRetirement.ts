import dayjs from 'dayjs'
import addTwoWeekDate from './addTwoWeekDate'

export default function calcDateOfRetirement(
  dateOfNotification: string,
  daysOfPaidLeaveRemaining: number
): string {
  if (daysOfPaidLeaveRemaining > 14) {
    return dayjs(dateOfNotification)
      .add(daysOfPaidLeaveRemaining, 'day')
      .format('YYYY-MM-DD')
  }
  return addTwoWeekDate(dateOfNotification)
}
