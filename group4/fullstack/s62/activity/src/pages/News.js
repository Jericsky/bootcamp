import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import NewsCard from '../components/NewsCard';
import newsData from '../data/newsData';

export default function News() {
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isActive, setIsActive] = useState(false);

    // Check if a token exists in localStorage
    const isUserLoggedIn = localStorage.getItem("token") !== null;

    const news = newsData.map(news => {
        return (
            <NewsCard key={news.id} newsProp={news} />
        );
    });

    function sendFeedback(e) {
        e.preventDefault();

        setEmail("");
        setFeedback("");

        alert("Thank you for your feedback. We'll get back to you as soon as we can.");
    }

    useEffect(() => {
        if (email !== "" && feedback !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [email, feedback]);

    return (
        <>
            <h1>News</h1>
            {news}
            {isUserLoggedIn && (
                <Form onSubmit={(e) => sendFeedback(e)}>
                    <h1 className="my-5 text-center">Feedback</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            required
                            value={email}
                            onChange={e => { setEmail(e.target.value) }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Let us know what you think."
                            required
                            value={feedback}
                            onChange={e => { setFeedback(e.target.value) }}
                        />
                    </Form.Group>
                    {/* Conditionally render submit button based on isActive state */}
                    {isActive ?
                        <Button variant="primary" type="submit" id="feedbackBtn">
                            Send Feedback
                        </Button>
                        :
                        <Button variant="danger" type="submit" id="feedbackBtn" disabled>
                            Send Feedback
                        </Button>
                    }
                </Form>
            )}
        </>
    );
}