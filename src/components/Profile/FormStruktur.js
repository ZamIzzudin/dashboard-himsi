import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormStruktur() {
    const [strukturImage, setStrukturImage] = useState(null)

    function addStruktur(e) {
        e.preventDefault()

        console.log(strukturImage)
    }

    return (
        <Form onSubmit={(e) => addStruktur(e)}>
            <InputImage label="Upload File" getData={setStrukturImage} />
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>

    )
}