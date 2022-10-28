import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Pic from "../../img/Frame.png";
import useStyles from "./style";
import {Input, Grid, Typography, Button} from "@mui/material";
import { changeEmail, changePassword } from "../../Redux/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import colors from "../Styles/colors";
import { Link } from "react-router-dom";
// app layout
import { CardBox } from "../Layouts/CardBox/CardBox";


const Login: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { id, email, password, isValid, isLoading, errorMessage } =
    useAppSelector((state) => state.auth);
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
          {/* Quiz Title */}
          <Grid className="form">
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
              sx={{
                boxShadow: "none",
                textTransform: "none",
                fontSize: 16,
                padding: "6px 12px",
                border: "1px solid",
                lineHeight: 1.5,
                backgroundColor: "#0063cc",
                borderColor: "#0063cc",
                width: "344px"
              }}>
              Login
            </Button>
          </Grid>
          <Grid className="links">
            <Link className="link" to="">
              <span>I forget my password</span>
            </Link>
            <Link className="link" to="">
              <span>I don't have an account</span>
            </Link>
          </Grid>
          </Grid>
        </CardBox>
      </div>
    </>
  );
};

export default Login;
