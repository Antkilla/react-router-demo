import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Courses = ({ courseList }) => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul className="list-unstyled">
        {courseList.map(course => (
          <li key={course.id}>
            <Link to={`${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
}

export default Courses;