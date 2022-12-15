import { Modal, Form, Col, Row, Button } from 'react-bootstrap'
import { useState } from 'react'

export default function FormAddFAQ({ showAddModal, setShowAddModal, getData }) {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    function handleAddFAQ(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            question,
            answer
        })

        setAnswer('')
        setQuestion('')
    }

    return (
        <Modal
            size="lg"
            centered
            show={showAddModal}
            onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add New FAQ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleAddFAQ(e)}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Question</Form.Label>
                                <Form.Control required value={question} onChange={(e) => setQuestion(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Answer</Form.Label>
                                <Form.Control required value={answer} onChange={(e) => setAnswer(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Add</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}