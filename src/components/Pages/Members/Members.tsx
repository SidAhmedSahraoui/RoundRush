import React, { Fragment } from "react";
import useStyles from "./style";
import Oval from "../../../img/Oval.svg"
import { v4 as uuidv4 } from "uuid"
const Members: React.FC = () => {
  const classes = useStyles();
  const users = [
    {
      name: "Mario Panariello",
      owner: true,
      email: "mario.panariello@lastingdynamics.com",
      active: true,
    },
    {
      name: "Brandon Watson",
      owner: false,
      email: "mario.panariello@lastingdynamics.com",
      active: true,
    },
    {
      name: "Norma Copper",
      owner: false,
      email: "mario.panariello@lastingdynamics.com",
      active: false,
    },
    {
      name: "Mario Panariello",
      owner: false,
      email: "mario.panariello@lastingdynamics.com",
      active: false,
    },
    {
        name: "Mario Panariello",
        owner: true,
        email: "mario.panariello@lastingdynamics.com",
        active: true,
      }
  ];

  return (
    <>
      <main className={classes.main}>
        <h1>Users on plan</h1>
        <table className="table text-left">
          <thead>
            <tr>
              <th style={{width: "50%"}} scope="col">Name</th>
              <th style={{width: "0px" , padding: "0px"}}  scope="col"></th>
              <th style={{width: "40%" , paddingLeft: "35px"}} scope="col">Email</th>
              <th style={{width: "10%"}} scope="col">Status</th>
              <th style={{width: "0px", padding: "0px"}} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                <Fragment key={uuidv4()} >
                    <tr className={!user.active ? "inact" : ""}>
                        <td className="name">
                            <img width="20px" height="20px" src={Oval} alt="" />
                            {user.name}
                        </td>
                        <td className="owner">
                            {user.owner ? <button>Owner</button> : null}
                        </td>
                        <td className="email">
                            {user.email}
                        </td>
                        <td>
                            {user.active ? <h5 className="active">Active</h5> : <h5 className="inactive">Inactive</h5>}
                        </td>
                        <td className="points">
                            ...
                        </td>
                    </tr>
                    <span className="sb"></span>
                </Fragment>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
export default Members;
