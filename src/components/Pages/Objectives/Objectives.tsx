import React, { Fragment } from "react";
import useStyles from "./style";
import Bell from "../../../img/bell.svg";
import Add from "../../../img/add.svg";
import Slack from "../../../img/slack.svg";
import Calendar from "../../../img/calendar.svg";
import { RocketLaunch, ArrowUpward } from "@mui/icons-material";
import Conference from "../../../img/conference.svg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Oval from "../../../img/Oval.svg";
import { v4 as uuid } from "uuid"
const Objectives: React.FC = () => {
  const classes = useStyles();
  const objs = [
    {
      name: "Notifications Center",
      priority: 4,
      status: false,
      date: "15/01/2020",
      check: "5/10",
    },
    {
      name: "App Mobile",
      priority: 3,
      status: false,
      date: "15/01/2020",
      check: "5/10",
    },
    {
      name: "DevOps",
      priority: 2,
      status: false,
      date: "15/01/2020",
      check: "5/10",
    },
    {
      name: "Kubernetes",
      priority: 1,
      status: false,
      date: "15/01/2020",
      check: "5/10",
    },
    {
      name: "Docker",
      priority: 4,
      status: false,
      date: "15/01/2020",
      check: "5/10",
    },
  ];
  return (
    <>
      <main className={classes.main}>
        <nav>
          <section>
            <h1>Objectives</h1>
            <img src={Conference} alt="bell" />
          </section>

          <div className="icons">
            <div className="iter">
              <h2>
                iteration type : <strong>ROUND</strong>
              </h2>
            </div>
            <img src={Slack} alt="bell" />
            <img src={Calendar} alt="bell" />
            <button>
              <Icon sx={{ color: "#FFFFFF" }} component={RocketLaunch} />
              <h3>Upgrade</h3>
            </button>
            <img src={Bell} alt="bell" />
            <img src={Add} alt="add" />
          </div>
        </nav>
        <span></span>
        <section className="search">
          <div className="left">
            <Paper
              component="form"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#ffffff",
                boxShadow: "none",
                fontSize: "14px",
                fontWeight: 400,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "190px",
                height: "32px",
                padding: "4px",
                border: `2px solid rgba(76, 132, 255)`,
              }}>
              <InputBase
                type="text"
                placeholder="Choose something"
                sx={{
                  width: "80%",
                }}
              />
              <SearchIcon sx={{ color: "rgba(76, 132, 255)" }} />
            </Paper>
            <Icon className="icon" component={ArrowUpward} />
          </div>
          <div className="right">
            <button>Milestones</button>
            <Link className="link" to="/objectives">
              Requirements
            </Link>
          </div>
        </section>
        <main className="core">
          <div className="line">
            <div className="it name">NAME</div>
            <div className="it prio">PRIORITY</div>
            <div className="it status">STATUS</div>
            <div className="it assi">ASSIGNEES</div>
            <div className="it date">DUE DATE</div>
            <div className="it check">CHECKMARKS</div>
          </div>
          {objs.map((obj) => (
            <Fragment key={uuid()}>
            <div className="_line">
              <div className="_it _name">{obj.name}</div>
              <div className="_it _prio">
                <div className="cont" style={{ background: 
                  
                  obj.priority === 1
                    ? "#DB54FD"
                    : obj.priority === 2
                    ? "#FD5461"
                    : obj.priority === 3
                    ? "#FFAB2A"
                    : "#29C293"} }>
                  {obj.priority === 1
                    ? "URGENT"
                    : obj.priority === 2
                    ? "HIGH"
                    : obj.priority === 3
                    ? "MEDUIM"
                    : "LOW"}
                </div>
              </div>
              <div className="_it _status">
                <div className="cont">Not Done</div>
              </div>
              <div className="_it _assi">
                <div className="cont">
                  <img
                    style={{ zIndex: "3" }}
                    className="img1"
                    src={Oval}
                    alt=""
                  />
                  <img style={{ zIndex: "4" }} src={Oval} alt="" />
                  <img
                    style={{ zIndex: "5" }}
                    className="img2"
                    src={Oval}
                    alt=""
                  />
                </div>
              </div>
              <div className="_it _date">{obj.date}</div>
              <div className="_it _check"> {obj.check} </div>
            </div>
            <span></span>
            </Fragment>
          ))}
        </main>
      </main>
    </>
  );
};
export default Objectives;
