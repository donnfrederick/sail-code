import Router from 'components/organisms/Router'
import ProfileEditPurposes from 'components/pages/teachers/Profile/EditPurposes'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

test('render <ProfileEditPurposes />', () => {
  const tree = renderer
    .create(
      <Router>
        <ProfileEditPurposes />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})