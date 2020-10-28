export default function removeNonNumberFromString(value: string): string {
  return value.replace(/[^\d-.]/g, '')
}
