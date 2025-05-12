import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { getListCourses } from '../selectors/courseSelector';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import './CourseList.css';

export function CourseList({ fetchCourses, listCourses, selectCourse, unSelectCourse }) {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  };

  return (
    <div className="CourseList">
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" />
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isChecked={course.isSelected}
                onChangeRow={onChangeRow}
                id={course.id}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  fetchCourses: PropTypes.func.isRequired,
  listCourses: PropTypes.array,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired
};

CourseList.defaultProps = {
  listCourses: []
};

export const mapStateToProps = (state) => {
  return {
    listCourses: getListCourses(state).toJS()
  };
};

export const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);