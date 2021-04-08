import React from "react";
import web from "../src/images/balling.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to Home Page"
        imgsrc={web}
        visit="/about"
        btname="Go to About"
      />
    </>
  );
};

export default Home;
