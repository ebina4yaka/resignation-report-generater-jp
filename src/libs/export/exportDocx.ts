import { Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'
import { ExportParameters } from './ExportParameters'

export default function exportDocx(parameters: ExportParameters): void {
  // Create document
  const doc = new Document()

  // Documents contain sections, you can have multiple
  // sections per document, go here to learn more about sections
  // This simple example will only contain one section
  doc.addSection({
    properties: {},
    children: [
      new Paragraph({
        children: [new TextRun(parameters.name)],
      }),
      new Paragraph({
        children: [new TextRun(parameters.companyName)],
      }),
      new Paragraph({
        children: [new TextRun(parameters.department)],
      }),
      new Paragraph({
        children: [new TextRun(parameters.representativeDirector)],
      }),
      new Paragraph({
        children: [new TextRun(parameters.dateOfNotification)],
      }),
      new Paragraph({
        children: [new TextRun(parameters.dateOfRetirement)],
      }),
      new Paragraph({
        children: [new TextRun(parameters.reason)],
      }),
      new Paragraph({
        children: [new TextRun(String(parameters.daysOfPaidLeaveRemaining))],
      }),
    ],
  })

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${parameters.companyName}_退職届.docx`)
  })
}
