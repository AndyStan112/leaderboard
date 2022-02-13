// import logo from "./images/logo.png";
// import logoJB from "./images/textBorderLogo.png";
// import para from "/.images/para.png";
// import stanga from "./images/stanga.png";
// import dreapta from "./images/dreapta.png";
// import cDreapta from "./images/flower dreapta.png";
// import cStanga from "./images/flower stanga.png";
import "./index.css";
import "./App.css";
import React, { useEffect, useState } from "react";

// function App() {

//   useEffect(() => {
//     //console.time();
//     init();
//     //console.timeEnd();
//   }, []);
//   //html
//   return (
//     <div className="App">
//       <div className="topWrapper">
//         <img className="logo" src={logo}></img>
//         <div className="titles">
//           <div className="title">
//             <img className="timg" src={stanga}></img>
//             <p className="ttext">Clean up Challenge</p>
//             <img className="timg" src={dreapta}></img>
//           </div>
//           <div className="subtitle">
//             <img className="cimg" src={cStanga}></img>
//             <p className="ctext">Clasament</p>
//             <img className="cimg" src={cDreapta}></img>
//           </div>
//         </div>
//         <img className="logoJB" src={logoJB}></img>
//       </div>
//       <p className="info pc">
//         În total ați salvat aproximativ:{" "}
//         <mark className="copaci">{(total * 0.008).toFixed(2)} copaci</mark>,{" "}
//         <mark className="petrol">
//           {(total * 0.217 * 3.7).toFixed(1)}L de petrol
//         </mark>{" "}
//         si{" "}
//         <mark className="apa">{(total * 2.402 * 3.7).toFixed()}L de apa</mark>
//       </p>
//       <div className="info mobile">
//         <p>În total ați salvat aproximativ:</p>
//         <p className="copaci">{(total * 0.008).toFixed(2)} copaci</p>
//         <p className="petrol">{(total * 0.217 * 3.7).toFixed(1)}L de petrol</p>
//         <p className="apa">{(total * 2.402 * 3.7).toFixed()}L de apa</p>
//       </div>
//       <div className="bottomWrapper">
//         <div className="table">
//           <input
//             type="search"
//             className="row search"
//             placeholder="Search"
//             onKeyUp={search}
//             onChange={search}
//           ></input>
//           <div className="row header">
//             <button
//               onClick={sortBy}
//               className="rank cell button"
//               tabIndex={1}
//               id={"rank"}
//               title="Sort by rank"
//             >
//               Nr.
//             </button>
//             <button
//               onClick={sortBy}
//               className="name cell button"
//               tabIndex={2}
//               id={"name"}
//               title="Sort by name"
//             >
//               Nume
//             </button>
//             <button
//               onClick={sortBy}
//               className="score cell button"
//               tabIndex={3}
//               id={"score"}
//               title="Sort by score"
//             >
//               Scor
//             </button>
//           </div>
//           <Table table={displayData} />
//         </div>
//         <div className="para"></div>
//       </div>
//     </div>
//   );

//   function normalised(string) {
//     return string
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .toLowerCase();
//   }
//   function search(event) {
//     const query = normalised(event.currentTarget.value);
//     setDisplayData(
//       [...data].filter((row) => normalised(row.name).includes(query))
//     );
//   }

//   function sortBy(event) {
//     const method = event.currentTarget.id;
//     setDisplayData([...displayData].sort(getSortMethod(method)));
//     console.log(displayData);
//   }

// }

// function Table({ table }) {
//   return table.map((item, i) => <Row row={item} key={i} />);
// }
// function Row({ row }) {
//   return (
//     <div className="row">
//       <div className="rank cell">{row.rank}</div>
//       <div className="name cell">{row.name}</div>
//       <div className="score cell">{row.score}</div>
//     </div>
//   );
// }

import Title from "./components/Title/Title.tsx";
import Info from "./components/Info/Info.tsx";
import Leaderboard from "./components/Leaderboard/Leaderboard.tsx";
const App = () => {
  return (
    <div className="container">
      <Title />
      <Info />
      <Leaderboard />
    </div>
  );
};

export default App;
