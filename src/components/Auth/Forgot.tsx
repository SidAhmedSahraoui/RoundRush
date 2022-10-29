import React from "react";
import Pic from "../../img/Frame.png";
import useStyles from "./style";
import { Input, Grid, Typography, Button, Alert } from "@mui/material";
import {
  resetState,
  changeEmail,
  changePassword,
  validateEmail,
  Done,
  Finish,
} from "../../redux/auth/recover-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import colors from "../Styles/colors";
import { Link } from "react-router-dom";
// app layout
import { CardBox } from "../Layouts/CardBox/CardBox";

const Forgot: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {  email, password, alertMessage, verified, done } = useAppSelector(
    (state) => state.recover
  );
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeEmail(value));
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changePassword(value));
  };

  return (
    <>
      <div className={classes.root}>
        <img src={Pic} alt="Roundrush" />
        <h2>THE OPTIMIZED WORKFLOW OUT OF THE BOX</h2>

        {!done && !verified && alertMessage === "" ? (
          <CardBox>
            <Typography
              sx={{ margin: "12px !important", textAlign: "center" }}
              className="title"
              variant="h5"
              mb={3}>
              Forgot your password
            </Typography>
            <Typography
              sx={{ margin: "12px !important", textAlign: "center" }}
              className="title sub-title"
              variant="h5"
              mb={3}>
              Enter your details below
            </Typography>
            <form className="form">
              <Grid item xs={12} mb={3}>
                <Input
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  disableUnderline
                  placeholder="Insert your email"
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#fcfcfb",
                    border: `2px solid ${colors.gray}`,
                    fontSize: "14px",
                    fontWeight: 400,
                    width: "344px",
                    height: "40px",
                    padding: "10px 8px",
                  }}
                />
              </Grid>

              <Grid>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => dispatch(validateEmail())}
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
                  Recover your password
                </Button>
              </Grid>

              <Link onClick={() => resetState()} className="link" to="/">
                <span>Back to login</span>
              </Link>
            </form>
          </CardBox>
        ) : !done && verified && alertMessage ? (
          <CardBox>
            <Typography
              sx={{ margin: "12px !important", textAlign: "center" }}
              className="title"
              variant="h5"
              mb={3}>
              Forgot your password
            </Typography>
            <Typography
              sx={{ margin: "12px !important", textAlign: "center" }}
              className="title sub-title"
              variant="h5"
              mb={3}>
              Enter your details below
            </Typography>
            {alertMessage && (
              <Grid className="alert-grid" item xs={12} mb={4}>
                <Alert className="alert-success" variant="filled" severity="success">
                  {alertMessage}
                </Alert>
              </Grid>
            )}
            <form className="form">
              <Grid item xs={12} mb={3}>
                <Input
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  disableUnderline
                  placeholder="Insert your email"
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#fcfcfb",
                    border: `2px solid ${colors.gray}`,
                    fontSize: "14px",
                    fontWeight: 400,
                    width: "344px",
                    height: "40px",
                    padding: "10px 8px",
                  }}
                />
              </Grid>

              <Grid>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => dispatch(Done())}
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
                  Done
                </Button>
              </Grid>

              <Link onClick={() => resetState()} className="link" to="/">
                <span>Back to login</span>
              </Link>
            </form>
          </CardBox>
        ) : (
          <CardBox>
            <Typography
              sx={{ margin: "12px !important", textAlign: "center" }}
              className="title"
              variant="h5"
              mb={3}>
              Forgot your password
            </Typography>
            <Typography
              sx={{ margin: "12px !important", textAlign: "center" }}
              className="title sub-title"
              variant="h5"
              mb={3}>
              Please enter your new password
            </Typography>

            <form className="form">
              <Grid item xs={12} mb={3}>
                <Input
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  disableUnderline
                  placeholder="Password"
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#fcfcfb",
                    border: `2px solid ${colors.gray}`,
                    fontSize: "14px",
                    fontWeight: 400,
                    width: "344px",
                    height: "40px",
                    padding: "10px 8px",
                  }}
                />
              </Grid>

              <Grid>
                <Link to="/" className="link">
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => dispatch(Finish())}
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
                    Recover your password
                  </Button>
                </Link>
              </Grid>

              <Link onClick={() => resetState()} className="link" to="/">
                <span>Back to login</span>
              </Link>
            </form>
          </CardBox>
        )}
      </div>
    </>
  );
};

export default Forgot;
