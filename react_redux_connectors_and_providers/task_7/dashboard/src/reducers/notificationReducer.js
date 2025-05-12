import { Map, fromJS } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';

const initialState = Map({
  notifications: Map(),
  loading: false
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: fromJS(action.data)
      });

    case MARK_AS_READ:
      return state.setIn(['notifications', action.index.toString(), 'isRead'], true);

    default:
      return state;
  }
}
