import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

import api from '../utils/api'
import '../styles/pages/Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    async function handleLogin(e) {
        e.preventDefault()
        await api.Login(email, pass)

        window.location.reload()
    }

    return (
        <main className="login-page">
            <h2>Login</h2>
            <Form onSubmit={(e) => handleLogin(e)}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} type="password" required />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </main>
    )
}