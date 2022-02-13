import React, { useEffect, useState } from "react";
import leaderboard_style from "./leaderboard.module.css";
import Rows from "./Rows/Rows";
import Searchbar from "./Searchbar/Searchbar";
import keys from "../../keys";
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from "google-spreadsheet";

interface User {
  name: string;
  score: number;
  rank?: number;
}

const Leaderboard = () => {
  const [data, setData] = useState([{ score: 1 }]);
  const [total, setTotal] = useState(0);
  const [displayData, setDisplayData] = useState<User[]>([]);

  useEffect(() => {
    init();
  }, []);

  function getSortMethod<T extends User>(method: "name" | "score") {
    return (curr: T, next: T) => {
      switch (method) {
        case "name":
          return curr.name > next.name ? 1 : -1;
        case "score":
          if (curr.score < next.score) {
            return 1;
          } else if (curr.score === next.score && curr.name > next.name) {
            return 1;
          } else {
            return -1;
          }
        default:
          return 1;
      }
    };
  }

  function getTotal<T extends User>(arr: T[]) {
    return arr.reduce((sum, row) => sum + row.score, 0);
  }
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
          const ids = new Set<string>();
          // make score number and add ids
          const data = rows.map((row) => {
            ids.add(row.name as string);
            return {
              ...row,
              score: Number(row.score),
            } as unknown as User;
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
            ) as User[];
          setTotal(getTotal(finalData));
          setData(finalData);
          setDisplayData(finalData);
        });
      });
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  return (
    <div className={leaderboard_style.container}>
      <div className={leaderboard_style.leaderboard}>
        <Searchbar />
        <div className={leaderboard_style.ranking}>
          <Rows firstColumn="NR" secondColumn="Nume" thirdColumn="Scor" />
          {displayData.map((batch, index) => (
            <Rows
              firstColumn={(batch.rank || index).toString()}
              secondColumn={batch.name}
              thirdColumn={batch.score.toString()}
            />
          ))}
        </div>
      </div>
      {/* <div className={leaderboard_style.ground}></div> */}
    </div>
  );
};

export default Leaderboard;
