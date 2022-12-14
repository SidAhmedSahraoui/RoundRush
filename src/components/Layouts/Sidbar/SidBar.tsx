import React, { Fragment, useState } from "react";
import useStyles from "./style";
import Logo from "../../../img/logos.svg";
import Trello from "../../../img/trello.svg";
import Home from "../../../img/home.svg";
import Settings from "../../../img/settings.svg";
import Member from "../../../img/member.svg";
import Group from "../../../img/Group.svg";
import Oval from "../../../img/Oval2.svg";
import Help from "../../../img/help.svg";
import Exit from "../../../img/exit.svg";
import { KeyboardArrowDown, MoreHoriz } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { SvgIcon } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
const SidBar: React.FC = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [dispTeam, setDispTeam] = useState(false);
  const [dis, setDis] = useState([false, false, false]);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setClick((click) => !click);
  };

  const displayHandler = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    setDispTeam((dispTeam) => !dispTeam);
  };
  const displayTeams = (id: number) => {
    const arr = [...dis];
    setDis((dis) => {
      arr[id] = !arr[id];
      return arr;
    });
  };

  const teams = [
    {
      id: 0,
      name: "Coraly",
      sub: [
        {
          name: "Coraly Tech & Dev",
          color: "#EEC301",
        },
        { name: "Design Board", color: "#E7374F" },
        { name: "Growth Hacking", color: "#FC91AD" },
      ],
    },
    {
      id: 1,
      name: "Lasting Dynamics",
      sub: [
        {
          name: "Website",
          color: "#EEC301",
        },
        { name: "Growth Hacking", color: "#E7374F" },
        { name: "UI / UX Design", color: "#FC91AD" },
      ],
    },
    {
      id: 2,
      name: "Vetrina Live",
      sub: [
        {
          name: "VL - Tech & Dev",
          color: "#EEC301",
        },
        { name: "VL - Growth Hacking", color: "#E7374F" },
      ],
    },
  ];
  const count = (arr: boolean[]) => {
    let i = 0;
    arr.forEach((e) => (e ? i++ : i));
    return i;
  };
  return (
    <>
      {!click ? (
        <>
          <div className={classes.sidbar}>
            <div className="container">
              <div className="up">
                <button onClick={clickHandler} className="humberger">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div className="elem">
                  <img src={Logo} alt="logo" />
                </div>
                <Link to="/profile" className="elem">
                  {" "}
                  <img src={Trello} alt="trello" />
                </Link>
                <Link to="/dashboard" className="elem">
                  <img src={Home} alt="home" />
                </Link>
                <Link to="/objectives" className="elem">
                  <img src={Settings} alt="settings" />
                </Link>
                <span className="divider"></span>
                <div className="elem">
                  <img src={Member} alt="member" />
                </div>
              </div>

              <div className="down">
                <div className="img">
                  <img src={Oval} alt="oval" />
                </div>
                <div className="img">
                  <img src={Help} alt="help" />
                </div>
                <div className="img">
                  <img src={Exit} alt="exit" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes._sidbar}>
            <div
              style={count(dis) < 3 ? { height: "730px" } : { height: "770px" }}
              className="container">
              <div className="up">
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
                    component={KeyboardArrowDown}
                  />
                </div>
                <Link to="/profile" className="_elem">
                  {" "}
                  <img src={Trello} alt="trello" />
                  <h1>Personal Board</h1>
                </Link>
                <Link to="/dashboard" className="_elem">
                  <img src={Home} alt="home" />
                  <h1>Dashboard</h1>
                </Link>
                <Link to="/objectives" className="_elem">
                  <img src={Settings} alt="settings" />
                  <h1>Space Settings</h1>
                </Link>
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
                    component={KeyboardArrowDown}
                    onClick={displayHandler}
                  />
                </div>
                {dispTeam
                  ? teams.map((team) => (
                      <Fragment key={uuidv4()}>
                        <div key={uuidv4()} className="company">
                          <h5>{team.name}</h5>
                          <div className="cmp">
                            <SvgIcon
                              sx={{ color: "#FFFFFF" }}
                              component={MoreHoriz}
                            />
                            <SvgIcon
                              sx={{ color: "#FFFFFF" }}
                              component={KeyboardArrowDown}
                              onClick={() => displayTeams(team.id)}
                            />
                          </div>
                        </div>
                        {dis[team.id]
                          ? team.sub.map((t) => (
                              <div className="team" key={uuidv4()}>
                                <div
                                  className="cube"
                                  style={{ backgroundColor: t.color }}></div>
                                <h5>{t.name}</h5>
                                <SvgIcon
                                  sx={{ color: "#FFFFFF" }}
                                  component={MoreHoriz}
                                  className="icon"
                                />
                              </div>
                            ))
                          : null}
                      </Fragment>
                    ))
                  : null}
              </div>
              <div className="down">
                <div className="img">
                  <img src={Oval} alt="oval" />
                </div>
                <div className="img">
                  <img src={Help} alt="help" />
                </div>
                <div className="img">
                  <img src={Exit} alt="exit" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SidBar;
