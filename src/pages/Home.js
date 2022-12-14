// import HomeLinkCard from "../components/HomeLinkCard"
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../styles/pages/Home.css";
import { useState } from "react";
import SliderInformation from "../components/HomeComponents/SliderInformation";
import UpcomingEvent from "../components/HomeComponents/UpcomingEvent";
import SocialMedia from "../components/HomeComponents/SocialMedia";
import Partner from "../components/HomeComponents/Partner";

export default function Home() {
  const [key, setKey] = useState("slider");
  return (
    <main>
      <Tabs
        id="event-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex flex-row gap-0 my-5 fs-6 fw-normal"
      >
        <Tab eventKey="slider" title="Edit Slider Information">
            <SliderInformation />
        </Tab>
        <Tab eventKey="event" title="Upcoming Event">
            <UpcomingEvent />
        </Tab>
        <Tab eventKey="socialmedia" title="Social Media">
            <SocialMedia />
        </Tab>
        <Tab eventKey="partner" title="Partner">
            <Partner />
        </Tab>
      </Tabs>
    </main>
  );
}
