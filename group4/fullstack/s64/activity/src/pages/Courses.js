import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';

export default function Courses() {

	const [courses, setCourses] = useState([]);
	
	useEffect(() => {
		fetch("http://localhost:4000/courses/")
		.then(res => res.json())
		.then(data => {

			console.log(data)

			setCourses(data.map(course => {
				return (
						<CourseCard key={course._id} courseProp={course}/>
					)
			}))
		})
	}, [])


	return (
		<>
		<h1>Courses</h1>
		{courses}
		</>
	)
}