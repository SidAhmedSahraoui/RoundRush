import React, { Fragment } from "react";
import useStyles from "./style";
import Oval from "../../../img/Oval.svg"
import { v4 as uuidv4 } from "uuid"
import { uProps } from "../../../types/types";
import { Button } from "@mui/material";

const Members: React.FC<uProps> = ({users}) => {
  const classes = useStyles();


  return (
    <>
      <main className={classes.main}>
        <h1>Users on plan</h1>
        <div className="table text-left">
          <div className="head">
            <div className="line">
              <div className="col" style={{width: "50%"}}>Name</div>
              <div className="col" style={{width: "0px" , padding: "0px"}}></div>
              <div className="col" style={{width: "40%" , paddingLeft: "35px"}} >Email</div>
              <div className="col" style={{width: "10%"}} >Status</div>
              <div className="col" style={{width: "0px", padding: "0px"}}></div>
            </div>
          </div>
          <main>
            {users.map((user) => (
                <Fragment key={uuidv4()} >
                    <div className={!user.active ? "inact" : ""}>
                        <div className="name">
                            <img width="20px" height="20px" src={Oval} alt="" />
                            {user.name}
                        </div>
                        <div className="owner">
                            {user.owner ? <button>Owner</button> : null}
                        </div>
                        <div className="email">
                            {user.email}
                        </div>
                        <div>
                            {user.active ? <h5 className="active">Active</h5> : <h5 className="inactive">Inactive</h5>}
                        </div>
                        <div className="points">
                            ...
                        </div>
                    </div>
                    <span className="sb"></span>
                </Fragment>
            ))}
          </main>
        </div>
        <div className="btn">
        <Button
              variant="contained"
              color="success"
              disableRipple
              sx={{
                boxShadow: "none",
                textTransform: "none",
                backgroundColor: "#4C84FF",
                fontFamily: "Rubik",
                fontWeight: 600,
                fontSize: "14px",
                padding: "6px 24px",
                border: "1px solid",
                borderColor: "#4C84FF",
                width: "96px",
                height: "32px",
                marginBottom: "24px",
                "&:hover": {
                  backgroundColor: "#4C84FF",
                  borderColor: "#4C84FF",
                  boxShadow: "none",
                },
              }}>
              Save
            </Button>
        </div>
      </main>
    </>
  );
};
export default Members;
