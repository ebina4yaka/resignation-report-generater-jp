import React from 'react'
import renderer from 'react-test-renderer'
import PreviewDocxCompany from '../PreviewDocxCompany'

test('Snapshot test for PreviewDocxCompany', () => {
  const tree = renderer
    .create(
      <PreviewDocxCompany
        companyName="株式会社無職"
        representativeDirector="無職社長"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
