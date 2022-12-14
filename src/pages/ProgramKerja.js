import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../styles/pages/Home.css";
import { useState } from "react";

const ProgramKerja = () => {
    const [key, setKey] = useState("slider");
  return (
    <main>
      <Tabs
        id="event-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex flex-row gap-0 my-5 fs-6 fw-normal"
      >
        <Tab eventKey="slider" title="Bidang 1">
          {/* <SliderInformation /> */}
        </Tab>
        <Tab eventKey="event" title="Bidang 2">
          {/* <UpcomingEvent /> */}
        </Tab>
        <Tab eventKey="socialmedia" title="Bidang 3">
          {/* <SocialMedia /> */}
        </Tab>
        <Tab eventKey="partner" title="Bidang 4">
          {/* <Partner /> */}
        </Tab>
      </Tabs>
    </main>
  );
};
export default ProgramKerja;
