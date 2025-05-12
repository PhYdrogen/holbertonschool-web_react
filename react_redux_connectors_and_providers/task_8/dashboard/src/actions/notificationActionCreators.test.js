import { setNotifications, setLoadingState, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('notificationActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('setLoadingState creates the right action', () => {
    const expectedAction = {
      type: SET_LOADING_STATE,
      isLoading: true
    };
    
    expect(setLoadingState(true)).toEqual(expectedAction);
  });

  it('setNotifications creates the right action', () => {
    const data = {
      1: { id: 1, type: 'default', value: 'New course available' },
      2: { id: 2, type: 'urgent', value: 'New resume available' }
    };
    
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
    };
    
    expect(setNotifications(data)).toEqual(expectedAction);
  });

  it('fetchNotifications dispatches the right actions', () => {
    const data = {
      1: { id: 1, type: 'default', value: 'New course available' },
      2: { id: 2, type: 'urgent', value: 'New resume available' }
    };
    
    fetchMock.getOnce('/notifications.json', {
      body: data,
      headers: { 'content-type': 'application/json' }
    });
    
    const expectedActions = [
      { type: SET_LOADING_STATE, isLoading: true },
      { type: FETCH_NOTIFICATIONS_SUCCESS, data },
      { type: SET_LOADING_STATE, isLoading: false }
    ];
    
    const store = mockStore({});
    
    return store.dispatch(fetchNotifications()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});