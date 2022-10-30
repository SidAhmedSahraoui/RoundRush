import React, { useState } from "react";
import useStyles from "./style";
import Logo from "../../../img/logos.svg";
import Trello from "../../../img/trello.svg";
import Home from "../../../img/home.svg";
import Settings from "../../../img/settings.svg";
import Member from "../../../img/member.svg";
import Group from "../../../img/Group.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

import { SvgIcon } from "@mui/material";

const SidBar: React.FC = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setClick((click) => !click);
    console.log(click);
  };

  return (
    <>
        {!click ? (
          <>
            <div className={classes.sidbar}>
              <button onClick={clickHandler} className="humberger">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="elem">
                <img src={Logo} alt="logo" />
              </div>
              <div className="elem">
                {" "}
                <img src={Trello} alt="trello" />
              </div>
              <div className="elem">
                <img src={Home} alt="home" />
              </div>
              <div className="elem">
                <img src={Settings} alt="settings" />
              </div>
              <span className="divider"></span>
              <div className="elem">
                <img src={Member} alt="member" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={classes._sidbar}>
              <div className="_humberger">
                <img src={Group} alt="grp" />
                <button onClick={clickHandler} className="_hum">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div className="_elem">
                <img src={Logo} alt="logo" />
                <h1>YellowTech Inc.</h1>
                <SvgIcon
                  sx={{ color: "#FFFFFF", paddingLeft: "12px" }}
                  component={KeyboardArrowDownIcon}
                />
              </div>
              <div className="_elem">
                {" "}
                <img src={Trello} alt="trello" />
                <h1>Personal Board</h1>
              </div>
              <div className="_elem">
                <img src={Home} alt="home" />
                <h1>Dashboard</h1>
              </div>
              <div className="_elem">
                <img src={Settings} alt="settings" />
                <h1>Space Settings</h1>
              </div>
              <span className="_divider"></span>
              <div className="_elem">
                <img src={Member} alt="member" />
                <h1>Teams</h1>
                <SvgIcon
                  sx={{ color: "#FFFFFF", paddingLeft: "34px" }}
                  component={AddIcon}
                />
                <SvgIcon
                  sx={{ color: "#FFFFFF", paddingLeft: "12px" }}
                  component={KeyboardArrowDownIcon}
                />
              </div>
            </div>
          </>
        )}
    </>
  );
};

export default SidBar;
