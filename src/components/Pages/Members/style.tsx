import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    paddingTop: "12px",
    "& h1": {
      marginTop: "2px",
      fontFamily: "Rubik",
      fontSize: "24px",
      fontWeight: 400,
      textAlign: "left",
      color: "#31394E",
    },
    "& table": {
      width: "700px",
      marginTop: "40px",
      "& thead": {
        "& tr": {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          "& th": {
            width: "20%",
            padding: "12px 55px 40px 10px",
            fontFamily: "Rubik",
            fontSize: "14px",
            fontWeight: 600,
            color: "rgba(49, 57, 78, 0.5)",
            textAlign: "left",
          },
        },
      },
      "& tbody": {
        "& .sb": {
          width: "92%",
          height: "2px",
        },
        "& .inact": {
          backgroundColor: "#EAEBED",
        },
        "& tr": {
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& .name": {
            width: "170px",
            display: "flex",
            justifyContent: "flex-start",
            fontFamily: "Rubik",
            fontSize: "16px",
            fontWeight: 400,
            color: "#31394E",
            "& img": {
              marginRight: "26px",
            },
          },

          "& .email": {
            fontFamily: "Rubik",
            fontSize: "12px",
            fontWeight: 400,
            color: "#838895",
          },
          "& .points": {
            color: "#838895"
          },
          "& .active": {
            width: "50px",
            fontFamily: "Rubik",
            fontSize: "12px",
            fontWeight: 400,
            color: "#29C293",
          },
          "& .inactive": {
            width: "50px",
            fontFamily: "Rubik",
            fontSize: "12px",
            fontWeight: 400,
            color: "#FD5461",
          },
          "& .owner": {
            width:"90px",
            "& button": {
              width: "84px",
              height: "24px",
              textAlign: "center",
              fontFamily: "Rubik",
              fontSize: "12px",
              fontWeight: 400,
              border: "none",
              borderRadius: "6px",
              color: "#29C293",
              backgroundColor: "#BFEDDF",
            },
            
          },
        },
      },
    },
  },
});
export default useStyles;
