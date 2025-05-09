import { APP_ACTIONS } from './appReducer';

export const displayNotificationDrawer = () => ({
  type: APP_ACTIONS.TOGGLE_DRAWER,
  payload: { display: true }
});

export const hideNotificationDrawer = () => ({
  type: APP_ACTIONS.TOGGLE_DRAWER,
  payload: { display: false }
});

export const login = (email, password) => ({
  type: APP_ACTIONS.LOGIN,
  payload: { email, password }
});

export const logout = () => ({
  type: APP_ACTIONS.LOGOUT
});

// Async action creator using redux-thunk
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    // Simulate API call
    try {
      // In a real app, this would be an API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: 200, user: { email, password } });
        }, 500);
      });

      if (response.status === 200) {
        dispatch(login(email, password));
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
};
