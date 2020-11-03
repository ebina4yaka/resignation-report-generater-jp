import React from 'react'
import renderer from 'react-test-renderer'
import Hero from '../Hero'

jest.mock('../../molecules/HeroButtons', () => 'MockedHeroButtons')
jest.mock('next/image', () => 'MockedImage')

test('Snapshot test for Hero', () => {
  const tree = renderer.create(<Hero />).toJSON()
  expect(tree).toMatchSnapshot()
})
