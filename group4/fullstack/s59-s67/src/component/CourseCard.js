import {Row,Col,Card,Button} from 'react-bootstrap';

export default function CourseCard () {
	return (
		<Row className="mt-3 mb-3">
	<Col xs={12} md={12}>
	                <Card className="cardHighlight p-3">
	                    <Card.Body>
	                        <Card.Title>
	                            <h3>Course Name</h3>
	                        	</Card.Title>
	                        	<Card.Text >
	                        	<p><strong>Description</strong></p>
	                        	<p>This is a sample course offering</p>
	                        	<p><strong>Price:</strong></p>
	         					<p>PHP 40,000</p>
	                            </Card.Text>
	                    </Card.Body>
	                    <Button style={{ width: '5rem' }}variant="primary">Enroll</Button>
	                </Card>
	            </Col>
		</Row>

	)
}