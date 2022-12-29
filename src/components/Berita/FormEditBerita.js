import { Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AsyncCreateBerita, AsyncEditBerita } from '../../state/berita/middleware'

import Editor from '../Editor'
import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormEditBerita({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [judulBerita, setJudulBerita] = useState(currentData?.judul)
    const [tanggalBerita, setTanggalBerita] = useState(currentData?.tanggal)
    const [penulisBerita, setPenulisBerita] = useState(currentData?.penulis)
    const [kategoriBerita, setKategoriBerita] = useState(currentData?.kategori || [])
    const [isiBerita, setIsiBerita] = useState(currentData?.isi)
    const [linkBerita, setLinkBerita] = useState(currentData?.link)
    const [gambarHeadingBerita, setGambarHeadingBerita] = useState(currentData?.gambarHeading)
    const [uploadFileBerita, setUploadFileBerita] = useState(currentData?.uploadFile)

    const [kategori, setKategori] = useState('')

    function handleManageBerita(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditBerita({
                _id: currentData._id,
                header_berita: gambarHeadingBerita,
                tanggal_berita: tanggalBerita,
                penulis_berita: penulisBerita,
                kategori_berita: kategoriBerita,
                judul_berita: judulBerita,
                isi_berita: isiBerita,
                gambar_berita: uploadFileBerita,
                link_berita: linkBerita
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreateBerita({
                header_berita: gambarHeadingBerita,
                tanggal_berita: tanggalBerita,
                penulis_berita: penulisBerita,
                kategori_berita: kategoriBerita,
                judul_berita: judulBerita,
                isi_berita: isiBerita,
                gambar_berita: uploadFileBerita,
                link_berita: linkBerita
            }))
            showForm(false)
        }
    }

    function addKategori() {
        setKategoriBerita([...kategoriBerita, kategori])
        setKategori('')
    }

    function deleteKategori(data) {
        const newData = kategoriBerita.filter(item => item !== data)
        setKategoriBerita(newData)
    }

    return (
        <Form onSubmit={(e) => handleManageBerita(e)}>
            <Form.Group>
                <InputImage getData={setGambarHeadingBerita} label="Upload Gambar Heading" currentData={gambarHeadingBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tanggal</Form.Label>
                <Form.Control required value={tanggalBerita} type="date" onChange={(e) => setTanggalBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Penulis</Form.Label>
                <Form.Control required value={penulisBerita} onChange={(e) => setPenulisBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <div className="display-list-bubble">
                    {kategoriBerita.map(item => (
                        <div className="bubble-item">
                            {item}
                            <button onClick={() => deleteKategori(item)}>X</button>
                        </div>
                    ))}
                </div>
                <InputGroup>
                    <Form.Control value={kategori} onChange={(e) => setKategori(e.target.value)} />
                    <button type="button" className="section-add-btn" onClick={() => addKategori()}>+</button>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi</Form.Label>
                <Editor defaultData={isiBerita} setData={setIsiBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Upload File</Form.Label>
                <InputImage getData={setUploadFileBerita} label="Upload Gambar Berita" currentData={uploadFileBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control required value={linkBerita} onChange={(e) => setLinkBerita(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}