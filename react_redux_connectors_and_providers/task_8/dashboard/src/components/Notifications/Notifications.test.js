import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Map, fromJS } from 'immutable';
import Notifications, { mapStateToProps } from './Notifications';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../../selectors/notificationSelector';
import { NotificationTypeFilters } from '../../actions/notificationActionTypes';

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

describe('Notifications Component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
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
      <Notifications 
        displayDrawer={true}
        hideDrawer={() => {}}
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
    const fetchNotificationsMock = jest.fn();

    mount(
      <Provider store={store}>
        <Notifications 
          displayDrawer={true}
          hideDrawer={() => {}}
          fetchNotifications={fetchNotificationsMock}
        />
      </Provider>
    );

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

    expect(props.listNotifications).toEqual(getUnreadNotificationsByType(state));
    expect(props.loading).toEqual(false);
  });

  it('should call setNotificationFilter with URGENT when clicking on the first button', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={fromJS([{ id: 1, value: 'Test notification', type: 'default' }])}
      />
    );

    const urgentButton = wrapper.find('button').at(0);
    urgentButton.simulate('click');

    expect(setNotificationFilter).toHaveBeenCalledWith(NotificationTypeFilters.URGENT);
  });

  it('should call setNotificationFilter with DEFAULT when clicking on the second button', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={fromJS([{ id: 1, value: 'Test notification', type: 'default' }])}
      />
    );

    const defaultButton = wrapper.find('button').at(1);
    defaultButton.simulate('click');

    expect(setNotificationFilter).toHaveBeenCalledWith(NotificationTypeFilters.DEFAULT);
  });
});
