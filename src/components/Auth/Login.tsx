import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Pic from "../../img/Frame.png";
import useStyles from "./style";
import {Input, Grid, Typography, Button, Alert} from "@mui/material";
import { changeEmail, changePassword, loginUser } from "../../redux/auth/auth-slice";
import { resetState } from "../../redux/auth/register-slice";
import { resetState as resState } from "../../redux/auth/recover-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import colors from "../Styles/colors";
import { Link } from "react-router-dom";
// app layout
import { CardBox } from "../Layouts/CardBox/CardBox";


const Login: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {  email, password, errorMessage } =
    useAppSelector((state) => state.auth);
    const {  alertMessage } =
    useAppSelector((state) => state.recover );
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeEmail(value));
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changePassword(value));
  };
  useEffect(() => {}, []);

  return (
    <>
      <Helmet>Login</Helmet>

      <div className={classes.root}>
        <img src={Pic} alt="Roundrush" />
        <h2>THE OPTIMIZED WORKFLOW OUT OF THE BOX</h2>

        <CardBox>
          <Typography sx={{margin: "12px !important", textAlign: "center"}} className="title" variant="h5" mb={3}>
            Login
          </Typography>
          {alertMessage && (
              <Grid className="alert-grid" item xs={12} mb={4}>
                <Alert className="alert-success" variant="filled" severity="success">
                  {alertMessage}
                </Alert>
              </Grid>
            )}
          {errorMessage && (
          <Grid className="alert-grid" item xs={12} mb={4}>
            <Alert className="alert" variant="filled" severity="warning">
              {errorMessage}
            </Alert>
          </Grid>
        )}
          <form className="form">
          <Grid item xs={12} mb={3}>
            <Input
              type="Email"
              value={email}
              onChange={handleChangeEmail}
              disableUnderline
              placeholder="Email"
              sx={{
                borderRadius: "4px",
                backgroundColor: '#fcfcfb',
                border: `2px solid ${colors.gray}`,
                fontSize: "14px",
                fontWeight: 400,
                width: '344px',
                height:"40px",
                padding: '10px 8px',
                
              }}
            />
          </Grid>
          <Grid item xs={12} mb={3}>
            <Input
            type="Password"
              value={password}
              placeholder="Password"
              disableUnderline
              onChange={handleChangePassword}
              sx={{
                borderRadius: "4px",
                backgroundColor: '#fcfcfb',
                border: `2px solid ${colors.gray}`,
                fontSize: "14px",
                fontWeight: 400,
                width: '344px',
                height:"40px",
                padding: '10px 8px',
                
              }}
            />
          </Grid>
          <Grid>
            <Button
              variant="contained"
              disableElevation
              onClick={() => dispatch(loginUser())}
              name="login"
              sx={{
                boxShadow: "none",
                textTransform: "none",
                backgroundColor: "#4C84FF",
                fontSize: 16,
                padding: "14px auto",
                border: "1px solid",
                lineHeight: 1.5,
                borderColor: "#4C84FF",
                width: "344px",
                marginBottom: "24px",
                "&:hover": {
                  backgroundColor: "#4C84FF",
                  borderColor: "#4C84FF",
                  boxShadow: "none",
                },
              }}>
              Login
            </Button>
          </Grid>
          <Grid className="links">
            <Link onClick={() => resState()} className="link" to="/forgot">
              <span>I forget my password</span>
            </Link>
            <Link onClick={() => resetState()} className="link" to="/register">
              <span>I don't have an account</span>
            </Link>
          </Grid>
          </form>
        </CardBox>
      </div>
    </>
  );
};

export default Login;
