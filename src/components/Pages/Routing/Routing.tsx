import React from "react";
import useStyles from "./style";

import { Route, Routes } from "react-router-dom";

// app layouts
import SidBar from "../../Layouts/Sidbar/SidBar";

// pages
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import Objectives from "../Objectives/Objectives";

// mocks 
import { todos, tasks, objs } from "../../../mocks/index"

const Routing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.profile}>
        <SidBar />
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard tasks={tasks} todos={todos} />} />
          <Route path="/objectives" element={<Objectives objs={objs} />} />
        </Routes>
      </main>
    </>
  );
};
export default Routing;
