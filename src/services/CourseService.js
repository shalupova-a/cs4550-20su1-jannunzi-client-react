const createCourse = (course) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/ashalupova/courses", {
    method: 'POST',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const updateCourse = (courseId, course) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/ashalupova/courses/" + courseId, {
    method: 'PUT',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const deleteCourse = (courseId) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/ashalupova/courses/" + courseId, {
    method: 'DELETE'
  })
    .then(response => response.json())

const findCourseById = (courseId) => {}
const findAllCourses = () =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/ashalupova/courses")
    .then(response => response.json())

export default {
  createCourse,
  deleteCourse,
  findCourseById,
  findAllCourses,
  updateCourse
}
