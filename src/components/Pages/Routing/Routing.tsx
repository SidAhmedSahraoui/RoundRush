import React from "react";
import useStyles from "./style";

import { Route, Routes } from "react-router-dom";

// app layouts
import SidBar from "../../Layouts/Sidbar/SidBar";

// pages
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import Objectives from "../Objectives/Objectives";

const Routing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.profile}>
        <SidBar />
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/objectives" element={<Objectives />} />
        </Routes>
      </main>
    </>
  );
};
export default Routing;
