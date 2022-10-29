import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: "0px",
    margin: "0px",
    width: "100%",
    height: "100vh",
    "& .sidbar": {
      backgroundColor: "#31394E",
      width: "72px",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& img": {
        width: "24px",
        height: "24px",
        margin: "12px"
      },
      "& .humberger": {
      width: "24px",
      height: "24px",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      margin: "25px",
      background: "none",
      border: "none",
      "& span": {
        display: "block",
        width: "20px",
        height: "2px",
        borderRadius: "1px",
        backgroundColor: "#BFC5D2",
        "&:last-child": {
          width: "10px",
        },
      },
    },}
  },
});

export default useStyles;
