import { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from "../components/Form";
import List from "../components/List";


export default function Event() {

  const [key, setKey] = useState('create');

  return (
    <main>
        <Tabs
        id="event-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="d-flex flex-row gap-0 my-5 fs-6 fw-normal"
        >
          <Tab i="bi bi-list" eventKey='create' title="Create">
            <Form />
          </Tab>
          <Tab eventKey='list' title="List">
            <List />
          </Tab>

        </Tabs>
    </main>
  );
}
