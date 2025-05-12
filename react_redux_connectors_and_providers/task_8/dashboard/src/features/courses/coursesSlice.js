import { Map } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE } from '../../actions/courseActionCreators';

// Action Types
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';
export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';

// Initial State
const initialState = Map({
  courses: Map(),
  loading: false,
  error: null
});

// Reducer
export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return state.set('loading', true);

    case FETCH_COURSES_SUCCESS:
      return state.merge({
        courses: Map(action.data),
        loading: false,
        error: null
      });

    case FETCH_COURSES_FAILURE:
      return state.merge({
        loading: false,
        error: action.error
      });

    case SELECT_COURSE:
      return state.setIn(['courses', action.id, 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', action.id, 'isSelected'], false);

    default:
      return state;
  }
}

// Action Creators
export const fetchCoursesSuccess = (data) => ({
  type: FETCH_COURSES_SUCCESS,
  data
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  error
});

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST
});

// Thunk Action Creator
export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest());

    return fetch('/courses.json')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchCoursesSuccess(data));
      })
      .catch(error => {
        dispatch(fetchCoursesFailure(error));
      });
  };
};
