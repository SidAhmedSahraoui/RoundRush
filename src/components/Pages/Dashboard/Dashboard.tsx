import React from "react";
import useStyles from "./style";
import Bell from "../../img/bell.svg";
import Add from "../../img/add.svg";
import Settings from "../../img/set.svg";
import { Link, Routes } from "react-router-dom";

const Dashboard: React.FC = () => {
  const classes = useStyles();
  return (
    <>
        <main className={classes.main}>
          <nav>
            <h1>Dashboard</h1>
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
            </Routes>
          </section>
        </main>
    </>
  );
};
export default Dashboard;