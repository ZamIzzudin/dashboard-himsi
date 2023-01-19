import { Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AsyncEditVisiMisi } from '../../state/visiMisi/middleware'

import { ReactComponent as Delete } from '../../assets/icons/Delete.svg'

import '../../styles/components/FormLayout.css'

export default function FormVisiMisi() {
    const dispatch = useDispatch()
    const { visiMisi = [] } = useSelector(states => states)

    const [visi, setVisi] = useState(visiMisi?.visi)
    const [misi, setMisi] = useState('')
    const [listMisi, setListMisi] = useState(visiMisi?.misi)

    const [showMisiForm, setShowMisiForm] = useState(false)

    function editVisiMisi(e) {
        e.preventDefault()
        const data = {
            visi: visi,
            misi: listMisi
        }
        dispatch(AsyncEditVisiMisi(data))
    }

    function addMisi() {
        setListMisi([...listMisi, misi])
        setMisi('')
    }

    function deleteMisi(item) {
        const newData = listMisi.filter((list) => list !== item)
        setListMisi(newData)
    }

    return (
        <Form onSubmit={(e) => editVisiMisi(e)}>
            <Form.Group>
                <Form.Label>Visi <span className="required">*</span></Form.Label>
                <InputGroup>
                    <textarea value={visi} onChange={(e) => setVisi(e.target.value)} />
                </InputGroup>
            </Form.Group>
            <div className="corner-cta">
                <Form.Label>Misi <span className="required">*</span></Form.Label>
                <button type="button" className="section-add-btn" onClick={() => { setShowMisiForm(true); setMisi('') }}>+</button>
            </div>
            {/* Visi Tabel */}
            <Form.Group>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Misi</th>
                        <th className="text-center">Action</th>
                    </tr>
                    {listMisi?.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td className="wide-coloumn">{item}</td>
                            <td className="table-cta">
                                <div className="table-cta-container">
                                    <button type="button" onClick={() => { setShowMisiForm(true); setMisi(item); deleteMisi(item) }} className="section-edit-btn">Edit</button>
                                    <button type="button" onClick={() => deleteMisi(item)} className="section-delete-btn"><Delete /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {showMisiForm && (
                        <tr>
                            <td>{listMisi.length + 1}</td>
                            <td className="wide-coloumn">
                                <input value={misi} className="invisable-form" placeholder="Masukkan Text" type="text" onChange={(e) => setMisi(e.target.value)} />
                            </td>
                            <td className="table-cta">
                                <div className="table-cta-container">
                                    <button type="button" onClick={() => { addMisi(); setShowMisiForm(false); }} className="section-edit-btn">Simpan</button>
                                </div>
                            </td>
                        </tr>
                    )}
                </table>
            </Form.Group>
            <div className="form-cta gap-3">
                {showMisiForm && (
                    <button onClick={() => setShowMisiForm(false)} className="form-cancel-button" type="button">Cancel</button>
                )}
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>

    )
}