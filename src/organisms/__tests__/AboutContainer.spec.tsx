import React from 'react'
import renderer from 'react-test-renderer'
import AboutContainer from '../AboutContainer'

jest.mock('../../molecules/AboutParameters', () => 'MockedAboutParameters')
jest.mock('../../molecules/AboutUse', () => 'MockedAboutUse')

test('Snapshot test for AboutContainer', () => {
  const tree = renderer.create(<AboutContainer />).toJSON()
  expect(tree).toMatchSnapshot()
})
