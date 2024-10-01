import { Button, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Navigate } from 'react-router-dom';

export default function AddCourse() {

  const notyf = new Notyf();

  const { user, setUser } = useContext(UserContext);

  const [name, setCourseName] = useState('');
  const [description, setCourseDesc] = useState('');
  const [price, setCoursePrice] = useState(0);

  const [isActive, setIsActive] = useState()

  function addCourse(e) {
    e.preventDefault();

    const token = localStorage.getItem('token'); 

    if (!token) {
      notyf.error('Authentication failed. No token found.');
      return;
    }

    fetch('http://localhost:4000/courses', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      if (data.message === 'Course added succesfully.') {
        setCourseName('');
        setCourseDesc('');
        setCoursePrice(0);

        notyf.success('Course Added');
      } else if(data.message === "Course already exists."){
        setCourseName('');
        setCourseDesc('');
        setCoursePrice(0);

        notyf.error('Course already exists')
      } else if (data.message === 'Failed to save the course'){
        setCourseName('');
        setCourseDesc('');
        setCoursePrice(0);

        notyf.error('Unsuccessful Course Creation')
      } else if(data.access !== undefined){
          console.log(data.access);

          localStorage.setItem('token', data.access);
          retrieveUserDetails(data.access);
      } else if (data.error) {
        notyf.error(data.error);
      }
    })
    .catch((err) => {
      console.error('Error:', err);
      notyf.error('Failed to add course. Please try again.');
    });
  }

  useEffect(()=> {
    if(name !== '' && description !=='' && price !==0){
      setIsActive(true);
    } else {
      setIsActive(false)
    }
  })

  function retrieveUserDetails(token){
    fetch('http://localhost:4000/users/details', {
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            });
        })
    };

  return (

    (user.isAdmin !== true) ?
      <Navigate to='/courses'/>
      :

    <Form onSubmit={(e) => addCourse(e)}>
      <h1 className='my-5 text-center'>Add Course</h1>

      <Form.Group className="mb-3" controlId="course-name">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          required 
          value={name} 
          onChange={e => {setCourseName(e.target.value)}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description-textarea">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          required 
          value={description} 
          onChange={e => {setCourseDesc(e.target.value)}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="course-price">
        <Form.Label>Price</Form.Label>
        <Form.Control 
          type="number" 
          required
          value={price}
          onChange={e => {setCoursePrice(e.target.value)}}
        />
      </Form.Group>
      { isActive ?
        <Button type='submit'>Submit</Button>
        :
        <Button type='submit' variant='danger' disabled>Submit</Button>
      }
      
    </Form>
  );
}
