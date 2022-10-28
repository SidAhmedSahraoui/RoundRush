import { createUseStyles } from "react-jss";
import colors from "../Styles/colors";

const useStyles = createUseStyles({
  root: {
    background: `linear-gradient(180deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
    padding: "0px",
    margin: "0px",
    width: "100%",
    height: "100vh",
    "& img": {
      marginTop: "62px",
    },
    "& h2": {
      margin: "auto",
      width: "300px",
      height: "48px",
      marginTop: "24px",
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "6px",
      textAlign: "center",
      textTransform: "uppercase",
      color: "#4C84FF",
    },
    "& .title": {
      height: "20px",
      width: "180px",
      fontFamily: "Rubik",
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0px",
      margin: "47px auto !important",
    },
    "& .reg-title": {
      marginBottom: "16px !important",
    },
    "& .sub-title": {
      height: "20px",
      width: "300px",
      fontFamily: "Rubik",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0px",
      margin: "47px auto !important",
      color: "#5A6171",
      padding: "0px",
      marginTop: "0px !important",
    },
    "& .alert-grid": {
      "& .alert": {
        background: "#F4F6FC",
        color: "#FD5461",
        width: "344px",
        margin: "auto",
        textAlign: "left",
        alignItems: "center",
      },
    },
    "& .verif-alert": {
      color: "#FD5461",
      fontSize: "11px",
      fontWeight: 400,
      "& p": {
        width: "220px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      },
    },
    "& .form": {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      "& .check": {
        display: "flex",
        width: "344px",
        margin: "auto",
        flexDirection: "row",
        alignItems: "center",
      },
      "& .links": {
        width: "344px",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "18px",
        marginBottom: "27px",
        "& .link": {
          textDecoration: "none",
          "& span": {
            color: colors.blue,
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Rubik",
          },
        },
      },
    },
  },
});

export default useStyles;
