import React, { useEffect } from "react";
import Helmet from "react-helmet";

import useStyles from "./style";


const Login: React.FC = () => {

    const classes = useStyles();

  useEffect(() => {
  }, []);

  return (
    <>
    <Helmet>
        Login
    </Helmet>

      <div className={classes.root}>
        <h3 className="title">Sign in</h3>
        <h6 className="subtitle">Start helping or getting help.</h6>

        <form className="mt-4" >
          <div className="form-group">
            <input
              className="input-text"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group">
            <input
              className="input-text"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          
        </form>
      </div>
    </>
  );
};

export default Login;
