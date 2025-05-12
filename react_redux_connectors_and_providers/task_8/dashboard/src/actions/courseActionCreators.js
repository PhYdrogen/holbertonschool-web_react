import { fetchCourses as fetchCoursesFromSlice } from '../features/courses/coursesSlice';

// Action Types
export const SELECT_COURSE = 'SELECT_COURSE';
export const UNSELECT_COURSE = 'UNSELECT_COURSE';

// Action Creators
export const selectCourse = (id) => ({
  type: SELECT_COURSE,
  id
});

export const unSelectCourse = (id) => ({
  type: UNSELECT_COURSE,
  id
});

// Thunk Action Creator
export const fetchCourses = () => {
  return fetchCoursesFromSlice();
};