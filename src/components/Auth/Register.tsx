import React from "react";
import Helmet from "react-helmet";
import Pic from "../../img/Frame.png";
import Mail from "../../img/Mail.svg";
import useStyles from "./style";
import { Link } from "react-router-dom";
import {
  Input,
  Grid,
  Typography,
  Button,
  FormHelperText,
  Checkbox,
  Icon,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  changeEmail,
  changePassword,
  changeCompany,
  changeEmployees,
  changeIndustry,
  changeName,
  changeSpace,
  validateEmail,
  validateForm,
  registerUser,
  resetState,
} from "../../redux/auth/register-slice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import colors from "../Styles/colors";

// app layout
import { CardBox } from "../Layouts/CardBox/CardBox";

const Register: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    email,
    name,
    password,
    company,
    space,
    accept,
    industry,
    employees,
    isValid,
    isExist,
    formValid,
    errorMessage,
  } = useAppSelector((state) => state.create);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeEmail(value));
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeName(value));
  };
  const handlechangeCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeCompany(value));
  };
  const handlechangeEmployees = (event: SelectChangeEvent) => {
    const value = event.target.value;

    dispatch(changeEmployees(value));
  };
  const handlechangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changePassword(value));
  };
  const handlechangeSpace = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeSpace(value));
  };
  const handlechangeIndustry = (event: SelectChangeEvent) => {
    const value = event.target.value;

    dispatch(changeIndustry(value));
  };
  const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiSvgIcon-root": {
      top: "12px !important",
    },
    "& .MuiInputBase-input": {
      width: "300px",
      height: "40px !important",
      borderRadius: "4px",
      backgroundColor: "#fcfcfb",
      border: `2px solid ${colors.gray}`,
      fontSize: "14px",
      fontWeight: 400,
      color: colors.gray,
      padding: "0px",
      margin: "auto",
      marginBottom: "24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "8px",
      "&:focus": {
        borderRadius: "4px",
        border: `2px solid ${colors.gray}`,
      },
    },
  }));

  return (
    <>
      <Helmet>Sign Up</Helmet>

      <div className={classes.root}>
        <img src={Pic} alt="Roundrush" />
        <h2>SIGN UP A NEW USER</h2>

        {!accept ? (
          !isExist && !isValid && !formValid ? (
            <CardBox>
              <Typography className="title reg-title" variant="h4" mb={3}>
                Sign Up
              </Typography>
              <Typography
                sx={{ margin: "12px !important", textAlign: "center" }}
                className="sub-title"
                variant="h6"
                mb={3}>
                Let's validate your email first
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
              </form>
              <Grid>
                <Button
                  variant="contained"
                  color="success"
                  disableElevation
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
                  }}
                  onClick={() => dispatch(validateEmail())}>
                  Next
                </Button>
              </Grid>
            </CardBox>
          ) : !isValid && !formValid && isExist ? (
            <CardBox>
              <Typography className="title reg-title" variant="h4" mb={3}>
                Sign Up
              </Typography>
              <Typography
                sx={{ margin: "12px !important", textAlign: "center" }}
                className="sub-title"
                variant="h6"
                mb={3}>
                Your email is already acount in Roundrush
              </Typography>

              <Grid>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button
                    variant="contained"
                    color="success"
                    disableElevation
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
                    }}
                    onClick={() => dispatch(resetState())}>
                    Click here to authenticate
                  </Button>
                </Link>
              </Grid>
            </CardBox>
          ) : isValid && !formValid && !isExist ? (
            <CardBox>
              <Typography className="title reg-title" variant="h4" mb={3}>
                Sign Up
              </Typography>
              <Typography
                sx={{ margin: "12px !important", textAlign: "center" }}
                className="sub-title"
                variant="h6"
                mb={3}>
                Fill up your account information
              </Typography>

              <form className="form">
                <Grid item xs={12} mb={3}>
                  <Input
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    disableUnderline
                    placeholder="Insert your full name"
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
                <Grid item xs={12} mb={3}>
                  <Input
                    type="password"
                    value={password}
                    onChange={handlechangePassword}
                    disableUnderline
                    placeholder="Choose your password"
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
              </form>

              <Grid>
                <Button
                  variant="contained"
                  color="success"
                  disableElevation
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
                  }}
                  onClick={() => dispatch(validateForm())}>
                  Next
                </Button>
              </Grid>
            </CardBox>
          ) : (
            <CardBox>
              <Typography className="title reg-title" variant="h4" mb={3}>
                Sign Up
              </Typography>
              <Typography
                sx={{ margin: "12px !important", textAlign: "center" }}
                className="sub-title"
                variant="h6"
                mb={3}>
                Create your company space
              </Typography>

              <form className="form">
                <Grid item xs={12} mb={3}>
                  <InputLabel
                    sx={{
                      textAlign: "start",
                      fontSize: "12px",
                      fontWeight: 400,
                      fontFamilly: "Rubik",
                      color: "#ADB0B8",
                      paddingBottom: "8px !important",
                      paddingLeft: "8px",
                    }}>
                    {" "}
                    Company Name
                  </InputLabel>
                  <Input
                    type="text"
                    value={company}
                    onChange={handlechangeCompany}
                    disableUnderline
                    placeholder="Company name"
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
                <Grid item xs={12} mb={3}>
                  <InputLabel
                    sx={{
                      textAlign: "start",
                      fontSize: "12px",
                      fontWeight: 400,
                      fontFamilly: "Rubik",
                      color: "#ADB0B8",
                      paddingBottom: "8px !important",
                      paddingLeft: "8px",
                    }}>
                    {" "}
                    Your space will be
                  </InputLabel>
                  <Input
                    type="text"
                    value={space}
                    onChange={handlechangeSpace}
                    disableUnderline
                    placeholder="Your space"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#fcfcfb",
                      border: `2px solid ${
                        errorMessage ? "#FD5461" : colors.gray
                      }`,
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "344px",
                      height: "40px",
                      padding: "10px 8px",
                    }}
                  />
                  <FormHelperText className="verif-alert">
                    {errorMessage ? (
                      <>
                        {" "}
                        <Icon
                          sx={{
                            width: "12px",
                            height: "12px",
                          }}
                          style={{ color: "#FD5461" }}
                          component={ErrorOutlineIcon}></Icon>{" "}
                        {errorMessage}
                      </>
                    ) : null}
                  </FormHelperText>
                </Grid>
                <FormControl>
                  <FormHelperText
                    sx={{
                      textAlign: "start",
                      fontSize: "12px",
                      fontWeight: 400,
                      fontFamilly: "Rubik",
                      color: "#ADB0B8",
                      paddingBottom: "8px !important",
                      paddingLeft: "8px",
                      margin: "0px",
                    }}>
                    Industry
                  </FormHelperText>
                  <Select
                    value={industry}
                    IconComponent={KeyboardArrowDownIcon}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    onChange={handlechangeIndustry}
                    input={<CustomInput />}>
                    <MenuItem disabled value="">
                      Industry type
                    </MenuItem>
                    <MenuItem value="Computer">Computer</MenuItem>
                    <MenuItem value="Medical">Medical</MenuItem>
                    <MenuItem value="Pharmacy">Pharmacy</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormHelperText
                    sx={{
                      textAlign: "start",
                      fontSize: "12px",
                      fontWeight: 400,
                      fontFamilly: "Rubik",
                      color: "#ADB0B8",
                      paddingBottom: "8px !important",
                      paddingLeft: "8px",
                      margin: "0",
                    }}>
                    Number of employees
                  </FormHelperText>
                  <Select
                    value={employees}
                    IconComponent={KeyboardArrowDownIcon}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    onChange={handlechangeEmployees}
                    input={<CustomInput />}>
                    <MenuItem disabled value="">
                      Select a size
                    </MenuItem>
                    <MenuItem value="1">20 </MenuItem>
                    <MenuItem value="2">30</MenuItem>
                    <MenuItem value="3">40</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="check">
                  <Checkbox defaultChecked />
                  <FormHelperText
                    sx={{
                      color: "##5A6171",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}>
                    Accept all condition and privacy politic
                  </FormHelperText>
                </FormControl>
              </form>

              <Grid>
                <Button
                  variant="contained"
                  color="success"
                  disableElevation
                  sx={{
                    boxShadow: "none",
                    textTransform: "none",
                    backgroundColor: "#29C293",
                    fontSize: 16,
                    padding: "14px auto",
                    border: "1px solid",
                    lineHeight: 1.5,
                    borderColor: "#29C293",
                    width: "344px",
                    marginBottom: "24px",
                    "&:hover": {
                      backgroundColor: "#29C293",
                      borderColor: "#29C293",
                      boxShadow: "none",
                    },
                  }}
                  onClick={() => dispatch(registerUser())}>
                  Register
                </Button>
              </Grid>
            </CardBox>
          )
        ) : (
          <CardBox>
            <Typography className="title reg-title" variant="h4" mb={3}>
              Your account is ready!
            </Typography>
            <img src={Mail} alt="mail" style={{ marginTop: "50px" }} />
            <Typography className="down-title" variant="h6" mb={3}>
              Please verify your Email and continue to Roundrush
            </Typography>
            <Link className="log-link" to="/">
              Go to login page
            </Link>
          </CardBox>
        )}
      </div>
    </>
  );
};

export default Register;
