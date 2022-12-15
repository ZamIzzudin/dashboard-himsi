import BackButton from '../components/BackButton'
import { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EventForm from '../components/EventForm';
import EventLists from '../components/EventList';

export default function Event() {

  const [key, setKey] = useState('create');

  return (
    <main>
      <Tabs
        id="event-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex flex-row gap-0 mb-5 fs-6 fw-normal"
      >
        <Tab i="bi bi-list" eventKey='create' title="Create">
          <EventForm />
        </Tab>
        <Tab eventKey='list' title="List">
          <EventLists />
        </Tab>

      </Tabs>
    </main>
  );
}
