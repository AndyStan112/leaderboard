import logo from "./logo.png";
import logoJB from "./textBorderLogo.png";
import para from "./para.png";
import stanga from "./stanga.png";
import dreapta from "./dreapta.png";
import cDreapta from "./flower dreapta.png";
import cStanga from "./flower stanga.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import keys from "./keys";

function App() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    //console.time();
    init();
    //console.timeEnd();
  }, []);

  return (
    <div className="App">
      <div className="topWrapper">
        <img className="logo" src={logo}></img>

        <div className="titles">
          <div className="title">
            <img className="timg" src={stanga}></img>
            <p className="ttext">Clean up Challenge</p>
            <img className="timg" src={dreapta}></img>
          </div>
          <div className="subtitle">
            <img className="cimg" src={cStanga}></img>
            <p className="ctext">Clasament</p>
            <img className="cimg" src={cDreapta}></img>
          </div>
        </div>
        <img className="logoJB" src={logoJB}></img>
      </div>

      <div className="bottomWrapper">
        <div className="table">
          <input
            type="search"
            className="row search"
            placeholder="Search"
            onKeyUp={search}
            onChange={search}
          ></input>
          <div className="row header">
            <button
              onClick={sortBy}
              className="rank cell button"
              tabIndex={1}
              id={"rank"}
              title="Sort by rank"
            >
              Nr.
            </button>
            <button
              onClick={sortBy}
              className="name cell button"
              tabIndex={2}
              id={"name"}
              title="Sort by name"
            >
              Nume
            </button>
            <button
              onClick={sortBy}
              className="score cell button"
              tabIndex={3}
              id={"score"}
              title="Sort by score"
            >
              Scor
            </button>
          </div>
          <Table table={displayData} />
        </div>
        <div className="para"></div>
      </div>
    </div>
  );
  async function init() {
    const SPREADSHEET_ID = "1-745exi5JKWNBcM3n1j839mykXjLm7ypW8CYkV20G_8";
    const SHEET_ID = "0";
    const CLIENT_EMAIL = keys.client_email;
    const PRIVATE_KEY = keys.private_key;
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    const input = document.getElementsByClassName("search");

    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await doc.loadInfo().then(async () => {
        const sheet = doc.sheetsById[SHEET_ID];
        await sheet.getRows().then((rows) => {
          // create unique ids
          const ids = new Set();
          // make score number and add ids
          const data = rows.map((row) => {
            ids.add(row.name);
            return {
              ...row,
              score: Number(row.score),
            };
          });

          const finalData = Array.from(ids)
            .map((id) => {
              // A person's individual entries in the spreadsheet
              const entriesForPerson = data.filter((row) => row.name === id);
              // add final score
              const score = entriesForPerson
                .map((info) => info.score)
                .reduce((prev, curr) => prev + curr, 0);
              // produce one final info object per person
              return {
                ...entriesForPerson[0],
                score,
              };
            })
            .sort(getSortMethod("score"))
            .map((info, i) =>
              info.rank === undefined ? { ...info, rank: i + 1 } : info
            );

          setData(finalData);
          setDisplayData(finalData);
          // console.log(finalData);
        });
      });
    } catch (e) {
      console.error("Error: ", e);
    }
  }
  function normalised(string) {
    return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
  function search(event) {
    const query = normalised(event.currentTarget.value);
    setDisplayData(
      [...data].filter((row) => normalised(row.name).includes(query))
    );
  }

  function sortBy(event) {
    const method = event.currentTarget.id;
    setDisplayData([...displayData].sort(getSortMethod(method)));
    console.log(displayData)
  }
  function getSortMethod(method) {
    return (curr, next) => {
      switch (method) {
        case "name":
          return curr.name > next.name ? 1 : -1;
        default:
          if(curr.score < next.score ){return 1}
              else if (curr.score == next.score && curr.name > next.name ) {return 1}
              else {return -1};}
      }
    };
  }

function Table({ table }) {
  return table.map((item, i) => <Row row={item} key={i} />);
}
function Row({ row }) {
  return (
    <div className="row">
      <div className="rank cell">{row.rank}</div>
      <div className="name cell">{row.name}</div>
      <div className="score cell">{row.score}</div>
    </div>
  );
}

export default App;
