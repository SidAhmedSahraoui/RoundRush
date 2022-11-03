import React, { Fragment, useState } from "react";
import useStyles from "./style";
import Bell from "../../../img/bell.svg";
import Add from "../../../img/add.svg";
import Slack from "../../../img/slack.svg";
import Calendar from "../../../img/calendar.svg";
import { RocketLaunch, ArrowUpward } from "@mui/icons-material";
import Conference from "../../../img/conference.svg";
import Checkbox from '@mui/material/Checkbox';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Icon } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Oval from "../../../img/Oval.svg";
import Oval4 from "../../../img/Oval4.svg";
import Plus from "../../../img/plus.svg"
import Close from "../../../img/close.svg";
import Delete from "../../../img/delete.svg";
import High from "../../../img/high.svg";
import Copy from "../../../img/copy.svg";
import { v4 as uuid } from "uuid";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { oProps } from "../../../types/types";

const Objectives: React.FC<oProps> = ({objs}) => {
  const classes = useStyles();
  const [dis, setDis] = useState(false);
  const clickHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    setDis((dis) => !dis);
    console.log(dis)
  };    
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
            <img onClick={clickHandler} style={{cursor: "pointer"}} src={Bell} alt="bell" />
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
                  <div
                    className="cont"
                    style={{
                      background:
                        obj.priority === 1
                          ? "#DB54FD"
                          : obj.priority === 2
                          ? "#FD5461"
                          : obj.priority === 3
                          ? "#FFAB2A"
                          : "#29C293",
                    }}>
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
                      style={{ width: "20px", height: "20px", zIndex: "3" }}
                      className="img1"
                      src={Oval}
                      alt=""
                    />
                    <img
                      style={{ width: "20px", height: "20px", zIndex: "4" }}
                      src={Oval}
                      alt=""
                    />
                    <img
                      style={{ width: "20px", height: "20px", zIndex: "5" }}
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
      <Modal
        open={dis}
        onClose={clickHandler}
        sx={{border: "none"}}
        
      >
        <Box className={classes.second} >
        <nav>
          <img onClick={clickHandler} src={Delete} alt="" />
          <img onClick={clickHandler} src={Close} alt="" />
        </nav>
        <div className="core">
          <h1>Notifications Center</h1>
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            accusamus exercitationem rem provident laborum natus pariatur minima
            veritatis doloremque rerum temporibus culpa nulla fugiat libero,
            incidunt ratione excepturi aliquam voluptas.
          </p>
          <h6>Priority</h6>
          <div className="prio">
            <img src={High} alt="" />
            <h3>High Priority</h3>
          </div>
          <h6>Subproject</h6>
          <div className="prio">
            <img src={Copy} alt="" />
            <h3>Webapp</h3>
          </div>
          <h6 style={{ marginLeft: "32px" }}>Assignees</h6>
          <div className="assi">
            <div className="rec">
              <img src={Oval4} alt="" />
              <h3>lene Robert</h3>
              <img src={Close} alt="" />
            </div>
            <div className="rec">
              <img src={Oval4} alt="" />
              <h3>lene Robert</h3>
              <img src={Close} alt="" />
            </div>
          </div>
          <h6>Linked Projects</h6>
          <h3 className="date">
            12/12/2022
          </h3>
          <h6>Due Date</h6>
          <h3 className="date">
            12/12/2022
          </h3>
          <div className="title">
            <h1>CHECKMARKS</h1>
            <img src={Plus} alt="" />
          </div>
          <div className="rec">
            <h1>Notifications Service</h1>
            <div>
            <MoreHorizIcon sx={{color: "#ADB0B8"}}  />
            <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }}  defaultChecked />
            </div>
          </div>
          <div className="rec">
            <h1>Notifications Service</h1>
            <div>
            <MoreHorizIcon sx={{color: "#ADB0B8"}}  />
            <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }}  defaultChecked />
            </div>
          </div>
          <div className="rec">
            <h1>API server</h1>
            <div>
            <MoreHorizIcon sx={{color: "#ADB0B8"}} />
            <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }}  defaultChecked />
            </div>
          </div>
        </div>
        </Box>
      </Modal>
    </>
  );
};
export default Objectives;
