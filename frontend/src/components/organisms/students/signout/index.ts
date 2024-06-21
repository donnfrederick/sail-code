import Signout from 'components/organisms/students/signout/Signout'
import { connect } from 'react-redux'
import { State as RootState } from 'reducers'
import * as ModalActions from 'reducers/modal'

// tslint:disable-next-line
interface OuterProps {}

// tslint:disable-next-line
interface Props {}

const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {}
}

const enhancer: any = connect(
  mapStateToProps,
  {
    openModal: ModalActions.open,
    setModalContents: ModalActions.setContents
  }
)

export default enhancer(Signout)