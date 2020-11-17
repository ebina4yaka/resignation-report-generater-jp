import renderer from 'react-test-renderer'
import ParametersField from '../ParametersField'

jest.mock('../../atoms/TextFields/DateField', () => 'MockedDateField')
jest.mock('../../atoms/TextFields/StringField', () => 'MockedStringField')
jest.mock('../../atoms/TextFields/NumberField', () => 'MockedNumberField')

describe('ParametersField Tests', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(<ParametersField />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
