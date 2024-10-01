// member 1 and 2

import {Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react'


export default function Feedback() {

    const [ email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(email !== "" && feedback !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    })

    function sendFeedback(event){
        event.preventDefault();

        fetch('http://localhost:4000/feedback', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                feedback: feedback
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            setEmail('');
            setFeedback('');

            alert("Thank you for your feedback. We'll get to you as soon as we can.")
        })
    }

  return (
    <Form onSubmit={e => sendFeedback (e)}>
        <h1 className='my-5 text-center'>Feedback</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                value={email}
                onChange={e => {setEmail(e.target.value)}}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Feedback</Form.Label>
            <Form.Control 
                as="textarea" 
                rows={3} 
                value={feedback}
                onChange={e => {setFeedback(e.target.value)}}
            />
        </Form.Group>
        { isActive ?
            <Button variant="primary" type="submit" id="submitBtn">Submit</Button>
            :
            <Button variant="danger" type="submit" id="submitBtnDisable" disabled>Submit</Button>
        }
    </Form>
  );
}

