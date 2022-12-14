import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


const BidangDivisi = () => {
  return (
    <>
      <Form>
        <Row className="mb-3 mx-3">
          <Col xs={5}>
            <Form.Group as={Col} controlId="bidang">
              <Form.Label>Nama Bidang</Form.Label>
              <Form.Control type="text" placeholder="Masukan nama bidang.." />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group as={Col} controlId="divisi">
              <Form.Label>Divisi</Form.Label>
              <Form.Select defaultValue="Pilih..">
                <option value="1">Satu</option>
                <option value="2">Dua</option>
                <option value="3">Tiga</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" placeholder="input logo.." />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-5 mx-3">
          <Col>
            <Form.Group as={Col} controlId="formGridBody">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Deksripsi event.."
                rows={3}
              />
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
  );
};

export default BidangDivisi;
