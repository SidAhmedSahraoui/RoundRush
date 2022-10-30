import React from "react";
import SidBar from "../Layouts/Sidbar/SidBar";
import useStyles from "./style";
import Bell from "../../img/bell.svg";
import Add from "../../img/add.svg";
import Settings from "../../img/set.svg";

import { Link, Route, Routes } from "react-router-dom";
import Info from "./Info/Info";
import Members from "./Members/Members";
const Profile: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.profile}>
        <SidBar />
        <main className="main">
          <nav>
            <h1>Space Settings</h1>
            <div className="icons">
              <img src={Bell} alt="bell" />
              <img src={Add} alt="add" />
            </div>
          </nav>
          <span></span>
          <section>
            <nav>
              <Link className="title" to="/profile">
                <img src={Settings} alt="set" />
                <h1>SPACE SETTINGS</h1>
              </Link>
              <Link className="link" to="/profile">
                Info
              </Link>
              <Link className="link" to="/profile/members">
                Members
              </Link>
            </nav>
            <span></span>
            <Routes>
            <Route element={<Members />} path="/members" />

              <Route element={<Info />} path="/" />
            </Routes>
          </section>
        </main>
      </div>
    </>
  );
};
export default Profile;
