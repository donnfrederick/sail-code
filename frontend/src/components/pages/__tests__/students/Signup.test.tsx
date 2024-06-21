import Router from 'components/organisms/Router'
import StudentsSignup from 'components/pages/students/Signup'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Intl } from 'components/organisms/Intl'

test('render <StudentsSignup />', () => {
  const tree = renderer
    .create(
      <Intl>
        <Router>
          <StudentsSignup />
        </Router>
      </Intl>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})