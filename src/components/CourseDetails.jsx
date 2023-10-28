import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = ({ courseList }) => {
    
    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = courseList.filter(course => course.id == courseId)[0]
   

    const handleEnroll = () => {
      alert(`Congrats! You are enrolled in ${course.name}!`);
      navigate("/courses");
    }


    return (
    <div>
        <h3>Course Details</h3>

        <h4>Course ID: {course.id}</h4>
        <h4>Course Name: {course.name}</h4>
        <h4>Course Description: {course.description}</h4>
    
        <button onClick={handleEnroll}>Enroll</button>
    
    </div>
  )
}

export default CourseDetails;