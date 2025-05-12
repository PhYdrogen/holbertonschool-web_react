import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actions/uiActionTypes';

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
};

export const login = (email, password) => {
  return {
    type: LOGIN_SUCCESS,
    user: { email, password }
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return Promise.resolve();
  };
};