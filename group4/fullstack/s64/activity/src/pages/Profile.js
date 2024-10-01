import { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import UserContext from '../context/UserContext';

export default function Profile(){

    const notfy = new Notyf();

    const { user } = useContext(UserContext);

    const [details,setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/users/details`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // Set the user states values with the user details upon successful login.
            if (typeof data !== undefined) {

                setDetails(data);

            } else if (data.error === "User not found") {

                notfy.error("User not found.")

            } else {

                notfy.error("Something went wrong. Contact your System Admin")

            }
        });
    }, [])

    return (
        (user.id === null) ?
            <Navigate to="/courses" />
            :
            <Container className="mt-5 p-5 bg-primary text-white">
                <h1 className="mb-5 ">Profile</h1>
                <h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
                <hr />
                <h4>Contacts</h4>
                <ul>
                    <li>Email: {details.email}</li>
                    <li>Mobile No: {details.mobileNo}</li>
                </ul>
            </Container>
    )

}