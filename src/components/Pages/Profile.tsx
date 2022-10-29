import React from "react";
import useStyles from "./style";


const Profile: React.FC = () => {
  const classes = useStyles();


  return (
    <>
      <div className={classes.root}>
        Hello
      </div>
    </>
  );
};

export default Profile;
