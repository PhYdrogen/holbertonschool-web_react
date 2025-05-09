import { APP_ACTIONS } from './appReducer';

export const displayNotificationDrawer = () => ({
  type: APP_ACTIONS.TOGGLE_DRAWER,
  payload: { display: true }
});

export const hideNotificationDrawer = () => ({
  type: APP_ACTIONS.TOGGLE_DRAWER,
  payload: { display: false }
});