import { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ArticleForm from "../components/ArticleForm";
import ArticleList from "../components/ArticleList";

export default function Article() {

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
          <ArticleForm />
        </Tab>
        <Tab eventKey='list' title="List">
          <ArticleList />
        </Tab>

      </Tabs>
    </main>
  );
}
