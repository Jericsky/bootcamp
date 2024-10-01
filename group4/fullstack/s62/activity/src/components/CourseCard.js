import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

export default function CourseCard({courseProp}) {

    console.log(courseProp);

    const {name, description, price} = courseProp;

    //State hook
    /*
        Syntax:
        const [getter, setter] = useState(initialGetterValue);
    */

    const [count, setCount] = useState(0);
    console.log(useState(0));

    const [slots, setSlots] = useState(10);

    function enroll(){
        if (slots > 0) {
            setCount(count + 1);
            console.log('Enrollees: ' + count);
            setSlots(slots - 1);
            console.log('Seats: ' + slots)
        } else {
            alert("No more slots available");
        }
    }

    

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
                <Card.Subtitle>Enrollees:</Card.Subtitle>
                <Card.Text>{count}</Card.Text>
                <Card.Subtitle>Available Slots:</Card.Subtitle>
                <Card.Text>{slots}</Card.Text>
                <Button variant="primary" onClick={enroll}>Enroll</Button>
            </Card.Body>
        </Card>
    )
}

//Validations
CourseCard.propTypes = {
        courseProp: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    }