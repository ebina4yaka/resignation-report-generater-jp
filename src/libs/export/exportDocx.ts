import { AlignmentType, Document, Packer, Paragraph } from 'docx'
import { saveAs } from 'file-saver'
import { ExportParameters } from './ExportParameters'

export default function exportDocx(parameters: ExportParameters): void {
  const doc = new Document()

  const top = [
    new Paragraph({
      text: '退職届',
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      text: `${parameters.companyName} 御中`,
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({
      text: `（代表取締役 ${parameters.representativeDirector} 様）`,
      alignment: AlignmentType.LEFT,
    }),
  ]

  const contents = [
    new Paragraph({}),
    new Paragraph({
      text:
        `このたび${parameters.reason}により${parameters.dateOfRetirement}をもって` +
        `退職することといたしましたので、民法627条1項に基づき、本日、労働契約について解約の申し入れをいたします。`,
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({
      text:
        '※なお、離職票は退職日経過後に私の住所に郵送いただきますようお願い申し上げます。',
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({}),
  ]

  const bottom = (() => {
    if (parameters.department !== '') {
      return [
        new Paragraph({
          text: parameters.dateOfNotification,
          alignment: AlignmentType.LEFT,
        }),
        new Paragraph({
          text: parameters.department,
          alignment: AlignmentType.LEFT,
        }),
        new Paragraph({
          text: parameters.name,
          alignment: AlignmentType.LEFT,
        }),
      ]
    }
    return [
      new Paragraph({
        text: parameters.dateOfNotification,
        alignment: AlignmentType.LEFT,
      }),
      new Paragraph({
        text: parameters.name,
        alignment: AlignmentType.LEFT,
      }),
    ]
  })()

  const section = (() => {
    return top.concat(contents).concat(bottom)
  })()

  doc.addSection({
    children: section,
  })

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${parameters.companyName}_退職届.docx`)
  })
}
