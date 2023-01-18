import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { AsyncCreateUser, AsyncEditUser } from '../../state/user/middleware'

import '../../styles/components/FormLayout.css'

export default function FormAddUser({ showForm, currentData }) {
    const dispatch = useDispatch()

    const [nama_admin, setName] = useState(currentData?.nama_admin)
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
                nama_admin,
                role,
                username,
                password
            }))
            showForm(false)
        } else {
            // handle add user
            dispatch(AsyncCreateUser({
                nama_admin,
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
                <Form.Label>Nama <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Nama User' value={nama_admin} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Role <span className="required">*</span></Form.Label>
                <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="super admin">Super Admin</option>
                    <option value="admin">Admin</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Username <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Username Untuk Login' value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button onClick={() => showForm(false)} className="form-cancel-button" type="button">Cancel</button>
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}