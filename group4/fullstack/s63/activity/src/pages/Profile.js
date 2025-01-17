import { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import UserContext from '../context/UserContext';

export default function Profile() {

    const { user } = useContext(UserContext);

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/users/details`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data && !data.error) {
               
                setDetails(data);
            } else if (data.error === "User not found") {
               
                alert("User not found.");
            } else {
               
                alert("Something went wrong, kindly contact us for assistance.");
            }
        })
        .catch(error => {
            
            console.error('Error fetching user details:', error);
            alert("Something went wrong, kindly contact us for assistance.");
        });
    }, []);

    
    return (
        !user || !user.id ? (
            <Navigate to="/courses" />
        ) : (
            <Container className="mt-5 p-5 bg-primary text-white">
                <h1 className="mb-5">Profile</h1>
                <h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
                <hr />
                <h4>Contacts</h4>
                <ul>
                    <li>Email: {details.email}</li>
                    <li>Mobile No: {details.mobileNo}</li>
                </ul>
            </Container>
        )
    );
}
