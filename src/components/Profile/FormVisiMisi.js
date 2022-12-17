import { Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormVisiMisi() {
    const [visi, setVisi] = useState('')
    const [misi, setMisi] = useState('')
    const [listVisi, setListVisi] = useState([])
    const [listMisi, setListMisi] = useState([])

    function editVisiMisi() {
        const data = {
            visi: listVisi,
            misi: listMisi
        }
        console.log(data)
        setListVisi([])
        setListMisi([])
    }

    function addVisi() {
        setListVisi([...listVisi, visi])
        setVisi('')
    }

    function addMisi() {
        setListMisi([...listMisi, misi])
        setMisi('')
    }

    function deleteVisi(item) {
        const newData = listVisi.filter((list) => list !== item)
        setListVisi(newData)
    }

    function deleteMisi(item) {
        const newData = listMisi.filter((list) => list !== item)
        setListMisi(newData)
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Visi</Form.Label>
                <InputGroup>
                    <Form.Control value={visi} onChange={(e) => setVisi(e.target.value)} />
                    <button type="button" className="section-add-btn" onClick={() => addVisi()}>+</button>
                </InputGroup>
            </Form.Group>
            {/* Visi Tabel */}
            <Form.Group>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Visi</th>
                        <th className="text-center">Action</th>
                    </tr>
                    {listVisi.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item}</td>
                            <td className="table-cta">
                                <div className="table-cta-container">
                                    <button type="button" onClick={() => deleteVisi(item)} className="section-delete-btn">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </Form.Group>
            <Form.Group>
                <Form.Label>Misi</Form.Label>
                <InputGroup>
                    <Form.Control value={misi} onChange={(e) => setMisi(e.target.value)} />
                    <button type="button" className="section-add-btn" onClick={() => addMisi()}>+</button>
                </InputGroup>
            </Form.Group>
            {/* Visi Tabel */}
            <Form.Group>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Misi</th>
                        <th className="text-center">Action</th>
                    </tr>
                    {listMisi.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item}</td>
                            <td className="table-cta">
                                <div className="table-cta-container">
                                    <button type="button" onClick={() => deleteMisi(item)} className="section-delete-btn">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </Form.Group>
            <div className="form-cta">
                <button onClick={() => editVisiMisi()} className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>

    )
}