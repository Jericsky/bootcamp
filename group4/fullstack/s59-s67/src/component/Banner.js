import { Row, Col, Card } from 'react-bootstrap';

export default function Banner() {
    return (
        <Row className="mt-3 mb-3">
            <Col xs={12} md={12}>
                <Card className="cardHighlight p-3">
                    <Card.Body>
                        <Card.Title>
                            <h2>Welcome to Our Platform</h2>
                        </Card.Title>
                        <Card.Text>
                            Discover a variety of courses tailored to help you succeed. Join our community and start learning today!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
