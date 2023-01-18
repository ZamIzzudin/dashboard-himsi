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
        // checking ? action with current data
        if (currentData !== null) {
            // handle edit FAQ 
            dispatch(AsyncEditFAQ({
                _id: currentData._id,
                pertanyaan: question,
                jawaban: answer
            }))
            showForm(false)
        } else {
            // handle add FAQ
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
                <Form.Label>Question <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Pertanyaan' required value={question} onChange={(e) => setQuestion(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Answer <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Jawaban' required value={answer} onChange={(e) => setAnswer(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button onClick={() => showForm(false)} className="form-cancel-button" type="button">Cancel</button>
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}