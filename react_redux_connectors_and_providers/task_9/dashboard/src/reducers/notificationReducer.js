import { Map, fromJS } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_NOTIFICATION_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';

const initialState = Map({
  notifications: Map(),
  loading: false,
  filter: NotificationTypeFilters.DEFAULT
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

    case SET_NOTIFICATION_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
