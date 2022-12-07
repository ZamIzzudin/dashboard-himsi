import { Form, InputGroup, Button } from 'react-bootstrap'
import { useState } from 'react'

import '../styles/components/FormProfile.css'

export default function FormProfile() {
    const [visi, setVisi] = useState('')
    const [misi, setMisi] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [tujuan, setTujuan] = useState('')
    const [fungsi, setFungsi] = useState('')

    const [visiList, setVisiList] = useState([])
    const [misiList, setMisiList] = useState([])
    const [tujuanList, setTujuanList] = useState([])
    const [fungsiList, setFungsiList] = useState([])

    function handleRemoveList(func, array, item) {
        func(array.filter(list => list !== item))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const dataForm = {
            visi,
            misi,
            deskripsi,
            tujuanList,
            fungsiList,
        }

        console.log(dataForm)
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
                <Form.Label>Visi</Form.Label>
                {visiList.map((item, index) => (
                    <div className="display-list-item">
                        <button onClick={() => handleRemoveList(setVisiList, visiList, item)}>remove</button>
                        <span key={`${index}tujuan`} >{item}</span>
                    </div>
                ))}
                <InputGroup>
                    <Form.Control type="text" value={visi} onChange={(e) => setVisi(e.target.value)} />
                    <Button onClick={() => { setVisiList([...visiList, visi]); setVisi('') }}> + </Button>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Misi</Form.Label>
                {misiList.map((item, index) => (
                    <div className="display-list-item">
                        <button onClick={() => handleRemoveList(setMisiList, misiList, item)}>remove</button>
                        <span key={`${index}tujuan`} >{item}</span>
                    </div>
                ))}
                <InputGroup>
                    <Form.Control type="text" value={misi} onChange={(e) => setMisi(e.target.value)} />
                    <Button onClick={() => { setMisiList([...misiList, misi]); setMisi('') }}> + </Button>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Deskripsi</Form.Label>
                <p className="display-form-value">{deskripsi}</p>
                <Form.Control type="text" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tujuan</Form.Label>
                {tujuanList.map((item, index) => (
                    <div className="display-list-item">
                        <button onClick={() => handleRemoveList(setTujuanList, tujuanList, item)}>remove</button>
                        <span key={`${index}tujuan`} >{item}</span>
                    </div>
                ))}
                <InputGroup>
                    <Form.Control type="text" value={tujuan} onChange={(e) => setTujuan(e.target.value)} />
                    <Button onClick={() => { setTujuanList([...tujuanList, tujuan]); setTujuan('') }}> + </Button>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fungsi</Form.Label>
                {fungsiList.map((item, index) => (
                    <div className="display-list-item">
                        <button onClick={() => handleRemoveList(setFungsiList, fungsiList, item)}>remove</button>
                        <span key={`${index}fungsi`} >{item}</span>
                    </div>
                ))}
                <InputGroup>
                    <Form.Control type="text" value={fungsi} onChange={(e) => setFungsi(e.target.value)} />
                    <Button onClick={() => { setFungsiList([...fungsiList, fungsi]); setFungsi('') }}> + </Button>
                </InputGroup>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>

    )
}