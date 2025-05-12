import { Map, fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { setNotifications, setLoadingState } from '../actions/notificationActionCreators';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState).toEqual(Map({
      notifications: Map(),
      loading: false
    }));
  });

  it('should handle SET_LOADING_STATE', () => {
    const initialState = Map({
      notifications: Map(),
      loading: false
    });
    
    const newState = notificationReducer(initialState, setLoadingState(true));
    expect(newState.get('loading')).toEqual(true);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = Map({
      notifications: Map(),
      loading: false
    });
    
    const data = {
      1: { id: 1, type: 'default', value: 'New course available' },
      2: { id: 2, type: 'urgent', value: 'New resume available' }
    };
    
    const newState = notificationReducer(initialState, setNotifications(data));
    expect(newState.getIn(['notifications', '1', 'id'])).toEqual(1);
    expect(newState.getIn(['notifications', '2', 'type'])).toEqual('urgent');
  });
});