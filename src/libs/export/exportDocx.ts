import { AlignmentType, Document, Packer, Paragraph } from 'docx'
import { saveAs } from 'file-saver'
import { ExportParameters } from './ExportParameters'
import {
  getCompanyName,
  getReason,
  getRepresentativeDirector,
  requestTicket,
} from './textTemplates'

function createResignationReport(parameters: ExportParameters): Paragraph[] {
  const top = [
    new Paragraph({
      text: '退職届',
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      text: getCompanyName(parameters.companyName),
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({
      text: getRepresentativeDirector(parameters.representativeDirector),
      alignment: AlignmentType.LEFT,
    }),
  ]

  const contents = [
    new Paragraph({}),
    new Paragraph({
      text: getReason(parameters.reason, parameters.dateOfRetirement),
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({
      text: requestTicket,
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

  return top.concat(contents).concat(bottom)
}

// 有給取得の時季指定書
function createPaidLeaveRequestForm(parameters: ExportParameters): Paragraph[] {
  const top = [
    new Paragraph({
      text: '有給取得の時季指定書',
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      text: getCompanyName(parameters.companyName),
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({
      text: getRepresentativeDirector(parameters.representativeDirector),
      alignment: AlignmentType.LEFT,
    }),
  ]

  const applicant = (() => {
    if (parameters.department !== '') {
      return [
        new Paragraph({}),
        new Paragraph({
          text: `申請日 ${parameters.dateOfNotification}`,
          alignment: AlignmentType.LEFT,
        }),
        new Paragraph({
          text: `所属部署 ${parameters.department}`,
          alignment: AlignmentType.LEFT,
        }),
        new Paragraph({
          text: `氏名 ${parameters.name}`,
          alignment: AlignmentType.LEFT,
        }),
        new Paragraph({}),
      ]
    }
    return [
      new Paragraph({}),
      new Paragraph({
        text: `申請日 ${parameters.dateOfNotification}`,
        alignment: AlignmentType.LEFT,
      }),
      new Paragraph({
        text: `氏名 ${parameters.name}`,
        alignment: AlignmentType.LEFT,
      }),
      new Paragraph({}),
    ]
  })()

  const contents = [
    new Paragraph({}),
    new Paragraph({
      text:
        '労働基準法39条5項に基づき、下記日時を有給使用の時季として指定させていただきますので、よろしくお願いします。',
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({}),
  ]

  const date = [
    new Paragraph({
      text: `${parameters.dateOfNotification}～${parameters.endDateOfPaidLeave}`,
      alignment: AlignmentType.LEFT,
    }),
    new Paragraph({
      text: `合計 ${parameters.daysOfPaidLeaveRemaining}日間`,
      alignment: AlignmentType.LEFT,
    }),
  ]

  return top.concat(applicant).concat(contents).concat(date)
}

export default function exportDocx(parameters: ExportParameters): void {
  const doc = new Document()

  doc.addSection({
    children: createResignationReport(parameters),
  })

  if (parameters.daysOfPaidLeaveRemaining >= 1) {
    doc.addSection({
      children: createPaidLeaveRequestForm(parameters),
    })
  }

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${parameters.companyName}_退職届.docx`)
  })
}
