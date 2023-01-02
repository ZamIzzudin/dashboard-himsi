import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { AsyncCreateUser, AsyncEditUser } from '../../state/user/middleware'

import '../../styles/components/FormLayout.css'

export default function FormAddUser({ showForm, currentData }) {
    const dispatch = useDispatch()

    const [nama, setName] = useState(currentData?.nama)
    const [role, setRole] = useState(currentData?.role || 'Super Admin')
    const [username, setUsername] = useState(currentData?.username)
    const [password, setPassword] = useState(currentData?.password)

    function handleAdd(e) {
        e.preventDefault()
        // // checking ? action with current data
        if (currentData !== null) {
            // handle edit user
            dispatch(AsyncEditUser({
                _id: currentData._id,
                nama,
                role,
                username,
                password
            }))
            showForm(false)
        } else {
            // handle add user
            dispatch(AsyncCreateUser({
                nama,
                role,
                username,
                password
            }))
            showForm(false)
        }
    }

    return (
        <Form onSubmit={(e) => handleAdd(e)}>
            <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control value={nama} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="super admin">Super Admin</option>
                    <option value="admin">Admin</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} />
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