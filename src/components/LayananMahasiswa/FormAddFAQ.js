import { Form } from 'react-bootstrap'
import { useState } from 'react'

export default function FormAddFAQ({ addData, editData, currentData }) {
    const [question, setQuestion] = useState(currentData?.question)
    const [answer, setAnswer] = useState(currentData?.answer)

    function handleManageFAQ(e) {
        e.preventDefault()
        if (currentData !== null) {
            editData({
                id: currentData.id,
                question,
                answer
            })
        } else {
            const id = Math.floor(Math.random() * 1001)

            addData({
                id,
                question,
                answer
            })
        }
    }

    return (
        <Form onSubmit={(e) => handleManageFAQ(e)}>
            <Form.Group>
                <Form.Label>Question</Form.Label>
                <Form.Control required value={question} onChange={(e) => setQuestion(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Answer</Form.Label>
                <Form.Control required value={answer} onChange={(e) => setAnswer(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}