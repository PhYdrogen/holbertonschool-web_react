export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get('notifications');
  return notifications.filter(notification => !notification.get('isRead')).valueSeq();
};