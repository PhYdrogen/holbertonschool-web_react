import { createSelector } from 'reselect';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

const getNotifications = (state) => state.notifications.get('notifications');
const getFilter = (state) => state.notifications.get('filter');

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    const unreadNotifications = notifications.filter(notification => !notification.get('isRead'));

    if (filter === NotificationTypeFilters.URGENT) {
      return unreadNotifications.filter(notification => notification.get('type') === 'urgent').valueSeq();
    }

    return unreadNotifications.valueSeq();
  }
);
