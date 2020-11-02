import React from "react";
import { Counter } from "./features/Counter";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
