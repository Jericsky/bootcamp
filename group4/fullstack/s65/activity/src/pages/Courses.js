import { useState, useEffect, useContext } from 'react';
import CourseCard from '../components/CourseCard';
import UserContext from '../context/UserContext'
import AdminView from '../components/AdminView'

export default function Courses() {

	const {user} = useContext(UserContext);

	const [courses, setCourses] = useState([]);
	
	useEffect(() => {
		fetch("http://localhost:4000/courses/")
		.then(res => res.json())
		.then(data => {

			console.log(data)

			setCourses(data);
		})
		.catch(err => console.error('Error fetching courses:', err));
	}, [])


	return (
		<>
		<h1>Courses</h1>
		{user && user.isAdmin? 
			<AdminView coursesData={courses}/>
			:
			<div>
				{courses.map(course => (
						<CourseCard key={course._id} courseProp={course} />
				))}
			</div>
		}
		</>
	)
}