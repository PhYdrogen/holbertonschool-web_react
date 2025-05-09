import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
    isLoading
  };
};

export const setNotifications = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    
    return fetch('/notifications.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setNotifications(data));
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      })
      .finally(() => {
        dispatch(setLoadingState(false));
      });
  };
};