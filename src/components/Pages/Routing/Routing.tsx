import React from "react";
import useStyles from "./style";


import { Route, Routes } from "react-router-dom";
import SidBar from "../../Layouts/Sidbar/SidBar";
import Profile from "../Profile/Profile";
import { Dashboard } from "@mui/icons-material";

const Routing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
        <main className={classes.profile}>
          <SidBar />
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </main>
    </>
  );
};
export default Routing;