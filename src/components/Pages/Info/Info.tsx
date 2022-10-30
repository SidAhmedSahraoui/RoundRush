import React from "react";
import Oval from "../../../img/Oval.svg";
import useStyles from "./style";
import { Input, Grid, FormHelperText, Select, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import colors from "../../Styles/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";

const Info: React.FC = () => {
  const classes = useStyles();
  const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiSvgIcon-root": {
      top: "5px !important",
    },
    "& .MuiInputBase-input": {
      width: "150px",
      height: "28px !important",
      borderRadius: "4px",
      backgroundColor: "#fcfcfb",
      border: `2px solid ${colors.gray}`,
      fontSize: "14px",
      fontWeight: 400,
      fontFamilly: "Rubik",
      color: "#31394E",
      textAlign: "left",
      alignItems: "center",
      padding: "0px",
      paddingTop: "5px",
      marginBottom: "24px",
      paddingLeft: "8px",
      "&:focus": {
        borderRadius: "4px",
        border: `2px solid ${colors.gray}`,
      },
    },
  }));

  return (
    <>
      <main className={classes.main}>
        <h1>Info</h1>
        <h2>Avatar</h2>
        <img src={Oval} alt="avatar" />
        <form action="POST">
          <Grid item xs={12} mb={3}>
            <FormHelperText className="name">Full Name</FormHelperText>
            <Input
              type="text"
              value="Emiliya Perevalova"
              disableUnderline
              placeholder="Full name"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#fcfcfb",
                border: `2px solid rgba(217, 219, 222, 1)`,
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Rubik",
                color: "#31394E",
                width: "520px",
                height: "32px",
                padding: "10px 8px",
              }}
            />
          </Grid>
          <Grid item xs={12} mb={3}>
            <FormHelperText className="name">Username</FormHelperText>
            <Input
              type="text"
              value="emiliya.perevalova"
              disableUnderline
              placeholder="Username"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#fcfcfb",
                border: `2px solid rgba(217, 219, 222, 1)`,
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Rubik",
                color: "#31394E",
                width: "520px",
                height: "32px",
                padding: "10px 8px",
              }}
            />
          </Grid>
          <Grid item xs={12} mb={3}>
            <FormHelperText className="name">Email</FormHelperText>
            <Input
              type="email"
              value="emiliya.perevalova@ows.com"
              disableUnderline
              placeholder="Email"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#fcfcfb",
                border: `2px solid rgba(217, 219, 222, 1)`,
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Rubik",
                color: "#31394E",
                width: "520px",
                height: "32px",
                padding: "10px 8px",
              }}
            />
          </Grid>
          <Grid>
            <FormHelperText className="title">PREFERENCES</FormHelperText>
            <FormHelperText className="name">Language</FormHelperText>
            <Select
              sx={{
                margin: "0ox",
                position: "relative",
                right: "160px",
              }}
              IconComponent={KeyboardArrowDownIcon}
              value=""
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              input={<CustomInput />}>
              <MenuItem value="">Italian</MenuItem>

              <MenuItem value="Computer">Arabic</MenuItem>
              <MenuItem value="Medical">French</MenuItem>
              <MenuItem value="Pharmacy">English</MenuItem>
            </Select>
          </Grid>
          <Grid className="btns">
            <Button
              variant="contained"
              color="success"
              disableRipple
              sx={{
                boxShadow: "none",
                textTransform: "none",
                backgroundColor: "#FD5461",
                fontFamily: "Rubik",
                fontWeight: 600,
                fontSize: "14px",
                padding: "6px 24px",
                border: "1px solid",
                borderColor: "#FD5461",
                width: "96px",
                height: "32px",
                marginBottom: "24px",
                "&:hover": {
                  backgroundColor: "#FD5461",
                  borderColor: "#FD5461",
                  boxShadow: "none",
                },
              }}>
              Button
            </Button>
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
          </Grid>
        </form>
      </main>
    </>
  );
};
export default Info;
