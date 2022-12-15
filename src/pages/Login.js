import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

import ErrorMsg from '../components/ErrorMsg'
import HIMSILogo from '../assets/HIMSI_LOGO.png'
import api from '../utils/api'
import { Ring } from '@uiball/loaders'

import '../styles/pages/Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [onLoad, setOnLoad] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    async function handleLogin(e) {
        e.preventDefault()
        setOnLoad(true)
        try {
            await api.Login(email, pass)
            setOnLoad(false)
            window.location.reload()
        } catch (err) {
            setErrorMsg(true)
            setOnLoad(false)
        }
    }

    return (
        <main className="login-page">
            <section className="login-card">
                <img src={HIMSILogo} width="120px" height="auto" alt="Logo HIMSI" />
                <h2 className="login-title">Login Admin</h2>
                <Form className="login-form" onSubmit={(e) => handleLogin(e)}>
                    {errorMsg && (
                        <ErrorMsg title="Cannot Login" />
                    )}
                    <Form.Group>
                        <Form.Control placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" required />
                    </Form.Group>
                    <Row>
                        <Col className="cta-container">
                            <button type="submit" className="login-btn">
                                {onLoad ? (
                                    <Ring
                                        size={40}
                                        lineWeight={5}
                                        speed={2}
                                        color="white"
                                    />
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </Col>
                    </Row>
                </Form>
            </section>
        </main>
    )
}