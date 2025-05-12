import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Map, fromJS } from 'immutable';
import { NotificationsContainer, mapStateToProps } from './NotificationsContainer';
import { fetchNotifications } from '../../actions/notificationActionCreators';

// Mock the action creators
jest.mock('../../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(() => ({ type: 'TEST_FETCH_NOTIFICATIONS' })),
  markAsRead: jest.fn(index => ({ type: 'TEST_MARK_AS_READ', index })),
  setNotificationFilter: jest.fn(filter => ({ type: 'TEST_SET_NOTIFICATION_FILTER', filter }))
}));

// Mock the selector
jest.mock('../../selectors/notificationSelector', () => ({
  getUnreadNotificationsByType: jest.fn(state => state.notifications.get('notifications').valueSeq())
}));

const mockStore = configureStore([thunk]);

describe('NotificationsContainer', () => {
  let wrapper;
  let store;
  let fetchNotificationsMock;

  beforeEach(() => {
    fetchNotificationsMock = jest.fn();
    
    store = mockStore({
      notifications: Map({
        notifications: fromJS({
          1: { id: 1, value: 'New course available', type: 'default' },
          2: { id: 2, value: 'New resume available', type: 'urgent' }
        }),
        loading: false
      })
    });

    wrapper = shallow(
      <NotificationsContainer 
        fetchNotifications={fetchNotificationsMock}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call fetchNotifications when the component is mounted', () => {
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('should map state to props correctly', () => {
    const state = {
      notifications: Map({
        notifications: fromJS({
          1: { id: 1, value: 'Test notification', type: 'default' }
        }),
        loading: false
      })
    };

    const props = mapStateToProps(state);

    expect(props.listNotifications).toEqual(state.notifications.get('notifications').valueSeq());
    expect(props.loading).toEqual(false);
  });
});