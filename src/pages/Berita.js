import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../styles/pages/Home.css";
import { useState } from "react";
import AddBerita from "../components/BeritaComponents/AddBerita";
import BasicExample from "../components/BeritaComponents/ShowBerita";

const ProgramKerja = () => {
    const [key, setKey] = useState("addberita");
  return (
    <main>
      <Tabs
        id="event-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex flex-row gap-0 my-5 fs-6 fw-normal"
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
