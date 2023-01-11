import { useState } from "react";
import Card from "react-bootstrap/Card";
import Dreams from "./Dreams";
import "./JournalEntries.css";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader(response) {
  const userDreamEntries = await axios.get("api/dream")

  const userSpreads = await axios.get("api/tarot_spread")

  const journalEntries = {"dreams": userDreamEntries, "tarot": userSpreads}

  return {journalEntries}
}

export default function JournalToC() {
  const { journalEntries } = useLoaderData();
  const [show, setShow] = useState(false);

  return (
    <div className="journal-page">
      <div>
        <h2 className="journal-toc">Table of Contents</h2>
      </div>
      <div className="journal">
        <div className="entries">
          <h4 className="header">Dream Journal</h4>
          <ul className="content">
            {journalEntries.dreams.data.map((entry, i) => {
              return <li href="/dream"  className="entry">{`${i+1}. Dream ${i+1}`}</li>
            })}
          </ul>
        </div>
        <div className="line"/>
        <div className="entries">
          <h4 className="header">Tarot Journal</h4>
          <ul className="content">
          {journalEntries.tarot.data.map((entry, i) => {
              return <li className="entry">{`${i+1}. Spread ${i+1}`}</li>
            })}
          </ul>
        </div>
      </div>
      <div className="display-entry">
        <p className="hello">Hello</p>
      </div>
    </div>
  );
}
