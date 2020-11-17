import renderer from 'react-test-renderer'
import { act, renderHook } from '@testing-library/react-hooks'
import { fireEvent, queryByAttribute, render } from '@testing-library/react'
import { useState } from 'react'
import StringField from '../StringField'

describe('StringField Tests', () => {
  test('Snapshot test', () => {
    const tree = renderer
      .create(
        <StringField
          id="testString"
          isRequired
          value="テスト"
          label="テスト"
          setValue={() => {}}
          placeholder="テスト"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Input onChange Handle Test', () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState('テスト')
      return { value, setValue }
    })
    const id = 'testString'
    const dom = render(
      <StringField
        id={id}
        isRequired
        value={result.current.value}
        label="テスト"
        setValue={result.current.setValue}
        placeholder="テスト"
      />
    )
    const getById = queryByAttribute.bind(null, 'id')

    const inputElement = getById(dom.container, id) as HTMLInputElement

    act(() => {
      fireEvent.change(inputElement, { target: { value: '株式会社' } })
    })

    expect(result.current.value).toBe('株式会社')
  })
})
