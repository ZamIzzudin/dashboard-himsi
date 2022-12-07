import BackButton from '../components/BackButton'
import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

export default function FAQ() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const plainData = [
    {
      id: 1,
      question: 'ban apa yang menguasai negara?',
      answer: 'banteng mer....'
    },
    {
      id: 2,
      question: 'nilai satuan apa yang lebih berkuasa daripada presiden?',
      answer: 'megawat....'
    }
  ]

  const [listFAQ, setListFAQ] = useState(plainData)

  function handleAddFAQ(e) {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1001)

    const newFAQ = {
      id, question, answer
    }

    setListFAQ([...listFAQ, newFAQ])
    setQuestion('')
    setAnswer('')
  }

  function handleDeleteFAQ(id) {
    const newData = listFAQ.filter(FAQ => FAQ.id !== id)
    setListFAQ(newData)
  }
  return (
    <main>
      <BackButton />
      <h2>FAQ</h2>
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

      <section>
        {listFAQ.map(FAQ => (
          <div className="display-card-form-cta" key={`list ${FAQ.id}`}>
            <span><b>{FAQ.question}</b></span>
            <span>{FAQ.answer}</span>
            <button className="delete-btn card-form-cta" onClick={() => handleDeleteFAQ(FAQ.id)}>delete</button>
          </div>
        ))}
      </section>
    </main>
  );
}
