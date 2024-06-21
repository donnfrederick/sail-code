import Router from 'components/organisms/Router'
import NotifyAbsence from 'components/organisms/students/modal_contents/notify_absence'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Intl } from 'components/organisms/Intl'

test('render <NotifyAbsence />', () => {
  const tree = renderer
    .create(
      <Intl>
        <Router>
          <NotifyAbsence />
        </Router>
      </Intl>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
