import { Form, Button } from 'react-bootstrap'
import '../styles/pages/Login.css'

export default function Login() {

    function handleLogin(e) {
        e.preventDefault()
        const userData = {
            name: 'HIMSI',
            role: 'super admin',
            token: 'ajajajjajajajaj'
        }

        localStorage.clear()
        localStorage.setItem('user', JSON.stringify(userData))
        window.location.reload()
    }

    return (
        <main className="login-page">
            <h2>Login</h2>
            <Form onSubmit={(e) => handleLogin(e)}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </main>
    )
}