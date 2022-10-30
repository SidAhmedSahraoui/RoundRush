import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    sidbar: {
      transition: "0.5s all ease",
      backgroundColor: "#31394E",
      width: "72px",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& .divider": {
        backgroundColor: "#838895",
        width: "100%",
        height: "2px",
        margin: "24px 0px",
      },
      "& .elem": {
        width: "48px",
        height: "40px",
        borderRadius: "6px",
        margin: "12px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#838895",
        },
        "& img": {
          width: "24px",
          height: "24px",
          margin: "12px",
        },
      },
      "& .humberger": {
        width: "24px",
        height: "24px",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        margin: "24px 12px",
        background: "none",
        border: "none",
        cursor: "pointer",

        "& span": {
          display: "block",
          width: "20px",
          height: "3px",
          borderRadius: "1px",
          backgroundColor: "#BFC5D2",
          "&:last-child": {
            width: "10px",
          },
        },
      },
    },
    _sidbar: {
      transition: "0.5s all ease",
      backgroundColor: "#31394E",
      width: "220px",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& ._divider": {
        backgroundColor: "#838895",
        width: "100%",
        height: "2px",
        margin: "24px 0px",
      },
      "& ._elem": {
        width: "90%",
        height: "40px",
        borderRadius: "6px",
        margin: "12px 0px",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#838895",
        },
        "& h1": {
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Rubik",
        },
        "& img": {
          width: "24px",
          height: "24px",
          margin: "12px",
        },
      },
      "& ._humberger": {
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        "& img": {
          paddingLeft: "12px"
        },
        "& ._hum": {
          width: "24px",
          height: "24px",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          margin: "24px 12px",
          background: "none",
          border: "none",
          cursor: "pointer",

          "& span": {
            display: "block",
            width: "20px",
            height: "3px",
            borderRadius: "1px",
            backgroundColor: "#BFC5D2",
            "&:last-child": {
              width: "10px",
            },
          },
        },
      },
    },
});

export default useStyles;
