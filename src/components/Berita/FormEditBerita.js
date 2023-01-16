import { Form, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AsyncCreateBerita, AsyncEditBerita } from '../../state/berita/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'
import Editor from '../Editor'
import KategoriFilterForm from '../KategoriFilterForm';
import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormEditBerita({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [judulBerita, setJudulBerita] = useState(currentData?.judul_berita)
    const [penulisBerita, setPenulisBerita] = useState(currentData?.penulis_berita)
    const [kategoriBerita, setKategoriBerita] = useState(currentData?.kategori_berita || [])
    const [isiBerita, setIsiBerita] = useState(currentData?.isi_berita)
    const [linkPDF, setLinkPDF] = useState(currentData?.link_pdf || '')
    const [linkBerita, setLinkBerita] = useState(currentData?.link_berita || '')
    const [gambarHeadingBerita, setGambarHeadingBerita] = useState(currentData?.header_berita.url || null)
    const [uploadFileBerita, setUploadFileBerita] = useState(currentData?.gambar_berita.url || null)

    const [error, setError] = useState(false)

    function handleManageBerita(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditBerita({
                _id: currentData._id,
                penulis_berita: penulisBerita,
                kategori_berita: kategoriBerita,
                judul_berita: judulBerita,
                isi_berita: isiBerita,
                gambar_berita: uploadFileBerita || currentData?.gambar_berita.url,
                header_berita: gambarHeadingBerita || currentData?.header_berita.url,
                link_berita: linkBerita,
                link_pdf: linkPDF
            }))
            showForm(false)
        } else {
            if (uploadFileBerita !== null && gambarHeadingBerita !== null) {
                dispatch(AsyncCreateBerita({
                    header_berita: gambarHeadingBerita,
                    penulis_berita: penulisBerita,
                    kategori_berita: kategoriBerita,
                    judul_berita: judulBerita,
                    isi_berita: isiBerita,
                    gambar_berita: uploadFileBerita,
                    link_berita: linkBerita,
                    link_pdf: linkPDF
                }))
                showForm(false)
            } else {
                setError(true)
            }
        }
    }

    return (
        <Form onSubmit={(e) => handleManageBerita(e)}>
            <Form.Group>
                <InputImage getData={setGambarHeadingBerita} label="Upload Gambar Heading" currentData={gambarHeadingBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Penulis</Form.Label>
                <Form.Control required value={penulisBerita} onChange={(e) => setPenulisBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <KategoriFilterForm currentData={kategoriBerita} setData={setKategoriBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi</Form.Label>
                <Editor defaultData={isiBerita} setData={setIsiBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Upload File</Form.Label>
                <InputImage getData={setUploadFileBerita} label="Upload Gambar Article / Poster" currentData={uploadFileBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link PDF (Booklet)<Linking /> (opsional)</Form.Label>
                <Form.Control placeholder="Link Google Drive" value={linkPDF} onChange={(e) => setLinkPDF(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link <Linking /> (opsional)</Form.Label>
                <Form.Control placeholder="https://" value={linkBerita} onChange={(e) => setLinkBerita(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
            <Modal
                size="sm"
                centered
                show={error}
                onHide={() => setError(false)}>
                <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body className="error-modal-body">
                    <span>You must upload image</span>
                </Modal.Body>
            </Modal>
        </Form>
    )
}