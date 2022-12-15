import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";

import AddBerita from "../components/BeritaComponents/AddBerita";
import BasicExample from "../components/BeritaComponents/ShowBerita";

import "../styles/pages/Home.css";

const ProgramKerja = () => {
  const [key, setKey] = useState("addberita");
  return (
    <main>
      <h1 className="page-header">Berita</h1>
      <Tabs
        id="event-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex flex-row gap-0 mb-5 fs-6 fw-normal"
      >
        <Tab eventKey="addberita" title="Tambah Berita">
          <AddBerita />
        </Tab>
        <Tab eventKey="showberita" title="Tampilkan Berita">
          <BasicExample />
        </Tab>
      </Tabs>
    </main>
  );
};
export default ProgramKerja;
