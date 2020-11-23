import React from "react";
import Navbar from "../components/navbar";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  bgCover: {
    width: "100%",
  ["@media (max-width: 400px)"]: {
    width: "120%",
  },
  ["@media (max-width: 300px)"]: {
    width: "130%",
  },
  }
}));

function PageOne() {
  const classes = useStyles();
  return (
    <>
        <Header/>
    </>
  );
}

export default PageOne;
