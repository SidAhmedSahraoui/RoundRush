import React, { FC } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
      </Routes>
    </div>
  );
};

export default App;

