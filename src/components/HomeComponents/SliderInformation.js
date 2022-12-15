import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const SliderInformation = () => {
    return(
        <>
            <Form>
                <Row className="mb-3 mx-3">
                    <Col>
                        <Form.Group as={Col} controlId="sliderTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Masukan judul.." />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group as={Col} controlId="sliderPicture">
                            <Form.Label>Picture</Form.Label>
                            <Form.Control type="file" placeholder="Masukan Gambar.." />
                        </Form.Group>
                    </Col>
                </Row>
                <Col className="d-flex justify-content-center mx-3 p-3">
                    <Button variant="primary" type="submit">
                        See Article
                    </Button>
                </Col>
            </Form>
        </>
    )
}

export default SliderInformation;