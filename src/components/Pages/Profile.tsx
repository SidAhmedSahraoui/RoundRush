import React, { useState } from "react";
import useStyles from "./style";
import Logo from "../../img/logos.svg";
import Trello from "../../img/trello.svg";
import Home from "../../img/home.svg";
import Settings from "../../img/settings.svg";

const Profile: React.FC = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setClick((click) => !click);
    console.log(click);
  };

  return (
    <>
      <div className={classes.root}>
        {!click ? (
          <>
            <div className="sidbar">
              <button onClick={clickHandler} className="humberger">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <img src={Logo} alt="logo" />
              <img src={Trello} alt="trello" />
              <img src={Home} alt="home" />
              <img src={Settings} alt="settings" />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
