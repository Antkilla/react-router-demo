import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = ({ courseList }) => {
    
    const { courseId } = useParams();
    const course = courseList.filter(course => course.id == courseId)[0]
   
    return (
    <div>
        <h3>Course Details</h3>

        <h4>Course ID: {course.id}</h4>
        <h4>Course Name: {course.name}</h4>
        <h4>Course Description: {course.description}</h4>
    </div>
  )
}

export default CourseDetails;