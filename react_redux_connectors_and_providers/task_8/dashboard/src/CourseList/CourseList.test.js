import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fromJS, Map } from 'immutable';
import { CourseList, mapStateToProps } from './CourseList';

// Mock the action creators
jest.mock('../actions/courseActionCreators', () => ({
  fetchCourses: jest.fn(() => ({ type: 'FETCH_COURSES' })),
  selectCourse: jest.fn(id => ({ type: 'SELECT_COURSE', id })),
  unSelectCourse: jest.fn(id => ({ type: 'UNSELECT_COURSE', id }))
}));

// Import the mocked action creators
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

describe('CourseList', () => {
  let wrapper;
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  beforeEach(() => {
    // Reset mock function calls
    fetchCourses.mockClear();
    selectCourse.mockClear();
    unSelectCourse.mockClear();
  });

  it('renders CourseList component without crashing', () => {
    wrapper = shallow(
      <CourseList 
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    wrapper = shallow(
      <CourseList 
        listCourses={listCourses}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });

  it('dispatches fetchCourses when the component is mounted', () => {
    wrapper = shallow(
      <CourseList 
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    expect(fetchCourses).toHaveBeenCalled();
  });

  it('dispatches selectCourse and unSelectCourse when onChangeRow is called', () => {
    wrapper = shallow(
      <CourseList 
        listCourses={listCourses}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    
    // Get the onChangeRow function from the first course row
    const onChangeRow = wrapper.find('CourseListRow').at(2).prop('onChangeRow');
    
    // Call onChangeRow with id=1 and checked=true
    onChangeRow(1, true);
    expect(selectCourse).toHaveBeenCalledWith(1);
    
    // Call onChangeRow with id=1 and checked=false
    onChangeRow(1, false);
    expect(unSelectCourse).toHaveBeenCalledWith(1);
  });

  it('correctly maps state to props', () => {
    const state = {
      courses: Map({
        courses: Map({
          1: Map({ id: 1, name: 'ES6', credit: 60 }),
          2: Map({ id: 2, name: 'Webpack', credit: 20 }),
          3: Map({ id: 3, name: 'React', credit: 40 })
        })
      })
    };
    
    const props = mapStateToProps(state);
    expect(props.listCourses).toEqual([
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]);
  });
});