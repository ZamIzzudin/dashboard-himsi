import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreateFAQ, AsyncEditFAQ } from '../../state/faq/middleware'

export default function FormAddFAQ({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [question, setQuestion] = useState(currentData?.pertanyaan)
    const [answer, setAnswer] = useState(currentData?.jawaban)

    function handleManageFAQ(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditFAQ({
                _id: currentData._id,
                pertanyaan: question,
                jawaban: answer
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreateFAQ({
                pertanyaan: question,
                jawaban: answer
            }))
            showForm(false)
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