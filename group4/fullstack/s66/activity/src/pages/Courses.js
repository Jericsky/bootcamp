import { useState, useEffect, useContext } from 'react';
import AdminView from '../components/AdminView';
import CourseCard from '../components/CourseCard';
import UserView from '../components/UserView';
import UserContext from '../context/UserContext';

export default function Courses() {

    const {user} = useContext(UserContext);


    const [courses, setCourses] = useState([]);

    const fetchData = () => {

        let fetchUrl = user.isAdmin === true ? 
            'http://localhost:4000/courses/all'
            :
            'http://localhost:4000/courses/'

        fetch(fetchUrl, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })    
        .then(res => res.json())
        .then(data => {
            setCourses(data)
        })
    }


    useEffect(() => {

        fetchData()

    }, [user]);

    return(
        (user.isAdmin === true)
        ?
            <AdminView coursesData={courses} fetchData={fetchData}/>
        :
            <UserView coursesData={courses} />
    )
}