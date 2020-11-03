export function getCompanyName(companyName: string): string {
  return `${companyName} 御中`
}

export function getRepresentativeDirector(
  representativeDirector: string
): string {
  return `（代表取締役 ${representativeDirector} 様）`
}

export function getReason(reason: string, dateOfRetirement: string): string {
  return (
    `このたび${reason}により${dateOfRetirement}をもって` +
    `退職することといたしましたので、民法627条1項に基づき、本日、労働契約について解約の申し入れをいたします。`
  )
}

export const requestTicket =
  '※なお、離職票は退職日経過後に私の住所に郵送いただきますようお願い申し上げます。'
