import { Form } from 'react-bootstrap'
import { useState } from 'react'

export default function FormAddFAQ({ getData }) {
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
    }

    return (
        <Form onSubmit={(e) => handleAddFAQ(e)}>
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