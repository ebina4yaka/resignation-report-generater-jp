import React from 'react'
import renderer from 'react-test-renderer'
import HeroButtons from '../HeroButtons'

test('Snapshot test for HeroButtons', () => {
  const tree = renderer.create(<HeroButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
