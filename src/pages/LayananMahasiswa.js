import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";

import FAQ from '../components/LayananMahasiswa/FAQ';
import Link from '../components/LayananMahasiswa/Link';

export default function LayananMahasiswa() {
    const [key, setKey] = useState("link");

    return (
        <main>
            <h1 className="page-header">Layanan Mahasiswa</h1>
            <Tabs
                id="event-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="d-flex flex-row gap-0 mb-5 fs-6 fw-normal"
            >
                <Tab eventKey="link" title="E-Layanan Mahasiswa">
                    <Link />
                </Tab>
                <Tab eventKey="faq" title="FAQ">
                    <FAQ />
                </Tab>
            </Tabs>
        </main>
    )
}