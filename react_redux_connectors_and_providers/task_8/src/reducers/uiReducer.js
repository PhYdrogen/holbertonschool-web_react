import { Map } from 'immutable';
import { APP_ACTIONS } from '../appReducer';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.LOGIN:
      return state
        .set('isUserLoggedIn', true)
        .set('user', action.payload);

    case APP_ACTIONS.LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null);

    case APP_ACTIONS.TOGGLE_DRAWER:
      return state.set('isNotificationDrawerVisible', action.payload ? action.payload.display : !state.get('isNotificationDrawerVisible'));

    default:
      return state;
  }
}