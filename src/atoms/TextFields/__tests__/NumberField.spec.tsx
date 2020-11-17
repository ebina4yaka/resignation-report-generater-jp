import renderer from 'react-test-renderer'
import { act, renderHook } from '@testing-library/react-hooks'
import { fireEvent, queryByAttribute, render } from '@testing-library/react'
import { useState } from 'react'
import NumberField from '../NumberField'

describe('NumberField Tests', () => {
  test('Snapshot test', () => {
    const tree = renderer
      .create(
        <NumberField
          id="testNumber"
          isRequired
          endAdornment="日"
          value={0}
          label="テスト"
          setValue={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Input onChange Handle Test', () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState(0)
      return { value, setValue }
    })
    const id = 'testNumber'
    const dom = render(
      <NumberField
        id={id}
        isRequired
        endAdornment="日"
        value={result.current.value}
        label="テスト"
        setValue={result.current.setValue}
      />
    )
    const getById = queryByAttribute.bind(null, 'id')

    const inputElement = getById(dom.container, id) as HTMLInputElement

    act(() => {
      fireEvent.change(inputElement, { target: { value: '12' } })
    })

    expect(result.current.value).toBe(12)
  })
})
