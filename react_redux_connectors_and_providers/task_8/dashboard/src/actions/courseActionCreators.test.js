import { selectCourse, unSelectCourse, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionCreators';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Action Creators', () => {
  describe('selectCourse', () => {
    it('returns the correct action', () => {
      const expectedAction = {
        type: SELECT_COURSE,
        id: '1'
      };
      expect(selectCourse('1')).toEqual(expectedAction);
    });
  });

  describe('unSelectCourse', () => {
    it('returns the correct action', () => {
      const expectedAction = {
        type: UNSELECT_COURSE,
        id: '1'
      };
      expect(unSelectCourse('1')).toEqual(expectedAction);
    });
  });

  describe('fetchCourses', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('dispatches FETCH_COURSES_SUCCESS when fetching courses has been done', () => {
      const courses = {
        '1': { id: 1, name: 'ES6', credit: 60 },
        '2': { id: 2, name: 'Webpack', credit: 20 },
        '3': { id: 3, name: 'React', credit: 40 }
      };

      fetchMock.getOnce('/courses.json', {
        body: courses,
        headers: { 'content-type': 'application/json' }
      });

      const expectedActions = [
        { type: 'FETCH_COURSES_REQUEST' },
        { type: 'FETCH_COURSES_SUCCESS', data: courses }
      ];

      const store = mockStore({});

      return store.dispatch(fetchCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});