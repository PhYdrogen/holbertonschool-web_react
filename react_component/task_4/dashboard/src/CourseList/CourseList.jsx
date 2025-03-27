import React from "react"; // Import React
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import "./CourseList.css";
import WithLogging from "../HOC/WithLogging"; // Import the HOC

function CourseList({ courses = [] }) { // Keep the original function component
    return (
        <div className="courses">
            {courses.length > 0
                ? (
                    <table id="CourseList">
                        <thead>
                            <CourseListRow
                                textFirstCell="Available courses"
                                isHeader={true}
                            />
                            <CourseListRow
                                textFirstCell="Course name"
                                textSecondCell="Credit"
                                isHeader={true}
                            />
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <CourseListRow
                                    key={course.id}
                                    textFirstCell={course.name}
                                    textSecondCell={course.credit}
                                />
                            ))}
                        </tbody>
                    </table>
                )
                : (
                    <table id="CourseList">
                        <thead>
                            <CourseListRow
                                isHeader={true}
                                textFirstCell="No course available yet"
                            />
                        </thead>
                    </table>
                )}
        </div>
    );
}

CourseList.propTypes = { // Assign propTypes to the original component
    courses: PropTypes.array.isRequired,
};

// Wrap the CourseList component with the HOC before exporting
const CourseListWithLogging = WithLogging(CourseList);

export default CourseListWithLogging;
