import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.courseListTable)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
          />
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  )
}

// Define propTypes
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  courseListTable: {
    border: 'solid 1px rgb(227, 220, 220)',
    width: '90%',
    textAlign: 'left',
    marginTop: '30px',
    marginLeft: '5%',
    fontFamily: "'Times New Roman', Times, serif",
  },
});

export default CourseList;
