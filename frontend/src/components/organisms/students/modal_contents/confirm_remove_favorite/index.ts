import ConfirmRemoveFavorite from 'components/organisms/students/modal_contents/confirm_remove_favorite/ConfirmRemoveFavorite'
import { connect } from 'react-redux'
import { State as RootState } from 'reducers'
import * as FavoritesActions from 'reducers/favorites'
import * as ModalActions from 'reducers/modal'

// tslint:disable-next-line
interface OuterProps {
  favoritedUserId: number
}

interface Props {
  authToken: string
  favoritedUserId: number
}

const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {
    authToken: state.rootReducer.students.me.auth_token,
    favoritedUserId: props.favoritedUserId
  }
}

const enhancer: any = connect(
  mapStateToProps,
  {
    close: ModalActions.close,
    deleteFavorites: FavoritesActions.deleteFavorites,
    setContents: ModalActions.setContents
  }
)

export default enhancer(ConfirmRemoveFavorite)