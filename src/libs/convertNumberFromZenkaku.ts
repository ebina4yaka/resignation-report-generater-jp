export default function convertNumberFromZenkaku(value: string): string {
  return value.replace(/[０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  })
}
