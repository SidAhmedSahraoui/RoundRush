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
width: "57px",
fontFamily: "Rubik",
fontSize: "22px",
fontWeight: 400,
lineHeight: "20px",
letterSpacing: "0px",
margin: "auto",




    }
  },
});

export default useStyles;
