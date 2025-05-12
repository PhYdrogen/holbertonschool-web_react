import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notificationSelector', () => {
  it('should return unread notifications when filter is DEFAULT', () => {
    const state = {
      notifications: fromJS({
        filter: NotificationTypeFilters.DEFAULT,
        notifications: {
          1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
          2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
          3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
        }
      })
    };

    const expected = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ];

    const result = getUnreadNotificationsByType(state).toJS();
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toEqual(expected.length);
  });

  it('should return unread urgent notifications when filter is URGENT', () => {
    const state = {
      notifications: fromJS({
        filter: NotificationTypeFilters.URGENT,
        notifications: {
          1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
          2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
          3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
        }
      })
    };

    const expected = [
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ];

    const result = getUnreadNotificationsByType(state).toJS();
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toEqual(expected.length);
  });
});