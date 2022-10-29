import React, { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// pages
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Forgot from "./components/Auth/Forgot";
import Profile from "./components/Pages/Profile";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Forgot />} path="/forgot" />
        <Route element={<Profile />} path="/profile" />

      </Routes>
    </div>
  );
};

export default App;

