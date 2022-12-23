import { Form } from 'react-bootstrap'
import { useState } from 'react'

import { CKEditor } from 'ckeditor4-react';
import InputImage from '../InputImage'
import ModalPengurus from './ModalPengurus'
import ModalDivisi from './ModalDivisi'

import { ReactComponent as Delete } from '../../assets/icons/Delete.svg'

import '../../styles/components/FormLayout.css'

export default function FormBidang({ addData, editData, currentData }) {
    const [namaBidang, setNamaBidang] = useState(currentData?.bidang)
    const [kepanjanganBidang, setKepanjanganBidang] = useState(currentData?.kepanjangan)
    const [logoBidang, setLogoBidang] = useState(currentData?.logo)
    const [deskripsiBidang, setDeskripsiBidang] = useState(currentData?.deskripsi)
    const [listPengurusBidang, setListPengurusBidang] = useState(currentData?.pengurus || [])
    const [listDivisiBidang, setListDivisiBidang] = useState(currentData?.divisi || [])

    const [showPengurusModal, setShowPengurusModal] = useState(false)
    const [showDivisiModal, setShowDivisiModal] = useState(false)

    const [selectedData, setSelectedData] = useState(null)

    function handleManageBidang(e) {
        e.preventDefault()
        if (currentData !== null) {
            editData({
                id: currentData.id,
                bidang: namaBidang,
                kepanjangan: kepanjanganBidang,
                logo: logoBidang,
                deskripsi: deskripsiBidang,
                pengurus: listPengurusBidang,
                divisi: listDivisiBidang
            })
        } else {
            const id = Math.floor(Math.random() * 100001)
            addData({
                id,
                bidang: namaBidang,
                kepanjangan: kepanjanganBidang,
                logo: logoBidang,
                deskripsi: deskripsiBidang,
                pengurus: listPengurusBidang,
                divisi: listDivisiBidang
            })
        }

    }

    function addPengurus(data) {
        setListPengurusBidang([...listPengurusBidang, data])
    }

    function addDivisi(data) {
        setListDivisiBidang([...listDivisiBidang, data])
    }

    function editDivisi(data) {
        const newData = listDivisiBidang.map(divisi => {
            if (divisi.id === data.id) {
                return data
            } else {
                return divisi
            }
        })
        setSelectedData(null)
        setListDivisiBidang(newData)
    }

    function editPengurus(data) {
        const newData = listPengurusBidang.map(pengurus => {
            if (pengurus.id === data.id) {
                return data
            } else {
                return pengurus
            }
        })
        setSelectedData(null)
        setListPengurusBidang(newData)
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
            <Form onSubmit={(e) => handleManageBidang(e)}>
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
                    <InputImage getData={setLogoBidang} label="Upload Logo Bidang" currentData={logoBidang} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Deskripsi</Form.Label>
                    <CKEditor skin="Kama" value={deskripsiBidang} onChange={(e) => setDeskripsiBidang(e.target.value)} />
                </Form.Group>

                {/* Divisi */}
                <Form.Group>
                    <div className="label-cta">
                        <Form.Label>Divisi</Form.Label>
                        <button onClick={() => { setShowDivisiModal(true); setSelectedData(null) }} type="button" className="label-cta-btn">+</button>
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
                                        <button type="button" onClick={() => { setShowDivisiModal(true); setSelectedData(divisi) }} className="section-edit-btn">Edit</button>
                                        <button type="button" onClick={() => deleteDivisi(divisi.id)} className="section-delete-btn"><Delete /></button>
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
                        <button onClick={() => { setShowPengurusModal(true); setSelectedData(null) }} type="button" className="label-cta-btn">+</button>
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
                                        <button type="button" onClick={() => { setShowPengurusModal(true); setSelectedData(pengurus) }} className="section-edit-btn">Edit</button>
                                        <button type="button" className="section-delete-btn" onClick={() => deletePengurus(pengurus.id)}><Delete /></button>
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
            <ModalDivisi show={showDivisiModal} setShow={setShowDivisiModal} addData={addDivisi} editData={editDivisi} currentData={selectedData} />
            <ModalPengurus show={showPengurusModal} setShow={setShowPengurusModal} addData={addPengurus} editData={editPengurus} currentData={selectedData} />
        </>

    )
}