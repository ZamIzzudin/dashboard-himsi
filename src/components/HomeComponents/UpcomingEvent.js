import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const UpcomingEvent = () => {

    return (
        <>
            <Form>

                <Row className="mb-3 mx-3">
                    <Col xs={7}>
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Masukan judul.." />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group as={Col} controlId="formGridCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select defaultValue="Pilih..">
                                <option value="1">Satu</option>
                                <option value="2">Dua</option>
                                <option value="3">Tiga</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-5 mx-3">
                    <Col>
                        <Form.Group as={Col} controlId="formGridBody">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Deksripsi event.." rows={3} />
                        </Form.Group>
                    </Col>
                </Row>

                <Col className="d-flex justify-content-center mx-3 p-3">
                    <Button variant="primary" type="submit">
                        Submit Event
                    </Button>
                </Col>

            </Form>
        </>
    )
}

export default UpcomingEvent;