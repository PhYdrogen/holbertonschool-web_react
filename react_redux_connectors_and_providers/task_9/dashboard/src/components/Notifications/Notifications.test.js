import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import Notifications from './Notifications';
import { NotificationTypeFilters } from '../../actions/notificationActionTypes';

// Mock the action creators
jest.mock('../../actions/notificationActionCreators', () => ({
  setNotificationFilter: jest.fn(filter => ({ type: 'TEST_SET_NOTIFICATION_FILTER', filter }))
}));

describe('Notifications Component', () => {
  let wrapper;
  let mockMarkNotificationAsRead;
  let mockSetNotificationFilter;

  beforeEach(() => {
    mockMarkNotificationAsRead = jest.fn();
    mockSetNotificationFilter = jest.fn();

    wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        hideDrawer={() => {}}
        listNotifications={fromJS([{ id: 1, value: 'Test notification', type: 'default' }])}
        markNotificationAsRead={mockMarkNotificationAsRead}
        setNotificationFilter={mockSetNotificationFilter}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should display the menu item when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('should display the notifications when displayDrawer is true', () => {
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });

  it('should display the text "Here is the list of notifications" when there are notifications', () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('should display "No new notifications for now" when there are no notifications', () => {
    wrapper.setProps({ listNotifications: fromJS([]) });
    expect(wrapper.contains(<p>No new notifications for now</p>)).toBe(true);
  });

  it('should call markNotificationAsRead when a notification is clicked', () => {
    const notification = wrapper.find('li').first();
    notification.simulate('click');
    expect(mockMarkNotificationAsRead).toHaveBeenCalledWith(1);
  });

  it('should call setNotificationFilter with URGENT when clicking on the first button', () => {
    const urgentButton = wrapper.find('button').at(0);
    urgentButton.simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith(NotificationTypeFilters.URGENT);
  });

  it('should call setNotificationFilter with DEFAULT when clicking on the second button', () => {
    const defaultButton = wrapper.find('button').at(1);
    defaultButton.simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith(NotificationTypeFilters.DEFAULT);
  });
});
