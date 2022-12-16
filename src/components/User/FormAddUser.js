import { Form } from 'react-bootstrap'
import { useState } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormAddUser({ getData }) {
    const [name, setName] = useState('')
    const [role, setRole] = useState('Super Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleAdd(e) {
        e.preventDefault()

        const id = Math.floor(Math.random() * 1001)
        getData({
            id,
            name,
            role,
            email,
            password
        })
    }

    return (
        <Form onSubmit={(e) => handleAdd(e)}>
            <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Select value={role}>onChange={(e) => setRole(e.target.value)}
                    <option value="Super Admin">Super Admin</option>
                    <option value="Admin">Admin</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}