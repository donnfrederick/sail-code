import EditPassword from 'components/organisms/teachers/edit_password/EditPassword'
import * as TeachersModels from 'models/teachers'
import { connect } from 'react-redux'
import { State as RootState } from 'reducers'
import * as TeachersActions from 'reducers/teachers'

// tslint:disable-next-line
interface OuterProps {}

interface Props {
  currentPassword: string
  error: any
  info: TeachersModels.Info
}

const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {
    currentPassword: state.rootReducer.teachers.current_password,
    error: state.rootReducer.teachers.error,
    info: state.rootReducer.teachers.info
  }
}

const enhancer: any = connect(
  mapStateToProps,
  {
    register: TeachersActions.register,
    setCurrentPassword: TeachersActions.setCurrentPassword
  }
)

export default enhancer(EditPassword)
