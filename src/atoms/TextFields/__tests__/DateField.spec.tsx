import renderer from 'react-test-renderer'
import { act, renderHook } from '@testing-library/react-hooks'
import { fireEvent, queryByAttribute, render } from '@testing-library/react'
import { useState } from 'react'
import DateField from '../DateField'

describe('DateField Tests', () => {
  test('Snapshot test', () => {
    const tree = renderer
      .create(
        <DateField
          id="testDate"
          isRequired
          value="2020-01-01"
          label="テスト"
          setValue={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Input onChange Handle Test', () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState('2020-01-01')
      return { value, setValue }
    })
    const id = 'testDate'
    const dom = render(
      <DateField
        id={id}
        isRequired
        value={result.current.value}
        label="テスト"
        setValue={result.current.setValue}
      />
    )
    const getById = queryByAttribute.bind(null, 'id')

    const inputElement = getById(dom.container, id) as HTMLInputElement

    act(() => {
      fireEvent.change(inputElement, { target: { value: '2020-01-20' } })
    })

    expect(result.current.value).toBe('2020-01-20')
  })
})
