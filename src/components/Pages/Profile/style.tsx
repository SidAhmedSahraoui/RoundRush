import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "80%",
    margin: "30px auto",

    "& nav": {
      display: "flex",
      justifyContent: "space-between",
      "& h1": {
        fontSize: "24px",
        fontWeight: 400,
        fontFamily: "Rubik",
      },
      "& .icons": {
        width: "80px",
        display: "flex",
        justifyContent: "space-between",
      },
    },
    "& span": {
      display: "block",
      width: "100%",
      margin: "27px auto",
      height: "1px",
      background: "#F4F6FC",
    },
    "& section": {
      display: "flex",
      "& span": {
        display: "block",
        width: "2px",
        height: "80vh",
        margin: "0px 55px",
        backgroundColor: "#F4F6FC",
      },
      "& nav": {
        width: "20%",
        display: "flex",
        paddingTop: "24px",
        flexDirection: "column",
        justifyContent: "flex-start",
        "& .title": {
          textDecoration: "none",
          display: "flex",
          "& h1": {
            fontWeight: 500,
            fontSize: "14px",
            color: "#4C84FF",
            marginLeft: "12px",
          },
        },
        "& .link": {
          textDecoration: "none",
          display: "flex",
          fontWeight: 400,
          fontSize: "14px",
          fontFamily: "Rubik",
          color: "#838895",
          margin: "24px 0px 0px 30px",
        },
        "& .link:focus": {
          color: "#4C84FF",
        },
      },
    },
  },
});

export default useStyles;
