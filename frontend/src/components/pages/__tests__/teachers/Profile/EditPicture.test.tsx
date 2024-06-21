import Router from 'components/organisms/Router'
import ProfileEditPicture from 'components/pages/teachers/Profile/EditPicture'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

test('render <ProfileEditPicture />', () => {
  const tree = renderer
    .create(
      <Router>
        <ProfileEditPicture />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
