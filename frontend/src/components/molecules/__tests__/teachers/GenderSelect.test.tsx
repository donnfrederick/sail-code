import GenderSelect from 'components/molecules/teachers/GenderSelect'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

test('render <GenderSelect />', () => {
  const info = {
    email: '',
    password: '',
    name: '',
    gender: '',
    picture: '',
    hobbies: [],
    purposes: [],
    desiredCondition: '',
    introduce: '',
    categories: [],
    tags: [],
    selected_tags: [],
    added_tags: []
  }
  const tree = renderer
    .create(<GenderSelect info={info} register={() => null} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
