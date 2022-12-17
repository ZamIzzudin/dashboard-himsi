import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'
import ModalPengurus from './ModalPengurus'
import ModalDivisi from './ModalDivisi'

import '../../styles/components/FormLayout.css'

export default function FormBidang({ getData }) {
    const [namaBidang, setNamaBidang] = useState('')
    const [kepanjanganBidang, setKepanjanganBidang] = useState('')
    const [logoBidang, setLogoBidang] = useState('')
    const [deskripsiBidang, setDeskripsiBidang] = useState('')
    const [listPengurusBidang, setListPengurusBidang] = useState([])
    const [listDivisiBidang, setListDivisiBidang] = useState([])

    const [showPengurusModal, setShowPengurusModal] = useState(false)
    const [showDivisiModal, setShowDivisiModal] = useState(false)

    function handleAddBidang(e) {
        e.preventDefault()

        const id = Math.floor(Math.random() * 100001)
        getData({
            id,
            bidang: namaBidang,
            kepanjangan: kepanjanganBidang,
            logo: logoBidang,
            deskripsi: deskripsiBidang,
            pengurus: listPengurusBidang,
            divisi: listDivisiBidang
        })
    }

    function addPengurus(data) {
        setListPengurusBidang([...listPengurusBidang, data])
    }

    function addDivisi(data) {
        setListDivisiBidang([...listDivisiBidang, data])
    }

    function deletePengurus(id) {
        const newData = listPengurusBidang.filter(pengurus => pengurus.id !== id)
        setListPengurusBidang(newData)
    }

    function deleteDivisi(id) {
        const newData = listDivisiBidang.filter(divisi => divisi.id !== id)
        setListDivisiBidang(newData)
    }

    return (
        <>
            <Form onSubmit={(e) => handleAddBidang(e)}>
                <Form.Group>
                    <Form.Label>Nama Bidang</Form.Label>
                    <Form.Control required value={namaBidang} onChange={(e) => setNamaBidang(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Kepanjangan</Form.Label>
                    <Form.Control required value={kepanjanganBidang} onChange={(e) => setKepanjanganBidang(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Logo</Form.Label>
                    <InputImage getData={setLogoBidang} label="Upload Logo Bidang" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Deskripsi</Form.Label>
                    <textarea className="semi-text-area" required value={deskripsiBidang} onChange={(e) => setDeskripsiBidang(e.target.value)} />
                </Form.Group>

                {/* Divisi */}
                <Form.Group>
                    <div className="label-cta">
                        <Form.Label>Divisi</Form.Label>
                        <button onClick={() => setShowDivisiModal(true)} type="button" className="label-cta-btn">+</button>
                    </div>
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {listDivisiBidang.map((divisi, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{divisi.nama}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => deleteDivisi(divisi.id)} className="section-delete-btn">Delete</button>
                                        <button className="section-edit-btn">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </Form.Group>

                {/* Pengurus */}
                <Form.Group>
                    <div className="label-cta">
                        <Form.Label>Pengurus</Form.Label>
                        <button onClick={() => setShowPengurusModal(true)} type="button" className="label-cta-btn">+</button>
                    </div>
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Jabatan</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {listPengurusBidang.map((pengurus, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pengurus.nama}</td>
                                <td>{pengurus.jabatan}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button className="section-delete-btn" onClick={() => deletePengurus(pengurus.id)}>Delete</button>
                                        <button className="section-edit-btn">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </Form.Group>
                <div className="form-cta">
                    <button className="form-submit-button" type="submit">Simpan</button>
                </div>
            </Form>
            <ModalDivisi show={showDivisiModal} setShow={setShowDivisiModal} getData={addDivisi} />
            <ModalPengurus show={showPengurusModal} setShow={setShowPengurusModal} getData={addPengurus} />
        </>

    )
}