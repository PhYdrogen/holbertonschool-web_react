import { getListCourses } from './courseSelector';
import { Map, fromJS } from 'immutable';

describe('Course Selectors', () => {
  it('getListCourses returns a list of courses', () => {
    const state = {
      courses: Map({
        courses: Map({
          1: Map({ id: 1, name: 'ES6', credit: 60 }),
          2: Map({ id: 2, name: 'Webpack', credit: 20 }),
          3: Map({ id: 3, name: 'React', credit: 40 })
        })
      })
    };

    const expected = [
      Map({ id: 1, name: 'ES6', credit: 60 }),
      Map({ id: 2, name: 'Webpack', credit: 20 }),
      Map({ id: 3, name: 'React', credit: 40 })
    ];

    const result = getListCourses(state);
    expect(result.toJS()).toEqual(expected.map(item => item.toJS()));
  });
});