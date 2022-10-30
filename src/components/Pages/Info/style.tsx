import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    paddingTop: "12px",
    display: "flex",
    flexDirection: "column",
    alignContent: "start",
    alignItems: "start",
    "& h1": {
      marginTop: "2px",
      fontFamily: "Rubik",
      fontSize: "24px",
      fontWeight: 400,
      textAlign: "left",
      color: "#31394E",
    },
    "& .title": {
      fontFamily: "Rubik",
      fontWeight: 600,
      fontSize: "14px",
      marginTop: "16px",
      marginBottom: "5px",
      marginLeft: "8px",
      color: "rgba(49, 57, 78, 0.5)",
    },
    "& .name": {
      fontFamily: "Rubik",
      fontWeight: 400,
      fontSize: "12px",
      marginTop: "16px",
      marginBottom: "5px",
      marginLeft: "8px",
      color: "#ADB0B8",
    },
    "& h2": {
      fontFamily: "Rubik",
      fontWeight: 400,
      fontSize: "12px",
      marginTop: "50px",
      color: "#ADB0B8",
    },
    "& img": {
      marginTop: "12px",
    },
    "& form": {
      "& .btns": {
        width: "150%",
        display: "flex",
        justifyContent: "space-between",
        '@media screen and (max-width: 1280px)': {
          width: "100%"
        }
      }
    }
  },
});
export default useStyles;
