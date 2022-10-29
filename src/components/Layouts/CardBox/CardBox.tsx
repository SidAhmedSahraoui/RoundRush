import React, { ReactNode } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: "center",
      width: "539px",
      left: "0px",
      top: "0px",
      borderRadius: "6px !important",
      margin: "auto",
      background: "rgba(255, 255, 255, 1)",
      padding: "8px",
      boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.1) !important",
      marginTop: "48px",
    }
  }),
);

interface CardBoxProps {
  children: ReactNode;
}

export const CardBox: React.FC<CardBoxProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent sx={{padding: "0px"}}>{children}</CardContent>
    </Card>
  );
};
