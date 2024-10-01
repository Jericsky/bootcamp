import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (email !== "" && password !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [email, password]);

    // authenticate function
    function authenticate(e) {
        e.preventDefault();

        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, // Accessing state variable email
                password: password // Accessing state variable password
            })
        })
        .then(res => res.json())
        .then(data => {
            // Check if the data returned is a token
            if (data.token) {
                alert("Thank you for logging in.");
                console.log("Token:", data.token);

                // Reset input states to their initial values
                setEmail(""); // Accessing state updater function setEmail
                setPassword(""); // Accessing state updater function setPassword

            } else if (data.message === "Incorrect email or password") {
                alert("Incorrect email or password.");
            } else if (data.message === "Email does not exist") {
                alert("Email does not exist.");
            } else {
                alert("Something went wrong. Please try again.");
            }
        });
    }

    return (
        <Form className='mt-3' onSubmit={authenticate}>
            <h1 className="my-5 text-center">Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}    
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            {isActive ?
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                :
                <Button variant="danger" type="submit" id="submitBtn" disabled>
                    Submit
                </Button>
            }
        </Form>
    );
}