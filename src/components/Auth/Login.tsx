import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Pic from "../../img/Frame.png";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// app layout
import { CardBox } from "../Layouts/CardBox/CardBox";
import { changeEmail, changePassword } from "../../Redux/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

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
          <Typography className="title" variant="h5" mb={3}>
            Login
          </Typography>
          {/* Quiz Title */}
          <Grid item xs={12} mb={3}>
            <TextField
              value={email}
              onChange={handleChangeEmail}
              label="Email"
              variant="outlined"
              size="medium"
              fullWidth
              inputProps={{ "data-testid": "email" }}
            />
          </Grid>
          <Grid item xs={12} mb={3}>
            <TextField
              value={password}
              onChange={handleChangePassword}
              label="Password"
              variant="outlined"
              size="medium"
              fullWidth
              inputProps={{ "data-testid": "password" }}
            />
          </Grid>
        </CardBox>
      </div>
    </>
  );
};

export default Login;
