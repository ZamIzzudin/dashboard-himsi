import { Form, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreateEvent, AsyncEditEvent } from '../../state/event/middleware'

import Editor from '../Editor'
import InputImage from '../InputImage'
import InputManyImage from '../InputManyImage'

import '../../styles/components/FormLayout.css'

export default function FormManageEvent({ namaBidang, idDivisi, currentData, showForm }) {
    const dispatch = useDispatch()

    const [judulEvent, setJudulEvent] = useState(currentData?.judul_event)
    const [penulisEvent, setPenulisEvent] = useState(currentData?.penulis_event)
    const [tanggalMulaiEvent, setTanggalMulaiEvent] = useState(currentData?.tanggal_mulai_event)
    const [tanggalSelesaiEvent, setTanggalSelesaiEvent] = useState(currentData?.tanggal_selesai_event || null)
    const [isiEvent, setIsiEvent] = useState(currentData?.isi_event)
    const [kategoriEvent, setKategoriEvent] = useState(currentData?.kategori_event || 'Internal HIMSI')
    const [statusEvent, setStatusEvent] = useState(currentData?.status_event || 'Up Coming')
    const [headerEvent, setHeaderEvent] = useState(currentData?.header_event.url || null)
    const [gambarEvent, setGambarEvent] = useState(currentData?.gambar_event.url || null)
    const [dokumentasiEvent, setDokumentasiEvent] = useState(currentData?.dokumentasi_event || [])

    const [durasi, setDurasi] = useState(true)

    function handleAddProker(e) {
        e.preventDefault();
        if (currentData !== null) {
            dispatch(AsyncEditEvent({
                _id: currentData._id,
                judul_event: judulEvent,
                penulis_event: penulisEvent,
                tanggal_mulai_event: tanggalMulaiEvent,
                tanggal_selesai_event: tanggalSelesaiEvent,
                isi_event: isiEvent,
                kategori_event: kategoriEvent,
                status_event: statusEvent,
                header_event: headerEvent,
                gambar_event: gambarEvent,
                dokumentasi_event: dokumentasiEvent,
                id_divisi: idDivisi
            }, namaBidang))

            showForm(false)
        } else {
            dispatch(AsyncCreateEvent({
                judul_event: judulEvent,
                penulis_event: penulisEvent,
                tanggal_mulai_event: tanggalMulaiEvent,
                tanggal_selesai_event: tanggalSelesaiEvent,
                isi_event: isiEvent,
                kategori_event: kategoriEvent,
                status_event: statusEvent,
                header_event: headerEvent,
                gambar_event: gambarEvent,
                dokumentasi_event: dokumentasiEvent,
                id_divisi: idDivisi
            }, namaBidang))
            showForm(false)
        }

    }

    useEffect(() => {
        if (currentData?.tanggal_selesai_event === null || currentData?.tanggal_selesai_event === undefined) {
            setDurasi(true)
        } else {
            setDurasi(false)
        }
    }, [currentData])

    return (
        <Form onSubmit={(e) => handleAddProker(e)}>
            <InputImage getData={setHeaderEvent} label="Upload Gambar Heading" currentData={headerEvent} />
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={judulEvent} onChange={(e) => setJudulEvent(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Penulis</Form.Label>
                <Form.Control required value={penulisEvent} onChange={(e) => setPenulisEvent(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Durasi Waktu</Form.Label>
                <Form.Check
                    onChange={() => setDurasi(true)}
                    label="1 Hari"
                    name="group1"
                    type={'radio'}
                />
                <Form.Check
                    onChange={() => setDurasi(false)}
                    label="> 1 Hari"
                    name="group1"
                    type={'radio'}
                />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Tanggal Mulai</Form.Label>
                        <Form.Control type="date" required value={tanggalMulaiEvent?.toString().substring(0, 10)} onChange={(e) => setTanggalMulaiEvent(e.target.value)} />
                    </Form.Group>
                </Col>
                {!durasi && (
                    <Col>
                        <Form.Label>Tanggal Selesai</Form.Label>
                        <Form.Control type="date" required value={tanggalSelesaiEvent?.toString().substring(0, 10)} onChange={(e) => setTanggalSelesaiEvent(e.target.value)} />
                    </Col>
                )}
            </Row>
            <Form.Group>
                <Row>
                    <Col>
                        <Form.Label>Status</Form.Label>
                        <Form.Select value={statusEvent} onChange={(e) => setStatusEvent(e.target.value)}>
                            <option value="Upcoming">Upcoming</option>
                            <option value="On Going">On Going</option>
                            <option value="Done">Done</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select value={kategoriEvent} onChange={(e) => setKategoriEvent(e.target.value)}>
                            <option value="Internal HIMSI">Internal</option>
                            <option value="Eksternal HIMSI">Eksternal</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi</Form.Label>
                <Editor defaultData={isiEvent} setData={setIsiEvent} />
            </Form.Group>
            <InputImage getData={setGambarEvent} label="Upload Gambar Event" currentData={gambarEvent} />
            <InputManyImage getData={setDokumentasiEvent} currentData={dokumentasiEvent} label="Upload Dokumentasi Event" />
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}