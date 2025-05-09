import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import courseReducer from '../features/courses/coursesSlice';
import notificationReducer from '../features/notifications/notificationsSlice';

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer
});

export default rootReducer;