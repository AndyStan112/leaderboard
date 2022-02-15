import "./index.css";
import "./App.css";
import React, { useState, FC, Dispatch, SetStateAction } from "react";

export interface User {
  name: string;
  score: number;
  rank?: number;
}

export type UserConsumer = FC<{
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}>;

import Title from "./components/Title/Title";
import Info from "./components/Info/Info";
import Leaderboard from "./components/Leaderboard/Leaderboard";
const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <div className="container">
      <Title />
      <Info users={users} setUsers={setUsers} />
      <Leaderboard users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
