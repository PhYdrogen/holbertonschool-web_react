export const getListCourses = (state) => {
  const courses = state.courses.get('courses');
  return courses.valueSeq();
};