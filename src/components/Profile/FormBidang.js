/* eslint-disable react-hooks/exhaustive-deps */

import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AsyncCreateBidang, AsyncEditBidang } from '../../state/bidang/middleware';
import { AsyncGetAllPengurus, AsyncCreatePengurus, AsyncEditPengurus, AsyncRemovePengurus } from '../../state/pengurus/middleware';
import { AsyncGetAllDivisi, AsyncCreateDivisi, AsyncEditDivisi, AsyncRemoveDivisi } from '../../state/divisi/middleware';

import InputImage from '../InputImage'
import ModalPengurus from './ModalPengurus'
import ModalDivisi from './ModalDivisi'

import { ReactComponent as Delete } from '../../assets/icons/Delete.svg'

import '../../styles/components/FormLayout.css'

export default function FormBidang({ currentData, showForm }) {
    const dispatch = useDispatch()
    const { pengurus = [], divisi = [] } = useSelector(states => states)

    const [namaBidang, setNamaBidang] = useState(currentData?.nama_bidang)
    const [kepanjanganBidang, setKepanjanganBidang] = useState(currentData?.kepanjangan_bidang)
    const [logoBidang, setLogoBidang] = useState(currentData?.logo_bidang.url || null)
    const [deskripsiBidang, setDeskripsiBidang] = useState(currentData?.deskripsi_bidang)

    const [showPengurusModal, setShowPengurusModal] = useState(false)
    const [showDivisiModal, setShowDivisiModal] = useState(false)

    const [selectedData, setSelectedData] = useState(null)

    function handleManageBidang(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditBidang({
                _id: currentData._id,
                nama_bidang: namaBidang,
                kepanjangan_bidang: kepanjanganBidang,
                logo_bidang: logoBidang,
                deskripsi_bidang: deskripsiBidang
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreateBidang({
                nama_bidang: namaBidang,
                kepanjangan_bidang: kepanjanganBidang,
                logo_bidang: logoBidang,
                deskripsi_bidang: deskripsiBidang,
            }))
            showForm(false)
        }

    }

    function addPengurus(data) {
        data['id_bidang'] = currentData._id
        dispatch(AsyncCreatePengurus(data, currentData?.nama_bidang))
    }

    function addDivisi(data) {
        data['id_bidang'] = currentData._id
        dispatch(AsyncCreateDivisi(data, currentData?.nama_bidang))
    }

    function editPengurus(data) {
        data['id_bidang'] = currentData._id
        dispatch(AsyncEditPengurus(data, currentData?.nama_bidang))
        setSelectedData(null)
    }

    function editDivisi(data) {
        data['id_bidang'] = currentData._id
        dispatch(AsyncEditDivisi(data, currentData?.nama_bidang))
        setSelectedData(null)
    }

    function deletePengurus(id) {
        dispatch(AsyncRemovePengurus(id, currentData?.nama_bidang))
    }

    function deleteDivisi(id) {
        dispatch(AsyncRemoveDivisi(id, currentData?.nama_bidang))
    }

    useEffect(() => {
        if (currentData?.nama_bidang !== undefined) {
            dispatch(AsyncGetAllPengurus(currentData?.nama_bidang))
            dispatch(AsyncGetAllDivisi(currentData?.nama_bidang))
        }
    }, [])

    return (
        <>
            <Form onSubmit={(e) => handleManageBidang(e)}>
                <Form.Group>
                    <Form.Label>Nama Bidang <span className="required">*</span></Form.Label>
                    <Form.Control placeholder='Nama Singkatan Bidang' required value={namaBidang} onChange={(e) => setNamaBidang(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Kepanjangan <span className="required">*</span></Form.Label>
                    <Form.Control placeholder='Nama Kepanjangan Bidang' required value={kepanjanganBidang} onChange={(e) => setKepanjanganBidang(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Logo <span className="required">*</span></Form.Label>
                    <InputImage getData={setLogoBidang} label="Upload File" currentData={logoBidang} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Deskripsi <span className="required">(opsional)</span></Form.Label>
                    <textarea placeholder="Deskripsi Bidang" value={deskripsiBidang} onChange={(e) => setDeskripsiBidang(e.target.value)} />
                </Form.Group>

                {currentData?.nama_bidang !== undefined && (
                    <>
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
                                {divisi.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.nama_divisi}</td>
                                        <td className="table-cta">
                                            <div className="table-cta-container">
                                                <button type="button" onClick={() => { setShowDivisiModal(true); setSelectedData(item) }} className="section-edit-btn">Edit</button>
                                                <button type="button" onClick={() => deleteDivisi(item._id)} className="section-delete-btn"><Delete /></button>
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
                                {pengurus.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.nama_pengurus}</td>
                                        <td>{item.jabatan}</td>
                                        <td className="table-cta">
                                            <div className="table-cta-container">
                                                <button type="button" onClick={() => { setShowPengurusModal(true); setSelectedData(item) }} className="section-edit-btn">Edit</button>
                                                <button type="button" className="section-delete-btn" onClick={() => deletePengurus(item._id)}><Delete /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </Form.Group>
                    </>
                )}

                <div className="form-cta gap-3">
                    <button onClick={() => showForm(false)} className="form-cancel-button" type="button">Cancel</button>
                    <button className="form-submit-button" type="submit">Simpan</button>
                </div>
            </Form>
            <ModalDivisi show={showDivisiModal} setShow={setShowDivisiModal} addData={addDivisi} editData={editDivisi} currentData={selectedData} />
            <ModalPengurus show={showPengurusModal} setShow={setShowPengurusModal} addData={addPengurus} editData={editPengurus} currentData={selectedData} />
        </>

    )
}