
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../styles/pages/Home.css";
import { useState } from "react";
import VisiMisi from '../components/Profile/VisiMisi';
import BidangDivisi from '../components/Profile/BidangDivisi';
import StrukturOrganisasi from '../components/Profile/StrukturOrganisasi';
import ShowProfile from "../components/Profile/ShowProfile";

export default function Profile() {
  const [key, setKey] = useState("visimisi");
  return (
    <main>
      <h1 className="page-header">Profile</h1>
      <Tabs
        id="event-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex flex-row gap-0 mb-5 fs-6 fw-normal"
      >
        <Tab eventKey="visimisi" title="Edit Visi Misi">
          <VisiMisi />
        </Tab>
        <Tab eventKey="bidangdivisi" title="Bidang Divisi">
          <BidangDivisi />
        </Tab>
        <Tab eventKey="strukturorganisasi" title="Struktur Organisasi">
          <StrukturOrganisasi />
        </Tab>
        <Tab eventKey="hubungikami" title="Hubungi Kami">
          <ShowProfile />
        </Tab>
      </Tabs>
    </main>
  );
}
