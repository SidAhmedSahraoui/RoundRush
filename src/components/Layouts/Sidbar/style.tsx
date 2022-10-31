import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sidbar: {
    transition: "0.5s all ease",
    backgroundColor: "#31394E",
    width: "72px",
    height: "100wh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& .down": {
      marginTop: "120px",
      height: "150px",
      alignItems: "center",
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "space-evenly",
      "& .img": {
        width: "48px",
        height: "40px",
        borderRadius: "6px",
        margin: "12px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 2px",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#838895",
        },
      }
    },
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
    height: "100wh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    "& .down": {
      position: "absolute",
      bottom: "5px",
      width: "100%",
      alignItems: "center",
      display: "flex",
      justifyContent: "space-evenly",
      "& .img": {
        width: "48px",
        height: "40px",
        borderRadius: "6px",
        margin: "12px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 2px",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#838895",
        },
      }
    },
    "& ._divider": {
      backgroundColor: "#838895",
      width: "100%",
      height: "2px",
      margin: "24px 0px",
    },
      "& .company": {
        transition: "0.5s all ease",
        width: "80%",
        height: "35px",
        margin: "8px auto", 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
          "& .cmp": {
            display: "flex",
          },
        },
        "& h5": {
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "Rubik",
          width: "70%",
          textAlign: "left",
        },
        "& .cmp": {
          transition: "0.5s all ease",
          display: "none",
          width: "30%",
        },
      },
      "& .team": {
        transition: "0.5s all ease",
        width: "80%",
        height: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "left",
        marginBottom: "8px",
        "&:hover": {
          cursor: "pointer",
          "& .icon": {
            display: "block",
          },
        },
        "& .cube": {
          width: "12px",
          height: "12px",
          borderRadius: "3px",
          marginRight: "8px",
        },
        "& h5": {
          color: "#FFFFFF",
          fontSize: "12px",
          fontWeight: 400,
          fontFamily: "Rubik",
          width: "70%",
        },
        "& .icon": {
          display: "none",
        },
      },
    "& ._elem": {
      width: "100%",
      height: "40px",
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
        marginLeft: "24px",
      },
    },
    "& ._humberger": {
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      "& img": {
        paddingLeft: "12px",
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
